const infoname = {
    pristine: 'pristine',
    dirty: 'dirty',
    valid: 'valid',
    invalid: 'invalid',
    required: 'required',
    min: 'minlength',
    max: 'maxlength',
    minchar: 'mincharlength',
    maxchar: 'maxcharlength',
    pattern: 'pattern',
    restForm: 'restForm'
}
var chkstrlen = function (str) {
    var strlen = 0;
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 255)
            strlen += 2;
        else
            strlen++;
    }
    return strlen;
}

export class Validator {
    constructor(context) {
        if (!context.$attrs.name) throw "form no name property";
        // 表单属性 name
        this.formname = context.$attrs.name;

        // 表单DOM所在的顶级父组件
        this.$parent = context.$parent;
        while (this.$parent.$parent && !this.$parent[this.formname]) {
            this.$parent = this.$parent.$parent;
        }

        // 获取表单验证数据对象引用
        this.obj = this.$parent[this.formname];

        // 获取父组件中的 children;
        this.children = context.$el.children;

        this.initialize()

    }
    private formname: string;
    private $parent;
    private obj;
    private children;

    // 记录表单元素的 name 属性
    private formkeys: Array<string> = [];

    // 记录表单元素中的 v-model 属性
    private vmodels: Array<string> = [];

    // 存储表单中所有 单元元素 DOM
    private forminputs: Array<any> = [];

    private childloop(arr) {
        if (!arr) return;
        for (let child of arr) {
            let tagName = child.tagName.toLowerCase();
            if (child.children && child.children.length > 0 && tagName !== "select" && tagName !== "textarea") {
                this.childloop(child.children);
            } else {
                if (tagName && (tagName === "input" || tagName === "select" || tagName === "textarea")) {
                    let name = child.name;
                    if (!name) continue;
                    this.formkeys.push(name);
                    var model = child.getAttribute('data-model');
                    if (model) this.vmodels.push(model);
                    this.forminputs.push(child);
                }
            }
        }
        // 数组去重
        let set = new Set(this.formkeys);
        this.formkeys = [...set];

        let models = new Set(this.vmodels);
        this.vmodels = [...models];
    }

    // form 和 input的状态
    private inputvalidator(input) {
        var required = input.getAttribute('required');
        var minlength = parseInt(input.getAttribute('min-length'));
        var maxlength = parseInt(input.getAttribute('max-length'));
        var mincharlength = parseInt(input.getAttribute('min-charlength'));
        var maxcharlength = parseInt(input.getAttribute('max-charlength'));
        var pattern = eval(input.getAttribute('pattern'));
        var value = input.value;
        var valueempty = (value === '' || value.trim() === '');
        var name = input.name;

        // 用于 this.$set
        if (!this.$parent[this.formname][name]) this.$parent[this.formname][name] = {};
        var objinput = this.$parent[this.formname][name];

        // input的状态， flag：true 为 合法, flag：false 为 非法
        var flag = true;

        // 是否为空
        if (required && valueempty) {
            flag = false;
            this.$parent.$set(objinput, infoname.required, true);
        } else if (required) {
            this.$parent.$set(objinput, infoname.required, false);
        }

        // 设置 表单 pristine dirty 状态
        if (!valueempty) {
            this.$parent.$set(objinput, infoname.pristine, false);
            this.$parent.$set(objinput, infoname.dirty, true);
        }

        // 最小长度
        if (minlength && value.length < minlength) {
            // 值不为空时 赋值
            if (!valueempty) flag = false;
            this.$parent.$set(objinput, infoname.min, true);
        } else if (minlength) {
            this.$parent.$set(objinput, infoname.min, false);
        }
        // 最大长度
        if (maxlength && value.length > maxlength) {
            if (!valueempty) flag = false;
            this.$parent.$set(objinput, infoname.max, true);
        } else if (maxlength) {
            this.$parent.$set(objinput, infoname.max, false);
        }
        // 按字符最小长度
        if (mincharlength && chkstrlen(value) < mincharlength) {
            // 值不为空时 赋值
            if (!valueempty) flag = false;
            this.$parent.$set(objinput, infoname.minchar, true);
        } else if (mincharlength) {
            this.$parent.$set(objinput, infoname.minchar, false);
        }
        // 按字符最大长度
        if (maxcharlength && chkstrlen(value) > maxcharlength) {
            // 值不为空时 赋值
            if (!valueempty) flag = false;
            this.$parent.$set(objinput, infoname.maxchar, true);
        } else if (maxcharlength) {
            this.$parent.$set(objinput, infoname.maxchar, false);
        }

        // 正则
        if (pattern && !pattern.test(value)) {
            if (!valueempty) flag = false;
            this.$parent.$set(objinput, infoname.pattern, true);
        } else if (pattern) {
            this.$parent.$set(objinput, infoname.pattern, false);
        }

        // flag 状态
        if (flag) {
            input.classList.remove(infoname.invalid);
            input.classList.add(infoname.valid);
        } else {
            input.classList.remove(infoname.valid);
            input.classList.add(infoname.invalid);
        }
        // input状态
        this.$parent.$set(objinput, infoname.valid, flag);
        this.$parent.$set(objinput, infoname.invalid, !flag);
        return flag;
    }


    public initialize() {
        this.childloop(this.children);
    }
}
