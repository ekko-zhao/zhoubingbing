
<template>
	<div><p @click="fn">foo<img src="../../static/images/img2.png"></p>
		<div>
			<router-view></router-view>
		</div>
	</div>
	
</template>

<style>
	p{ color:yellow}
</style>

<script>
	module.exports={
		methods:{
			fn:function(){
				//this.$router.push('/bar');
				
				
				//router.push({ name: 'user', params: { userId: 123 }})
				//router.push({ path: 'register', query: { plan: 'private' }})
				
			}
		},
		beforeRouteEnter (to, from, next) {
			
			//var a = require('jquery');
			next();
			// 不！能！获取组件实例 `this`
		},
		beforeRouteUpdate (to, from, next) {
		  
			// 在当前路由改变，但是该组件被复用时调用
		},
		beforeRouteLeave (to, from, next) {
			
			
			next()
		}
	}
</script>