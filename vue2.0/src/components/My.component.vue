

<script>
module.exports = {
	//functional: true,
	
	data: function(){
		return {
			mg: this.message,
			name: 'bingbing'
		}
	},
	directives:{
		focus: {
			inserted: function (el) {
				//console.log(el)
				// 聚焦元素
				el.focus()
			 }
		}
	},
	render: function(createElement , context){
		var vm = this;
		var s =  createElement('p','this is p, ')
		
		
		var input = createElement('input', {
			domProps: {
			  value: self.value
			},
			on: {
			  input: function (event) {
				self.value = event.target.value;
				vm.data.mg = self.value
			  }
			},
			ref: 'myInput',
			directives: [
				{
					name: 'focus',
					value: '2',
					  expression: '1 + 1',
					  arg: 'foo',
					  modifiers: {
						bar: true
					  }
					
					
				}
			]
		  })
		
		
		//console.log(vm.$refs.myInput)
		
		var n = 1;
		
		
		return createElement('div', {
			'class': {
				foo: true,
				bar: false
			},
			
			style: {
				color: 'red',
    			fontSize: '14px'
			},
			attrs: {
				id:'foo'
			},
			props: {
				myProp: 'bar'
			},
			
			
			
			// DOM 属性
			domProps: {
				 //innerHTML: 'baz' 
			},
			on: {
				click: function(){
					
					//vm.props.message = 23
					
				}
			},
			nativeOn: {
				//click: this.nativeClickHandler
			},
			
			/*
			
			scopedSlots: {
				//default: props => h('span', props.text)
			},
			
			// 如果组件是其他组件的子组件，需为slot指定名称
			slot: 'name-of-slot',
			
			// 其他特殊顶层属性
			key: 'myKey',
			ref: 'myRef'
			
			*/
		}, [ s, input])
	},
	props:{
		message:[String]
	}
	
}

</script>