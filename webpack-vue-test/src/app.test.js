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

/* Vue.component('parent-com', {
    functional: true,
    render: function(createElement, context) {
        console.log(this)
        console.log(context)
    }
}) */

Vue.config.silent = true;
new Vue({
    el: '#app',
    template: `
        <div>
            <com-test name="editForm" novalidate>
                <input type="text" name="input1" v-model="input1" />
                <p>pp</p>
                <div name="input2">
                    <input type="text" name="input2" />
                    <p>pp</p>
                    <div><p>
                        <input type="text" name="input2" min-length="3" max-length="10" pattern="/^[0-9]+$/"/>
                        <input type="text" name="input3" />
                    </p></div>
                </div>
            </com-test>
            {{this.editForm.input2.pattern}}
            {{this.editForm.invalid}}

        </div>
    `,
    data() {
        return {
            input1: 'input1',
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

    },
    mounted: function() {
        setTimeout(() => {
            //console.log(this.editForm.input2);
        }, 4000)
    }
});
