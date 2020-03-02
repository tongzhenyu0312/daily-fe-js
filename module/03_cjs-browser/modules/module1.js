var count = 1;
/**
 * 每个文件为一个模块(即模块闭包的module对象)
 * 暴露的接口实则为module.exports属性(exports变量指向该属性值)
 */
module.exports = {
  count,
  counter: function () {
    return count;
  },
  addCount: function () { 
    count++;
  }
}