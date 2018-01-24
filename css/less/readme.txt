$ lessc styles.less

// 编译
$ lessc styles.less > styles.css

// 编译压缩
$ lessc --clean-css styles.less > styles.min.css



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
	
	.e:extend(.f, .g) {}

扩展嵌套选择器
	.some-class:extend(.bucket tr) {}

// 不能匹配的 ------------------
	.class:extend(:nth-child(n+3)) {}

	*.class {
		color: blue;
	}
	
	.a.class,
	.class.a,
	.class > .a {
		color: blue;
	}
	
	以上.class是不能被继承的
	
	[title=identifier]{
		color: blue;
	}
	link:hover:visited {}
	:nth-child(1n+3) {}
	

Extend "all"------------------
	.a.b.test{}
	.test.c{ }
	.test{
		&:hover{}
	}
	
	.replacement:extend(.test all) {}
Outputs

	.a.b.test,
	.test.c,
	.a.b.replacement,
	.replacement.c {
		color: orange;
	}
	.test:hover,
	.replacement:hover {
		color: green;
	}


Selector Interpolation with Extend
	
	// 选择器变量 不能匹配
	@variable: .bucket;
	@{variable} { 
	  color: blue;
	}
	.some-class:extend(.bucket) {}
	
	// extend with variable in target selector 不能匹配
	.some-class:extend(@variable) {}


减少CSS大小
	.my-inline-block() {)
	.thing1 {
		.my-inline-block
	}


// Mixins -------------------------


	.foo (@bg: #f5f5f5, @color: #900) {
	  	background: @bg;
	  	color: @color;
	}
	.important {
  		.foo() !important;
  	}
Outputs
	.unimportant {
		background: #f5f5f5;
		color: #900;
	}
	.important {
	  	background: #f5f5f5 !important;
	  	color: #900 !important;
	}



// Parametric Mixins ---------------------------

.mixin(@s; @color) { ... }




// Mixins as Functions ---------------------------

	.mixin() {
		@width:  100%;
		@height: 200px;
	}
	
	.caller {
		.mixin();
		width:  @width;
		height: @height;
	}


// Passing Rulesets to Mixins ---------------------------

	@detached-ruleset: { background: red; };
	
	.top {
	    @detached-ruleset(); 
	}
Outputs
	.top {
		background: red;
	}

	@my-ruleset: {}
	@media (orientation:portrait) {
    	@my-ruleset();
	}


// Mixin Guards ---------------------------
	.mixin (@a) when (lightness(@a) >= 50%) {
		background-color: black;
	}
	.mixin (@a) when (lightness(@a) < 50%) {
		background-color: white;
	}
	.mixin (@a) {
		color: @a;
	}
	
	use:
	.class1 { .mixin(#ddd) }
	.class2 { .mixin(#555) }

// >, >=, =, =<, <
	
	@media: mobile;
	.mixin (@a) when (@media = mobile) { ... }
	.mixin (@a) when (@media = desktop) { ... }
	
	.max (@a; @b) when (@a > @b) { width: @a }
	.max (@a; @b) when (@a < @b) { width: @b }


// Type Checking Functions ---------------------------
	.mixin (@a; @b: 0) when (isnumber(@b)) { ... }
	
	iscolor
	isnumber
	isstring
	iskeyword
	isurl

	ispixel
	ispercentage
	isem
	isunit


// Loops ---------------------------
	.loop(@counter) when (@counter > 0) {
		width: (10px * @counter); // code for each iteration
		.loop((@counter - 1));    // next iteration
	}
	
	div {
		.loop(5); // launch the loop
	}


Output:

	div {
		width: 10px;
		width: 20px;
		width: 30px;
		width: 40px;
		width: 50px;
	}


	

	.generate-columns(4);
	
	.generate-columns(@n, @i: 1) when (@i =< @n) {
		.column-@{i} {
			width: (@i * 100% / @n);
		}
		.generate-columns(@n, (@i + 1));
	}

Output:
	
	.column-1 {
		width: 25%;
	}
	.column-2 {
		width: 50%;
	}
	.column-3 {
		width: 75%;
	}
	.column-4 {
		width: 100%;
	}


// Parent Selectors ---------------------------
	& 会替换成 .button
	.button {
		&-ok {
			background-image: url("ok.png");
		}
		&-cancel {
			background-image: url("cancel.png");
		}
		
		&-custom {
			background-image: url("custom.png");
		}
	}
	
	
	
	
output:

.button-ok {
	background-image: url("ok.png");
}
.button-cancel {
	background-image: url("cancel.png");
}
.button-custom {
	background-image: url("custom.png");
}













