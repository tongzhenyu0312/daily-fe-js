/**
 * script引入时，变量与函数的声明均是在 全局作用域 中进行
 */
"use script"
function foo() { 
  console.log('module1 foo()');
}
var name = 'module1';