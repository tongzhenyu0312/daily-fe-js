/**
 * let循环不会在最外层绑定变量
 */
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log(i); // ReferenceError: i is not defined

/**
 * 实际上的let-loop有一个重新绑定变量的过程
 */
{ 
  let i = 0;
  for (i = 0; i < 10; i++) {
    let j = i;
    console.log(j);
  }
}

