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
    pattern: 'pattern'
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

var contract = function ($scope, array) {
    var form;
    if (array.length > 1) {
        if (!$scope[array[0]]) {
            $scope[array[0]] = $scope;
        };
        form = $scope[array[0]];
        for (var i = 1; i < array.length - 1; i++) {
            if (!form[array[i]]) form[array[i]] = {};
            form = form[array[i]];
        }
    } else {
        form = $scope;
    }
    return form;
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

        // 绑定上下文
        this.resetForm = this.resetForm.bind(this);

        // 初始化表单校验
        this.initialize();
    }
    private formname: string;
    private $parent;
    private obj;
    private children;

    // 记录表单元素的 name 属性
    private formNames: Array<string> = [];

    // 记录表单元素中的 v-model 属性
    private vmodels: Array<string> = [];

    // 存储表单中所有 单元元素 DOM
    private formInputs: Array<any> = [];

    private childloop(arr) {
        if (!arr) return;
        for (let child of arr) {
            let tagName = child.tagName.toLowerCase();
            if (child.children && child.children.length > 0 && tagName !== "select" && tagName !== "textarea") {
                this.childloop(child.children);
            } else {
                if (tagName && (tagName === "input" || tagName === "select" || tagName === "textarea")) {
                    let name = child.name;
                    let model = child.getAttribute('data-model');
                    if (!model) continue;
                    if (!name) throw tagName + " no name property";
                    this.formNames.push(name);
                    this.formInputs.push(child);
                    this.vmodels.push(model);
                }
            }
        }
        // 数组去重
        let set = new Set(this.formNames);
        this.formNames = Array['from'](set);

        let models = new Set(this.vmodels);
        this.vmodels = Array['from'](models);

    }

    // 表单和表单元素的状态
    private inputvalidator(input) {
        let required = input.getAttribute('required');
        let minlength = parseInt(input.getAttribute('min-length'));
        let maxlength = parseInt(input.getAttribute('max-length'));
        let mincharlength = parseInt(input.getAttribute('min-charlength'));
        let maxcharlength = parseInt(input.getAttribute('max-charlength'));
        let pattern = eval(input.getAttribute('pattern'));

        // checkbox radio
        let specialInput = input.type === 'checkbox' || input.type === 'radio';
        let value = specialInput ? input.checked : input.value;

        // 是否为空值
        let nullValue = specialInput ? (value === false) : (value === '');

        // 用于 this.$set
        let name = input.name;
        if (!this.$parent[this.formname][name]) this.$parent[this.formname][name] = {};
        let objinput = this.$parent[this.formname][name];

        // 表单的状态， true 合法, false 非法
        let flag = true;

        // required
        if (required && nullValue) {
            flag = false;
            this.$parent.$set(objinput, infoname.required, true);
        } else if (required) {
            this.$parent.$set(objinput, infoname.required, false);
        }

        // 设置表单元素 class 属性, pristine dirty 状态
        if (!nullValue) {
            this.$parent.$set(objinput, infoname.pristine, false);
            this.$parent.$set(objinput, infoname.dirty, true);
            input.classList.add(infoname.dirty);
            input.classList.remove(infoname.pristine);
        }

        // 最小长度
        if (minlength && value.length < minlength) {
            // 值不为空时赋值
            if (!nullValue) flag = false;
            this.$parent.$set(objinput, infoname.min, true);
        } else if (minlength) {
            this.$parent.$set(objinput, infoname.min, false);
        }

        // 最大长度
        if (maxlength && value.length > maxlength) {
            if (!nullValue) flag = false;
            this.$parent.$set(objinput, infoname.max, true);
        } else if (maxlength) {
            this.$parent.$set(objinput, infoname.max, false);
        }

        // 按字符最小长度
        if (mincharlength && chkstrlen(value) < mincharlength) {
            if (!nullValue) flag = false;
            this.$parent.$set(objinput, infoname.minchar, true);
        } else if (mincharlength) {
            this.$parent.$set(objinput, infoname.minchar, false);
        }

        // 按字符最大长度
        if (maxcharlength && chkstrlen(value) > maxcharlength) {
            if (!nullValue) flag = false;
            this.$parent.$set(objinput, infoname.maxchar, true);
        } else if (maxcharlength) {
            this.$parent.$set(objinput, infoname.maxchar, false);
        }

        // 正则
        if (pattern && !pattern.test(value)) {
            if (!nullValue) flag = false;
            this.$parent.$set(objinput, infoname.pattern, true);
        } else if (pattern) {
            this.$parent.$set(objinput, infoname.pattern, false);
        }

        // 表单元素 classList
        input.classList.remove(flag ? infoname.invalid : infoname.valid);
        input.classList.add(flag ? infoname.valid : infoname.invalid);


        // 表单元素校验状态
        this.$parent.$set(objinput, infoname.valid, flag);
        this.$parent.$set(objinput, infoname.invalid, !flag);
        return flag;
    }

    // 初始化表单元素 rest 为重置表单
    private inputInit(reset?: boolean) {
        // 设置表单元素 pristine dirty 状态
        for (let name of this.formNames) {
            let objinput = this.$parent[this.formname][name];
            this.$parent.$set(objinput, infoname.pristine, true);
            this.$parent.$set(objinput, infoname.dirty, false);
        }

        let flag = true;
        for (let input of this.formInputs) {
            // checkbox radio
            let specialInput = input.type === 'checkbox' || input.type === 'radio';
            if (specialInput) {
                input.checked = false;
            } else {
                input.value = '';
            }

            input.classList.remove(infoname.dirty);
            input.classList.add(infoname.pristine);

            // 表单元素状态
            let f = this.inputvalidator(input);
            if (!f) flag = f;
        }
        // 表单状态
        this.$parent.$set(this.$parent[this.formname], infoname.valid, flag);
        this.$parent.$set(this.$parent[this.formname], infoname.invalid, !flag);
    }

    // 状态更新监听 model 变化
    private statusWatch() {
        for (let model of this.vmodels) {
            this.$parent.$watch(model, (nv, ov) => {
                let flag = true;
                for (let input of this.formInputs) {
                    if (model === input.getAttribute('data-model')) {
                        flag = this.inputvalidator(input);
                        break;
                    }
                }
                // 获取表单状态
                let valid = this.$parent[this.formname][infoname.valid];

                // 重新设置表单状态
                if (valid && !flag) {
                    this.$parent.$set(this.$parent[this.formname], infoname.valid, flag);
                    this.$parent.$set(this.$parent[this.formname], infoname.invalid, !flag);
                } else if (!valid && flag) {
                    for (let input of this.formInputs) {
                        flag = this.inputvalidator(input);
                        if (!flag) break;
                    }
                    this.$parent.$set(this.$parent[this.formname], infoname.valid, flag);
                    this.$parent.$set(this.$parent[this.formname], infoname.invalid, !flag);
                }
            })
        }
    }

    private initialize() {
        this.childloop(this.children);
        this.inputInit();
        this.statusWatch();
    }

    // 重置表单
    public resetForm() {
        this.inputInit();
        for (let vmodel of this.vmodels) {
            let v = vmodel.split('.');
            let obj = contract(this.$parent, v);
            let value = obj[v[v.length - 1]];
            if (value instanceof Array) {
                // 初始值是 Array 型
                this.$parent.$set(obj, v[v.length - 1], [])
            } else if (typeof value === 'boolean') {
                // 初始值是 boolean 型
                this.$parent.$set(obj, v[v.length - 1], false);
            } else {
                // 其它类型
                this.$parent.$set(obj, v[v.length - 1], '');
            }
        }
    }
}
