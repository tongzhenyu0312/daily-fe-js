
/**
 * 函数表达式只会声明变量，不会声明函数
 * 所以foo是类型错误，代表已经找到变量，不过这个时候因为是初始化为undefined，所以不能当做函数执行
 */
foo(); // TypeError: foo is not function
bar(); // ReferenceError: bar is not defined

var foo = function bar() { 

}

/**
 * 具名函数表达式，其实是等同于下面的代码
 * 函数名标识符是定义在 函数作用域内部的
 */


var foo = function () { 
  var bar = self;
}


/**
 * 函数表达式FE的函数作用域不是在编译时被收集的
 */
function wait(message) {

  setTimeout(function timer() {
    console.log(typeof timer === 'function');
    console.log( message );
  }, 1000);
  
  try {
    console.log(timer);
  } catch (e) { 
    console.log(e.message + '函数表达式FE的函数作用域不是在 wait编译时产生的词法作用域 中被收集的')
  }
}

wait();