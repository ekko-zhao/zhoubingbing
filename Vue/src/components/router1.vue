
<template>
	<div>
		<p>
			<router-link to="/foo">Go to Foo</router-link>
			<router-link to="/bar">Go to Bar</router-link>
		</p>
		<router-view></router-view>
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
		}
	}
</script>