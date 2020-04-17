/**
 * JS语言特性根据其宿主环境的不同，会有一些差异。
 * 我们常说的JS是指的运行在浏览器中的ecmascript，通过JS还可以运行在node等环境中。
 */

/**
 * 宿主对象
 * 宿主对象是指由宿主环境创建并提供的JS的，自动定义的变量，比如DOM对象，console输出对象等
 * 宿主对象与一般的JS object会有一定的差异，比如有些属性不可重写等
 * console对象在 浏览器环境下是 输出到控制台工具；在node中是指 node环境进程的标准输出stdout和标准错误输出stderr
 */
var a = document.getElementById('div');
// 这里a就是一个 宿主对象-DOM对象


/**
 * 全局DOM对象
 * 在创建一个带id的元素时，其实是会默认创建一个全局DOM对象的
 */