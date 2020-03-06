function wait(message) {

  setTimeout(function timer() {
    console.log(typeof timer === 'function');
    console.log( message );
  }, 1000);
  
  try {
    console.log(timer);
  } catch (e) { 
    console.log(e.message + '函数表达式的函数作用域不是在 wait的词法作用域 中被收集的')
  }
}

wait();