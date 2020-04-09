/**
 * JS的模拟类的丑恶行径里有一个特别恶劣的地方： 继承
 * 之前我们了解是 类继承，其实实例化的过程也是 继承的一部分。
 * 事实上JS的继承 不管是类继承还是实例继承，都只是委托关系。是一种从右往左，自下而上的委托。
 */

function Foo(name) { 
  this.name = name;
}

Foo.prototype.getName = function () { 
  console.log(this.name);
}

function Bar(name, label) { 
  this.label = label;
  Foo.call(this, name);
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.getLabel = function () { 
  console.log(this.label);
};

var bar = new Bar('bar', 'Bar');
bar.getName(); // 'bar'
bar.getLabel(); // 'Bar'
console.log(bar.constructor); // Foo

/**
 * 核心代码 Bar.prototype = Object.create(Foo.prototype);
 * 实现了 创建一个新对象来实现委托的替换(注意此时的.constructor指向Foo而非Bar，这也论证了这个类是个模拟类)
 * ES6中可以用 Obj.setPrototypeOf(sourceProto, targetProto) 来实现
 */

Object.setPrototypeOf(Bar.prototype, Foo.prototype);
console.log(bar.constructor); // Bar


/**
 * 检查“类”关系
 * 如何检查一个对象的委托对象？
 * 检查一个“实例”(JS对象)的“继承祖先”(委托对象)，在面向类的语言中称为 “自省”
 */
/**
 * 1.站在类的角度考虑： 
 * srcObj instanceof Foo
 * srcObj的[[prototype]]链中是否出现过 Foo.prototype
 * 这个方法的缺点是 操作数必须是 对象 instanceof 函数
 */

/**
 * 2. tarObj.isPrototypeOf(srcObj) tarObj是否出现在srcObj的
 */





