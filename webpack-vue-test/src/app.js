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
import ToolbarCenterComponent from 'components/common/toolbar-center/toolbar-center.component.vue'
import ToolbarBackComponent from 'components/common/toolbar-back/toolbar-back.component.vue'

Vue.component('toolbar-center', ToolbarCenterComponent);
Vue.component('toolbar-back', ToolbarBackComponent)

new Vue({
    el: '#app',
    template: `
        <v-ons-navigator swipeable :page-stack="pageStack" @push-page="pageStack.push($event)" @pop-page="pageStack.pop()">
        </v-ons-navigator>
    `,
    data() {
        return {
            pageStack: [MerchantNocomponent],
        };
    },
    methods: {

    }

});
