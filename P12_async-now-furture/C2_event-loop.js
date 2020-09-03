/**
 * JS代码是包含了 现在块 和 未来块 的代码，关于这些 块的执行顺序，是由JS所在的 宿主环境 控制的
 * 这种机制称为 事件循环机制
 * 因此关于事件的调度其实是由 宿主环境 控制的。
 */
var eventHandlerPool = [];
var curEventHandler = null;
while (true) { // 环境不断的监听事件循环
  // 每次循环就是一次tick
  if (eventHandlerPool.length > 0) { // 如果池中有方法
    curEventHandler = eventHandlerPool.shift(); // 捞出
    curEventHandler(); // 执行
  }
  var jobHandlerQueue = []; // 任务队列，挂载每一个tick之后的一个 任务队列
  var curJobHandler = null;
  while (jobHandlerQueue.length > 0) { 
    curJobHandler = jobHandlerQueue.shift();
    curJobHandler();
  }
}
/**
 * 每一次事件触发时，都会把对应的JS代码（未来块，通常就是函数），放入eventHandlerPool
 * 每一次事件循环tick，都会捞一个执行
 */