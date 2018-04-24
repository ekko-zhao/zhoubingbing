import Vue from "vue";
import VueOnsen from 'vue-onsenui';


//import MerchantNocomponent from './components/merchant-no.component.vue';
Vue.use(VueOnsen);



let v = new Vue({
    el: "#root",
    template: `
        <v-ons-navigator swipeable :page-stack="pageStack" @push-page="pageStack.push($event)" @pop-page="pageStack.pop()">
        </v-ons-navigator>
    `,
    data: { pageStack: [] },
    components: {

    }
});
