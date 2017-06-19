// JavaScript Document
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vueRouter';
import vueResource from 'vueResource';

//引入组件
import MyComponent from './components/My.component.vue';

require('./style.css');

/*Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(vueResource);*/


var vm = new Vue({
	el: '#app',
	template: `
		<div style="padding-left:100px;padding-top:50px;">
			<p> </p>
			<my-component v-model="price" />
			
			
			<p >----</p>
			
			<button type="button" @click="updateMessage">button</button>
			<br/>
			<div style="height:100px;"></div>
			<transition name="fade" mode="out-in">
				<button v-if="show" key="saved">hello</button>
				<button v-else key="edited">hellos</button>
			</transition>
			
		</div>
	`,
	data:{
		name: 'bingbing',
		show: true,
		message: 12,
		price: 23
	},
	components:{
		'my-component': MyComponent
	},
	methods: {
		updateMessage: function () {
			this.show = !this.show
		}
	}
})

//vm.$data.name = 'bingbing'
//console.log(vm)












