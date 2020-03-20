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
