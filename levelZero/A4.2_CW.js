console.log("A4.2_CW");
console.log("--- --- ---");

console.log("Excercise 1");
console.log("--- --- ---");

console.log("1.1");
function checkTemperature(temp) {
    if (temp > 30) {
        console.log("it's a hot day")
    }
}

checkTemperature(35);

console.log("--- --- ---");

console.log("1.2");
function checkDIscoutnEligibilty(totalAmount, discountThreshold) {
    if (totalAmount >= discountThreshold) {
        console.log("You are eligible for a discount")
    } else {
        console.log("you are not eligible for a discount")
    }
}

checkDIscoutnEligibilty(500, 1000);

console.log("--- --- ---");

console.log("1.3");
function findLargestNumber(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}

console.log("The largest number is: " + findLargestNumber(25, 18, 32));

console.log("--- --- ---");

console.log("1.4");
function calculateBonus(workedHours, grade, totalSalary) {
    if (workedHours > 25 && grade >= 85) {
        return totalSalary = totalSalary + (totalSalary * 0.10);
    } else if (workedHours >= 15, grade >= 75) {
        return totalSalary = totalSalary + (totalSalary * 0.05);
    } else {
        return totalSalary;
    }
}

console.log("The updated salary with bonus is: " + calculateBonus(30, 90, 5000));