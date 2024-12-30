console.log("A4.2_HW1");
console.log("---- ---- ----");

console.log("Excercise 1");
console.log("---- ---- ----");

console.log("1.1");
function checkAge(age) {
    if (age > 18) {
        console.log("You are eligible for voting")
    } else {
        console.log("You are not eligible for voting")
    }
}

checkAge(21);

console.log("---- ---- ----");

console.log("1.2");
function compareNumber(num1, num2) {
    if (num1 > num2) {
        return `${num1} is greater than ${num2}`
    } else {
        return `${num2} is greater than ${num1}`
    }
} 

console.log(compareNumber(10, 5));

console.log("---- ---- ----");

console.log("1.3");
function calculateShippingCost(totalWeight, country, baseCost) {
    if (totalWeight <= 1 && country === "Local") {
        return baseCost + 10;
    } else if (totalWeight >= 1 && country === "International") {
        return baseCost + 20;
    } else {
        return baseCost;
    }
}

console.log("The updated shipping cost: " + calculateShippingCost(0.5, "Local", 50));