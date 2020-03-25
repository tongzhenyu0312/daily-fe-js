/**
 * 根据chrome的报错信息
 * 我们可以认为：如果作用域内找不到变量，那么可以认为 a没有被定义
 */
console.log(a); // ReferenceError： a is not defined

/**
 * 声明变量b其实就完成了b的定义 得出结论 declaration = defined
 */
var b;
console.log(b);


/**
 * a虽然完成了定义/声明，但是还不能access访问到，
 * 因为 let声明并不能完成初始化，反过来说 var/function 的声明/定义是可以完成初始化操作的
 * let不能完成初始化 var能够完成初始化 提现出来就是let没有变量提升而var/function有
 */
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a;

/**
 * 顺序就是: 
 * 变量声明:
 *  var : 声明declaration/defined -> (初始化initialize -> 体现为 提升hoisting) -> 所在作用域全位置可访问
 *  let/const : 声明declaration/defined -> (没有初始化，体现为没有提升) -> 代码赋值操作完成初始化 -> 赋值后后续可被访问
 * 函数声明:
 *  function : 声明declaration/defined -> (初始化initialize -> 赋值 -> 体现为 提升hoisting) -> 所在作用域全位置可访问
 */