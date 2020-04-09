/**
 * [[prototype]]机制：
 * 一个对象上有一个内部链接引用了另外一个对象
 * 在对象进行属性查找时，如果找不到属性值，就会去对象[[prototype]]链接到的对象上去找，以此类推，直到查到Object.prototype
 * 这一系列的对象组成的链接，被称为 原型链
 * 也就是说 [[prototype]]机制的本质是对象的关联。
 */
function Foo() { };
let obj = new Foo(); // obj被创建的时候[[prototype]]内置属性就已经指向了Foo.prototype
obj.a // obj本身属性查找-->obj的[[prototype]] Foo.prototype-->Function.prototype-->Object.prototype
