/**
 * [[prototype]]是什么？
 * 是对象的一个属性，几乎所有对象在初始化的时候都会内置 [[prototype]]属性，该属性引用了一个其他对象
 * 
 * 所有对象都有[[prototype]]属性么？
 * 并不是的，Object.create(null)就会创建一个 纯空对象。
 * 
 * [[prototype]]这个属性有什么用？
 * 查找对象属性时，[[get]]算法有这个逻辑：
 * 如果对象本身查不到，就会去对象的[[prototype]]属性指向的对象上去查，
 * 直到查完整条原型链prototype chain。
 * 如果仍然查不到，就返回undefined。
 * (注意ES6的proxy可能改写这种查找机制)
 * 
 * [[prototype]]的常见使用场景？
 * 1. Object.create(targetObj) 这个方法会返回一个对象，对象的[[prototype]]属性指向targetObj
 * 2. 遍历对象 遍历会查找对象的完整原型链
 * 3. in 关键字 也同样会查找对象的整条原型链
 */

var obj = {
  a: 2,
};
var myObj = Object.create(obj);
console.log(myObj, myObj.a); // {} 2


/**
 * 查找对象的属性，会查到 不可枚举属性么？
 * 可以。
 * 枚举属性只会影响 是否出现在遍历中。
 */
var obj = {};
Object.defineProperty(obj, 'a', {
  configurable: false,
  enumerable: false,
  value: 2,
})
var myObj = Object.create(obj);
console.log(myObj.a); // 2
for (const key in obj) {
  console.log(key);
}

