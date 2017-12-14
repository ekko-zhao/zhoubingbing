import InfoEntrycomponent from "components/info-entry/info-entry.component.vue";
import {
    mapState
} from 'vuex';
export default {
    key: "agreementList",
    data: function() {
        return {
            checkbox: false
        }
    },
    computed: mapState({
        signStatus: 'signStatus'
    }),
    methods: {
        goback: function() {
            this.$emit("pop-page");
        },
        next: function() {
            this.$emit("push-page", InfoEntrycomponent);
        },
    },
    mounted: function() {

    }
};
