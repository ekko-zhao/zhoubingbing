import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource'
import VueOnsen from 'vue-onsenui'; // This already imports 'onsenui'

Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(VueOnsen);

/*  components */
import MerchantNocomponent from 'components/merchant-no/merchant-no.component.vue';

// 全局注册组件
import ToolbarCenterComponent from 'components/common/toolbar-center/toolbar-center.component.vue'
import ToolbarBackComponent from 'components/common/toolbar-back/toolbar-back.component.vue'

Vue.component('toolbar-center', ToolbarCenterComponent);
Vue.component('toolbar-back', ToolbarBackComponent)



const customToolbar = {
    template: `
        <v-ons-toolbar>
            <div class="left">
                <v-ons-toolbar-button @click="action">
                    <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
                </v-ons-toolbar-button>
            </div>
            <div class="center">{{ title }}</div>
        </v-ons-toolbar>
    `,
    props: ['title', 'action']
};

const homePage = {
    template: `
        <v-ons-page>
            <custom-toolbar title="Home" :action="toggleMenu"></custom-toolbar>
            <p style="text-align: center">Welcome home.</p>
        </v-ons-page>
  `,
    props: ['toggleMenu'],
    components: {
        customToolbar
    }
};

const newsPage = {
    template: `
        <v-ons-page>
            <custom-toolbar title="News" :action="toggleMenu"></custom-toolbar>
            <p style="text-align: center"> Some news here. </p>
        </v-ons-page>
    `,
    props: ['toggleMenu'],
    components: {
        customToolbar
    }
};

new Vue({
    el: '#app',
    template: `
        <v-ons-page>
            <v-ons-toolbar>
                <div class="center">center</div>
            </v-ons-toolbar>

        </v-ons-page>
    `,
    data() {
        return {
            modalVisible: false,
            timeoutID: 0
        };
    },
    mounted() {
        console.log(this)
        var $this = this;
        var gesture = this.$ons.GestureDetector($this.$el);
        gesture.on('swipeleft', function(e) {
            console.log(e)
            console.log(111)
        })


        console.log(gesture)
        /* this.$ons.on('swipe', function() {
            console.log(1)
        }) */

        // console.log( touch )


    }
});

/*
<v-ons-navigator swipeable :page-stack="pageStack" @push-page="pageStack.push($event)" @pop-page="pageStack.pop()">
</v-ons-navigator>
*/
