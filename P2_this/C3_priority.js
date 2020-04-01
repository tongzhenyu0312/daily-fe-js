/**
 * 1. 默认绑定的优先级最低
 */

/**
 * 2. 隐式绑定与显式绑定
 */
function foo() {
  console.log(this.a);
}
var obj1 = {
  a: 1,
  foo,
};
var obj2 = {
  a: 2
};
obj1.foo.call(obj2); // 打印2 说明显式绑定优先级更高

/**
 * 3. 由于显式绑定与new无法同时进行(无法 new obj.foo.call())
 * 所以我们比较 硬绑定 与 new
 */
function foo(val) { 
  this.a = val;
}
var obj = {};
var bar = foo.bind(obj);

bar(2); // obj.a => 2
var baz = new bar(3); // obj.a => 2   baz.a => 3
// 说明 new 的优先级更高

/**
 * new 和 硬绑定 的配合使用，最主要的目的在于预置一些函数的参数
 */
function foo(a, b) { 
  console.log(a, b);
}
var bar = foo.bind(null, 'aaa');
bar('bbb'); // 打印 aaa,bbb


