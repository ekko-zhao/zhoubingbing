

<script>
module.exports = {
	data: function(){
		return {
			mg: this.message,
			name: 'bingbing'
		}
	},
	template:`
		<p> this is p </p>
	`,
	props:{
		message:[String]
	}
	
}

</script>