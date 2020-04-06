/**
 * 如何实现属性/对象的 不可更改？
 * immutable大多指 浅不变性，只影响 目标对象 和它的 直接属性
 * 如果属性本身又引用了一个其他的对象，那么这个其他对象的属性使用不受限制
 */

/**
 * 1. 设置对象 常量属性
 * obj.a 不可修改，不可配置clar
 */
var obj = {
  a: 2,
};
Object.defineProperty(obj, 'a', {
  writable: false,
  configurable: false,
  value: 2
});

/**
 * 2. 禁止对象增加新属性
 */
Object.preventExtensions(obj);

/**
 * 3. 密封 对象
 * 使不可拓展新属性 (preventExtensions)，不可删除旧属性，不可配置属性 (configurable:false)
 */
Object.seal(obj);


/**
 * 4. 冻结 对象
 * 在seal基础上 不可修改属性值(writable: false)
 * 作用在对象上，实现不可变性的最高级别的方法
 */
Object.freeze(obj);





