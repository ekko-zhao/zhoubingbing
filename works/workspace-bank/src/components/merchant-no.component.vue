<template >
    <v-ons-page>
        <v-ons-toolbar>
            <div class="center">Page 1</div>
        </v-ons-toolbar>
        <p style="text-align: center">
            This is the first page
            <v-ons-button @click="push">Push Page 2</v-ons-button>
        </p>
    </v-ons-page>
</template>
<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class HelloDecorator extends Vue {
    push() {
        alert(1);
        // this.$emit("push-page", page1);
    }
}
</script>
