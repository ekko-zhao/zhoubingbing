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
import ComTestComponent from 'components/com-test/com-test.component.vue'
import InputTestComponent from 'components/input-test/input-test.component.vue'
import {
    setTimeout
} from 'timers';
Vue.component('com-test', ComTestComponent)
Vue.component('input-test', InputTestComponent)

Vue.component('parent-com', {
    template: `
    <div class="child">
        <slot></slot>
    </div>
    `
})

Vue.config.silent = true;
new Vue({
    el: '#app',
    template: `
        <div>
            <com-test name="editForm" novalidate>
                <div>
                    <input type="text" name="input1" v-model="input1" min-length="5" max-length="8" pattern="/^[a-z]+$/"/>
                    <p>valid:{{this.editForm.input1}}</p>
                </div>
                <div>
                    <input type="text" name="input2" @change="change" v-model="input2" min-length="2" max-length="7" pattern="/^[0-9]+$/"/>
                    <br/>valid:{{this.editForm.input2}}
                </div>
                <div>
                    <input type="text" name="input3" v-model="form.name1" min-length="10" max-length="20" pattern="/^[a-z]+$/"/>
                    <br/>valid:{{this.editForm.input3}}
                </div>
            </com-test>
            <br/>
            editForm.valid:{{this.editForm.valid}}
            <br/>
            editForm.invalid:{{this.editForm.invalid}}
        </div>
    `,
    data() {
        return {
            input2: '123',
            form: {
                name1: 'name1'
            },
            editForm: {
                input1: {},
                input2: {},
                input3: {}
            },
            props: {
                value: '2323'
            }
        };
    },
    methods: {
        change() {
            console.log(12221)
        }
    },
    mounted: function() {
        setTimeout(() => {
            this.input2 = '6555';
        }, 2000)

        setTimeout(() => {
            this.input3 = '6';
        }, 3000)

        setTimeout(() => {
            this.input3 = 'abcd';
        }, 4000)
    }
});
