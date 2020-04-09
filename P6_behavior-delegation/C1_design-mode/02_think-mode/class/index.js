function Foo() { 

}

Foo.prototype.identify = function () { 

}

function Bar(name) { 
  this.name = name;
}

Bar.prototype = Object.create(Foo.prototype);

Bar.prototype.speak = function () { 

}

var bar = new Bar('bar');
bar.speak();
bar.speak();