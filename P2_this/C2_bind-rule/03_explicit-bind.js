/**
 * 显式绑定 call apply
 */
Function.prototype.myCall = function (ctx) { 
  ctx = ctx || window;
  ctx.fn = this;
  const args = arguments.slice(1);
  ctx.fn(...args);
  delete ctx.fn;
}

/**
 * 经典的夺命连环call
 * 从myCall可以看出，call的实现本质上是通过 默认绑定规则 执行函数从而改变this指向
 */
function fn1() { console.log('fn1执行' + this) };
function fn2() { console.log('fn2执行' + this) };
/**
 * 相当于 fn2.fn1() 那么fn1里的this指向fn2 实际执行的还是fn1
 */
fn1.call(fn2); // fn1执行
/**
 * 相当于 fn2项挂在了一个fn是 fn1.call,因为fn1的函数体其实已经是call函数本身了，
 * 所以相当于上面的myCall执行，那么本质上其实是执行了一遍this，而这时this已经指向fn2
 * 所以其实是执行fn2 
 */
fn1.call.call(fn2); // fn2执行

fn1.call.call.call(fn2); // fn2执行



/**
 * 硬绑定 可以帮助我们解决 隐式绑定时的 this丢失问题
 * 同时 还可以有一个更优美的方案 bind
 */

// 通过bar实现一个简易版bind
function foo() { 
  console.log(this.a);
}
var obj = {
  a: 2
}
function bar(ctx) { 
  return function () { 
    foo.call(ctx);
  }
}
bar(obj);
setTimeout(bar(obj), 1000)

// 自动bind
setTimeout(foo.bind(obj), 1000);


/**
 * Api调用的 “上下文”
 * forEach的第二个参数就是 定义回调中的this指向
 */
var obj = {
  a: 1
}
function foo() { 
  console.log(this.a);
}
[1, 2, 3].forEach(foo, obj); // 1 1 1





