/**
 * null 和 undefined 是两个特殊值
 * undefined是未赋值
 * var声明时包含了 变量收集+初始化(我理解一个变量必须经历初始化这个过程，才能使用，这就是提升)
 * let声明 只包含了变量收集，但是没有初始化，初始化在执行到let操作符时执行
 */


/**
 * 因为undefined可以被当做标识符，所以为了准确的得到undefined，需要使用void操作符
 */
undefined = 1;
let a = undefined; 

let a = void 0;
