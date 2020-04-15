/**
 * 数组的特性：
 * 1. 数组成员的类型不限
 * 2. 数组的length属性
 *    a. 因为数组也是一个键值对象，delete操作符可以删除数组成员，但是数组的length不会自动改变
 *    b. 稀疏数组 比如a[3]=1; a.length是4；a[1]是undefined。这个值与显示赋值undefined有所不同
 */

/**
 * 类数组转数组的几种场景
 * 1. DOM列表
 * 2. 函数参数
 * 类数组转数组的几种方式
 * 1. ES6 剩余操作符
 * 2. Array.from()
 * 3. Array.prototype.slice.call()
 */
