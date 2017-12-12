
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
        <p style="text-align: center" @click="goback">goback</p>
        <p style="text-align: center" @click="forward">下一步</p>
        <v-ons-back-button modifier="material" />
    </v-ons-page>
</template>

<script>
import jsfile from "./agreement-list";
export default jsfile;
</script>
