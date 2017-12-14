import {
    regex
} from "service/regex";
export default {
    key: "infoEntry",
    data: function() {
        return {
            regex: regex,
            cellphone: '',
            checkbox: false
        }
    },
    methods: {
        goback() {
            this.$emit("pop-page");
        },
        docDtail() {
            console.log(11)
        }
    }
};
