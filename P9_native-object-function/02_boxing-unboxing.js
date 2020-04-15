/**
 * 封装与拆封
 * 1. 通过构造函数返回的是一个封装对象,包含着[[PrimitiveValue]]
 * 2. 拆封的话，可以用valueOf方法
 */

let flag = new Boolean(false); // flag是一个对象 Boolean {false}
if (flag) { 
  // ... 代码会进入，因为if判断是truthy
}
flag.valueOf() // false