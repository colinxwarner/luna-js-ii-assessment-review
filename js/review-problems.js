"use strict";

//TODO: Write a function named 'typeOfValue' that takes in a value and returns its type.

function typeOfValue(input) {
    return typeof(input);
}

console.log (typeOfValue("hello"))      // "string"
console.log(typeOfValue(123))         // "number"
console.log(typeOfValue([]))          // "object"
console.log(typeOfValue([4,5,6]))     // "object"





//TODO: Write a function named 'isPositive' that takes in a number and returns true or false based on whether the input is positive.
function isPositive(num) {
    return (num > 0);
}
console.log(isPositive(2))         // true
console.log(isPositive(-4))       // false
console.log(isPositive(0))        // false





//TODO: Write a function named getLowestNumber that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the lowest number. If any of the 3 inputs is missing or non-numeric, then return false.

function getLowestNumber(x, y, z) {
    if (isNaN(x) || isNaN(y) || isNaN(z)) {
        return false
    } else {
        return Math.min(x, y, z);
    }
}
console.log(getLowestNumber(1, 3, 2))         // 1
console.log(getLowestNumber(0, 1, "2"))        // 0
console.log(getLowestNumber(1, 2, 'x'))        // false





//TODO: Write a function named subtract that takes in two inputs. If both inputs provided are numeric, subtract will return the difference of both inputs. If one or both inputs is not numeric, subtract should return false.
function subtract(x, y) {
    if (isNaN(parseFloat(x)) && isNaN(parseFloat(y))) {
        return false;
    } else {
        return x - y;
    }
}
console.log(subtract(2, 1))            // 1
console.log(subtract("2", 4))           // -2
console.log(subtract(true, false))      // false
console.log(subtract("red", "blue"))     // false





//TODO: Write a function named divisibleByThree that takes in an input and returns a boolean indicating whether the input is divisible by 3.  Nonnumeric inputs should return false.
function divisibleByThree(input) {
    if (input %3 == 0) {
        return true
    } else {
        return false
    }
}
console.log(divisibleByThree(3))         // true
console.log(divisibleByThree("6"))       // true
console.log(divisibleByThree("8"))       // false
console.log(divisibleByThree("red"))     // false





//TODO: Write a function named isSumLess100 that accepts two inputs (x, y).  If one or more of the inputs is nonnumeric, return false.  Return true if the sum of both inputs is less than 100, otherwise return false.
function isSumLess100(x, y) {
    if ((parseInt(x)) + (parseInt(y)) < 100) {
    return true
        } else {
        return false
    }
}
console.log(isSumLess100(2, 49))           // true
console.log(isSumLess100("7", 97))         // false
console.log(isSumLess100("puppy", 8))      // false
console.log(isSumLess100("50", "49"))      // true