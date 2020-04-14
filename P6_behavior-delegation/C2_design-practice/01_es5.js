
/**
 * 1. ES5 - 面向对象
 */

// 定义父类构造器
function Widget(width,height) { 
  this.width = width || 50; 
  this.height = height || 50; 
  this.$elem = null;
}

// 父类原型添加基础方法
Widget.prototype.render = function($where){ 
  if (this.$elem) {
      this.$elem.css( {
          width: this.width + "px", 
          height: this.height + "px"
      } ).appendTo( $where );
  }
};

// 定义子类构造器
function Button(width,height,label) { 
  // 丑陋的 显式伪多态
  Widget.call( this, width, height ); 
  this.label = label || "Default";

  this.$elem = $( "<button>" ).text( this.label ); 
}

// 类的继承
Button.prototype = Object.create( Widget.prototype );

// 重写render(..)
Button.prototype.render = function($where) { 
  // 丑陋的 显式伪多态
  Widget.prototype.render.call( this, $where );
  this.$elem.click( this.onClick.bind( this ) ); 
};

// 子类特殊方法
Button.prototype.onClick = function(evt) {
  console.log( "Button '" + this.label + "' clicked!" );
};

$( document ).ready( function(){
  var $body = $(document.body);
  // 一步完成构造+初始化
  var btn1 = new Button( 125, 30, "Hello" );
  var btn2 = new Button( 150, 40, "World" );

  btn1.render( $body );
  btn2.render( $body ); 
});
