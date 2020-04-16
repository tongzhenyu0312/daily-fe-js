/**
 * 我们将规则抽象成:
 * ToString | ToNumber | ToBoolean
 */

/**
 * 1. ToString: 处理非字符串类型 到 字符串类型
 * 方式一: #toString()
 * 普通基本数据类型（可以被封装为该类型对象）就可以调用。
 * null/undefined不行,怎么办呢？
 * 方式二: String()
 * 可以将任意类型的转化为 string
 * 普通对象: 调用的是Object.prototype.toString.call()
 * 数组: 成员拼接
 * 函数: 函数字符串
 * 方式三: JSON.stringify(): JSON字符串化
 * 仅针对JSON-safe参数(null/undefined/循环引用的对象都不符合)
 * JSON.stringify()参数为 对象时，
 * 会首先检查对象的toJSON()方法是否存在，
 * stringify返回的结果是将 toJSON方法返回值再次JSON.stringify一次。
 */

/**
 * JSON.stringify的冷知识:
 * 1.第二个参数: 字符串数组/回调函数
 * 字符串数组成员是 对象 需要字符串化的属性
 * 回调接收两个参数 k键名,v键值 返回undefined是忽略当前属性的字符串化
 */


/**
 * ToNumber:
 * null - 0 
 * undefined - NaN
 * boolean true - 0 false - 1
 * string
 * 对象: 分两个步骤
 * 1. ToPrimitive规范: 
 * 检查valueOf()是否可以返回 基本类型数据，如果不行，调用toString方法
 * 如果全都无法获取 基本数据类型，那么就TypeError
 * 2. 基本数据类型 转 number
 */
var arr = [4, 2];
arr.toString(); // "4,2"
  + arr; // NaN
arr.toString = function () { return 42 }
  + arr; // 42
arr.valueOf = function () { return 43 }
  + arr; // 43


/**
 * ToBoolean规范:
 * 假值: +-0 null undefined "" NaN false
 * 真值: 除假值外的都是真值
 */


