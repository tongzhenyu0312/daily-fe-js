/**
 * 闭包在构建模块中的作用
 */
function coolModule() {         // 1. 封闭函数：封闭函数提供给我们 词法作用域(闭包的前身)
  var something = 'cool';
  var another = [1, 2, 3];
  function doSomething() { 
    console.log(something);
  }
  function doAnother() { 
    console.log(another.join(','));
  }
  return {                     // 2. 通过返回封闭函数内的一个函数(封闭函数的返回值也被称为模块API)，
    doSomething,               // 来将 封闭函数的词法作用域转化为闭包
    doAnother,
  }
}

var foo = coolModule();       // 3. 封闭函数执行，得到一个模块实例
foo.doSomething();            // 4. 模块实例可以调用模块API来访问封闭函数的内部作用域(闭包)

/**
 * 前面的例子会创建多个实例
 * 下面只是返回一个单例
 */

var bar = (function cssModele() { 
  // ...
})()


/**
 * 模块的
 * 1. 参数传递：模块本质上是一个函数，当然可以传递参数
 * 2. 修改公共API: 通过在 模块内部 有对 公共API的引用，可以从内部实现对 模块实例 属性或方法 的增删改查
 */
var foo = (function myModule(newName) { 
  var oldName = 'myModule';
  function getModuleName() { 
    console.log(newName || oldName);
  }
  function getUpperModuleName() { 
    console.log((newName || oldName).toUpperCase());
  }
  function reset() { 
    PublicAPI.getModuleName = getUpperModuleName;
  }

  var PublicAPI = {
    getModuleName,
    reset,
  }

  return PublicAPI;
})('myNewModule')
foo.getModuleName(); // myNewModule
foo.reset();
foo.getModuleName(); // MYNEWMODULE

