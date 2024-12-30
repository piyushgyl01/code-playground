console.log("A3.3_HW_1")
console.log("---- ---- ----")

console.log("Excercise 1")
let employe1Name = "Rahul"
let employee1Grade = 90
let employee1HoursWorked = 27
let employee1Salary = 45000
let employee1VacationLeaveTaken = 2
let employee1SickLeaveTaken = 1

let employee1Bonus = 0

if (employee1HoursWorked > 30 && employee1Grade > 75) {
    employee1Bonus = 0.2
} else if (employee1HoursWorked > 25 && employee1Grade > 95) {
    employee1Bonus = 0.15
} else if (employee1HoursWorked > 25 && employee1Grade > 85) {
    employee1Bonus = 0.1
} else {
    employee1Bonus = 0
}

let employee1PFDeduction = 0

if (employee1Salary > 35000) {
    employee1PFDeduction = employee1Salary * 12.5 / 100
} else {
    employee1PFDeduction = 2500
}

let employee1TDSDeduction = ""

if (employee1Salary > 40000) {
    employee1TDSDeduction = employee1Salary * 0.1
} else {
    employee1TDSDeduction = 199
}

let employee1VacationDeduction = employee1VacationLeaveTaken * (employee1Salary / 30)
let employee1SickDeduction = employee1SickLeaveTaken * (employee1Salary / 30)

const employee1NetSalary = (employee1Salary + (employee1Salary * employee1Bonus)) - (employee1PFDeduction + employee1TDSDeduction + employee1VacationDeduction + employee1SickDeduction)

console.log("Payslip for employee 1:")
console.log("Employee Name:", employe1Name)
console.log("Grade:", employee1Grade)
console.log("Hours Worked:", employee1HoursWorked)
console.log("Salary:", employee1Salary)
console.log("Bonus:", employee1Bonus)
console.log("PD Deduction:", employee1PFDeduction)
console.log("Vacation Deduction:", employee1VacationDeduction)
console.log("Sick Deduction:", employee1SickDeduction)
console.log("Net Salary:", employee1NetSalary)
console.log("")

let employe2Name = "Ram"
let employee2Grade = 82
let employee2HoursWorked = 90
let employee2Salary = 860000
let employee2VacationLeaveTaken = 0
let employee2SickLeaveTaken = 1

let employee2Bonus = 0

if (employee2HoursWorked > 30 && employee2Grade > 75) {
    employee2Bonus = 0.2
} else if (employee2HoursWorked > 25 && employee2Grade > 95) {
    employee2Bonus = 0.15
} else if (employee2HoursWorked > 25 && employee2Grade > 85) {
    employee2Bonus = 0.1
} else {
    employee2Bonus = 0
}

let employee2PFDeduction = 0

if (employee2Salary > 35000) {
    employee2PFDeduction = employee2Salary * 12.5 / 100
} else {
    employee2PFDeduction = 2500
}

let employee2TDSDeduction = ""

if (employee2Salary > 40000) {
    employee2TDSDeduction = employee2Salary * 0.1
} else {
    employee2TDSDeduction = 199
}

let employee2VacationDeduction = employee2VacationLeaveTaken * (employee2Salary / 30)
let employee2SickDeduction = employee2SickLeaveTaken * (employee2Salary / 30)

const employee2NetSalary = (employee2Salary + (employee2Salary * employee2Bonus)) - (employee2PFDeduction + employee2TDSDeduction + employee2VacationDeduction + employee2SickDeduction)

console.log("Payslip for employee 2:")
console.log("Employee Name:", employe2Name)
console.log("Grade:", employee2Grade)
console.log("Hours Worked:", employee2HoursWorked)
console.log("Salary:", employee2Salary)
console.log("Bonus:", employee2Bonus)
console.log("PD Deduction:", employee2PFDeduction)
console.log("Vacation Deduction:", employee2VacationDeduction)
console.log("Sick Deduction:", employee2SickDeduction)
console.log("Net Salary:", employee2NetSalary)
console.log("")

let employe3Name = "Raja"
let employee3Grade = 96
let employee3HoursWorked = 100
let employee3Salary = 100000
let employee3VacationLeaveTaken = 0
let employee3SickLeaveTaken = 1

let employee3Bonus = 0

if (employee3HoursWorked > 30 && employee3Grade > 75) {
    employee3Bonus = 0.2
} else if (employee3HoursWorked > 25 && employee3Grade > 95) {
    employee3Bonus = 0.15
} else if (employee3HoursWorked > 25 && employee3Grade > 85) {
    employee3Bonus = 0.1
} else {
    employee3Bonus = 0
}

let employee3PFDeduction = 0

if (employee3Salary > 35000) {
    employee3PFDeduction = employee3Salary * 12.5 / 100
} else {
    employee3PFDeduction = 2500
}

let employee3TDSDeduction = ""

if (employee3Salary > 40000) {
    employee3TDSDeduction = employee3Salary * 0.1
} else {
    employee3TDSDeduction = 199
}

let employee3VacationDeduction = employee3VacationLeaveTaken * (employee3Salary / 30)
let employee3SickDeduction = employee3SickLeaveTaken * (employee3Salary / 30)

const employee3NetSalary = (employee3Salary + (employee3Salary * employee3Bonus)) - (employee3PFDeduction + employee3TDSDeduction + employee3VacationDeduction + employee3SickDeduction)

console.log("Payslip for employee 3:")
console.log("Employee Name:", employe3Name)
console.log("Grade:", employee3Grade)
console.log("Hours Worked:", employee3HoursWorked)
console.log("Salary:", employee3Salary)
console.log("Bonus:", employee3Bonus)
console.log("PD Deduction:", employee3PFDeduction)
console.log("Vacation Deduction:", employee3VacationDeduction)
console.log("Sick Deduction:", employee3SickDeduction)
console.log("Net Salary:", employee3NetSalary)
console.log("")