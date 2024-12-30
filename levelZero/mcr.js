let freelancer1 = "Sneha"
let freelancer2 = "Vikram"

let jobDescription1 = "App Developer"
let jobDescription2 = "SEO Specalist"

let hourlyRate1 = 300
let hourlyRate2 = 350

let hoursWorked1 = 78
let hoursWorked2 = 75

let ratings1 = 88
let ratings2 = 78

let isEligibleForBonus1 = hoursWorked1 > 50 || ratings1 > 80
let isELigibleForBonus2 = hoursWorked2 > 50 || ratings2 > 80

let totalPayment1 = hoursWorked1 * hourlyRate1
let totalPayment2 = hoursWorked2* hourlyRate2

console.log("Payment Details:")
console.log("-----------------")

console.log("Freelancer's Name: ", freelancer1)
console.log("Job Description: ", jobDescription1)
console.log("Hourly Rate: ", "Rs.", hourlyRate1)
console.log("Hours Worked: ", hoursWorked1, "Hours")
console.log("Total Payment: ", "Rs.", totalPayment1)
console.log("Ratings: ", ratings1)
console.log("Is eligible for bonus: ", isEligibleForBonus1)
console.log("")

console.log("Freelancer's Name: ", freelancer2)
console.log("Job Description: ", jobDescription2)
console.log("Hourly Rate: ", "Rs.", hourlyRate2)
console.log("Hours Worked: ", hoursWorked2, "Hours")
console.log("Total Payment: ", "Rs.", totalPayment2)
console.log("Is eligible for bonus: ", isELigibleForBonus2)
console.log("Ratings: ", ratings2)
console.log("")

// Payment Details:
// --------------------
// Freelancer: [Freelancer Name]
// Job Description: [Job Description]
// Hourly Rate: ₹[Hourly Rate]
// Hours Worked: [Hours Worked]
// Total Payment: ₹[Total Payment]
// Ratings: [Ratings]
// Is Eligible for Bonus: [true/false]
