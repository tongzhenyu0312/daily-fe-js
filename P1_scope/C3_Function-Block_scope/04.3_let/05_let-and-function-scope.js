/**
 * let 会劫持最近的代码块作为 块级作用域
 * 在函数作用域中就会绑定到 函数作用域 本身
 */
function foo() { 
  let a = 1;
  function bar() { 
    console.log(a); // 此处通过闭包能访问到a
  }
  return bar;
}
let bar = foo();
bar();

/**
 * 但是下面就无法访问到
 * 因为a已经绑定了一个 {...}块级作用域
 */
function foo() { 
  { 
    let a = 1;
  }
  function bar() { 
    console.log(a); // ReferenceError: a is not defined
  }
  return bar;
}
let bar = foo();
bar();

