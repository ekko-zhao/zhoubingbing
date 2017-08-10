$ lessc styles.less

// 编译
$ lessc styles.less styles.css

// 编译压缩
$ lessc --clean-css styles.less styles.min.css



// 语言特性 -----------------------------------------------------------------------

Variable---------------------------------------

@color:        #428bca; // sea blue
@my-selector: banner;
@variable: "../../src/themes";
@images: "../img";
@property: color;

a {
	color: @color;
}

在选择器中使用
	.@{my-selector} { }
	
URLs
	body {
		color: #444;
		background: url("@{images}/white-sand.png");
	}

Import Statements
	@import "@{variable}/tidal-wave.less";


Properties

	background-@{property}: #999;


Variable Names
	@fnord:  "I am fnord.";
	@var:    "fnord";
	content: @@var;
	
	content: "I am fnord.";

延迟加载
// 如果在使用变量之前 没有定义，则会向后查找


.lazy-eval {
  width: @var;
}
@a: 9%;


Default Variables
	// library.less
	@base-color: green;
	@dark-color: darken(@base-color, 10%);
	
	
	// use of library
	@import "library.less";
	// 这里可以重新设置 @base-color
	@base-color: red;


// Extend ---------------------------------------------------------

nav ul {
  &:extend(.inline);
  background: blue;
}
.inline {
  color: red;
}

Outputs
	nav ul {
	  background: blue;
	}
	.inline,
	nav ul {
	  color: red;
	}

继承语法
.a:extend(.b) {}
// or
.a {
  &:extend(.b);
}












































































































