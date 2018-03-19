
# 文档类型申明 不区分大小写
	<!DOCTYPE html>

# html 部分，html包含 <head>和<body> 俩部分
	<html lang="en">
		<head>
			<meta>
			
		</head>
		<body></body>
	</html>
	
	
# head 部分
	<meta charset="UTF-8">
	<meta name="format-detection" content="telephone=no, email=no" />
	<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, user-scalable=yes">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
		/*
			X-UA-Compatible是自从IE8新加的一个设置，对于IE8以下的浏览器是不识别的。
			通过在meta中设置X-UA-Compatible的值，可以指定网页的兼容性模式设置。
			
			<meta http-equiv="X-UA-Compatible" content="IE=7">  
				#以上代码告诉IE浏览器，无论是否用DTD声明文档标准，IE8/9都会以IE7引擎来渲染页面。 
			
			<meta http-equiv="X-UA-Compatible" content="IE=8">  
				#以上代码告诉IE浏览器，IE8/9都会以IE8引擎来渲染页面。
				
			<meta http-equiv="X-UA-Compatible" content="IE=edge">  
				#以上代码告诉IE浏览器，IE8/9及以后的版本都会以最高版本IE来渲染页面。
			
			<meta http-equiv="X-UA-Compatible" content="IE=7,IE=9">  
			<meta http-equiv="X-UA-Compatible" content="IE=7,9">
			<meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
				#以上代码IE=edge告诉IE使用最新的引擎渲染网页，chrome=1则可以激活Chrome Frame.
				chrome=1不是说IE的技术增强了可以模拟Chrome浏览器，而是与谷歌开发的Google Chrome Frame(谷歌内嵌浏览器框架GCF)有关。这个插件可以让用户的IE浏览器外观不变，但用户在浏览网页时实际上使用的是Chrome的内核，并且支持Windows XP及以上系统的IE6/7/8。
				
			<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7" /> 
				使用X-UA-Compatible标签强制IE8采用低版本方式渲染。 
				//emulate 仿真
			
			<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE8" /> 
				// ie8的标准模式打开
		*/
	
	<meta name="renderer" content="webkit" />
		. 如果用户手动调节成兼容模式,那么<meta name="renderer" content="webkit" />是无法切换的，因为用户的优先级最高
		/*
			若页面需默认用极速核，增加标签：<meta name="renderer" content="webkit"> 
			若页面需默认用ie兼容内核，增加标签：<meta name="renderer" content="ie-comp"> 
			若页面需默认用ie标准内核，增加标签：<meta name="renderer" content="ie-stand">
			同时指定多个内核名称，之间以符号”|”进行分隔: <meta name="renderer" content="webkit|ie-comp|ie-stand">
		*/
	
	<!--[if IE 7]> 仅IE7可识别 <![endif]-->  
	<!--[if lte IE 7]> IE7以及IE7以下版本可识别 <![endif]-->  
	<!--[if gte IE 7]> IE7以及IE7以上版本可识别 <![endif]-->  

	
# 让 IE 低版本浏览器支持 html5 新增标签， 解决样式失效的问题
	<!--[if lte IE 8]> <script src="https://cdn.bootcss.com/html5shiv/r29/html5.min.js"></script> <![endif]-->
	
# 让 IE 低版本浏览器支持 响应式布局
	<script src="https://cdn.bootcss.com/respond.js/1.4.2/respond.min.js"></script>
	@media only screen and (min-width: 640px) and (max-width: 1024px) {
		body {
			background: yellow;
		}
	}
	
	
# 让 IE 低版本浏览器支持 CSS3伪类和属性选择器
	<script src="https://cdn.bootcss.com/selectivizr/1.0.2/selectivizr-min.js"></script>
	/*
		需要 调用 jquery 库，或者其它库
		此效果非动态的。一旦样式被应用就被固定了，DOM改变时不会映射过去的。
		如果JavaScript不可以，你可以使用<noscript>标签调用一个用以反馈提示的样式文件。
		Selectivizr要想在IE下起作用，需要是标准模式，请检查您的页面头部是否有DTD 。
	*/
	
	
	
	
	
	
	
	