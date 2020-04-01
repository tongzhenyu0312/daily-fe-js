/**
 * this词法
 * 箭头函数 的this指向 本质上否定了 原先的this机制(this指向是运行时决定的)
 */
function foo() { 
  return () => { 
    console.log(this.name);
  }
}

var obj1 = {
  name: 'obj1',
}

var bar = foo.call(obj1); // foo执行时 foo的词法作用域中的this指向obj1 此时，箭头函数的this也已经决定了
bar();