/**
 * 转化为布尔值有一些几种常见场景:
 * 1. !!(显式)
 * 2. 三元运算符(隐式)
 * 3. if判断
 */

/**
 * 转化为布尔值可以在JSON序列化的时候应用
 */
var a = [1, function fn() {}];
JSON.stringify(a); // "[1,null]"
JSON.stringify(a, function (k, v) { // "[1,true]"
  if (typeof v === 'function') {
    return !!v;
  }
  return v;
});
