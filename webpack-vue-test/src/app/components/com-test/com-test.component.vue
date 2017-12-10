<script>
import { MyVueValidator } from "components/com-test/my-vue-validator";
export default {
    render: function(createElement) {
        console.log(this);
        return createElement("form", this.$slots.default);
    },
    mounted: function() {
        /* this.$parent["editForm"] = {
            input2: {
                $error: "223"
            }
        }; */
        var validator = new MyVueValidator(this);
        /* console.log(validator.formkeys);
        console.log(validator.forminputs); */
    },
    /* beforeCreate: function() {
        console.log(111);
        this.$parent.$set(this.$parent.editForm, "obj", {});
        this.$parent.$set(this.$parent.editForm.obj, "name", 'zhoubingbing');
        console.log(this);
    } */
};
</script>
