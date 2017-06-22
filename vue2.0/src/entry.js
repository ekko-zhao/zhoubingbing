// JavaScript Document
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vueRouter';
import vueResource from 'vueResource';

import _ from 'lodash';


//引入组件
import MyComponent from './components/My.component.vue';

require('./style.css');

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(vueResource);

var MyPlugin ={ }

MyPlugin.install = function (Vue, options) {
	
}


Vue.use(MyPlugin,{name:'bingbing'});


const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state,m=12) {
		
		alert(m)
      state.count++
    }
  }
})



var vm = new Vue({
	el: '#app',
	store,
	template: `
		<div style="padding-left:100px;padding-top:50px;">
			<p> </p>
			<my-component :message="message"><p>123</p></my-component>
			
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
		message: 'msg',
		price: 23
	},
	components:{
		'my-component': MyComponent
	},
	
	methods: {
		updateMessage: function () {
			this.show = !this.show
		}
	},
	MyPlugin: {
		age:23
	}
})


store.commit('increment',3)













