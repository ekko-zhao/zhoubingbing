<template>
    <v-ons-page>
        <v-ons-list>
            <v-ons-list-item>
                <p>router c</p>
                 {{fname}}
                <button @click="push">button</button>

            </v-ons-list-item>
        </v-ons-list>
    </v-ons-page>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component({
    props: ["fname"]
})
export default class CComponent extends Vue {
    push() {
        console.log(this.$parent["pageStack"])
        this.$parent["pageStack"].pop();
        // this["$router"].push("/b");
    }
}
</script>
