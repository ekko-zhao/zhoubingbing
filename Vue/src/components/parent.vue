<template>
	<div style="border: 1px solid #ccc;width:200px; background:#fff" @click="testfn">
		Parent父模版内{{greeting}}
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