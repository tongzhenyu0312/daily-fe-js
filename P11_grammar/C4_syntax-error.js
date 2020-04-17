/**
 * JS中包含很多运行时错误 比如 ReferenceError TypeError等
 * 还要一些是编译时错误，他们是一些早期错误，无法用try...catch...去捕获
 * JS语法规则之上是语义规则
 * 从语义上来说，有一些词法正确的代码也会造成语法错误
 */
// 同名的对象属性，在编译时就会报错
var a = { 
  b: 42,
  b: 43,
}

/**
 * 注意一个特殊情况
 */
typeof a; // undefined typeof能够引用未声明的变量而不报错
var a;
// 但是在TDZ中就会报错
// ReferenceError: Cannot access 'a' before initialization
{ 
  typeof a;
  let a
}
