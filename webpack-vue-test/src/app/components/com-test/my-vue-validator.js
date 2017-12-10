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

    // form 名字
    // this.formname = "$" + context.$attrs.name;
    this.formname = context.$attrs.name;
    //this.obj = {};

    //context.$parent.$set(this.formname, this.obj);
    //console.log(context.$parent[this.formname]);

    this.obj = context.$parent[this.formname];
    // console.log(this.obj);

    // 获取 form 中的 children;
    this.children = context.$slots.default;
    this.formkeys = [];
    this.forminputs = [];

    // 获取 input，及所有 input的 name  属性
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

    //
    this.forminit = function() {
        for (let c of this.formkeys) {
            var objinput = context.$parent[this.formname][c];
            context.$parent.$set(objinput, '$error', {});

            /* this.obj[c] = {
                $error: {}
            } */
        }
    }

    // form 和 input的状态
    this.inputvalidator = function(input) {
        var required = input.getAttribute('required');
        var minlength = parseInt(input.getAttribute('min-length'));
        var maxlength = parseInt(input.getAttribute('max-length'));
        var pattern = eval(input.getAttribute('pattern'));
        var value = input.value;
        var name = input.name;

        // 用于 this.$set
        var objinput = context.$parent[this.formname][name];

        var flag = true;
        // 是否为空
        if (value === '') {
            if (required) {
                flag = false;
                context.$parent.$set(objinput, 'required', true);
            } else {
                context.$parent.$set(objinput, 'required', false);
            }
        } else {
            if (required && value.trim() === '') {
                flag = false;
                context.$parent.$set(objinput, 'required', true);
            } else if (required) {
                context.$parent.$set(objinput, 'required', false);
            }
        }

        // 最小长度
        if (minlength && value.length < minlength) {
            console.log(111111)
            console.log(value.length)
            console.log(2222222)
            flag = false;
            context.$parent.$set(objinput, 'minlength', true);
        } else {
            context.$parent.$set(objinput, 'minlength', false);
        }
        console.log(333333)
        console.log(flag)
        console.log(44444)
        // 最大长度
        if (maxlength && value.length > maxlength) {
            flag = false;
            context.$parent.$set(objinput, 'maxlength', true);
        } else {
            context.$parent.$set(objinput, 'maxlength', false);
        }
        // 正则
        if (pattern && !pattern.test(value)) {
            flag = false;
            context.$parent.$set(objinput, 'pattern', true);
        } else {
            context.$parent.$set(objinput, 'pattern', false);
        }

        if (flag) {
            input.classList.remove('invalid');
            input.classList.add('valid');
        } else {
            input.classList.remove('valid');
            input.classList.add('invalid');
        }
        console.log(999999)
        console.log(flag)
        console.log(888888)
        // context.$parent.$set(context.$parent[this.formname], 'valid', !flag);
        // context.$parent.$set(context.$parent[this.formname], 'invalid', flag);
        return flag;
    }

    var inputaddEvent = function(event) {
        var input = event.target;
        input.classList.remove('pristine');
        input.classList.add('dirty');
        this.inputvalidator(input);
    }.bind(this);

    // 标点 input 事件
    this.inputaddEvent = function() {
        for (let input of this.forminputs) {
            input.removeEventListener('input', inputaddEvent);
            input.addEventListener('input', inputaddEvent);
        }
    }

    // 初始化表单
    this.inputsinit = function() {
        for (let input of this.forminputs) {
            input.classList.remove('dirty');
            input.classList.add('pristine');
            this.inputvalidator(input);
        }
    }


    this.initialize = function() {
        this.childloop(this.children);
        // this.forminit();
        this.inputsinit();
        this.inputaddEvent()
    }
    this.initialize()

}
