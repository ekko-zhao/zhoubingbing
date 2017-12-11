<script>
import { Validator } from "components/form-validator/validator";
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
        this.validator = new Validator(this);
        console.log(this.validator.vmodels);
        /* console.log(this.validator); */
        console.log(this.validator.formkeys);
        /* console.log(this.validator.forminputs); */
    }
};
</script>
