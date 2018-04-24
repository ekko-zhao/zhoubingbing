<template>
    <v-ons-page>
        <v-ons-list>
            <v-ons-list-item modifier="longdivider">
                <v-ons-input class="w-full" placeholder="用户名" type="text" float v-model="item.name" input-id="name" />
            </v-ons-list-item>
            <v-ons-list-item>
                <div class="center">
                    <v-ons-input class="w-full" placeholder="密码" type="password" v-model="item.password" input-id="password" modifier="transparent" />
                </div>
            </v-ons-list-item>
            <from-validator name="editForm">
                <p>12</p>
            </from-validator>
        </v-ons-list>

        <div class="padder">
            <v-ons-button modifier="large" @click="submit">登陆
                <i>loading</i>
            </v-ons-button>
        </div>
    </v-ons-page>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class LoginComponent extends Vue {
    item = {
        name: "",
        password: ""
    };
    editForm = {};
    submit() {
        // console.log(this);
    }
}
</script>
