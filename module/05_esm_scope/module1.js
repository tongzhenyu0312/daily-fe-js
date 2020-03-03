/**
 * 使用es5声明的变量/方法 将挂载至全局
 * es6的所有模块其实都在同一个作用域内，此时要注意 命名冲突
 */
export var a = 1;
let b = 2;
function foo() { 
  console.log('foo()')
}
foo();
export default class Bar { 
  constructor() { 
    console.log('Bar()');
  }
}
new Bar();
debugger;
// let c = 'ccc';
// console.log(c);
