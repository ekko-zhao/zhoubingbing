export var MyVueValidator = function(context) {
    if (!context.$attrs.name) throw "form no nama property";
    var classarr = ['pristine', 'dirty', 'valid', 'invalid'];
    var infoname = {
        pristine: 'pristine',
        dirty: 'dirty',
        valid: 'valid',
        invalid: 'invalid',
        required: 'required',
        min: 'minlength',
        max: 'maxlength',
        pattern: 'pattern'
    }
    var status = ['$error']

    // 父组件
    var $parent = this.$parent = context.$parent;

    // form 名字
    this.formname = context.$attrs.name;

    // 获取引用对象
    this.obj = $parent[this.formname];

    // 获取 form 中的 children;
    this.children = context.$slots.default;

    // form 中所有的表单的 name
    this.formkeys = [];

    // form 中所有的表单
    this.forminputs = [];

    // 赋值 formkeys  forminputs
    this.childloop = function(arr) {
        if (!arr) return;
        for (let child of arr) {
            if (child.children) {
                this.childloop(child.children);
            } else {
                if (child.tag && (child.tag === "input" || child.tag === "select" || child.tag === "textarea")) {
                    let name = child.data.attrs.name;
                    if (!name) continue;
                    this.formkeys.push(name);
                    this.forminputs.push(child.elm);
                }
            }
        }
        // 数组去重
        let set = new Set(this.formkeys);
        this.formkeys = [...set];
    };

    // form 和 input的状态
    this.inputvalidator = function(input) {
        var required = input.getAttribute('required');
        var minlength = parseInt(input.getAttribute('min-length'));
        var maxlength = parseInt(input.getAttribute('max-length'));
        var pattern = eval(input.getAttribute('pattern'));
        var value = input.value;
        var valueempty = (value === '' || value.trim() === '');
        var name = input.name;

        // 用于 this.$set
        var objinput = $parent[this.formname][name];

        // input的状态， flag：true 为 合法, flag：false 为 非法
        var flag = true;

        // 是否为空
        if (required && valueempty) {
            flag = false;
            $parent.$set(objinput, 'required', true);
        } else if (required) {
            $parent.$set(objinput, 'required', false);
        }

        // 设置 表单 pristine dirty 状态
        if (!valueempty) {
            $parent.$set(objinput, 'pristine', false);
            $parent.$set(objinput, 'dirty', true);
        }

        if (minlength && value.length < minlength) {
            // 值不为空时 赋值
            if (!valueempty) flag = false;
            $parent.$set(objinput, 'minlength', true);
        } else if (minlength) {
            $parent.$set(objinput, 'minlength', false);
        }
        // 最大长度
        if (maxlength && value.length > maxlength) {
            if (!valueempty) flag = false;
            $parent.$set(objinput, 'maxlength', true);
        } else if (maxlength) {
            $parent.$set(objinput, 'maxlength', false);
        }
        // 正则
        if (pattern && !pattern.test(value)) {
            if (!valueempty) flag = false;
            $parent.$set(objinput, 'pattern', true);
        } else if (pattern) {
            $parent.$set(objinput, 'pattern', false);
        }

        // flag 状态
        if (flag) {
            input.classList.remove('invalid');
            input.classList.add('valid');
        } else {
            input.classList.remove('valid');
            input.classList.add('invalid');
        }
        // input状态
        $parent.$set(objinput, 'valid', flag);
        $parent.$set(objinput, 'invalid', !flag);
        return flag;
    }

    var inputaddEvent = function(event) {
        let input = event.target;
        input.classList.remove('pristine');
        input.classList.add('dirty');

        let flag = this.inputvalidator(input);
        // 表单状态
        let valid = $parent[this.formname]['valid'];
        if (valid && !flag) {
            $parent.$set($parent[this.formname], 'valid', flag);
            $parent.$set($parent[this.formname], 'invalid', !flag);
        } else if (!valid && flag) {
            let flag = true;
            for (let input of this.forminputs) {
                flag = this.inputvalidator(input);
            }
            $parent.$set($parent[this.formname], 'valid', flag);
            $parent.$set($parent[this.formname], 'invalid', !flag);
        }
    }.bind(this);

    // 初始化表单
    this.inputsinit = function() {
        // 设置 表单 pristine dirty 状态
        for (let c of this.formkeys) {
            var objinput = $parent[this.formname][c];
            $parent.$set(objinput, 'pristine', true);
            $parent.$set(objinput, 'dirty', false);
        }
        var flag = true;
        for (let input of this.forminputs) {
            input.classList.remove('dirty');
            input.classList.add('pristine');
            input.removeEventListener('input', inputaddEvent);
            input.addEventListener('input', inputaddEvent);

            var f = this.inputvalidator(input);
            if (!f) flag = f;
        }
        $parent.$set($parent[this.formname], 'valid', flag);
        $parent.$set($parent[this.formname], 'invalid', !flag);
    }

    // 状态更新 $parent.$watch
    this.statuswatch = function() {
        var $this = this;
        for (let name of this.formkeys) {
            $parent.$watch(name, function() {
                let flag = true;
                for (let input of $this.forminputs) {
                    if (name === input.name) {
                        flag = $this.inputvalidator(input);
                        break;
                    };
                }
                // 表单状态
                let valid = $parent[$this.formname]['valid'];
                if (valid && !flag) {
                    $parent.$set($parent[$this.formname], 'valid', flag);
                    $parent.$set($parent[$this.formname], 'invalid', !flag);
                } else if (!valid && flag) {
                    let flag = true;
                    for (let input of $this.forminputs) {
                        flag = $this.inputvalidator(input);
                    }
                    $parent.$set($parent[$this.formname], 'valid', flag);
                    $parent.$set($parent[$this.formname], 'invalid', !flag);
                }
            })
        }
    }

    var contract = function($scope, array) {
        var form;
        if (array.length > 1) {
            if (!$scope[array[0]]) {
                $scope[array[0]] = {};
            };
            form = $scope[array[0]];
            for (var i = 1; i < array.length - 1; i++) {
                if (!form[array[i]]) form[array[i]] = {};
                form = form[array[i]];
            }
        } else {
            form = $scope;
        }
        console.log(999);
        console.log(form);
        return form;
    }

    this.restForm = function() {
        var obj = {}
        var a = ['form', 'input6', 'name']
        var c = contract(obj, a);
        console.log(222);
        console.log(obj);
        c.name = 'zhoubingbing'
        console.log(c === obj.input6);
        console.log(obj);
        console.log(222);

        for (let c of this.formkeys) {

            /* var objinput = $parent[this.formname][c];
            $parent.$set(objinput, 'pristine', true);
            $parent.$set(objinput, 'dirty', false); */
        }
    }

    this.initialize = function() {
        this.childloop(this.children);
        this.inputsinit();
        this.statuswatch();
        this.restForm()
    }

    this.initialize()

}
