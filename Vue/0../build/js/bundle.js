webpackJsonp([0],{

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//

module.exports = {
	methods: {
		fn: function fn() {
			this.$router.push('/bar');
			//router.push({ name: 'user', params: { userId: 123 }})
			//router.push({ path: 'register', query: { plan: 'private' }})
			console.log(this.$router);
		}
	},
	beforeRouteEnter: function beforeRouteEnter(to, from, next) {
		//var a = require('jquery');
		next();
		// 不！能！获取组件实例 `this`
	},
	beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
		// 在当前路由改变，但是该组件被复用时调用
	},
	beforeRouteLeave: function beforeRouteLeave(to, from, next) {
		next();
	}
};

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/images/img2.png";

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('p', {
    on: {
      "click": _vm.fn
    }
  }, [_vm._v("foo"), _c('img', {
    attrs: {
      "src": __webpack_require__(23)
    }
  })]), _vm._v(" "), _c('div', [_c('router-view')], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-62b33baf", module.exports)
  }
}

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(24),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\subarea\\workspace\\git\\Vue\\src\\components\\foo.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] foo.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-62b33baf", Component.options)
  } else {
    hotAPI.reload("data-v-62b33baf", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});