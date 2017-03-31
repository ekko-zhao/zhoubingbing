// JavaScript Document

import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vueRouter';
import vueResource from 'vueResource';
//import jquery from 'jquery';
var parent = require('../components/parent.vue');
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(vueResource);

var app = document.createElement('div');
app.id = "app";
document.body.appendChild(app);


//const Foo = require('../components/foo.vue');
//懒加载
const Foo = function (resolve) {
	require.ensure(['../components/foo.vue'], function () {
		resolve(require('../components/foo.vue'));
	})
};
//把组件按组分块
//Webpack 将相同 chunk 下的所有异步模块打包到一个异步块里面 —— 这也意味着我们无须明确列出require.ensure 的依赖（传空数组就行）。
/*const Foo = r => require.ensure([], () => r(require('./Foo.vue')), 'group-foo')
const Bar = r => require.ensure([], () => r(require('./Bar.vue')), 'group-foo')*/

const Bar = require('../components/bar.vue');
const UserProfile = require('../components/UserProfile.vue');
const UserPosts = require('../components/UserPosts.vue');

const routes = [{
		path: '/foo/',
		component: Foo,
		/*beforeEnter: function(to,from, next){
		next()
	},*/
		children: [{
			path: 'profile',
			name: '',
			component: require('../components/UserProfile.vue'),
			meta: {
				requiresAuth: true
			}
		}, {
			path: 'posts',
			component: require('../components/UserPosts.vue')
		}, {
			path: '*',
			component: {
				template: '<div style="position:fixed; top:0; bottom:0; left:0; right:0; background-color:rgba(0,0,0,0.5);">template</div>'
			}
		}]
	}, {
		path: '/bar',
		component: Bar
	}]
	//router.push({ path: 'register', query: { plan: 'private' }})
	//router.push({ name: 'user', params: { userId: 123 }})
	//router.go(n)
	//router.replace(...)


const router = new VueRouter({
	routes: routes,
	scrollBehavior(to, from, savedPosition) {
		//{ x: number, y: number }
		//{ selector: string } 

		/*if (savedPosition) {
			return savedPosition
		} else {
			return { x: 0, y: 0 }
		}*/

		/*if (to.hash) {
			return {
				selector: to.hash
			}
		  }*/
		// return 期望滚动到哪个的位置
	}
})

router.beforeEach(function (to, from, next) {
	//if (to.matched.some(record => record.meta.requiresAuth)) { }

	next()
	//next('/') 或者 next({ path: '/' }): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。
	/*next({
        path: '/login', query: { redirect: to.fullPath }
    })*/
})

router.afterEach(function (to, from) {

})


let router1 = require('../components/router1.vue');

Vue.component('child', {
	template: '<div style="color:red">child <slot/></slot></div>'
})
Vue.component('anchored-heading', {
	render: function (createElement) {
		return createElement(
			'div', // tag name 标签名称
			{
				'class': {
					foo: true,
					bar: false
				},
			},
			[this.$slots.default,createElement('div','asas'),this.$slots.default] // 子组件中的阵列
		)
	},
	props: {
		level: {
			type: Number,
			required: true
		}
	}
})

/*var vm = new Vue({
	el: '#app',
	template: '<my-component/>',
	data: {
		name: 'zhoubingbing'
	},
	components: {
		'my-component': router1
	},
	router: router,
	watch: {
		'$route': function (to, from) {

		}
	},
	methods: {},
	computed: {},

	filters: {
		capitalize: function (value) {
			// return value;
		}
	},

	beforCreate: function () {},
	created: function () {},
	mounted: function () {},
	updated: function () {},
	destroyed: function () {},

})*/
	//vm.$mount('#app')
 	
/*
	<input v-on:keyup.enter="submit">
	
	
	Vue.config.keyCodes.f1 = 112


*/

//console.log(vm.$resource)
/*
	var res = this.$resource('url/{/id}');
	res.get({}).then();
	res.save({},data).then()
*/


//window.Vue = Vue;

Vue.http.interceptors.push( (request, next) => {
	console.log(request);
	//next();
	/*next(function(response){
		console.log(response)
		//response.body = {name:'zhangsan'}
	})*/
	
	//不发送后台 直接返回
	/*next(request.respondWith({name:'zhoubb'},{
		status:403,
		statusText:''
	}
	));*/
	
})


var vm = new Vue({
		
})

















