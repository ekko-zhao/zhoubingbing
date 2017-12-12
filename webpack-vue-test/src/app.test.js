import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource'
import VueOnsen from 'vue-onsenui'; // This already imports 'onsenui'

Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(VueOnsen);

/* 表单验证 */
/* Vue.validator('tel', function(val) {
    console.log('tel')
    return /^[0-9]{11}$/.test(val);
}); */

/*  components */
import MerchantNocomponent from 'components/merchant-no/merchant-no.component.vue';

// 全局注册组件
/* import ToolbarCenterComponent from 'components/common/toolbar-center/toolbar-center.component.vue'
import ToolbarBackComponent from 'components/common/toolbar-back/toolbar-back.component.vue'

Vue.component('toolbar-center', ToolbarCenterComponent);
Vue.component('toolbar-back', ToolbarBackComponent) */
import FormValidatorComponent from 'components/form-validator/form-validator.component.vue'
import InputTestComponent from 'components/input-test/input-test.component.vue'
import {
    setTimeout
} from 'timers';
Vue.component('form-validator', FormValidatorComponent)
Vue.component('input-test', InputTestComponent)


Vue.config.silent = true;
new Vue({
    el: '#app',
    template: `
        <div>
            <form-validator name="editForm" novalidate>
                <div>
                    <input type="text" name="input1" v-model="input1" min-charlength="10" max-charlength="16" />
                    <p>valid:{{this.editForm.input1}}</p>
                </div>
            </form-validator>
            <div>
                <br/>
                editForm.valid:{{this.editForm.valid}}
                <br/>
                <p @click="editForm.restForm">
                editForm.invalid:{{this.editForm.invalid}}
                </p>
                <button :disabled="editForm.invalid">button</button>
            </div>
        </div>
    `,
    data() {
        return {
            input1: '',
            input2: '',
            form: {
                name1: '',
                name5: {
                    name: ''
                }
            },
            editForm: {
                inputradio: {},
                inputradio2: {},
                input1: {},
                input2: {},
                input3: {},
                name5: {}
            },
            props: {
                value: '2323'
            }
        };
    },
    methods: {},
    mounted: function() {

        /* setTimeout(() => {
            this.input2 = '6555';
        }, 2000)

        setTimeout(() => {
            this.input3 = '6';
        }, 3000)

        setTimeout(() => {
            this.input3 = 'abcd';
        }, 4000) */
    }
});
