// JavaScript Document

import Vue from 'vue';
//import vueRouter from 'vue-router';
//import jquery from 'jquery';

var parent = require('../components/parent.vue');



var app = document.createElement('div');
app.id="app";
document.body.appendChild(app);

app.innerHTML = '<my-component/>';

/*Vue.extend({
	template: '<div style="border: 1px solid #ccc;width:200px; background:#fff">Parent<child-b></child-b>父模版内部</div>'
})*/

//Vue.component('my-component',  a);

var vm = new Vue({
	el: '#app',
	data:{
		name:'zhoubingbing'	
	},
	components:{
		'my-component': parent 
	}
})




