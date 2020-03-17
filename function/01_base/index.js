/**
 * 函数出现的几种方式
 */
// 1. 函数申明 Function Declaration
function foo() { }

// 2. 函数表达式 Funtion Expression
var bar = function (fn) { fn() }

  // 3. 匿名函数
  (function () { })();
  bar(function () { console.log('我是匿名函数') });

