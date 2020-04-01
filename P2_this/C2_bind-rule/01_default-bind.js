/**
 * 在全局作用域下，foo执行时，没有任何前缀
 * 在非严格模式下，this指向 全局对象
 */

function foo() { 
  console.log(this.a); // 2
}

var a = 2;

foo();

/**
 * 严格模式下，this指向undefined
 * 因此上面的log 会报 TypeError
 */