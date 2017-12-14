export var Validator = function(context) {
    if (!context.$attrs.name) throw "form no name property";
    var classarr = ['pristine', 'dirty', 'valid', 'invalid'];
    var infoname = {
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

    // form 名字
    this.formname = context.$attrs.name;

    // 父组件
    var $parent = context.$parent;
    var whileflag = true;
    while (whileflag) {
        if (!$parent[this.formname] && $parent) {
            $parent = $parent.$parent
        } else {
            whileflag = false;
        }
    }

    // 获取引用对象
    this.obj = $parent[this.formname];

    // 获取 form 中的 children;
    /* this.children = context.$slots.default; */
    this.children = context.$el.children; // onsen 中需要传入 context.$el.children

    // form 中所有的表单的 name
    this.formkeys = [];
    // 记录 表单中的 v-model
    this.vmodels = [];

    // form 中所有的表单
    this.forminputs = [];

    // 赋值 formkeys  forminputs
    this.childloop = function(arr) {
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
                    this.forminputs.push(child);
                    var model = child.getAttribute('data-model');
                    if (model)
                        this.vmodels.push(model);
                }
            }
        }

        /* if (!arr) return;
        for (let child of arr) {
            if (child.children) {
                this.childloop(child.children);
            } else {
                if (child.tag && (child.tag === "input" || child.tag === "select" || child.tag === "textarea")) {
                    let name = child.data.attrs.name;
                    if (!name) continue;
                    this.formkeys.push(name);
                    this.forminputs.push(child.elm);

                    if (child.data.directives) {
                        for (let directive of child.data.directives) {
                            if (directive.rawName === 'v-model') {
                                this.vmodels.push(directive.expression);
                                break;
                            };
                        }
                    }
                }
            }
        } */
        // 数组去重
        let set = new Set(this.formkeys);
        this.formkeys = [...set];

        let models = new Set(this.vmodels);
        this.vmodels = [...models];
    };

    var chkstrlen = function(str) {
        var strlen = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > 255)
                strlen += 2;
            else
                strlen++;
        }
        return strlen;
    }

    // form 和 input的状态
    this.inputvalidator = function(input) {
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
        var objinput = $parent[this.formname][name];

        // input的状态， flag：true 为 合法, flag：false 为 非法
        var flag = true;

        // 是否为空
        if (required && valueempty) {
            flag = false;
            $parent.$set(objinput, infoname.required, true);
        } else if (required) {
            $parent.$set(objinput, infoname.required, false);
        }

        // 设置 表单 pristine dirty 状态
        if (!valueempty) {
            $parent.$set(objinput, infoname.pristine, false);
            $parent.$set(objinput, infoname.dirty, true);
        }
        // 最小长度
        if (minlength && value.length < minlength) {
            // 值不为空时 赋值
            if (!valueempty) flag = false;
            $parent.$set(objinput, infoname.min, true);
        } else if (minlength) {
            $parent.$set(objinput, infoname.min, false);
        }
        // 最大长度
        if (maxlength && value.length > maxlength) {
            if (!valueempty) flag = false;
            $parent.$set(objinput, infoname.max, true);
        } else if (maxlength) {
            $parent.$set(objinput, infoname.max, false);
        }
        // 按字符最小长度
        if (mincharlength && chkstrlen(value) < mincharlength) {
            // 值不为空时 赋值
            if (!valueempty) flag = false;
            $parent.$set(objinput, infoname.minchar, true);
        } else if (mincharlength) {
            $parent.$set(objinput, infoname.minchar, false);
        }
        // 按字符最大长度
        if (maxcharlength && chkstrlen(value) > maxcharlength) {
            // 值不为空时 赋值
            if (!valueempty) flag = false;
            $parent.$set(objinput, infoname.maxchar, true);
        } else if (maxcharlength) {
            $parent.$set(objinput, infoname.maxchar, false);
        }

        // 正则
        if (pattern && !pattern.test(value)) {
            if (!valueempty) flag = false;
            $parent.$set(objinput, infoname.pattern, true);
        } else if (pattern) {
            $parent.$set(objinput, infoname.pattern, false);
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
        $parent.$set(objinput, infoname.valid, flag);
        $parent.$set(objinput, infoname.invalid, !flag);
        return flag;
    }

    var inputaddEvent = function(event) {
        let input = event.target;
        input.classList.remove(infoname.pristine);
        input.classList.add(infoname.dirty);

        let flag = this.inputvalidator(input);
        // 表单状态
        let valid = $parent[this.formname][infoname.valid];
        if (valid && !flag) {
            $parent.$set($parent[this.formname], infoname.valid, flag);
            $parent.$set($parent[this.formname], infoname.invalid, !flag);
        } else if (!valid && flag) {
            let flag = true;
            for (let input of this.forminputs) {
                flag = this.inputvalidator(input);
                if (!flag) break;
            }
            $parent.$set($parent[this.formname], infoname.valid, flag);
            $parent.$set($parent[this.formname], infoname.invalid, !flag);
        }
    }.bind(this);

    // 初始化表单
    this.inputsinit = function() {
        // 设置 input pristine dirty 状态
        for (let c of this.formkeys) {
            var objinput = $parent[this.formname][c];
            $parent.$set(objinput, infoname.pristine, true);
            $parent.$set(objinput, infoname.dirty, false);
        }
        var flag = true;
        for (let input of this.forminputs) {
            input.classList.remove(infoname.dirty);
            input.classList.add(infoname.pristine);
            input.removeEventListener('input', inputaddEvent);
            input.addEventListener('input', inputaddEvent);

            var f = this.inputvalidator(input);
            if (!f) flag = f;
        }
        $parent.$set($parent[this.formname], infoname.valid, flag);
        $parent.$set($parent[this.formname], infoname.invalid, !flag);
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
                let valid = $parent[$this.formname][infoname.valid];
                if (valid && !flag) {
                    $parent.$set($parent[$this.formname], infoname.valid, flag);
                    $parent.$set($parent[$this.formname], infoname.invalid, !flag);
                } else if (!valid && flag) {
                    let flag = true;
                    for (let input of $this.forminputs) {
                        flag = $this.inputvalidator(input);
                    }
                    $parent.$set($parent[$this.formname], infoname.valid, flag);
                    $parent.$set($parent[$this.formname], infoname.invalid, !flag);
                }
            })
        }
    }

    // 初始化 函数------------------------------------------------------------
    this.initialize = function() {
        this.childloop(this.children);
        this.inputsinit();
        this.statuswatch();
    }
    this.initialize();

    // 重置表单------------------------------------------------------------
    var contract = function($scope, array) {
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

    this.restForm = function() {
        for (let vmodel of this.vmodels) {
            let v = vmodel.split('.');
            var obj = contract($parent, v);
            $parent.$set(obj, v[v.length - 1], '');
        }
        this.inputsinit();
    }.bind(this);
    $parent.$set($parent[this.formname], infoname.restForm, this.restForm);

}
