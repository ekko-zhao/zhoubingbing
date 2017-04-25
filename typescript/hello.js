// 启用 --strictNullChecks
function add(value) {
    switch (typeof value) {
        case "string":
            return "my name is " + value + "."; //这里的(`)是键盘esc键下面的那个（`）并非单引号
        case "number":
            return "my age is " + value + ".";
        case "boolean":
            return "i am " + value;
    }
}
