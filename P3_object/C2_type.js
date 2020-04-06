/**
 * 类型：
 * JS中有 6种类型： 5种基本类型 null object string number boolean 和 1种对象类型 object
 * 对象类型有很多子类型 称为复杂类型 比如 object function date...等
 * JS中万物皆对象的说法是错误的，因为 基本类型的数据就不是对象
 * 函数是对象类型的一种子类型，
 * 被称为“一等公民”是因为 函数其实和普通对象一样(只不过可以调用)，可以像操作其他对象一样操作函数(比如当做参数传递)
 */

/**
 * typeof null 是 object?
 * 因为JS底层认为 二进制前3位为0的都是object null都是0 就被当成了object
 */

/**
 * 内置对象
 * JS中有一些对象子类型 称为内置对象 比如Date Number String Array...
 * 内置对象被称为 内置类，其实就是一些函数，调用时采用 构造调用的形式，生成一些对应 子类型的新对象
 * 这些子类型有时与 基本类型同名，但是其实是不同的东西，子类型构造出的是一个对象，基本类型的值就是一个字面量
 */
var strPrimitive = 'i am a primitive string';
typeof strPrimitive === 'string';
strPrimitive instanceof String; // false

var strObject = new String('i am a object string');
typeof strObject === 'object';
strObject instanceof String; // true


/**
 * 字面量的隐式转化
 * 基本类型字面量 在被引擎使用时会自动转化为 子类型对象
 * 所以 可以获取 strPrimitive.length
 * 基本类型只有字面量的创建方式，
 * 而对象子类型 有些既可以字面量，也可以构造创建，比如Array；有些就只能构造创建，比如Date
 */
var strPrimitive = 'i am a primitive string';
console.log(strPrimitive.length);



