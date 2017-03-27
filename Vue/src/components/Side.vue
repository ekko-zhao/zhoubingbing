
<template>
	<ul>
		<li @click="addItem( {content: Math.random()} )">增加</li>
		<li @click="deleteItem()">删除</li>
	</ul>
</template>

<script>
	/*import Vue from 'vue';
	import Vuex from 'vuex';
	Vue.use(Vuex); */
	
	import {addItem, deleteItem} from './../js/vuex/actions.js'
	export default{
		/*methods:{
			add(){
				this.$store.state.items.push({content:'bingbing'})
			}
		}*/
		data(){
			return {}
		},
		/*methods:{
			addItem: function(){
				this.$store.commit('ADD_TIEM',{content:'df'});
			},
			deleteItem: function(){}
		}*/
		vuex:{
			actions:{
				addItem,
				deleteItem
			}
		}
		
	}
</script>