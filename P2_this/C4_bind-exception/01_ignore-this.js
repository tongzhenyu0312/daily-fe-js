/**
 * 显示绑定中 
 * 如果给call/apply/bind 的this参数传 null/undefined,
 * 这些值调用时会被忽略，并且应用默认绑定规则
 */
function foo() { 
  console.log(this.a); // 2 默认绑定规则决定了this指向window
}
var a = 2;
foo.call(null);

/**
 * 上述方法忽略this可能会导致 很严重的后果
 * 比如 原函数是第三方的方法，其内部关于this的调用无法得知
 * 很有可能会修改 全局属性
 * 因此传入一个 安全的空对象 很有必要
 */
function foo(a, b) { 
  console.log(a + b); // 'ab'
}
const ø = Object.create(null); // 创建了一个比空对象 更“空”的对象，这个对象没有原型链
var bar = foo.bind(ø, 'a')
bar('b'); 


/**
 * 硬绑定有一个缺陷：bind后，根据优先级，除非使用new，否则不论何种调用方式，this指向都是原来绑定的那个值
 * 我们可以提供一个 软绑定 soft-bind
 * 使得 如果this指向 window/undefined 时，重定向到原绑定的对象
 * 单如果 this有在 隐式绑定/显示绑定中 已经指向了一个明确的值，那么就直接使用那个值
 */
Function.prototype.softBind = function (ctx) { 
  var fn = this;
  var curriedArgs = [].slice.call(arguments, 1);
  var bound = function () { 
    const that = (!this || this === (window || global)) ? ctx : this;
    const args = arguments;
    const contactedArgs = curriedArgs.concat.call(curriedArgs, args);
    fn.apply(that, contactedArgs);
  }
  bound.prototype = Object.create(fn.prototype);
  return bound;
}

function foo() { 
  console.log(this.name);
}

var name = 'window name'

var obj1 = {
  name: 'obj1',
}

var bar = foo.softBind(obj1);
bar(); // obj1

bar.call(obj2); // obj2

var obj2 = {
  name: 'obj2',
  bar,
}

obj2.bar(); // obj2

setTimeout(obj2.bar, 1000); // obj1







