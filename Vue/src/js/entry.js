// JavaScript Document

import Vue from 'vue';
import VueRouter from 'vueRouter';
//import jquery from 'jquery';
var parent = require('../components/parent.vue');
Vue.use(VueRouter);



var app = document.createElement('div');
app.id="app";
document.body.appendChild(app);


const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes :routes
})

let router1 = require('../components/router1.vue');
//router1.routes = routes



console.log(router1)


var vm = new Vue({
	el: '#app',
	template: '<my-component/>',
	data:{
		name:'zhoubingbing'
	},
	components:{
		'my-component': router1
	},
	router: router
})




