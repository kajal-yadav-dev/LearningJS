function AddTowNumber(num1, num2) {
    var name = 'Kajal';
    // console.log(`My name is ${name}: I am from AddTwoNumber`)

    var somename = function () {
        console.log(name)
    }

    return function AddNumber(num3) {
        var name = 'Neelam';

        var somename = function () {
            console.log(name)
        }

        console.log(`My name is ${name}: I am from AddNumber`)
        somename();

    }


}

var firstArg = 103;
var secound = 34;
const fn = AddTowNumber(firstArg, secound);
console.log(fn())


// console.log(fn);