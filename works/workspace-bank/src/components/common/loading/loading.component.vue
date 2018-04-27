<template>
    <div class="layout">
        <i :style="{backgroundColor: bgcolor}" v-if="visiable"><img :src="'./static/images/loading_'+color+'.gif'"></i>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component({
    props: {
        visiable: {
            default: false
        },
        color: {
            default: "info"
        },
        bgcolor: {
            default: function() {
                switch (this["color"]) {
                    case "primary":
                        return "#337ab7";
                    case "success":
                        return "#3fb14e";
                    case "info":
                        return "#04a7ff";
                    case "warning":
                        return "#f0d03b";
                    case "danger":
                        return "#f05050";
                    default:
                        return "#04a7ff";
                }
            }
        }
    }
})
export default class LoadingComponent extends Vue {}
/*
    使用方法
    <button-loading color="primary" :visiable="status"/>
 */
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
        left: 0;
        top: -11px;
        border-radius: 2px;
        padding: 2px;
        margin-left: 4px;
        vertical-align: middle;
        img {
            display: block;
            width: 16px;
        }
    }
}
</style>

