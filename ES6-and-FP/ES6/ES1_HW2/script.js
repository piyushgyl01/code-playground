function calculateSalary(hoursWorked, hourlyRate) {
    const salary = hourlyRate * hoursWorked;
    return salary;
}

console.log(calculateSalary(45, 25));

function calculateBonus(workedHours, marks, salary) {
    if (workedHours > 25 && marks > 85) {
        return salary * 1.10;
    } else if (workedHours > 15 && marks > 75) {
        return salary * 1.05;
    } else {
        return salary;
    }
}

console.log(calculateBonus(20, 80, 5000));

function calculateFinalAmount(price1, quantity1, price2, quantity2) {
    const total1 = price1 * quantity1;
    const total2 = price2 * quantity2;
    const finalAmount = total1 + total2;
    return finalAmount;
}

console.log(calculateFinalAmount(200, 10, 500, 5));

function calculateAllowance(age, isStudent, baseAllowance) {
    if (age < 18 && isStudent) {
        return baseAllowance + 100;
    } else if (age >= 18 && age <= 25 && isStudent) {
        return baseAllowance + 50;
    } else {
        return baseAllowance;
    }
}

console.log(calculateAllowance(16, true, 500));

function calculateShippingCost(totalWeight, country, baseCost) {
    if (totalWeight <= 1 && country === "Local") {
        return baseCost + 10;
    } else if (totalWeight > 1 && country === "International") {
        return baseCost + 20;
    } else {
        return baseCost;
    }
}

console.log(calculateShippingCost(0.5, "Local", 50));