/**
 * 隐式强制类型转化 字符串与数字
 * 触发场景:
 * 1. +号运算符
 * 2. -号运算符
 */


// +号运算符在操作 非数字运算数时，就会存在隐式强制类型转化
// 如果运算数有字符串，那就是字符串的拼接 结果触发 ToPrimitive规则和ToString规则
[1, 3] + [2] // "1,32"
  ([] + {}) // "[object Object]"
  ({} + []) // 0 这个后面讨论
  
// -号运算符的 运算数必须是Number，所以隐式强制类型转化 触发ToPrimitive规则和ToNumber规则
var a = [3];
var b = [1];
a.valueOf=function() {return 13};
a.toString = function () { return 113 };
b.toString = function () { return 3 };
a - b; // 10



