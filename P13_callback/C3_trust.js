/**
 * 回调的弊端，在于 控制反转，它会导致信任链的断裂
 * 常见的回调使用场景: 第三方库的使用
 * 在这种场景下，回调函数的调用的控制权其实是在 第三方库 手中
 */
// A
ajax('..', function () { 
  // B...
})
// C...


/**
 * 五个回调的问题
 * 回调函数中的一段代码可能会被执行多次(比如5次)，这就存在bug风险
 * 也有可能第三方库中会有一些执行失败的操作，是不是都得在 回掉中去硬编码支持这些情况呢？
 */
thirdLib.do(data, function () {
  // 处理可能的错误...
  purchase();
});
/**
 * 我们可以做一些防御措施
 * 比如增加一个latch(门闩shuan) 首次通行后便落下
 */
var hasNotPay = true;
thirdLib.do(data, function () {
  if (hasNotPay) { 
    hasNotPay = false;
    purchase();
  }
});
/**
 * 但是如果三方库压根不执行我们的回调怎么办呢？毕竟控制权在人家手里
 */


/**
 * 2.4 省点回调
 * 我们来试图解决一些回调的问题:
 * 问题一: 现在和将来的时间间隙中，发生错误怎么处理？
 * 方案一: 回调分离 (promise采取了这种标准)
 */
function success(data) {
  console.log(data);
}

function failure() { 
  console.log('failure');
}

ajax('...', success, failure);

/**
 * 方案二: node-error-first风格
 */
function foo(err, data) { 
  if (err) { 
    console.log('failure');
    return;
  }
  console.log(data);
}

/**
 * 问题二: 回调不执行该怎么办？怎么监控？
 * 方案: 通过闭包给一个超时时间，回调会判断这个超时
 */
function checkTimeout(fn, delay) { 
  var latch = setTimeout(() => {
    clearInterval(latch);
    latch = null;
    fn(new Error('timeout'));
  }, delay);
  var that = this;
  return function (...args) { 
    if (latch) { 
      clearInterval(latch);
      fn.apply(that, ...args);
    }
  }
}

function callback(err, data) { 
  if (err) {
    console.log('error');
  } else { 
    console.log(data);
  }
}

ajax('...', checkTimeout(callback, 500));


/**
 * 问题三： 如果执行过早怎么办？比如第三方库里是同步执行的，我们并不能够确定，能怎么办呢？
 * 方案： 同步异步化
 * 异步化: 
 * 1. 首先要判断是不是同步
 * 
 */
var a = 0;
function asyncfy(fn) { 
  var originFn = fn;
  var inCurTick = setTimeout(() => { 
    inCurTick = null; // 在下一轮事件循环中置空
    if (fn) fn();
    clearTimeout(inCurTick);
  }, 0)
  fn = null;
  return function (...args) { // 真实回调
    if (inCurTick) { // 如果还在当前循环，说明 回调代码是同步的
      fn = originFn.bind(this, ...args);
    } else { // 如果已经在setTimeout那个事件循环中消费了inCurTick，那么我们就直接执行原函数
      originFn.apply(this, args);
    }
  }
}
ajax('...', asyncfy(handler))
function handler() { 
  console.log(a);
}
a++;

