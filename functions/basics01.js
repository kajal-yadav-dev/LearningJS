var myObj = {};
// 1. isEven - Write a function that determines if a given number is even or not

// 2. isOdd using isEven - Write a function that determines if a given number is odd or not. Use the isEven function

// 3. square - Write a function that provides the square of a given a number

// 4. cube - Write a function that provides the cube of a number using the square function already written.

// 5. GCD - Write a function that provides the greatest common divisor of two given numbers

// 6. LCM - Write a function that provides the least common multiple of two given numbers(use the HCF function)

// 7. Simple Interest - Write a function that calculates the simple interest on a given sum with a rate of interest over a given time period.

// 8. Compound Interest - Write a function that calculates the compound interest on a given sum with a rate of interest over a given time period.

// 9. Temperature Conversion - Write a function that converts a temperature from fahrenheit to centigrade.

// 10. Temperature Conversion - Write a function that converts a temperature from fahrenheit to centigrade.

// 11. Sum of 1 to n - Write a function that calculates the sum of the first n numbers(without loops. Using a formula)

// 12. Greatest of three numbers - Write a function that calculates the largest of three numbers

// 13. Average of three numbers - Write a function that calculates the average of three numbers

// 14. Average as a percentage- Given three numbers, compute the average of three numbers as a percentage of a specified number. Ex avgAsPercentage(3,4,5,100)=> 4%



// 1. isEven -a function that determines if a given number is even or not

myObj.isEven = function (givenNum) {
    if (givenNum % 2 === 0) {
        return true;
    }
    return false;
};

console.log(myObj.isEven(10)); // true
console.log(myObj.isEven(19)); // false

// 2. isOdd is a function that determines if a given number is odd or not. Use the isEven function

myObj.isOdd = function (givenNum) {
if (givenNum % 2 !== 0) {
        return true;
    }
    return false;
};

console.log(myObj.isOdd(10)) // false;
console.log(myObj.isOdd(5)) // true
// 3. square - Write a function that provides the square of a given a number

myObj.squared = function (square) {
if (number * number)
};

console.log(myObj.squared(4)) // 16
console.log(myObj.squared(3)) // 9
// 4. cube - Write a function that provides the cube of a number using the square function already written.

myObj.cube = function (number) {

};

console.log(myObj.cube(3)) // 27
console.log(myObj.cube(2)) // 8
console.log(myObj.cube(4)) //64
// 5. GCD - Write a function that provides the greatest common divisor of two given numbers

 myObj.gcdusingRecursion = function (firstNumber, secoundNumber) {
     reminder = firstNumber % secoundNumber;
     if (reminder == 0)
         return secoundNumber;
     return myObj.gcdusingRecursion(secoundNumber, reminder);
 };

// 6. LCM - Write a function that provides the least common multiple of two given numbers(use the HCF function)

myObj.lcm = function (firstNumber, secoundNumber) {

};



// 7. Simple Interest - Write a function that calculates the simple interest on a given sum with a rate of interest over a given time period.

myObj.simpleInterest = function (p, r, n) {

};
// 8. Compound Interest - Write a function that calculates the compound interest on a given sum with a rate of interest over a given time period.
myObj.compoundInterest = function (principle, rate, n_time) {

};

// 9. Temperature Conversion - Write a function that converts a temperature from fahrenheit to centigrade.

myObj.fornTocentigrade = function (forenTemp) {

};
// 10. Temperature Conversion - Write a function that converts a temperature from centigrade to fahrenheit.

myObj.centiTofahrenheit = function (centigrade) {

};
// 11.function that uses loops to calculate the sum of the first N numbers

myObj.sumOf1toN = function (copyOfgivenNo) {

};

// 12. Greatest of three numbers - Write a function that calculates the largest of three numbers

myObj.findingGrestestno = function (firstNum, secondNum, thirdNum) {

};
// 13. average function calculates the average of three numbers
myObj.average = function (number1, number2, number3) {

};
// 14. Average as a percentage- Given three numbers, compute the average of three numbers as a percentage of a specified number. Ex avgAsPercentage(3,4,5,100)=> 4%
myObj.average_Percentage = function (number1, number2, number3) {

};


exports.myObj = myObj;