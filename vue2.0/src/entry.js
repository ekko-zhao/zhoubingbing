// JavaScript Document
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vueRouter';
import vueResource from 'vueResource';

//引入组件
import MyComponent from './components/My.component.vue';

/*Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(vueResource);*/


var vm = new Vue({
	el: '#app',
	template: `
		<div>
			<my-component/>
			{{name}}
		</div>
	`,
	data:{
		obj:{
			name:'zs'
		},
		name: 'bingbing'
	},
	components:{
		'my-component': MyComponent
	}
})

//vm.$data.name = 'bingbing'













