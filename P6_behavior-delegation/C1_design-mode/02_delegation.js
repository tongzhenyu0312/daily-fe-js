/**
 * 1. 类设计模式：
 * 定义父类Task，父类定义 所有的基础行为
 * 定义子类XYZ, 子类继承自父类，并且定义 一些特殊行为(注意类设计模式鼓励 重写父类方法，将方法抽象到父类成为 基础方法，然后再在子类特殊化)
 * 实例化XYZ, 类会将所有方法都 复制到实例本身
 * 后续只需要操作 实例即可
 */

// 定义父类 包含所有基础行为
class Task { 
  id;
  Task(ID) { 
    id = Id;
  }
  outputTask() { 
    output(id);
  }
}

// 定义子类 包含特殊行为 以及 重写父类行为
class XYZ inherits Task { 
  label;
  XYZ(ID, LABEL) { 
    super(ID);
    label = LABEL;
  }
  outputTask() { 
    super.outputTask();
    output(label);
  };
}

xyz = new XYZ(); // xyz实例本身拥有所有方法

xyz.outputTask();


/**
 * 2 委托设计模式 (OLOO Object Link Other Object对象关联模式)
 * 定义一个对象Task，包含所有的基础行为
 * 定义一个对象XYZ，存储内部数据和特殊行为，并且将其关联到Task对象上，以便再需要的时候进行委托
 */

// 定义Task对象
var Task = {
  setId(ID) { this.id = ID },
  outputId() { console.log(this.id) },
};

// 定义XYZ对象，关联其[[prototype]]链接到Task对象
var XYZ = Object.create(Task);

// 定义特殊方法
XYZ.prepareTask = function (ID, LABEL) { 
  this.setId(ID);
  this.label = LABEL;
}

// 定义特殊方法
XYZ.outputTask = function () { 
  this.outputId();
  console.log(this.label);
}

/**
 * 委托对象模式有些特殊：
 * 1. 数据保存在 实例本身，而非被委托的对象上，这点是因为this决定的
 * 2. 委托对象模式应尽可能避免在不同[[prototype]]层次使用同名方法，而从类设计模式触发，则是提倡方法的重写
 * 
 * 总的来说：
 * 类设计模式是一种自上而下的流向
 * 而 委托对象的模式可以是 任意顺序的并行的操作
 */


