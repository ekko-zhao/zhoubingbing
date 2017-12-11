<script>
import { MyVueValidator } from "components/com-test/my-vue-validator";
export default {
    data: function() {
        return {
            validator: undefined
        };
    },
    render: function(createElement) {
        return createElement("form", this.$slots.default);
    },
    mounted: function() {
        this.validator = new MyVueValidator(this);
        console.log(this.validator);
        /* console.log(this.validator.formkeys); */
        /* console.log(this.validator.forminputs); */
    }
};
</script>
