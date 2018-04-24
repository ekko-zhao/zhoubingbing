import Vue from "vue";
import vueResource from 'vue-resource';
import VueOnsen from 'vue-onsenui';

Vue.use(vueResource);
Vue.use(VueOnsen);

/* 全局注册组件 */
/* 表单验证 */
import FromValidator from './components/common/form-validator/form-validator.component.vue';
Vue.component('from-validator', FromValidator);

/* 组件 */
import LoginComponent from './components/login/login.component.vue';

new Vue({
    el: "#root",
    template: `
        <login-component />
    `,
    components: {
        'login-component': LoginComponent
    }
});
