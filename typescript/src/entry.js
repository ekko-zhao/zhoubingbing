function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: "Jane",
    lastName: "User"
};
document.body.innerHTML = greeter(user);
var _a = [2, 3, 5],
    a = _a[0],
    b = _a[1],
    c = _a[2];
var abc = [5, 6, 7];
for (var _i = 0, abc_1 = abc; _i < abc_1.length; _i++) {
    var item = abc_1[_i];
    console.log(item);
}
var names = 'zhoubingbing';
var hh = (_b = {},
    _b[names] = 'zhou',
    _b);
var _b;
