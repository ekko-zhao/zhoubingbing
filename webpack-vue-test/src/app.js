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

            <v-ons-list-item tappable
            @click="dialogVisible = true"
          >
            <div class="center">
              Simple Dialog
            </div>
          </v-ons-list-item>

          <v-ons-dialog cancelable
            :visible.sync="dialogVisible"
            >
          <p style="text-align: center">Lorem ipsum</p>
        </v-ons-dialog>


        <v-ons-list-item tappable  @click="$ons.notification.prompt('What is your name?')" >
            <div class="center"> Prompt </div>
        </v-ons-list-item>

        <v-ons-list-item @click="$ons.notification.toast('Hello, world!', {timeout: 2000})" >
            <div class="center"> Toast </div>
        </v-ons-list-item>


            <v-ons-alert-dialog modifier="rowfooter" :visible.sync="alertDialog1Visible" >
                <span slot="title">Title slots</span>
                    Lorem ipsum
                <template slot="footer">
                    <div class="alert-dialog-button" @click="alertDialog1Visible = false">Cancel</div>
                    <div class="alert-dialog-button" @click="alertDialog1Visible = false">Ok</div>
                </template>
           </v-ons-alert-dialog>


        <v-ons-list-item tappable @click="alertDialog1Visible = true" >
            <div class="center">
                Alert Dialog (slots)
            </div>
        </v-ons-list-item>

        <v-ons-alert-dialog modifier="rowfooter" :title="'Title props'"
            :footer="{
                Cancel: () => alertDialog2Visible = false,
                Ok: () => alertDialog2Visible = false
            }"
            :visible.sync="alertDialog2Visible">
            Lorem ipsum
        </v-ons-alert-dialog>



        </v-ons-page>
    `,
    data() {
        return {
            dialogVisible: false,
            alertDialog1Visible: false,
            alertDialog2Visible: false
        };
    },
    mounted: function() {
        this.$ons.notification.prompt('What is your name?', {
            Ok: function(e) {
                console.log(e)
            }
        })
    }
});

/*
<v-ons-navigator swipeable :page-stack="pageStack" @push-page="pageStack.push($event)" @pop-page="pageStack.pop()">
</v-ons-navigator>
*/
