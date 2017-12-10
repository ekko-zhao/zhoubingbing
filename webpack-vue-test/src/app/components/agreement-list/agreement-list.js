import InfoEntrycomponent from "components/info-entry/info-entry.component.vue"
export default {
    key: "agreementList",
    methods: {
        goback: function() {
            this.$emit("pop-page");
        },
        forward: function() {
            this.$emit("push-page", InfoEntrycomponent);
        },
    }
};


/*
<!-- <toolbar-back @clickhandle="goback"></toolbar-back> -->
*/
