/**
 * 变量提升函数的优先级比var高
 * 函数名是同一个标识符的函数，在提升时后者会覆盖前者
 */
fn(); // function fn2
function fn() { console.log('function fn1') }
function fn() { console.log('function fn2') }
var fn;


/**
 * 函数声明 不会区分块作用域，会直接提升到外层作用域
 * 所以下面的两次fn的声明，不管if条件如何，都会 后者覆盖前者
 */
fn(); // true
var B = true;
if (B) { 
  function fn() { console.log(false) }
} else { 
  function fn() { console.log(true) }
}

/**
 * 这个例子说明 
 *  foo的词法函数作用域 
 *  在处理形参时，拥有比var更高级别的声明 
 *  同时形参的声明 还像函数一样 进行了定义
 */
function foo(a) { 
  console.log(a); // 1
  var a;
}
foo(1);

/**
 * 这个例子说明
 * 形参的声明遇到函数就不行了 👍
 */
function bar(a) { 
  console.log(a); // Function：a
  function a() { 
    console.log('bar->a');
  }
}
bar(1);
