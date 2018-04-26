<template>
    <div class="layout">
        <i><img src="../../../assets/images/loading_button.gif"></i>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class LoadingComponent extends Vue {}
</script>

<style lang="less">
.layout {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    height: 0px;
    width: 0px;
    i {
        position: absolute;
        top: -10px;
        border-radius: 2px;
        padding: 2px;
        margin-left: 8px;
        vertical-align: middle;
        background-color: #f7f7f7;

        img {
            display: block;
            width: 14px;
        }
    }
}
</style>

