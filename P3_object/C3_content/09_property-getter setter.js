/**
 * 对象默认的[[get]][[set]]算法决定了属性值的 设置和获取
 * getter和setter部分改写 了对象的默认规则(但是只能作用单个属性，无法整体修改对象所有属性)
 * getter：隐藏函数，获取属性值时调用
 * setter：隐藏函数，设置属性值时调用
 * 使用了 getter/setter 的属性被称为 访问描述符，与 数据描述符 对应
 * 访问描述符会忽略 value/writable 只关心 get/set/configurable/enumerable
 */

/**
 * 给对象添加 访问描述符的几种方式？
 * 1. 对象字面量
 * 2. 通过属性（数据）描述符
 * 这两种方式都会给对象挂上一个 没有属性值 的属性，属性访问时 会自动调用隐藏函数
 */

var obj = {
  get a() { 
    return 2;
  }
}

Object.defineProperty(obj, 'b', {
  get() { 
    return 3;
  },
  configurable: true,
  enumerable: true,
})



