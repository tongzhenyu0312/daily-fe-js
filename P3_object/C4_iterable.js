/**
 * 遍历是什么？
 * 我理解 遍历iterate 是一种操作，是一种针对 对象的可枚举属性的 有序访问
 * 对象部署了Symbol.iterator接口(调用会返回 迭代器对象iterator)。
 * 至此，我们就认为这个对象是 可遍历的 iterable。
 * 
 * 怎么进行遍历？
 * 1. 手动遍历
 * 手动获取迭代器对象，执行其next方法，这是一个纯遍历
 * 2. 命令遍历
 * for...of... forEach keys等等...
 * 这些命令会自动获取到 迭代器对象，并且会自动执行其next方法(顺便夹带一些私货，就是 回调函数)，
 * 直到遍历完毕(迭代器对象next方法返回值为{done: true})。
 * 这是一个 辅助迭代器
 * 这些东西
 * 注意：
 * 1. 一个对象的迭代器对象 我理解是唯一的。
 * 2. 一个对象的 Symbol.iterator接口(@@iterator)是一个函数,执行后得到的 才是该对象的 迭代器对象。
 */

var obj = {
  a: 2,
  b: 3,
};
Object.defineProperty(obj, Symbol.iterator, { 
  enumerable: false,
  value: function () { 
    var ks = Object.keys(obj);
    var len = ks.length;
    var idx = 0;
    var self = this;
    return {
      next: function () { 
        var value = self[ks[idx++]];
        return {
          done: idx > len ,
          value,
        }
      },
    }
  }
})
var it = obj[Symbol.iterator]();
it.next(); // {done: false, value: 2}
it.next(); // {done: false, value: 3}
it.next(); // {done: true, value: undefined}