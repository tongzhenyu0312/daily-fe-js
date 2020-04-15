/**
 * JS中没有完美的"整数"，只是不带小数的十进制数
 */
42 === 42.0 // true

/**
 * JS数字规范遵循 IEEE574标准，即 "浮点数"
 * JS使用 64位二进制 (双精度)来在内存中存储 数字类型的值
 * 双精度浮点数会带来一个问题： 计算不准
*/
0.1 + 0.2 === 0.3 // false
// 解决的办法是控制最大误差
function toBeEqual(num1, num2) { 
  return Math.abs(num2 - num1) < Number.EPSILON;
}

/**
 * 因为.运算符也可以被认为是一个 有效的数字字符，因此JS会优先将其解析为数字的一部分，而非对象属性访问符
 * 因此 42.toFixed(2)这种写法会报错
 */


/**
 * 浮点数的范围
 * Number.MIN_VALUE ~ Number.MAX_VALUE
 * 5e-324 ~ 1.7976931348623157e+308
 * 整数的范围
 * Number.MIN_SAFE_INTEGER ~ Number.MAX_SAFE_INTEGER
 * -9007199254740991~9007199254740991
 */