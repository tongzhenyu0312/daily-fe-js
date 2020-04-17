/**
 * 运算符优先级：
 * && 运算符优先级 比 || 要高
 */
true || false && false; // true

/**
 * ()会改变运算符优先级
 */
(true || false) && false; // false

/**
 * & || 优先级都会比 ?: 的优先级高
 */
a && b || c ? c || b ? a : c && b : a
// 相当于
(a && b || c) ? (c || b) ? a : (c && b) : a
