/**
 * promise译为承诺
 * 指可以用promise作为一个占位符，不依赖时间，作为一个 未来值
 * 这个未来值 有一个重要特性: 可能成功 也可能失败
 */

/**
 * 都说promise是一种更好的 异步解决方案
 * 看看比回调好在哪里
 * 假设 x，y 是一个异步确定的值，那么我们想要得到 它们值的和
 */
/**
 * 方案一: 回调
 */
function add(getX, getY, callback) { 
  var x, y
  getX(function (val) { 
    x = val;
    if (y) { 
      callback(x + y);
    }
  })
  getY(function (val) { 
    y = val;
    if (x) { 
      callback(x + y);
    }
  })
}
// fetchX 代表获取x的值
// fetchY 代表获取y的值
add(fetchX, fetchY, function (sum) { 
  console.log('x y值的和', sum);
})

/**
 * 方案二: promise
 */
function add(getX, getY) {
  return Promise.all(getX(), getY()).then((val) => {
    return val[0] + val[1]
  });
}
add(fetchX, fetchY).then((sum) => { 
  console.log('x y值的和', sum);
}, (err) => { 
  console.log('失败原因是', err);
})

/**
 * promise特点:
 * 1. 前面说过 Promise也可能失败，失败提供的拒绝值 可能是由 程序显式设置，也可能是程序运行异常得到的隐式值
 * 2. Promise封装了依赖时间的状态-等待底层值变成完成值/拒绝值的过程，是一种封装和组合未来值的机制
 */

