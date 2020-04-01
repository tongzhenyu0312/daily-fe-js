/**
 * 隐式绑定规则：
 * 函数引用 有 上下文对象 时，函数调用中的this指向该上下文对象
 */

function foo() { 
  console.log(this.a);  // 111
}

var obj = {
  foo,
  a: 111,
}

obj.foo();


/**
 * 常见问题： 隐式丢失
 * 1. 隐式赋值
 */

function foo(bar) { // 这里其实已经将 obj.bar 赋值给了 foo函数的 变量bar
  bar(); // 因此此时函数的引用是 没有前缀的，而且因为是在非严格模式下， 所以 应用默认绑定 this指向全局对象 打印 'bbb'
}

var obj = {
  bar: function () { 
    console.log(this.a);
  },
  a: 222,
}

var a = 'bbb';

foo(obj.bar); 

/**
 * 2. 回调函数
 * 回调函数的函数调用是不可控的，因此 实际的this指向 其实是不能确定的，除非手动指定。
 */
function foo() { 
  console.log(this.a); // 333
}
var a = 333;
setTimeout(foo, 1000);


