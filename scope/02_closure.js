/**
 * 当前所在的词法作用域可以通过 baz的函数作用域 访问 bar的函数作用域
 * debugger处 bar的函数作用域 就多了一层身份 “闭包closure”
 */
function bar() { 
  var a = 10;
  function baz() { 
    debugger;
    a++;
  }
  return baz;
}

var foo = bar();
foo();