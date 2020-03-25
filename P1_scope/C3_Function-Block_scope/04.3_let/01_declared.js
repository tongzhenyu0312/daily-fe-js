/**
 * let会绑定所在块作用域
 */
{ 
  // 此处断点时，在chrome会报错
  // Uncaught SyntaxError: Identifier 'a' has already been declared
  // 证明 let也是进行了变量声明的，作用域中已经存在改变量。
  var a; 
  let a = 1;
}
var b = 2;
console.log(a, b);