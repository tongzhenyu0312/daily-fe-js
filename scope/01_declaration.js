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
