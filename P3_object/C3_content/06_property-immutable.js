/**
 * 如何实现属性/对象的 不可更改？
 * immutable大多指 浅不变性，只影响 目标对象 和它的 直接属性
 * 如果属性本身又引用了一个其他的对象，那么这个其他对象的属性使用不受限制
 */

/**
 * 1. 设置对象 常量属性
 * obj.a 不可修改，不可配置
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






