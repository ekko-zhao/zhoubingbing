
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
        <!-- content -->
        <p class="p-l p-t-sm p-b-sm font-bold">签署人信息：</p>
        <v-ons-list>
            <v-ons-list-item>
                <div class="center">
                    <span style="width:70px;">姓名</span>周冰冰</div>
            </v-ons-list-item>
            <v-ons-list-item>
                <div class="center">
                    <span style="width:70px;">身份证号</span>3426231989****8888</div>
            </v-ons-list-item>
        </v-ons-list>
        <p class="p-l p-t-sm p-b-sm font-bold">签署人手机号：</p>
        <v-ons-list>
            <v-ons-list-item>
                <div class="center">
                    <v-ons-input class="w-full" placeholder="请输入该姓名下的手机号" v-model="cellphone" required></v-ons-input>
                </div>
            </v-ons-list-item>
        </v-ons-list>
        <v-ons-row class="p-l p-r m-t-md">
            <label class="text-sm text-muted  i-checkbox">
                <input type="checkbox" v-model="checkbox">
                <i class="ion-checkmark-round"></i>
                <p class="v-middle inline">
                    <span class="p-t-xs p-b-xs">我同意</span>
                    <span class="text-info p-t-xs p-b-xs" @click.prevent="docDtail">《拉卡拉用户个人信息授权协议》</span>
                </p>
            </label>
            <v-ons-col class="m-t" width="100%">
                <v-ons-button class="p-t-xs p-b-xs" modifier="material large" :disabled="!regex.cellphone.test(cellphone) || !checkbox">下一步</v-ons-button>
            </v-ons-col>
        </v-ons-row>
    </v-ons-page>
</template>

<script>
import jsfile from "./info-entry";
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
