/**
 * JS中值的类型：
 * null undefined number string boolean symbol object
 * 判断类型最常用的方法是 typeof 改操作符会返回 字符串的值
 */
typeof 'a'; // 'string'
typeof 1; // 'number'
typeof false; // 'boolean'
typeof Symbol(); // "symbol"
typeof undefined; // 'undefined'
// 特殊的返回，与JS中值的存储有关
typeof null; // 'object' 
// function是object的子类型，本质上还是一个 可调用对象
typeof function fn(){} // 'function'
