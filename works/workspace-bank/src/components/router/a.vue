<template>
    <v-ons-page>
        <v-ons-list>
            <v-ons-list-item>
                <p>router a</p>
                <button @click="push">button</button>
                <input type="text" value="">
                 {{fname}}
            </v-ons-list-item>
        </v-ons-list>
    </v-ons-page>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import CComponent from "./c.vue";

@Component({
    props: ["fname"]
})
export default class AComponent extends Vue {
    zhoubignbing;
    push() {
        //this["$router"].push("b");
        //console.log(this["zhoubignbing"]);

        this.$parent["pageStack"].push(CComponent);
        //this.$parent["pageStack"] = [CComponent];
    }
}
</script>
