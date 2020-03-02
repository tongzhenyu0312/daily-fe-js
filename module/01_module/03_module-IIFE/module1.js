/**
 * 通过自执行函数闭包暴露该模块的数据与实现
 * 内部存储 私有变量name 与 innerFn
 * 暴露的接口只有getName
 * 模块内部的依赖通过入参传入
 */
(function (window) { 
  let name = 'module1';
  function innerFn() { 
    console.log('module1 innerFn()')
  }
  function getName() { 
    console.log(name);
    innerFn();
  }
  window.module1 = { getName };
})(window)