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
            <v-ons-button class="btn-info" modifier="large--cta" @click="submit">登 陆
                <button-loading :visiable="loadingStatus" />
            </v-ons-button>
        </div>
    </v-ons-page>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class LoginComponent extends Vue {
    loadingStatus = false;
    item = {};
    password: string = "";
    editForm = {
        name: {},
        password: {}
    };
    submit() {
        this["$http"]
            .post("/api/register", { userId: 1114, userName: "zhoub" })
            .then(
                response => {
                    console.log("success");
                    console.log(response);
                    console.log(response.body);
                    console.log(this.item);
                },
                error => {}
            );
        //this.loadingStatus = !this.loadingStatus;
    }
    reset() {
        // this.$refs.form["validator"]["resetForm"]();
    }
}
</script>
