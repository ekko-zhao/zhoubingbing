
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











































































































