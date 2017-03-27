
<template>
	<div id="apps">
		<side/>
		<my-content/>
	</div>
</template>

<script>
	import Side from './Side.vue';
	import Content from './Content.vue';
	export default {
		components: {
			Side,
			'my-content': Content
		}
	}
</script>