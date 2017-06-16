//webpack.config.js--------------------------------------------
module.exports = {
	module: {
		loaders: [
			{ test: /\.vue$/, loader: 'vue-loader'}
		]
	}
	resolve: {
		alias: {
            'vue': 'vue/dist/vue.min.js',
			'vueRouter' :'vue-router/dist/vue-router.min.js',
			'vueResource' :'vue-resource/dist/vue-resource.min.js'
        }
	}
}

#Vue 实例---------------------------------------------------------------

.在实例化 Vue 时，需要传入一个选项对象，它可以包含数据、模板、挂载元素、方法、生命周期钩子等选项
var vm = new Vue({
	data: {},
	
	// 选项 / 数据
	computed:{
	
		
	},
	
	// 选项 / 资源
	filters: {},  // 过滤器
	
	//钩子函数
	created: function () {
	
	}
})


//Vue 实例暴露了一些有用的实例属性与方法。这些属性与方法都有前缀 $，以便与代理的 data 属性区分。

var data = { a: 1 }
var vm = new Vue({
	el: '#example',
	data: data
})

vm.$data === data // -> true
vm.$el === document.getElementById('example') // -> true

#注意，不要在实例属性或者回调函数中使用箭头函数,因为箭头函数绑定父上下文，所以 this 不会像预想的一样是 Vue 实例，而是this.myMethod 未被定义。
vm.$watch('a', function (newVal, oldVal) {
	// 这个回调将在 `vm.a`  改变后调用
})




全局 API---------------------------------------------------------------
＃Vue.filter
示例：
Vue.filter('my-filter', function (value) {
	// 返回处理后的值
})
用法：{{ message | filterA | filterB }}
	过滤器是 JavaScript 函数，因此可以接受参数：{{ message | filterA('arg1', arg2) }}
	这里，字符串 'arg1' 将传给过滤器作为第二个参数， arg2 表达式的值将被求值然后传给过滤器作为第三个参数。




选项---------------------------------------------------------------


选项 / 数据---------------

#computed
#类型: { [key: string]: Function | { get: Function, set: Function } }
详细: 计算属性将被混入到 Vue 实例中。所有 getter 和 setter 的 this 上下文自动地绑定为 Vue 实例。
	计算属性的结果会被缓存，除非依赖的响应式属性变化才会重新计算。
	
	注意，不应该使用箭头函数来定义计算属性函数 (例如 aDouble: () => this.a * 2)。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.a 将是 undefined。
	
示例:
var vm = new Vue({
	data: { a: 1 },
	computed:{
		aDouble: function () {
			return this.a * 2
		},
		aPlus: {
			get: function () {
				return this.a + 1
			},
			set: function (v) {
				this.a = v - 1
			}
		}	
	}
})
vm.aPlus   // -> 2
vm.aPlus = 3
vm.a       // -> 2
vm.aDouble // -> 4



选项 / 资源---------------

#filters 过滤器
示例：
filters: {
	capitalize: function (value) {
		if (!value) return '';
		value = value.toString();
		return value.charAt(0).toUpperCase() + value.slice(1);
	}
}









选项 / 生命周期钩子---------------

.所有的生命周期钩子自动绑定 this 上下文到实例中，因此你可以访问数据，对属性和方法进行运算。这意味着 你不能使用箭头函数来定义一个生命周期方法 (例如 created: () => this.fetchTodos())。这是因为箭头函数绑定了父上下文，因此 this 与你期待的 Vue 实例不同， this.fetchTodos 的行为未定义。
.钩子函数在服务器端渲染期间不被调用。

#beforeCreate
详细：在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用

#created
详细：实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。

#beforeMount
详细：在挂载开始之前被调用：相关的 render 函数首次被调用。 

#mounted
详细：el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。

#beforeUpdate
详细： 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
	你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。

#updated
详细：由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
	当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。

#activated
详细：keep-alive 组件激活时调用。

#deactivated
详细： keep-alive 组件停用时调用。

	
#beforeDestroy
详细：实例销毁之前调用。在这一步，实例仍然完全可用。

#destroyed
详细：Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。













//指令------------------------------------------------------------------

对于所有的数据绑定， Vue.js 都提供了完全的 JavaScript 表达式支持。
{{ number + 1 }}
{{ ok ? 'YES' : 'NO' }}
{{ message.split('').reverse().join('') }}
<div v-bind:id="'list-' + id"></div>


#v-text
类型： string
示例： <span v-text="msg"></span>  or   <span>{{msg}}</span>


v-html
类型： string
更新元素的 innerHTML 。注意：内容按普通 HTML 插入 - 不会作为 Vue 模板进行编译 。
#在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。只在可信内容上使用 v-html，永不用在用户提交的内容上。

示例： <div v-html="html"></div>


#v-show
类型： any
用法： 根据表达式之真假值，切换元素的 display CSS 属性。


#v-if
类型： any
用法：根据表达式的值的真假条件渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建。如果元素是 <template> ，将提出它的内容作为条件块。
	 

#v-else
限制： 前一兄弟元素必须有 v-if 或 v-else-if。
用法：
<div v-if="Math.random() > 0.5">
	Now you see me
</div>
<div v-else>
	 Now you don't
</div>


#v-else-if
类型: any
限制: 前一兄弟元素必须有 v-if 或 v-else-if。
用法:
<div v-if="type === 'A'">
	A
</div>
<div v-else-if="type === 'B'">
	B
</div>
<div v-else>
	Not A/B
</div>


#v-for
类型： Array | Object | number | string
用法：基于源数据多次渲染元素或模板块。 此指令之值，必须使用特定语法 alias in expression ，为当前遍历的元素提供别名：
<div v-for="item in items">
	{{ item.text }}
</div>

另外也可以为数组索引指定别名（或者用于对象的键）：
<div v-for="(item, index) in items"></div>
<div v-for="(val, key) in object"></div>
<div v-for="(val, key, index) in object"></div>

v-for 默认行为试着不改变整体，而是替换元素。迫使其重新排序的元素,您需要提供一个 key 的特殊属性:
<div v-for="item in items" :key="item.id">
	{{ item.text }}
</div>


#v-on
缩写： @
类型： Function | Inline Statement  // handle or handle('ok', $event)
参数： event (required)

修饰符:
	.stop - 调用 event.stopPropagation()
	.prevent - 调用 event.preventDefault()
	.capture - 添加事件侦听器时使用 capture 模式
	.self - 只当事件是从侦听器绑定的元素本身触发时才触发回调
	.{keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调
	.native - 监听组件根元素的原生事件
	.once - 只触发一次回调
	.left - (2.2.0) 只当点击鼠标左键时触发
	.right - (2.2.0) 只当点击鼠标右键时触发
	.middle - (2.2.0) 只当点击鼠标中键时触发
	.passive - (2.3.0) 以 { passive: true } 模式添加侦听器

用法：绑定事件监听器。事件类型由参数指定。表达式可以是一个方法的名字或一个内联语句，如果没有修饰符也可以省略。
用在普通元素上时，只能监听 原生 DOM 事件。用在自定义元素组件上时，也可以监听子组件触发的自定义事件。
在监听原生 DOM 事件时，方法以事件为唯一的参数。如果使用内联语句，语句可以访问一个 $event 属性： v-on:click="handle('ok', $event)"
示例：

<!-- 方法处理器 -->
<button v-on:click="doThis"></button>

<!-- 内联语句 -->
<button v-on:click="doThat('hello', $event)"></button>

<!-- 缩写 -->
<button @click="doThis"></button>

<!-- 停止冒泡 -->
<button @click.stop="doThis"></button>


<!-- 阻止默认行为 -->
<button @click.prevent="doThis"></button>

<!-- 键修饰符，键别名 -->
<input @keyup.enter="onEnter">

<!-- 键修饰符，键代码 -->
<input @keyup.13="onEnter">


<!-- 点击回调只会触发一次 -->
<button v-on:click.once="doThis"></button>


#v-bind
缩写： :
类型： any (with argument) | Object (without argument)
参数： attrOrProp (optional)
修饰符：
	.prop - 被用于绑定 DOM 属性
	.camel - (2.1.0+) transform the kebab-case attribute name into camelCase. 
	.sync (2.3.0+) 语法糖，会扩展成一个更新父组件绑定值的 v-on 侦听器。

用法：动态地绑定一个或多个特性，或一个组件 prop 到表达式。
	在绑定 class 或 style 特性时，支持其它类型的值，如数组或对象。可以通过下面的教程链接查看详情。
	在绑定 prop 时，prop 必须在子组件中声明。可以用修饰符指定不同的绑定类型。
	没有参数时，可以绑定到一个包含键值对的对象。注意此时 class 和 style 绑定不支持数组和对象。
	
示例：
.这对布尔值的属性也有效 —— 如果条件被求值为 false 的话该属性会被移除：
<button v-bind:disabled="someDynamicCondition">Button</button>

<!-- 绑定一个属性 -->
<img v-bind:src="imageSrc">

<!-- 缩写 -->
<img :src="imageSrc">

<!-- with inline string concatenation -->
<img :src="'/path/to/images/' + fileName">

<!-- class 绑定 -->
<div :class="{ red: isRed }"></div>
<div :class="[classA, classB]"></div>
<div :class="[classA, { classB: isB, classC: isC }]">

<!-- style 绑定 -->
<div :style="{ fontSize: size + 'px' }"></div>
<div :style="[styleObjectA, styleObjectB]"></div>

<!-- 绑定一个有属性的对象 -->
<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>

<!-- 通过 prop 修饰符绑定 DOM 属性 -->
<div v-bind:text-content.prop="text"></div>

<!-- prop 绑定. “prop” 必须在 my-component 中声明。 -->
<my-component :prop="someThing"></my-component>

.camel 修饰符允许在使用 DOM 模板时将 v-bind 属性名称驼峰化，例如 SVG 的 viewBox 属性：
<svg :view-box.camel="viewBox"></svg>






#v-model
类型： 随表单控件类型不同而不同。
限制：
	.<input>
	.<select>
	.<textarea>
	.components
	
修饰符：
.lazy - 取代 input 监听 change 事件 // 在默认情况下， v-model 在 input 事件中同步输入框的值与数据 (除了 上述 IME 部分)，但你可以添加一个修饰符 lazy ，从而转变为在 change 事件中同步
	.number - 输入字符串转为数字
	.trim - 输入首尾空格过滤

用法： 在表单控件或者组件上创建双向绑定。细节请看下面链接的教程。

#v-pre
不需要表达式
用法：跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。
示例：<span v-pre>{{ this will not be compiled }}</span>

#v-cloak
不需要表达式

用法：这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。
示例：
//style
[v-cloak] {
	display: none;
}

//不会显示，直到编译结束。
<div v-cloak>
	{{ message }}
</div>



#v-once
不需要表达式
详细：只渲染元素和组件一次。随后的重新渲染,元素/组件及其所有的子节点将被视为静态内容并跳过。
	
只渲染元素和组件一次。随后的重新渲染,元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能
<!-- 单个元素 -->
<span v-once>This will never change: {{msg}}</span>

<!-- 有子元素 -->
<div v-once>
	<h1>comment</h1>
	<p>{{msg}}</p>
</div>

<!-- 组件 -->
<my-component v-once :comment="msg"></my-component>

<!-- v-for 指令-->
<ul>
	<li v-for="i in list" v-once>{{i}}</li>
</ul>
























