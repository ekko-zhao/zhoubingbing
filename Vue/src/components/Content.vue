
<template>
	<div class="content">
		<button @click="increment( {name:'sdf'})">count+</button>
		<button>doneTodosCount+</button>
		<button @click="storefn">storefn</button>
		<button @click="moduleANames">moduleANames</button>
		<div class="item" v-for="item in items">
			{{item.content}}
		</div>
		<p>moduleA.name:{{moduleAName}}</p>
		<p>count:{{count}}</p>
		<p>doneTodosCount:{{doneTodosCount}}</p>
	</div>
</template>

<script>
	import store from './../js/stroe.js';
	import moduleA from './../js/vuex/moduleA.js';
	
	import { mapState } from 'vuex';
	import { mapGetters } from 'vuex'
	import { mapActions } from 'vuex'
	export default {
		methods:{
			testfn(){
				//this.$store.dispatch('increment');
				//this.$store.commit('increment');
				
				/*this.$store.dispatch('increment', {
				  amount: 10
				})
				
				store.dispatch({
				  type: 'incrementAsync',
				  amount: 10
				})*/
				
			},
			storefn(){
				store.dispatch('increment');
			},
			moduleANames(){
				store.commit('SET_NAME','zhangsan')
				//moduleA.mutations.SET_NAME('zhangsan')
				//moduleA.state.name = 'zhangsan'
			},
			...mapActions(['increment' ])
		},
		computed: {
            /*items () {
                return this.$store.state.items  
            },*/
			moduleAName(){
				return store.state.a.name;
			},
			...mapState({
				items: state => state.items,
				count: state => state.count
			}),
			...mapGetters([ 'doneTodosCount']),
			/*...mapGetters({
				// 映射 this.doneCount 为 store.getters.doneTodosCount
				doneCount: 'doneTodosCount'
			}),*/
			
			
        }
	}
</script>