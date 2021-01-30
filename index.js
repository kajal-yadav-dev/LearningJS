// 1. Ways to print in Javascript
//console.log("hello world")
// alert("me")
// document.write("this is my document")

// 2. Javscript console API
// console.log("hello world", 4 + 6, "ANOTHER log")
// console.warn("this is warning")
// console.error("this is error")

// 3. Javascript Variables
// what are variables? - container to store data values
/*
multi
line
comments 
*/
var number1 = 34;
var number2 = 56;
// console.log(number1 + number2)

// 4. Data Types in Javascript
// numbers
var num1 = 455;
var num2 = 56.76;

// strings
var str1 = "this is string"
var str2 = 'this is also string'

// Objects
var marks = {
    ravi: 34,
    shubham: 87
}
// console.log(marks)

// booleans
var a = true;
// var b = false;
// console.log(a, b)

// var und = (undefined)
var und
// console.log(und)

var n = null
// console.log(n)

/*
At a very high level, there are two types of  data types in Javascript
1. Premitive data types:undefined, null, number, boolean, string, symbol
2. Refrence data types: Arrays and Objects
*/

var arr = [1, 2, 3, 4, 5]

// Operaters in Javascript
// Arithmetic operators
var a = 100
var b = 10
// console.log("the value of a + b", a + b);
// console.log("the value of a - b", a - b);
// console.log("the value of a * b", a * b);
// console.log("the value of a / b", a / b);

// Assignment operators
var c = b;
//c -= 2
// c += 2 // c = c + 2
//c *= 2
//c /= 2

// console.log(c)

// Comparison Operators
var x = 34;
var y = 56
// console.log(x == y)
// console.log(x >= y)
// console.log(x <= y)

// Logical Operators

// Logical and
// console.log(4 && 5)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)
// console.log(true && true)

// Logical or
// console.log(true ||  true)
// console.log(true ||  false)
// console.log(false ||  true)
// console.log(false ||  false)

// Logical not
// console.log(!false)
// console.log(!true)

// Functions in Javscript

// function avg(a, b) {
//     c = (a + b) / 2;
//     return c;
// }
// DRY = DO NOT REPEAT YOURSELF
// c1 = avg(4, 6)
// c2 = avg(14, 16)
// console.log(c1, c2)

// Conditions in Javascript
var age = 19
// Single if Statement
// if (age > 18) {
//     console.log('you can drive')
// }
// if - else statement
// if (age > 18) {
//     console.log('you can drink water')
// }
// else {
//     console.log('you cannot drink water')
// }
// if-else Ladder
// if (age > 24) {
//     console.log("you can also drive")
// }
// else if (age > 32) {
//     console.log("you can drive too")
// }
// else if (age > 42) {
//     console.log("you are capable to drive")
// }
// else {
//     console.log("you can drive the car")
// }
// console.log("end of ladder")



// var arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr);
// for (i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// DOM Manipulation
// var elem = getelementbyid("click")
// console.log(elem)

// var elemclass = getelementbyclassname("containor")
// console.log(elemclass)


/* loops in javascript
while
for
do while

operators in javascript
 logical or
 logical not

functions in javascript




*/

function eligiblity(number) {
    if (age < 18) {
        return "you are not eligible";
    }
    else if (age > 22) {
        return "you are eligible"
    }
    else {
        return "you can drive"
    }

    return "eligible";
}

var result = eligiblity(17)
var result1 = eligiblity(23)
console.log(result, result1)
