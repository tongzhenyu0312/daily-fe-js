/**
 * "完成"事件 还是 continuation事件 取决于关注点不同
 * 解决： 控制反转的问题
 */

function foo() {
  var evt;
  // ...一些操作，特定节点会发布（触发）指定事件
  return evt; // 返回一个事件监听器
}

var evt = foo();

evt.on('completion', function () { // 订阅（监听）completion事件，订阅一些事件处理函数
  // ...success
})

evt.on('error', function () { // 订阅（监听）error事件
  // ...failure
})

/**
 * 实际上，上例中的evt就是对promise的模拟
 */
function foo() { 
  return new Promise((resolve, reject) => { 
    // ...一些操作，特定节点会 执行resolve/reject
  })
}

var p = foo();

p.then(function () { 
  // ...success
}, function () { 
  // ...failure
})

