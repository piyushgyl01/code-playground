console.log("A4.1_CW");
console.log("---- ---- ----");

console.log("Excercise 1");
console.log("---- ---- ----");

console.log("1.1");
function greetUser() {
    console.log("Welcome to our website!");
}

greetUser();

console.log("1.2");
function greetPerson(name) {
    console.log(`Hello ${name}! Welcome to our Website`);
}

greetPerson("Adarsh");

console.log("1.3");
function formatMessage(message) {
    return "*" + message + "*";
}

console.log(formatMessage("Hello, World!"));

console.log("1.4");
function combineStrings(string1, string2) {
    return string1 + " " + string2;
}

console.log(combineStrings("Hello", "world"));

console.log("---- ---- ----");
console.log("Excercise 2");
console.log("---- ---- ----");

console.log("2.1");
function incrementAge(age) {
    return age + 1; 
}

console.log(incrementAge(22));

console.log("2.2");
function calculateSquare(number) {
    return number * number;
}

console.log(calculateSquare(2));

console.log("2.3");
function calculateDiscountedPrice(price, discountedPrice) {
    return price - (price * discountedPrice) / 100;
}

console.log(calculateDiscountedPrice(500, 5));

console.log("2.4");
function calculateSalary(hoursWorked, hourlyRate) {
    return hourlyRate * hoursWorked;
}

console.log(calculateSalary(24, 500));