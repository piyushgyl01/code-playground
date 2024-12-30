console.log("Question 1");
console.log("--- --- ---");
let age = 20;
console.log(`Orginal age: ${age}`);
age = 22;
console.log(`Updated age: ${age}`);
console.log("");

console.log("Question 2");
console.log("--- --- ---");
let num1 = 20;
let num2 = 5;
let product = num1 * num2;
let difference = num1 - num2;
console.log(`Product of num1 & num2: ${product}`);
console.log(`Differnece between num1 and num2: ${difference}`);
console.log("");

console.log("Question 3");
console.log("--- --- ---");
const numberOfGates = 5;
// numberOfGates = 6;
console.log("");

console.log("Question 4");
const person = {
    name: "Ehe",
    age: 13
};
console.log(`Original Person: Name=${person.name} Age=${person.age}`)
person.age = 31;
console.log(`Updated Person: Name=${person.name} Age=${person.age}`)
console.log("");

console.log("Question 5");
let colors = {
    primary: "red",
    secondary: "blue",
}
console.log(colors);
colors.tertiary = "green";
console.log(colors);
console.log("");

console.log("Question 6");
const numbers = [1, 2, 3, 4];
numbers [2] = 99;
console.log (numbers)
// value will change
console.log("");

console.log("Question 7");
const coordinates = {
    x: 10,
    y: 20
};
console.log(coordinates);
const newCoordinates = {
    x: 30,
    y: 40
};
// coordinates = newCoordinates;
// TypeError: Assignment to constant variable.
console.log("");

console.log("Question 8");
let obj = { a: 1, b: 2 }
const obj2 = { a: 3, b: 4 }
obj = obj2
console.log(obj)
console.log(obj2)
console.log("");

console.log("Question 9");
const numericVar = 2
numericVar = 3
console.log("");

console.log("Question 10");
const greeting = "Hello"
console.log(greeting)
let name = " Jay"
name = " Shawn"
console.log(greeting + name)