/**
 * 加载顺序是同步加载
 * require命令的执行其实是执行一遍对应模块的代码，并且返回模块的module.export
 * 加载机制是 模块的输入其实是 导入模块的 备份，一旦 导入模块的输出完成，以后所有的引用只是基于当前模块的module.children里面缓存的数据(基本数据类型不会再发生改变，但是引用数据类型还是可以监听到模块内部数据变化的)
 */
let m1_count = require('./modules/module1').count;
let m1_counter = require('./modules/module1').counter;
let m1_addCount = require('./modules/module1').addCount;
let m2 = require('./modules/module2');

console.log(m1_count); // 1
m1_addCount();
console.log(m1_count); // 1
console.log(m1_counter()); // 2
console.log('=========================>');
console.log(module);
/**
  children:
   [ Module {
       id:
        '/Users/hb/tzy/daily-fe/daily-fe-js/module/02_cjs-node/modules/module1.js',
       exports: [Object],
       parent: [Circular],
       filename:
        '/Users/hb/tzy/daily-fe/daily-fe-js/module/02_cjs-node/modules/module1.js',
       loaded: true,
       children: [],
       paths: [Array] },
     Module {
       id:
        '/Users/hb/tzy/daily-fe/daily-fe-js/module/02_cjs-node/modules/module2.js',
       exports: [Object],
       parent: [Circular],
       filename:
        '/Users/hb/tzy/daily-fe/daily-fe-js/module/02_cjs-node/modules/module2.js',
       loaded: true,
       children: [],
       paths: [Array] } ],
 */
console.log('<=========================');
console.log(m2); // { name: 'module2' }
