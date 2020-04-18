/**
 * 在ES6中引入了job-queue任务队列的概念
 * 这是一个新的队列，会被添加到 事件循环队列 的每次tick之后(也可算是实现了 事件的插入)
 * 在时间上 实现了尽可能早的将来
 * 假设有一个API schedule 实现了上述的能力:
 */

setTimeout(function () {
  console.log('A');
}, 0);
schedule(
  function () {
    console.log('B');
    schedule(function () {
      console.log('C');
    })
  }
);
console.log('D');

// 打印的结果会是 D B C A