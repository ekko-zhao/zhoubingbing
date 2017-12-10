import AgreementListcomponent from "components/agreement-list/agreement-list.component.vue";
import {
    regex
} from "service/regex";

export default {
    key: "merchantNo",
    data: function() {
        return {
            regex,
            item: {},
            visible: false,
            form: {
                merchantNo: ''
            }
        }
    },
    methods: {
        push() {
            this.$emit("push-page", AgreementListcomponent);
        },
        input() {
            this.visible = false;
        },
        search() {
            // this.$http
            // 异步请求
            var response = {
                "isSigned": true,
                "merchantNo": "123451234512345",
                "orderNo": "BG20170426000000001",
                "respMsg": "成功",
                "respCode": "100001"
                //100002 商户号不存在
            }
            if (response['respCode'] === '100001' || response['respCode'] === '100002') {
                this.visible = true;
                this.item = response;
            } else {
                this.item = {};
                alert(response['respMsg']);
            }

        }

    }
};
