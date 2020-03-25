/**
 * fn引用错误证明 函数fn是一个 函数表达式FE
 */
fn(); // ReferenceError
setTimeout(function fn() {
  console.log(a);
}, 1000);

/**
 * 此时虽然通过函数值传递产生了闭包，但是5个循环共享同一个闭包（全局作用域）
 */
// 6 6 6 6 6 6
for (var i = 0; i <= 5; i++) {
  setTimeout(function fn() {
    console.log(i);
  }, 1000);
}

/**
 * 通过使用IIFE，我们给每一个循环都配置了一个闭包(IIFE生成的函数作用域)
 */
// 1 2 3 4 5 6
for (var i = 0; i <= 5; i++) {
  (function (i) { 
    setTimeout(function fn() {
      console.log(i); 
    }, 1000);
  })(i)
}

/**
 * 块作用域同样可以被用来转化为闭包
 */
for (let i = 0; i <= 5; i++) {
  setTimeout(function fn() {
    console.log(i); 
  }, 1000);
}
