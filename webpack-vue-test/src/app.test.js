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
                    <input type="text" name="input1" v-model="input1" min-length="5" max-length="8" pattern="/^[a-z]+$/"/>
                    <p>valid:{{this.editForm.input1}}</p>
                </div>
                <div>
                    <input type="text" name="input2" v-model="input2" min-length="2" max-length="7" pattern="/^[0-9]+$/" required/>
                    <br/>valid:{{this.editForm.input2}}
                </div>
                <div>
                    <input type="text" name="input3" v-model="form.name1" min-length="10" max-length="20" pattern="/^[a-z]+$/"/>
                    <br/>valid:{{this.editForm.input3}}

                </div>
                <div v-if="input2==='123456'">
                    <input type="text" name="name5" v-model="form.name5.name" />
                    <br/>valid:{{this.editForm.name5}}
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
            input2: '',
            form: {
                name1: '',
                name5: {
                    name: ''
                }
            },
            editForm: {
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
        /* var ph = {
            name: 'zhoubing'
        }
        var obj = {
            o: ph
        };
        var _v = 'sdsd'
        Object.defineProperty(obj, 'o', {
            set: function(v) {
                console.log(22222);
            },
            get: function(v) {
                console.log(1111);
                return ph;
            },
        })

        console.log(obj.o)
        obj.o.name='sdfsdf';
        obj.o.age = 23 */

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
