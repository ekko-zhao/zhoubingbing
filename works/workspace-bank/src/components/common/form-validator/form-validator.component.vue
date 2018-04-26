<script lang="ts">
import { Validator } from "./validator";
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class extends Vue {
    validator;
    render(createElement) {
        return createElement("form", this.$slots.default);
    }
    mounted() {
        this.validator = new Validator(this);
    }
}
/*
    // 使用方法
    .暂不支持 v-if 中的 input, 原因不能有效监听 dom 元素的变化
    .不支持 v-ons-input 标签
    .支持校验元素 min-length max-length min-charlength max-charlength pattern required
        min-charlength 最小长度按字符计算
        max-charlength  最大长度按字符计算

    .classList : pristine dirty valid invalid
    .input状态 ：
        pristine dirty valid invalid
            pristine 未修改
            dirty 修改过
            valid 合法
            invalid 非法

        minlength maxlength mincharlength maxcharlength pattern required
            本应该实在 $error对象中为了让用户少写 input1: { $error: undefined }, 所以状态不合法是为true
        用法：formName.inputName[status]

    .验证的表单元素 需要设置 data-model 属性，必须和v-model值保持一直


    .重置表单方法 validator.resetForm()  调用 this.$refs.form["validator"]["resetForm"]();
    .在data中必须 申明：
        data：function(){
            return:{
                // editForm 为表单的 name 值
                editForm:{
                    // 这里需要指定一个 空对象， 放置表单状态
                    input1: {},
                    input2: {},
                    input3: {}
                },
                // html v-model 的形式要写明， 这是 vue 的规范 与组件无关
                costomName1: undefined,
                costomName2: undefined,
                costomNameObj: {
                    costom1: undefined,
                    costom2: undefined
                }
            }
        }

        import FromValidator from './components/common/form-validator/form-validator.component.vue';
        Vue.component('form-validator', FromValidator);

    <form-validator name="editForm" ref="form" novalidate>
        <input type="text" name="input1" data-model="costomName1" v-model="costomName1" min-length="8" max-length="16" min-charlength="8" max-charlength="16" pattern="/^[0-9]+$/" required/>
        <input type="text" name="input2" data-model="costomName2" v-model="costomName2" />
        <input type="text" name="input3" data-model="costomNameObj.costom1" v-model="costomNameObj.costom1" />
    </form-validator>
*/
</script>
