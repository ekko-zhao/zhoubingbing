
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
        <p style="text-align: center" @click="goback">信息录入</p>
    </v-ons-page>
</template>

<script>
import jsfile from "./info-entry";
export default jsfile;
</script>
