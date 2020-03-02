[1]   
> - `esm` 设计思想是尽量的 `静态化`，`编译时` 就能确定模块的依赖的关系，以及输入输出变量。
> - `amd` 和 `cjs` 都是运行时才能确定。
> - `cjs` 的模块就是一个对象（`module.exports`），导入时需要访问其属性。


[2]

```js
// CommonJS模块
let { stat, exists, readFile } = require('fs');

// 等同于 对_fs对象的属性的访问
let _fs = require('fs');
let stat = _fs.stat;
let exists = _fs.exists;
let readfile = _fs.readfile;
```

> 上述通过对象访问的方式获取内容的加载方式成为`运行时加载`，因为只有在 `运行时` 才能得到这个对象，因此也就无法做 `静态优化`。


[3]

> 与`cjs导出模块是一个对象`不同，`esm`(`编译时加载`) 导出的不是一个对象，它是通过`export`命令`显式` 指定导出的代码，通过 `import` 命令导入。

```js
// ES6模块
import { stat, exists, readFile } from 'fs';
```

> 只加载指定的三个方法，其他方法不加载。

[4] 

> - cjs 第一次加载某个模块后，当前模块会 `缓存` 该 被导入模块，以后再加载或者去取值时，会去缓存 `module.children[n]` 中去取 `exports` 属性值。
> - 这个缓存是对被导入模块module.exports属性对象的一份 `浅拷贝`
> - cjs认为`每个文件都是一个模块`，是`构造函数Module`的一个`实例`

```js
// 被导入模块
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};

// 模块
var mod = require('./lib');

console.log(mod.counter);  // 3
mod.incCounter();
console.log(mod.counter); // 3
```

> - 函数incCouter指向被导入模块的函数访问了被导入模块的couter属性(闭包的提现)。
> - mod其实指向缓存的被导入模块的module.exports的拷贝，所以访问的是属性couter的值还是3

![image](http://note.youdao.com/yws/res/6127/C4C16BD7940847E4AD1FF8CE9E6098B7)

> - `esm`不一样，js引擎进行`静态分析`时，遇到模块加载命令import，会先生成一个`只读引用`。==当脚本真正执行时，到被导入模块中去取值==。
> - 所以`esm`与其说是 `导`入 不如说是 `连接`
> - 所以当原始值改变，import加载的值也会改变，称之为`动态引`用，==模块的变量绑定模块本身==。



# 一、模块化

## 1. 概述
- `模块化` 指将一个复杂应用，按照一定`规范`,切割成多个`部分文件`,并进行`组装`的概念。
- 模块内部的变量与实现均是私有的，模块通过`接口`来实现模块间的通信。

## 2. 模块化的演进

- 全局模式
> 直接在脚本中定义变量与方法   

缺点：造成命名冲突，全局变量的污染 

- namespace模式
> 将变量与实现，通过单例存放在对象中   

缺点：命名空间内的数据/方法可以被随意修改

- IIFE模式(immediately-invoked function expression)
> `IIFE`模式的模块化方案是 当前各种模块化方案的基石

## 3. 引入模块化后的优点

- 解决命名冲突
- 代码分离有利于提高代码可维护性
- 代码分离代码的复用

## 4. IIFE模式的不足处

> 作为基石，必然存在可以提升的空间。问题体现在 存在多个依赖时，html必须引入多个script标签，会带来很多的问题。

- 请求变多
- 多个script与多个模块之间的依赖关系不明确


# 二、当前的模块化方案

## 1. commonJS

### 概述

> `commonjs`规范定义每一个文件就是一个模块，有自己的`作用域`。模块内部的数据与实现与外部文件无关。
> - 运行在服务端，模块加载是`同步加载`
> - 运行在浏览器端，需要先`编译打包`后方可使用

### 加载特点与机制

- 每个文件都有一个模块作用域，提供了5个入参，其中`module`属性代表模块本身，`module.exports`定义了模块的输出。
- 只有首次加载时才会执行模块文件，后续的多次加载均是在当前模块的`module.children`读取缓存(注意缓存的数据的数据类型为`基本数据类型`与`引用数据类型`的区别)
- 模块的加载顺序，取决于模块的出现顺序

### 语法

> `commonjs` 提供了`require`导入与`module.exports`输出的方式。

### 最佳实践

- commonjs通过webpack打包在浏览器端实现

## 2. es module

### 与cjs的区别

`esm`与`cjs`同样提供了模块化的基本解决方案，但是也是略有区分的：
- 模块的加载机制：`esm`直接导入的是`模块的引用`，而非`模块的缓存`。
- `esm`是 `编译时加载` 而非 `运行时加载`

### 语法

`esm`提供`import`命令实现模块导入,`export`命令实现`模块输出`


# 总结

> `cjs`是同步加载，加载失败会造成阻塞，不适用于浏览器端   
> `esm`在编译时就确定了依赖，所以编译打包后的文件必定是可以执行的
