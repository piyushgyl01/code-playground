const isBirthday = true;
let age = 25;

if (isBirthday) {
    age += 1;
}

console.log("Program 1:");
console.log(`Current Age: ${age}`);
console.log("\n");

const passengerAge = 65;
const ticketPrice = 100;
let discountedPrice;

if (passengerAge > 60) {
    discountedPrice = ticketPrice * 0.85;
    console.log("Program 2:");
    console.log(`Ticket price for age greater than 60: ${discountedPrice}`);
} else {
    console.log("Program 2:");
    console.log(`Ticket price for age less than or equal to 60: ${ticketPrice}`);
}
console.log("\n");

const num1 = 10;
const num2 = 20;
const num3 = 15;

console.log("Program 3;");
if (num3 > num1 && num3 < num2) {
    console.log(`The third number ${num3} is the largest.`);
} else {
    console.log(`The third number ${num3} is not the largest.`);
}
console.log("\n");

const priceSaree = 500;
const priceKurta = 300;
const priceJeans = 900;
const priceShoes = 400;

let totalCartPrice = priceJeans + priceKurta + priceSaree + priceShoes;
let deliveryCharge;

console.log("Program 4");
if (totalCartPrice < 1999) {
    deliveryCharge = 90;
    totalCartPrice =+ deliveryCharge;
    console.log("Shopping Cart with optional Delivery Charges")
} else {
    deliveryCharge = "No Delivery Charge";
    console.log("Shopping Cart:")
}

console.log("-------------------------------");
console.log(`Item: Saree, Price: ${priceSaree}`);
console.log(`Item: Kurta, Price: ${priceKurta}`);
console.log(`Item: Jeans, Price: ${priceJeans}`);
console.log(`Item: Shoes, Price: ${priceShoes}`);
console.log("-------------------------------");
console.log(`Delivery Charges: ${deliveryCharge}`);
console.log("-------------------------------");
console.log(`Total Cart Price: ${totalCartPrice}`);
console.log("\n");

console.log("Program 5");
const number = 10;

if (number > 6) {
    console.log("The number is positive");
} else if (number < 0) {
    console.log("The number is negative");
} else {
    console.log("The number is zero.")
}
console.log("\n");

console.log("Program 6")

const marks1 = 85;
const marks2 = 90;
const marks3 = 78;

const student1 = "Rahul";
const student2 = "Priya";
const student3 = "Tine";

if (marks1 > marks2 && marks1 > marks3) {
    console.log(`${student1} has the highest marks: ${marks1}`)
} else if (marks2 > marks1 && marks2 > marks3) {
    console.log(`${student2} has the highest marks: ${marks2}`)
} else {
    console.log(`${student3} has the highest marks: ${marks3}`)
}