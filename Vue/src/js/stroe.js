import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex); 

const state = {
	count:0,
	items:[
		{content:'zhou'}
	],
	name:'',
	todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
}

const mutations = {
	ADD_TIEM(state, item){
		state.items.push(item);	
	},
	DELETE_ITEM(state){
		state.items.pos();	
	},
	increment(state){
		state.count++
	},
	
}

//const moduleA = 
import moduleA from './vuex/moduleA.js';

export default new Vuex.Store({
	modules:{
		a:	moduleA
	},
	state,
	mutations,
	getters: {
		doneTodos: state => {
		  	return state.todos.filter(todo => todo.done)
		},
		doneTodosCount: (state, getters) => {
			return getters.doneTodos.length
		}
	},
	actions:{
		increment (context, parmas){
			setTimeout(() => {
				context.commit('increment');
			}, 1000)
		},
		ADD_TIEM(){
			
		}
		
	}
})





















