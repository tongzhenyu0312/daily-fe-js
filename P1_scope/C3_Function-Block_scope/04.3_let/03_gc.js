function pocessData(data) { };
/**
 * 由于btn事件绑定会形成一个全局的闭包，但是事件绑定与bigData1 bigData2没有关系
 * 存放在外层作用域的bigData1不会被销毁，但是块作用域中的bigData2就会被销毁
 */
let bigData1 = {
  // ...大数据
};
pocessData(bigData1);

{ 
  let bigData2 = {
    // ...大数据
  }
  pocessData(bigData2);
}

let btn = document.getElementById('btn');
btn.addEventListener('click', function cb() { 
  // ...回调
})

