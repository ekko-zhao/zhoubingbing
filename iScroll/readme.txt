
iScroll的版本---------------------------------------------------------------
针对iScroll的优化。为了达到更高的性能，iScroll分为了多个版本。你可以选择最适合你的版本。
目前我们有以下版本：
	iscroll.js，这个版本是常规应用的脚本。它包含大多数常用的功能，有很高的性能和很小的体积。
	iscroll-lite.js，精简版本。它不支持快速跳跃，滚动条，鼠标滚轮，快捷键绑定。但如果你所需要的是滚动(特别是在移动平台) iScroll 精简版 是又小又快的解决方案。
	iscroll-probe.js，探查当前滚动位置是一个要求很高的任务,这就是为什么我决定建立一个专门的版本。如果你需要知道滚动位置在任何给定的时间,这是iScroll给你的。（我正在做更多的测试,这可能最终在常规iscroll.js脚本，请留意）。
	iscroll-zoom.js，在标准滚动功能上增加缩放功能。
	iscroll-infinite.js，可以做无限缓存的滚动。处理很长的列表的元素为移动设备并非易事。 iScroll infinite版本使用缓存机制,允许你滚动一个潜在的无限数量的元素。
	
	
初始化---------------------------------------------------------------
<script type="text/javascript" src="iscroll.js"></script>

myScroll = new IScroll('#wrapper');
//or
myScroll = new IScroll( document.getElementById('wrapper') );



配置iScroll---------------------------------------------------------------

var myScroll = new IScroll('#wrapper', {
	mouseWheel: true, //开启鼠标滚轮
	scrollbars: true //滚动条支持
});

	在初始化后你可以通过options对象访问标准化值。
	console.dir(myScroll.options);
	
	上面的语句将返回myScroll实例的配置信息。所谓的标准化意味着如果你设置useTransform:true，但是浏览器并不支持CSS transforms，那么useTransform属性值将为false。

	
理解核心---------------------------------------------------------------

	options.useTransform //默认值：true
		:false 引擎将使用top/left属性来进行滚动。
		
		
基本功能---------------------------------------------------------------
	option: {
		bounce // default: true 当滚动器到达容器边界时他将执行一个小反弹动画。在老的或者性能低的设备上禁用反弹对实现平滑的滚动有帮助。
		click  // default: false iScroll禁止了一些默认的浏览器行为，比如鼠标的点击。如果你想你的应用程序响应click事件，那么该设置次属性为true。
		disableMouse // default: false  你可以把你不需要的事件禁用
		disablePointer // default: false  你可以把你不需要的事件禁用
		disableTouch // default: false  你可以把你不需要的事件禁用
		/*
			下面的例子是禁用鼠标和指针事件：
			disableMouse: true,
		*/
		eventPassthrough  // 有些时候你想保留原生纵向的滚动条但想为横向滚动条增加iScroll功能, 设置这个属性为true并且iScroll区域只将影响横向滚动，纵向滚动将滚动整个页面。
			注意，这个值也可以设置为'horizontal'，其作用和上面介绍的相反（横向滚动条保持原生，纵向滚动条使用iScroll）。
		freeScroll // false  此属性针对于两个两个纬度的滚动条（当你需要横向和纵向滚动条） 横向和纵向可以同时响应
		keyBindings //  false  此属性为true时激活键盘（和远程控制）绑定。请参考下面的Key bindings内容。
		
		invertWheelDirection //  false 当鼠标滚轮支持激活后，在有些情况下需要反转滚动的方向。（比如，鼠标滚轮向下滚动条向上，反之亦然）。
		momentum // true 在用户快速触摸屏幕时，你可以开/关势能动画。关闭此功能将大幅度提升性能。
		mouseWheel //false  侦听鼠标滚轮事件。
		preventDefault // true 当事件触发时师傅执行preventDefault()。此属性应该设置为true，除非你真的知道你需要怎么做。
		
		options.scrollX、options.scrollY //默认情况下只有纵向滚动条可以使用。如果你需要使用横向滚动条，需要将scrollX 属性值设置为 true。
		
		options.startX、options.startY // 默认情况下iScroll从0, 0 (top left)位置开始，通过此属性可以让滚动条从不同的位置开始滚动。

		options.tap // 设置此属性为true，当滚动区域被点击或者触摸但并没有滚动时，可以让iScroll抛出一个自定义的tap事件
		
		
		//onScroll event
		probeType: 1  // 对性能没有影响。 滚动事件只有当滚动器不忙于做它的东西时被触发。
		probeType: 2  // 总是执行滚动事件，除了动量和反弹之外。 这类似于本机onScroll事件。
		probeType: 3  // 以像素精度发出滚动事件
		
	}
	
	
滚动条---------------------------------------------------------------


	option:{
		scrollbars // false 激活滚动条只需要做一件事情
		fadeScrollbars // false 不想使用滚动条淡入淡出方式时，需要设置此属性为false以便节省资源。
		interactiveScrollbars //false 此属性可以让滚动条能拖动，用户可以与之交互。
		
		resizeScrollbars // true 滚动条尺寸改变基于容器和滚动区域的宽/高之间的比例。此属性设置为false让滚动条固定大小。
		shrinkScrollbars // false 当在滚动区域外面滚动时滚动条是否可以收缩到较小的尺寸。
			有效的值为：'clip' 和 'scale'。
			'clip'是移动指示器到它容器的外面，效果就是滚动条收缩起来，简单的移动到屏幕以外的区域。属性设置为此值后将大大的提升整个iScroll的性能。
			值'scale'关闭属性useTransition，之后所有的动画效果将使用requestAnimationFrame实现。指示器实际上有各种尺寸，并且最终的效果最好。
	
	}




对齐---------------------------------------------------------------

options.snap

最简单的对齐配置如下 , 这将按照页面容器的大小自动分割滚动条。
	var myScroll = new IScroll('#wrapper', {
	    snap: true
	});
	
snap属性也可以传递字符类型类型的值。这个值是滚动条将要对齐到的元素的选择器。比如下面：
var myScroll = new IScroll('#wrapper', {
    snap: 'li'
});


goToPage(x, y, time, easing)
x 和 y呈现你想滚动到横向轴或者纵向轴的页面数。如果你需要在单个唯独上使用滚动条，只需要为你不需要的轴向传递0值。
myScroll.goToPage(10, 0, 1000);


缩放---------------------------------------------------------------

为了使用缩放功能，你最好使用iscroll-zoom.js脚本。
	
	
options.zoom // false 此属性设置为true启用缩放功能。

options.zoomMax //4 最大缩放级数。

options.zoomMin //1  最小缩放级数。

options.zoomStart //1  初始的缩放级数

options.wheelAction // undefined 鼠标滚轮的动作可以设置为'zoom'，这样在滚动滚轮时缩放操作会代替原来的滚动操作。
	
	
	
	
刷新---------------------------------------------------------------
myScroll.refresh();

销毁---------------------------------------------------------------
myScroll.destroy();
	


高级选项---------------------------------------------------------------

options.bounceEasing ／／ circular 有效的值为：'quadratic', 'circular', 'back', 'bounce', 'elastic'.



options.bounceTime //  600 弹跳动画的持续时间，使用毫秒级。

options.deceleration // 0.0006 这个值可以改变改变动画的势头持续时间/速度。更高的数字使动画更短。你可以从0.01开始去体验，这个值和基本的值比较，基本上没有动能。

mouseWheelSpeed // 20 设置鼠标滚轮滚动的速度值。

options.resizePolling  // 60当你改变窗口的大小iScroll重新计算元素的位置和尺寸。这可能是一个相当艰巨的任务。轮询设置为60毫秒。通过降低这个值你获得更好的视觉效果，但会占用更多的CPU资源。默认值是一个很好的折中。



自定义事件---------------------------------------------------------------
myScroll:{
	beforeScrollStart 一旦用户触摸屏幕，但在滚动开始之前就执行。
	scrollCancel 滚动启动但没有发生。
	scrollStart
	scroll   the content is scrolling. Available only in scroll-probe.js
	scrollEnd
	zoomStart
	zoomEnd
	
}



myScroll = new IScroll('#wrapper');
myScroll.on('scrollEnd', function () {
    if ( this.x < -1000 ) {
        // do something
    }
});


Key bindings---------------
keyBindings: {
    pageUp: 33,
    pageDown: 34,
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40
}

















	
	