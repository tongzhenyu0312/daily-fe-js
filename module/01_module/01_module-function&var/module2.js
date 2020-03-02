/**
 * 函数foo与变量name 与module1内的定义冲突
 * 造成 命名冲突，变量污染
 */
function bar() {
  console.log('module2 bar()')
}
function foo() { 
  console.log('module2 foo()')
}
var name = 'module2';
