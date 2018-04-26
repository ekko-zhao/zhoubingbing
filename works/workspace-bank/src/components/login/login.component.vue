<template>
    <v-ons-page>
        <from-validator name="editForm" ref="form">
            <v-ons-list>
                <v-ons-list-item>
                    <input class="text-input w-full" type="text" placeholder="用户名" name="name" data-model="item.name" v-model="item.name">
                </v-ons-list-item>
                <v-ons-list-item>
                    <div class="center">
                        <input class="text-input w-full" type="password" placeholder="密码" name="password" min-length="5" max-length="10" data-model="item.password" pattern="/^\w{6}$/" v-model="item.password">
                    </div>
                </v-ons-list-item>
            </v-ons-list>
        </from-validator>
        <div class="padder">
            <v-ons-button class="btn-info" modifier="large--cta">登陆<button-loading/></v-ons-button>
        </div>
    </v-ons-page>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class LoginComponent extends Vue {
    item = {};
    password: string = "";
    editForm = {
        name: {},
        password: {}
    };
    submit() {}
    reset() {
        // this.$refs.form["validator"]["resetForm"]();
    }
}
</script>
