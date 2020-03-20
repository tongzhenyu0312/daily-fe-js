/**
 * 闭包实质是 通过函数的值传递 实现 定义函数的词法作用域的保留
 * 函数bar和baz其实指向的都是同一个函数引用，
 * 但是baz实现了 在定义函数的词法作用域以外的地方被调用，却可以访问定义时的词法作用域
 * foo执行完成后，本该销毁的作用域 因为将函数bar作为值传递给了别的地方 而得以保留
 * 此时foo的函数作用域 多了一个身份(闭包)
 */
function foo() { 
  var a = 1;
  function bar() { 
    console.log(a);
  }
  return bar;
}
var baz = foo();
baz();