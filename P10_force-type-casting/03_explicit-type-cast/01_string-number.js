/**
 * 字符串&数字之间的转化 遵循ToString和ToNumber规则
 * 那么，转化的方式有哪些呢?
 * String()/Number()/toString()/+运算符
 */
String(42); // "42" 注意前面没有new，因为不是需要一个封装对象
Number('101'); // 101
(42).toString(); // 42
// 此处注意toString()的使用，是存在 隐式类型转化的，
// 因为数字42并不存在方法，JS会将其封装为字符串对象后再调用其toString方法。
+'101'; // 101 加号运算符可以直接认为是Number的一种语法糖

/**
 * 此处注意String()和字符串拼接的区别：
 * String会直接使用 toString方法
 * 字符串拼接会 先触发ToPrimitive规则 然后触发ToString规则
 */
var a = {
  valueOf: function() { return 42; },
  toString: function() { return 4; }
};
a + "";         // "42"
String( a );    // "4"


/**
 * 日期时间对象 转化 数字时间戳
 */
+new Date(); // 可以将日期时间对象 隐式转化为 数字时间戳
// 为了得到更好的语义，建议使用
Date.now(); // 来获取当前数字时间戳
new Date().getTime(); // 来获取指定时间的数字时间戳

/**
 * ~ ToInt32
 * ~~ 字位反转
 */