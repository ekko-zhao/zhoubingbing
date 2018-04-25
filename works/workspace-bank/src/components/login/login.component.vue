<template>
    <v-ons-page>
        <from-validator name="editForm" ref="form">
            <v-ons-list>
                <select v-model="item.selected" data-model="item.selected" name="selected" required>
                    <option></option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                </select>
                <input type="checkbox" value="Jack" v-model="item.checked" data-model="item.checked" name="checked" required>
                <!-- <input type="checkbox" value="Jack23" v-model="item.checked" data-model="item.checked" name="checked" required>
                <input type="checkbox" value="Jack2323" v-model="item.checked" data-model="item.checked" name="checked" required> -->
                <input type="radio" value="Jack" v-model="item.radio" data-model="item.radio" name="radio" required>

                <v-ons-list-item modifier="longdivider">
                    <input class="text-input w-full" type="text" placeholder="用户名" name="name" data-model="item.name" v-model="item.name" required>
                </v-ons-list-item>
                <v-ons-list-item>
                    <div class="center">
                        <input class="text-input w-full" type="password" placeholder="密码" name="password" min-length="5" max-length="10" data-model="item.password" v-model="item.password">
                    </div>
                </v-ons-list-item>
            </v-ons-list>
        </from-validator>
        <p> {{editForm['checked']}}</p>
        <p> {{radio}}</p>
        <div class="padder">
            <v-ons-button modifier="large" @click="submit" :disabled="editForm.invalid">登陆
                <i>loading</i>
            </v-ons-button>
            <v-ons-button modifier="large" @click="reset">重置</v-ons-button>
        </div>
    </v-ons-page>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class LoginComponent extends Vue {
    radio = "";
    item = {
        checked: ""
    };
    password: string = "";
    editForm = {
        name: {},
        password: {},
        cardid: {},
        selected: {},
        checked: {},
        radio: {}
    };
    submit() {
        console.log();
    }
    reset() {
        this.$refs.form["validator"]["restForm"]();
    }
}
</script>
