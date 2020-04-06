/**
 * 对象的 属性类型中，什么叫做 可枚举 属性？
 * 属性可枚举，意味着属性会出现在 对象属性的 遍历 中。
 * 不可枚举属性也可以用 in 来判断是否存在！
 */
var obj = {};
Object.defineProperty(obj, 'a', {
  enumerable: true,
  value: 2,
});
Object.defineProperty(obj, 'b', {
  enumerable: false,
  value: 3,
});
'b' in obj; // true 
for (const key in obj) {
  console.log(key); // 'a'
}
