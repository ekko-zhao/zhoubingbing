
<template>
	<div><p @click="fn">foo</p>
		<div>
			<router-view></router-view>
		</div>
	</div>
	
</template>


<script>
	module.exports={
		methods:{
			fn:function(){
				this.$router.push('/bar')
				//router.push({ name: 'user', params: { userId: 123 }})
				//router.push({ path: 'register', query: { plan: 'private' }})
				console.log(this.$router);
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