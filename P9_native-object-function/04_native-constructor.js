/**
 * Array:
 * new Array(3)会创建一个拥有3个空单元的数组,尽量少创建这种数组
 * Object
 * Function:
 * 只有在动态参数时才会使用
 * Regexp:
 * 常用构造方式创建一个动态的正则
 * Date Error:
 * 因为没有对应类型的基础数据类型，所以必须通过构造函数创建对象
 * Date()没有参数会返回当前时间的字符串，加new会返回对象
 * Error 不管有没有new都是一样返回一个Error对象
 */

/**
 * 原生原型
 */
typeof Function.prototype // "function"
Function.prototype() // 空函数
Array.isArray(Array.prototype) // Array.prototype是一个数组
RegExp.prototype.toString() // "/(?:)/"