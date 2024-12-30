const addNumbers = (a, b = 1) => a + b;
console.log(addNumbers(2));

const multiplyNumbers = (a, b = 1) => a * b;
console.log(multiplyNumbers(2, 2));

const concatenateStrings = (name, greeting = "Hello ") => greeting + name;
console.log(concatenateStrings("Bob"));

const greetUser = (name = "neoGrammer", greeting = "Hello ") => greeting + name;
console.log(greetUser());

const addThreeNumbers = (a, b, c = 3) => a + b + c;
console.log(addThreeNumbers(1, 3));