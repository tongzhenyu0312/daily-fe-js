/**
 * 给对象设置一个属性时 myObj.a = 1，会发生什么？
 * 1.如果myObj存在属性a，那么直接赋值
 * 2.如果myObj不存在a，那么根据[[get]]算法，查找整条原型链
 *   2.1 如果原型链也没有，那么给myObj赋值
 *   2.2 如果原型链上有
 *    (a) 普通属性: 发生屏蔽
 *    (b) 只读属性(writable: false): 设置无效,严格模式报错
 *    (c) 属性是setter访问描述符: 调用setter，无遮蔽
 * 
 * 怎么理解 2.2(b) 原型链属性为只读属性时，设置无效的情况？
 * 这种情况类似JS中模拟 “类” 设计模式，因此禁止。
 */

/**
 * 小心隐式 屏蔽!
 * 下例中myObj++其实做了 myObj.a = myObj.a + 1;的操作
 */
var obj = {
  a: 2,
}
var myObj = Object.create(obj);
console.log(myObj.a, obj.a);  // 2 2
myObj.a++;
console.log(myObj.a, obj.a); // 3 2
