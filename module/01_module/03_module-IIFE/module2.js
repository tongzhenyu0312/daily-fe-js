/**
 * 内部存储 私有变量name 与 innerFn
 * 暴露的接口只有getName
 */
(function () { 
  let data = 'module2';
  function innerFn() { 
    console.log('module2 innerFn()')
  }
  function getName() { 
    console.log(data);
    innerFn();
  }
  window.module2 = { getName };
})()