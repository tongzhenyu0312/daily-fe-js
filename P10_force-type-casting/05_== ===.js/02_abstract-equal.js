/**
 * 抽象相等规则:
 */

/**
 * 1. 字符串与数字:
 * x == y, Type(x)为string, Type(y)为number，返回 ToNumber(x) == y
 */

/**
 * 2. 其他类型与布尔值:
 * x == y, Type(x)为boolean, y是其他类型，返回 ToNumber(x) == y
 */
var x = '42';
var y = true;
x == y; // 比较的 '42' == 1 ==> 42 == 1 所以返回 false

/**
 * 3. 其他类型 与 特殊的null/undefined:
 * (1) x == y, x = null, y = undefined, 返回true
 * (2) 其他类型均不相等
 */

/**
 * 4. 对象类型 与 基本数据类型:
 * x == y, Type(x)为object, Type(y)为基础数据类型，返回 ToPrimitive(x) == y
 * 注意: ToPrimitive其实与valueOf()和toString()息息相关
 * (1) 对象的valueOf方法返回自身，所以对象的ToPrimitive规则基本就是在使用toString
 * (2) [null].toString() 是 ""
 * (3) ""、"\n"、"   "这些字符串ToNumber规则下都是返回 ""
 */