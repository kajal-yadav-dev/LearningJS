/*
var name = 23;


// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i])
// }

// console.log(numbers);

var person = ["john", true, 46];
person[3] = "happy"
var shopping = ["bags", "watch", "dress", "shoes"]

function isEven(element, index, array) {
    // console.log(`current index is ${index}`)
    // console.log(`current element is ${element}`);
    // console.log(array)
    return element % 5 === 0

}

// const result = numbers.filter(isEven);
// console.log(result)

// console.log(shopping);
// console.log(person.concat(shopping))



// Filer, reduce, map,

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 25, 30, 45];


function isPrime(num) {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}


const result = isPrime(6);
console.log(result)


var nums = [1, 2, 3, 4, 5, 5, 6, 7, 8, 89, 13, 19, 23, 29]

function filterPrimeNumbers(numbers) {
    var primeNumbers;

    // for (let i = 0; i < numbers.length; i++) {
    //     if (isPrime(numbers[i])) {
    //         primeNumbers.push(numbers[i])
    //     }
    // }
    primeNumbers = numbers.filter(isPrime)
    return primeNumbers;
}


const primeNumbers = filterPrimeNumbers(nums);
console.log(primeNumbers)
*/

var myObj = {}

myObj.isEven = function (givenNum) {
    if (givenNum % 2 === 0) {
        return true;
    }
    return false;
};

console.log(myObj.isEven(10)); // true
console.log(myObj.isEven(19)); // false

