/**
 * 模块就是模块，本质上还是 调用 包装/封闭函数(函数体内部有函数定义),并将返回值作为 模块的API
 * 不管这个包装函数有多么magic
 */

var MyModule = (function () { 
  // 封闭函数自执行，生成单例
  var module = {};
  function get(name) { 
    return module[name];
  }
  function define(name, deps, impl) { 
    deps = deps.map(item => module[item]);
    module[name] = impl.apply(impl,deps)
  }
  return { get, define }; // 返回定义函数
})()

MyModule.define('foo', [], function (param) { 
  function foo() { 
    console.log('foo impl')
  }
  return {foo}
})

MyModule.define('bar', ['foo'], function (fooApi) { 
  console.log(fooApi.foo()); // foo impl
})