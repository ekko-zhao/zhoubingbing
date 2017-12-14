<template>
    <v-ons-page>
        <v-ons-toolbar class="bg-info">
            <div class="center">
                <toolbar-center></toolbar-center>
            </div>
        </v-ons-toolbar>
        <!-- content -->
        <p class="p-l p-t-sm p-b-sm font-bold">合同查询</p>
        <v-ons-list>
            <v-ons-list-item class="m-b-none">
                <div class="left" style="width:70px;">商户号</div>
                <div class="center">
                    <!-- <div class="inline-block pos-rlt">
                        <input type="text" class="text-input inline-block w-full" placeholder="请输入商户号" v-model="form.merchantNo" @input="input" required="required" />
                    </div> -->
                    <v-ons-input placeholder="请输入商户号" v-model="form.merchantNo" @input="input" required></v-ons-input>
                </div>
                <div class="right">
                    <v-ons-button modifier="material" :disabled="!regex.merchantNo.test(form.merchantNo)" @click="search">查询</v-ons-button>
                </div>
            </v-ons-list-item>
        </v-ons-list>
        <p class="p-l p-t-sm p-b-sm" v-show="visible && item.respCode==='100001' && !item.isSigned">该商户未签署电子收单协议</p>
        <p class="p-l p-t-sm p-b-sm font-bold" style="color:#f0ad4e" v-show="visible && item.respCode==='100002'">该商户号不存在</p>
        <div v-show="visible && item.respCode==='100001' && item.isSigned">
            <!-- <div> -->
            <p class="p-l p-t-sm p-b-sm font-bold text-success">该商户已签署过电子收单协议</p>
            <v-ons-list>
                <v-ons-list-item>
                    <span class="p-r">商户号</span>
                    <span>{{item.orderNo}}</span>
                </v-ons-list-item>
            </v-ons-list>
            <v-ons-row class="p-l p-r m-t-lg">
                <v-ons-col width="100%">
                    <v-ons-button class="p-t-xs p-b-xs" modifier="material large" @click="push">查看协议</v-ons-button>
                </v-ons-col>
            </v-ons-row>
        </div>
        <v-ons-row class="p-l p-r m-t-lg">
            <v-ons-col width="100%">
                <v-ons-button class="p-t-xs p-b-xs" modifier="material large" @click="push" v-show="visible && item.respCode==='100001' && !item.isSigned">签署收单协议</v-ons-button>
            </v-ons-col>
        </v-ons-row>
    </v-ons-page>
</template>

<script>
import jsfile from "./merchant-no";
export default jsfile;
</script>
