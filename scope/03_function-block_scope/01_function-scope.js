/**
 * 函数作用域 指绑定在 函数范围内的全部变量，都可以在函数内部任何位置/其嵌套作用域下被访问
 */
function foo() { 
  var a = 1;
  function bar() { 
    console.log(a); // bar作用域嵌套在foo内，所以能够访问foo作用域绑定的变量a
  }
}

console.log(bar); // 全局作用域无法访问 froo作用域绑定的变量a