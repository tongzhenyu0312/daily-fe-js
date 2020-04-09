var Foo = {
  identify() { 

  }
}
var Bar = Object.create(Foo);
Bar.init = function (name) { 
  this.name = name;
}

Bar.speak = function () { 

}

var bar = Object.create(Bar);

bar.init('bar');
bar.speak();
bar.identify();



