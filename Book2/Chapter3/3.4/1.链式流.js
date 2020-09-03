/**
 * promise可以使用链式写法序列化异步操作 即异步链式流
 * 原因： 
 *  1. then方法执行返回Promise
 *  2. then方法中的`完成回调`的入参是上一个Promise的`完成回调`的返回值
 */
Promise.resolve(12).then(function (val) { 
  return val * 2;
}).then(function (val) {
  console.log(val);
})
/**
 * 异步完成链接的Promise
 * 原因：
 *  1. then`完成回调`中返回的Promise的状态会作为`被链接的Promise`的状态
 *  2. 
 */
function delay(time) { 
  return new Promise((resolve) => { 
    setTimeout(() => {
      resolve();
    }, time);
  })
}

delay(1000).then(function step2() { 
  console.log('step2 after another 1000ms');
  return delay(2000);
}).then(function step3() { 
  console.log('step3 after another 2000ms');
  return 42;
}).then(function step4(val) { 
  console.log('last val', val, 'step4 do job')
});








