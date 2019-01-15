/* var TestFn = function () {}
TestFn.prototype.method1 = function () {
    console.log('method1')
}
TestFn.prototype.method2 = function (str) {
    console.log(str)
    return str
}

exports.TestFn = TestFn
 */

export class TestFn {
    method1() {
        console.log('method1 ts');
    }
    method2(str) {
        console.log('method2 ts');
        return str
    }
}
