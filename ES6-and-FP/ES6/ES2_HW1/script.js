const calculateArea = (length, width) => length * width;
console.log("Area of rectangle:", calculateArea(10, 5)); 

const isDivisible = (a, b) => a % b === 0;
console.log("Is 15 divisible by 5?:", isDivisible(15, 5));

const calculateDifference = (a, b) => a - b;
console.log("Differnece between 15 & 5 is: ", calculateDifference(15, 5))

const concatenateStrings = (str1, str2, str3) => str1 + " " + str2 + " " + str3;
console.log(concatenateStrings("I", "am", "happy")); // Output: I am happy

const isBigger = (a, b) => a > b;
function isBiggerOg(a, b) {
    return a > b;
}
console.log("Is 2 bigger than 3?", isBiggerOg(2, 3)); 

function printProduct(a, b) {
    return a * b;
}

const printProductArrow = (a, b) => a * b;

console.log("Product of two numbers:", printProductArrow(2, 6));

function getGreeting(greeting, name) {
    return greeting + name;
}

const getGreetingArrow = (greeting, name) => greeting + name;
console.log(getGreetingArrow("Hello ", "John"));