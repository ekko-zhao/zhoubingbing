import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource'
import VueOnsen from 'vue-onsenui'; // This already imports 'onsenui'

Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(VueOnsen);

/* 状态管理 */
import {
    store
} from './store';

// 全局注册组件
import ToolbarCenterComponent from 'components/common/toolbar-center/toolbar-center.component.vue';
Vue.component('toolbar-center', ToolbarCenterComponent);

import ToolbarBackComponent from 'components/common/toolbar-back/toolbar-back.component.vue';
Vue.component('toolbar-back', ToolbarBackComponent);
/* 表单验证 */
import FormValidatorComponent from 'components/common/v-ons-form-validator/form-validator.component.vue';
Vue.component('v-ons-form-validator', FormValidatorComponent);

/*  components */
import MerchantNocomponent from 'components/merchant-no/merchant-no.component.vue';
import AgreementListcomponent from "components/agreement-list/agreement-list.component.vue";
import InfoEntrycomponent from "components/info-entry/info-entry.component.vue";

// forcePlatformStyling(platform)

new Vue({
    store: new Vuex.Store(store),
    el: '#app',
    template: `
        <v-ons-navigator
            animation="slide"
            :page-stack="pageStack"
            @push-page="pageStack.push($event)"
            @pop-page="pageStack.pop()"
            @prepush="prepush"
            swipeable="true"
        >
        </v-ons-navigator>
    `,
    data() {
        return {
            pageStack: [MerchantNocomponent, AgreementListcomponent, InfoEntrycomponent]
        };
    },
    beforeCreate() {
        this.$ons.platform.select('IOS');
    },
    methods: {
        prepush(event) {}
    }
});
