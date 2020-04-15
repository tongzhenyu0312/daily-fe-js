/**
 * 类型只针对值而言，不是针对变量的，JS不强制要求 存储值的变量的类型。
 * 
/
/**
 * JS中一个变量包含：
 * ES5: 
 * 1. 未通过var声明(未声明前报错 ReferenceError: xx is not defined)
 * 2. 已通过var声明，但是未赋值(因为提升 任何位置均为undefined)
 * 3. 已赋值
 * 
 * ES6:
 * 1. 未通过let声明(未声明前报错ReferenceError)
 *    a. 若let未绑定{}块作用域 则是 is not defined
 *    b. 若绑定了{}， 则是 cannot access xx before initialized
 * 总结:
 * 声明会完成变量收集，提升会实现变量初始化(变量首次赋值)。
 */

/**
 * 正常来说，在声明前使用变量名肯定会报错ReferenceError
 * 但是有个例外
 */
typeof bb; // "undefined"
// 这个例外可能很有用,比如判断变量存在
if (typeof bb === 'undefined') { 
  bb = 'xxx';
}
// 当然我们可以通过全局对象来判断, 但是window并不一定在宿主环境中就存在
if (window.bb) { 
  // ...
}
