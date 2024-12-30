console.log("A4.3_CW");

console.log("--- --- ---");
console.log("Excercise 1");
console.log("--- --- ---");

let hourlyRate = 500;
let hoursWorked = 40;

function calculateGrossPay(hourlyRate, hoursWorked) {
    return hoursWorked * hourlyRate;
}

let grossPay = calculateGrossPay(hourlyRate, hoursWorked);
console.log("Gross Pay: " + grossPay)

console.log("--- --- ---");
console.log("Excercise 2");
console.log("--- --- ---");

let overTimeRate = 1.5;

function calculateOvertimePay(hourlyRate, hoursWorked, overTimeRate) {
    let overTimePay = 0;
    if (hoursWorked > 40) {
        let overTimeHours = hoursWorked - 40;
        overTimePay = overTimeHours * hourlyRate * overTimeRate;
    }
    return overTimePay;
}

let overTimePay = calculateOvertimePay(hourlyRate, hoursWorked, overTimeRate);
console.log("Overtime Pay: " + overTimePay)

console.log("--- --- ---");
console.log("Excercise 3");
console.log("--- --- ---");

let taxRate = 0.2;
let insuranceRate = 0.1;
let retirementRate = 0.05;

function calculateDeductions(grossPay, taxRate, insuranceRate, retirementRate) {
    let taxAmount = grossPay * taxRate;
    let insuranceAmount = grossPay * insuranceRate;
    let retirementAmount = grossPay * retirementRate;
    return taxAmount + insuranceAmount + retirementAmount;
}

let deductions = calculateDeductions(grossPay, taxRate, insuranceRate, retirementRate);
console.log("Dedcutions: " + deductions);

console.log("--- --- ---");
console.log("Excercise 4");
console.log("--- --- ---");

function calculateNetPay(grossPay, overTimePay, deductions) {
    return grossPay + overTimePay - deductions;
}

let netPay = calculateNetPay(grossPay, overTimePay, deductions)
console.log("Net pay: ", + netPay)

console.log("--- --- ---");
console.log("Excercise 5");
console.log("--- --- ---");

let performanceScore = 7;

function calculateBonus(performanceScore) {
    let bonus = 0;

    if (performanceScore >= 8) {
        bonus = 10000;
    } else if (performanceScore >= 6) {
        bonus = 5000;
    } else if (performanceScore >= 4) {
        bonus = 2500;
    } else {
        bonus = 0;
    }
    return bonus;
}

let bonusAmount = calculateBonus(performanceScore)
console.log("Bonus Amount: " + bonusAmount)

console.log("--- --- ---");
console.log("Excercise 6");
console.log("--- --- ---");

function generatePayStub(employeeName, hourlyRate, hoursWorked, overTimePay, grossPay, deductions, netPay, bonusAmount) {
    let payStub = "Pay stub for " + employeeName + "\n" + "Hourly Rate: " + hourlyRate + "\n" + "Hours Worked: " + hoursWorked + "\n" + "Gross Pay: " + grossPay + "\n" + "Overtime Pay: " + overTimePay + "\n" + "Deductions: " + deductions + "\n" + "Bonus: " + bonusAmount + "\n" + "Final Net Pay: " + (grossPay + overTimePay + bonusAmount - deductions);
    return payStub;
}

console.log(generatePayStub("Rahul", hourlyRate, hoursWorked, overTimePay, grossPay, deductions, netPay, bonusAmount))