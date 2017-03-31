
<template>
	<div>
		<p>tuty
			<router-link to="/foo">Go to Foo</router-link>
			<router-link to="/bar">Go to Bar</router-link>
			<!--<router-link :to="..." replace>-->
		</p>
		<p><child>asas</child></p>
		<!--<transition name="fade">-->
		<!--<transition :name="transitionName">-->
		<transition>
			<router-view></router-view>
		</transition>
	</div>
</template>


<script>
	module.exports = {
		data: function(){
			return {
				greeting : 'Hello'
			}
		},
		methods:{
			testfn:function(){
				alert(111);
			}
		},
		watch: {
		  /*'$route' (to, from) {
			const toDepth = to.path.split('/').length
			const fromDepth = from.path.split('/').length
			this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
		  }*/
		}
	}
</script>