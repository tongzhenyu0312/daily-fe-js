/**
 * let会绑定所在的块作用域
 */
{ 
  // Uncaught ReferenceError: 
  // Cannot access 'a' before initialization: 
  // 此处说明let的变量声明是不包含初始化initialization的过程的
  console.log(a);
  let a = 1;
}
var b = 2;
console.log(a, b);