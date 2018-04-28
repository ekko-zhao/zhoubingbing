import Vue from "vue";

import VueRouter from 'vue-router'
import VueOnsen from 'vue-onsenui';
import './service/http.interceptors.service';

Vue.use(VueRouter);
Vue.use(VueOnsen);

/* 全局注册组件 */
/* 表单验证 */
import FromValidator from './components/common/form-validator/form-validator.component.vue';
import LoadingComponent from './components/common/loading/loading.component.vue';

Vue.component('from-validator', FromValidator);
Vue.component('button-loading', LoadingComponent);


/* 组件 */
import LoginComponent from './components/login/login.component.vue';

var vue = new Vue({
    el: "#root",
    template: `
        <login-component />
    `,
    components: {
        'login-component': LoginComponent
    },
    beforeCreate() {
        // 设置 onsen 渲染
        this['$ons'].platform.select('ios');
        this['$ons'].disableAutoStyling();
    }
});
