

function Sum(firstNumber = 23, secondNumber = 24) {
    // console.log(firstNumber, '#######')
    // if (firstNumber != 23) {
    //     return firstNumber * secondNumber;
    // }

    function Add10More(firstNumber) {
        var secondNumber = 33;
        return firstNumber + secondNumber;

    }

    return Add10More;

    // Add10More(50);
    console.log('AddMore result = ', Add10More(50));
}

// console.log(firstNumber);
var fn = Sum(333);
fn();
// console.log(Sum());
console.log(Sum(25, 222))
// console.log(firstNumber);
// console.log(Sum(344, 4444));
// console.log(Sum(234242342424242342, 23423423432423432423));

var first = 22;
// console.log(first);
first = 34;
// console.log(first);

function getSecretcode(value) {
    code = value * 42;
    return code;
}

getSecretcode(43, 5);
console.log(code);

function election(name, age) {
    if (age >= 18)
        return `You are eligible ${name} darling`
    else
        return `You are not eligible ${name} darling`


}


var result1 = election('Neelam', 27);
var result2 = election('kajal', 10);

console.log(result1, result2)