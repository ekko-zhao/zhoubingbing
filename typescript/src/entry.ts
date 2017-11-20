interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = { firstName: "Jane", lastName: "User" };

document.body.innerHTML = greeter(user);


var [a, b, c] = [2, 3, 5];


var abc = [5, 6, 7];
for (let item of abc) {
    console.log(item);
}
let names = 'zhoubingbing';

var hh = {
    [names]: 'zhou'
}
