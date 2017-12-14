
<template>
    <v-ons-page>
        <v-ons-toolbar class="bg-info">
            <div class="left">
                <v-ons-back-button></v-ons-back-button>
            </div>
            <div class="center">
                <toolbar-center></toolbar-center>
            </div>
        </v-ons-toolbar>
        <v-ons-list>
            <v-ons-list-item modifier="chevron" tap-background-color="#eef0f1" tappable="true">
                <div class="center l-h-lg">《支付服务合作协议》详情</div>
            </v-ons-list-item>
            <v-ons-list-item modifier="chevron" tap-background-color="#eef0f1" tappable="true">
                <div class="center l-h-lg">《注册登记表》详情</div>
            </v-ons-list-item>
        </v-ons-list>
        <v-ons-row class="p-l p-r m-t-lg" v-if="signStatus">
            <v-ons-col width="100%">
                <v-ons-button class="p-t-xs p-b-xs" modifier="material large" @click="goback">返回</v-ons-button>
            </v-ons-col>
        </v-ons-row>
        <v-ons-row class="p-l p-r m-t-md" v-if="!signStatus">
            <label class="text-sm text-muted p-t-xs p-b-xs i-checkbox">
                <input type="checkbox" v-model="checkbox">
                <i class="ion-checkmark-round"></i>
                <span class="v-middle">我同意《支付服务合作协议》和《注册登记表》</span>
            </label>
            <v-ons-col class="m-t" width="100%">
                <v-ons-button class="p-t-xs p-b-xs" modifier="material large" :disabled="!checkbox" @click="next">下一步</v-ons-button>
            </v-ons-col>
        </v-ons-row>
    </v-ons-page>
</template>

<script>
import jsfile from "./agreement-list";
export default jsfile;
</script>

<style scoped>
.i-checkbox input[type="checkbox"] {
    display: none;
}
.i-checkbox input[type="checkbox"] + i {
    vertical-align: middle;
    display: inline-block;
    height: 14px;
    width: 14px;
    border-radius: 3px;
    border: 1px #767c81 solid;
}
.i-checkbox input[type="checkbox"] + i:before {
    display: none;
    color: #00ade9;
    margin-top: 1px;
    margin-left: 2px;
}
.i-checkbox input[type="checkbox"]:checked + i:before {
    display: block;
}
</style>
