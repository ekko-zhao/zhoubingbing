
安装Sass和Compass
	sass基于Ruby语言开发而成，因此安装sass前需要安装Ruby。（注:mac下自带Ruby无需在安装Ruby!）
	window下安装SASS首先需要安装Ruby，先从官网下载Ruby并安装。安装过程中请注意勾选Add Ruby executables to your PATH添加到系统环境变量。如下图：
	
	/*
		// https://ruby.taobao.org/ 缺少 sass 4.0.0 
		// 建议使用默认源， 如有必要使用 taobao 源
		gem sources --remove https://rubygems.org/
		gem sources -a https://ruby.taobao.org/
		
		gem sources -l
	*/

	
//Ruby自带一个叫做RubyGems的系统，用来安装基于Ruby的软件。我们可以使用这个系统来 轻松地安装Sass和Compass。要安装最新版本的Sass和Compass，你需要输入下面的命令：
	//安装如下(如mac安装遇到权限问题需加 sudo gem install sass)
	gem install sass
	gem install compass

--scss // 以sass方式编译
--watch input.scss:output.css
--style
	--style nested
	/*编译过后样式*/
	.box {
	  width: 300px;
	  height: 400px; }
	  .box-title {
	    height: 30px;
	    line-height: 30px; }
	
	
--style expanded // 标准排版格式
--style compact	// 完全换行
--style compressed // 完全压缩

--sourcemap=none


Sass 有两种语法格式

//	Scss 所有 CSS3 语法在 SCSS 中都是通用的，同时加入 Sass 的特色功能

//  Sass 使用 “缩进” 代替 “花括号” 表示属性属于某个选择器，用 “换行” 代替 “分号” 分隔属性，
	只是与 SCSS 相比个别地方采取了不同的表达方式
	
	
// 使用 Sass --------------------------------
	npm install -g sass

	sass input.scss output.css
	sass --watch input.scss:output.css

// CSS 功能拓展 ----------------------------------------------------------------

# 属性嵌套
	.funky {
		font: {
			family: fantasy;
			size: 30em;
			weight: bold;
		}
	}

// SassScript  ----------------------------------------------------------------
	
	#{var} 插值语句将变量包裹
	

# 变量 $
	$width: 5em;
	#main {
	  width: $width;
	}
	
# 数据类型 (Data Types)
	SassScript 支持 6 种主要的数据类型：
	数字，1, 2, 13, 10px
	字符串，有引号字符串与无引号字符串，"foo", 'bar', baz
	颜色，blue, #04a3f9, rgba(255,0,0,0.5)
	布尔型，true, false
	空值，null
	数组 (list)，用空格或逗号作分隔符，1.5em 1em 0 2em, Helvetica, Arial, sans-serif
	maps, 相当于 JavaScript 的 object，(key1: value1, key2: value2)

# 字符串 (Strings)
	@mixin firefox-message($selector) {
	  body.firefox #{$selector}:before {
		content: "Hi, Firefox users!";
	  }
	}
	@include firefox-message(".header");

# 数组 
	数组中可以包含子数组，比如 1px 2px, 5px 6px 是包含 1px 2px 与 5px 6px 两个数组的数组
	(1px 2px) (5px 6px) => 1px 2px, 5px 6px
	
	
	
	如果数组中包含空数组或空值，编译时将被清除，比如 1px 2px () 3px 或 1px 2px null 3px。
	
# 运算 
	+, -, *, /, %
	关系运算 <, >, <=, >= 也可用于数字运算，相等运算 ==, != 可用于所有数据类型。

	
	除法运算 / 
	/ 在 CSS 中通常起到分隔数字的用途, 同时也赋予了 / 除法运算的功能
	
	p {
	  font: 10px/8px;             // Plain CSS, no division
	  $width: 1000px;
	  width: $width/2;            // Uses a variable, does division
	  width: round(1.5)/2;        // Uses a function, does division
	  height: (500px/2);          // Uses parentheses, does division
	  margin-left: 5px + 8px/2px; // Uses +, does division
	}

# 颜色值运算

	p {
	  color: #010203 + #040506;
	}
	计算 01 + 04 = 05 02 + 05 = 07 03 + 06 = 09，然后编译为： olor: #050709

	p {
	  color: #010203 * 2;
	}
	计算 01 * 2 = 02 02 * 2 = 04 03 * 2 = 06 ，然后编译为： color: #020406;
	
	// 需要注意的是，如果颜色值包含 alpha channel（rgba 或 hsla 两种颜色值），必须拥有相等的 alpha 值才能进行运算，因为算术运算不会作用于 alpha 值。
	p {
	  color: rgba(255, 0, 0, 0.75) + rgba(0, 255, 0, 0.75);
	}
	编译为：color: rgba(255, 255, 0, 0.75);

	IE 滤镜要求所有的颜色值包含 alpha 层，
	而且格式必须固定 #AABBCCDD，使用 ie_hex_str 函数可以很容易地将颜色转化为 IE 滤镜要求的格式。
	$translucent-red: rgba(255, 0, 0, 0.5);
	$green: #00ff00;
	div {
	  filter: progid:DXImageTransform.Microsoft.gradient(enabled='false', startColorstr='#{ie-hex-str($green)}', endColorstr='#{ie-hex-str($translucent-red)}');
	}
	编译为：filter: progid:DXImageTransform.Microsoft.gradient(enabled='false', startColorstr=#FF00FF00, endColorstr=#80FF0000);

# 字符串运算
	
	+ 可用于连接字符串
	p {
	  cursor: e + -resize;
	}
	编译为: cursor: e-resize;
	

	p:before {
	  content: "Foo " + Bar; // 引号字符串 位于 左侧，运算结果是有引号的
	  font-family: sans- + "serif"; // 引号字符串 位于 右侧，运算结果则没有引号
	}

	// 运算表达式与其他值连用时，用空格做连接符：

	p {
	  margin: 3px + 4px auto;
	}	
	编译为: margin: 7px auto;

	在有引号的文本字符串中使用 #{} 插值语句可以添加动态的值：
	$value: null;
	p:before {
	  content: "I ate #{$value} pies!";
	}

# 布尔运算 
	SassScript 支持布尔型的 and or 以及 not 运算。

# 数组运算
	数组不支持任何运算方式，只能使用 list functions 控制。
	
# 圆括号
	圆括号可以用来影响运算的顺序
	p {
	  width: 1em + (2em * 3);
	}
	 width: 7em;

# 函数
	SassScript 定义了多种函数，有些甚至可以通过普通的 CSS 语句调用
	color: hsl(0, 100%, 50%);

# & in SassScript
	和 less一样 表示选择器



# 变量定义 !default
	
	如果变量已经被赋值，不会再被重新赋值，但是如果变量还没有被赋值，则会被赋予新的值。
	变量是 null 空值时将视为未被 !default 赋值。
	
	$content: "First content";
	$content: "Second content?" !default;

	
// @-Rules 与指令 ----------------------------------------------------------------------------
	
# @import
	Sass 拓展了 @import 的功能，允许其导入 SCSS 或 Sass 文件。被导入的文件将合并编译到同一个 CSS 文件中，另外，被导入的文件中所包含的变量或者混合指令 (mixin) 都可以在导入的文件中使用。
	/* 如果需要设定其他地址，可以用 :load_paths 选项，或者在命令行中输入 --load-path 命令。 */

	但在以下情况下，@import 仅作为普通的 CSS 语句，不会导入任何 Sass 文件。
		文件拓展名是 .css；
		文件名以 http:// 开头；
		文件名是 url()；
		@import 包含 media queries。


	如果不在上述情况内，文件的拓展名是 .scss 或 .sass，则导入成功。
	@import "foo.scss";
	@import "foo";
	

	Sass 允许同时导入多个文件，例如同时导入 rounded-corners 与 text-shadow 两个文件：
	@import "rounded-corners", "text-shadow";
	
	使用 #{ } 插值语句
	$family: unquote("Droid+Sans");
	@import url("http://fonts.googleapis.com/css?family=\#{$family}");

# 嵌套 @import
	.example {
	  color: red;
	}
	#main {
	  @import "example";
	}
	编译为: #main .example { color: red; }

#@media 

	// @media 指令与 CSS 中用法一样，只是增加了一点额外的功能：允许其在 CSS 规则中嵌套。
	如果 @media 嵌套在 CSS 规则内，编译时，@media 将被编译到文件的最外层，包含嵌套的父选择器
	@media screen {
	  .sidebar {
		@media (orientation: landscape) {
		  width: 500px;
		}
	  }
	}
	编译为:
	@media screen and (orientation: landscape) {
		.sidebar {width: 500px; }
	}
	

	$media: screen;
	$feature: -webkit-min-device-pixel-ratio;
	$value: 1.5;
	@media #{$media} and ($feature: $value) {
	  .sidebar {
		width: 500px;
	  }
	}

# @extend

	// 和 less 相同
	.error {
	  border: 1px #f00;
	  background-color: #fdd;
	}
	.seriousError {
	  @extend .error;
	  border-width: 3px;
	}

	// 和 less 相同
	.error {
	  border: 1px #f00;
	  background-color: #fdd;
	}
	.error.intrusion {
	  background-image: url("/image/hacked.png");
	}
	.seriousError {
	  @extend .error;
	  border-width: 3px;
	}
	编译为:
	.error, .seriousError {
	  border: 1px #f00;
	  background-color: #fdd; }

	.error.intrusion, .seriousError.intrusion {
	  background-image: url("/image/hacked.png"); }

	.seriousError {
	  border-width: 3px; }


# 延伸复杂的选择器

	.hoverlink {
	  @extend a:hover;
	}
	.comment a.user:hover {
	  font-weight: bold;
	}
	
	// 编译为:
	.comment a.user:hover, .comment .user.hoverlink {
		font-weight: bold;
	}

# @extend-Only 选择器 
	// Sass 引入了“占位符选择器” (placeholder selectors)，看起来很像普通的 id 或 class 选择器，只是 # 或 . 被替换成了 %。
	// 可以像 class 或者 id 选择器那样使用，当它们单独使用时，不会被编译到 CSS 文件中。
	
	#context a%extreme {
	  color: blue;
	  font-weight: bold;
	  font-size: 2em;
	}
	
	.notice {
	  @extend %extreme;
	}
	// 编译为:
	#context a.notice {
	  color: blue;
	  font-weight: bold;
	  font-size: 2em;
	}
	
# !optional
	比如，这样写 a.important {@extend .notice}，当没有 .notice 选择器时，将会报错，
	只有 h1.notice 包含 .notice 时也会报错，因为 h1 与 a 冲突，会生成新的选择器。

	如果要求 @extend 不生成新选择器，可以通过 !optional 声明达到这个目的，例如：
	a.important {
	  @extend .notice !optional;
	}

# @at-root
	.parent {
	  ...
	  @at-root .child { ... }
	}
	// 编译为:
	.parent { ... }
	.child { ... }

# @at-root (without: ...) and @at-root (with: ...)
	@media print {
	  .page {
	    width: 8in;
	    @at-root (without: media) {
	      color: red;
	    }
	  }
	 }
	// 编译为:
	@media print {
		.page {
			width: 8in;
		}
	}
	.page {
	  color: red;
	}


# @warn
	@mixin adjust-location($x, $y) {
	  @if unitless($x) {
	    @warn "Assuming #{$x} to be in pixels";
	    $x: 1px * $x;
	  }
	  @if unitless($y) {
	    @warn "Assuming #{$y} to be in pixels";
	    $y: 1px * $y;
	  }
	  position: relative; left: $x; top: $y;
	}


# @error
	@mixin adjust-location($x, $y) {
	  @if unitless($x) {
	    @error "$x may not be unitless, was #{$x}.";
	  }
	  @if unitless($y) {
	    @error "$y may not be unitless, was #{$y}.";
	  }
	  position: relative; left: $x; top: $y;
	}

// 控制指令 -----------------------------------------------------------------------------------------------

# @if
	// 当 @if 的表达式返回值不是 false 或者 null 时，条件成立，输出 {} 内的代码：
	p {
	  @if 1 + 1 == 2 { border: 1px solid; }
	  @if 5 < 3 { border: 2px dotted; }
	  @if null  { border: 3px double; }
	}
	
	//  @if 声明后面可以跟多个 @else if 声明，或者一个 @else 声明。如果 @if 声明失败，Sass 将逐条执行 @else if 声明，如果全部失败
	$type: monster;
	p {
	  @if $type == ocean {
	    color: blue;
	  } @else if $type == matador {
	    color: red;
	  } @else if $type == monster {
	    color: green;
	  } @else {
	    color: black;
	  }
	}


# @for
	@for $var from <start> through <end>，或者 @for $var from <start> to <end>，
	区别在于 through 与 to 的含义：当使用 through 时，条件范围包含 <start> 与 <end> 的值，
	而使用 to 时条件范围只包含 <start> 的值不包含 <end> 的值。
	
	@for $var from 1 through 3 {
		.item-#{$var} { width: 2em * $var; }
	}
	编译为:
	.item-1 {
	  width: 2em; }
	.item-2 {
	  width: 4em; }
	.item-3 {
	width: 6em; }




# @each
	@each $animal in puma, sea-slug, egret, salamander {
	  .#{$animal}-icon {
	    background-image: url('/images/#{$animal}.png');
	  }
	}
	
# 多个参数

	@each $animal, $color, $cursor in (puma, black, default), (sea-slug, blue, pointer), (egret, white, move) {
	  .#{$animal}-icon {
	    background-image: url('/images/#{$animal}.png');
	    border: 2px solid $color;
	    cursor: $cursor;
	  }
	}
	  编译为:
	  .puma-icon {
		  background-image: url('/images/puma.png');
		  border: 2px solid black;
		  cursor: default; }
		...
		...
		
	@each $header, $size in (h1: 2em, h2: 1.5em, h3: 1.2em) {
	  #{$header} {
	    font-size: $size;
	  }
	}

# @while

	$i: 6;
		@while $i > 0 {
		  .item-#{$i} { width: 2em * $i; }
		  $i: $i - 2;
	}

	.item-6 {
	  width: 12em; }
	
	.item-4 {
	  width: 8em; }
	
	.item-2 {
	width: 4em; }


// 混合指令 --------------------------------------------------------------
	混合指令的用法是在 @mixin 后添加名称与样式
	@mixin large-text {
	  font: {
	    family: Arial;
	    size: 20px;
	    weight: bold;
	  }
	  color: #ff0000;
	}


	混合也需要包含选择器和属性，甚至可以用 & 引用父选择器：
	@mixin clearfix {
	  display: inline-block;
	  &:after {
	    content: ".";
	    display: block;
	    height: 0;
	    clear: both;
	    visibility: hidden;
	  }
	  * html & { height: 1px }
	}

# 引用混合样式 @include

	@mixin silly-links {
	  	a {
	    	color: blue;
	    	background-color: red;
		}	
	}
	
	使用 @include 指令引用混合样式，格式是在其后添加混合名称，以及需要的参数（可选）：
	.page-title {
		@include silly-links;
	  	padding: 4px;
	  	margin-top: 10px;
	}
	
	也可以在最外层引用混合样式，不会直接定义属性，也不可以使用父选择器。
	@include silly-links;

# 参数
	@mixin sexy-border($color, $width) {
	  border: {
	    color: $color;
	    width: $width;
	    style: dashed;
	  }
	}
	p { @include sexy-border(blue, 1in); }
	
	// 混合指令也可以使用给变量赋值的方法给参数设定默认值，然后，当这个指令被引用的时候，如果没有给参数赋值，则自动使用默认值：
	@mixin sexy-border($color, $width: 1in) {
	  border: {
	    color: $color;
	    width: $width;
	    style: dashed;
	  }
	}
	p { @include sexy-border(blue); }
	h1 { @include sexy-border(blue, 2in); }


	混合指令也可以使用关键词参数，上面的例子也可以写成：
	p { @include sexy-border($color: blue); }
	h1 { @include sexy-border($color: blue, $width: 2in); }

# 参数变量
	@mixin box-shadow($shadows...) {
	  	-moz-box-shadow: $shadows;
	  	-webkit-box-shadow: $shadows;
	  	box-shadow: $shadows;
	}
	.shadows {
	  	@include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);
	}

	参数变量也可以用在引用混合指令的时候 (@include)，与平时用法一样，将一串值列表中的值逐条作为参数引用
	@mixin colors($text, $background, $border) {
	  	color: $text;
	  	background-color: $background;
	  	border-color: $border;
	}
	$values: #ff0000, #00ff00, #0000ff;
	.primary {
	  	@include colors($values...);
	}

# 向混合样式中导入内容 (Passing Content Blocks to a Mixin)

	@mixin apply-to-ie6-only {
	  * html {
	    @content;
	  }
	}
	@include apply-to-ie6-only {
	  #logo {
	    background-image: url(/logo.gif);
	  }
	}

	编译为：
	* html #logo {
	  background-image: url(/logo.gif);
	}


// 函数指令 --------------------------------------------------------------------------------

	Sass 支持自定义函数，并能在任何属性值或 Sass script 中使用：
	$grid-width: 40px;
	$gutter-width: 10px;
	
	@function grid-width($n) {
	  @return $n * $grid-width + ($n - 1) * $gutter-width;
	}
	
	#sidebar { width: grid-width(5); }
	
	编译为:
	
	#sidebar {
		width: 240px;
	}














