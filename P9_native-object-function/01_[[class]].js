/**
 * 内部属性[[class]]
 * 对象存在一个内置不可访问的属性[[class]]可以作为一个类型判断的参考
 * 正常情况下不可访问，但是可以通过Object.prototype.toString.call()来访问
 * 这种方式有两个特点：
 * 1. 不存在的构造函数
 * 2. boxing包装
 */

// 1.不存在的构造函数
Object.prototype.toString.call([])  // "[object Array]"
// 通过这个方法可以返回 构造函数对象，但是也有例外
Object.prototype.toString.call(null) // "[object Null]"
Object.prototype.toString.call(undefined) // "[object Undefined]"
// Null 和 Undefined 这两个构造函数其实并不存在

// 2. boxing包装
Object.prototype.toString.call('abc') // "[object String]"
// 在参数是一个基本数据类型时，会将参数自动包装boxing为对象






