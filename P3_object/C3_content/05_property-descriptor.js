/**
 * ES5提供了检测对象属性特性的方法 Object.getOwnPropertyDescriptor(targetObj, propertyName)
 * 添加/修改一个已有属性(configurable属性)，设置属性特性的方法 Object.defineProperty(targetObj, key, descriptor)
 */

/**
 * descriptor的几个属性:
 * 1. writable 决定属性是否可以被修改
 */
var obj = {
  a: 2,
}

Object.defineProperties(obj, 'a', {
  value: 3,
  writable: false,
  configurable: true,
  enumerable: true,
})

console.log(obj.a); // 3
obj.a = 4; // 严格模式 TypeError 非严格模式赋值会 静默失败

/**
 * 2. configurable 决定属性是否可以被配置特性
 */
Object.defineProperties(obj, 'a', {
  value: 3,
  writable: true,
  configurable: false,
  enumerable: true,
});

Object.defineProperties(obj, 'a', { // 严格非严格模式 都会 TypeError
  value: 4,
  writable: true,
})
// delete obj.a; // TypeError 无法配置特性的属性也无法被删除

/**
 * 3. enumerable 决定属性是否出现在对象的可枚举属性中
 */
  
