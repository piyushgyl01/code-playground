let budget = 4000

let expensesWeek1 = 700
let expensesWeek2 = 850
let expensesWeek3 = 900
let expensesWeek4 = 650
let earningsWeek1 = 1000
let earningsWeek2 = 1100
let earningsWeek3 = 1200
let earningsWeek4 = 900

let totalExpenses = expensesWeek1 + /*earningsWeek2*/ expensesWeek2 + expensesWeek3 + expensesWeek4

let totalEarnings = earningsWeek1 + earningsWeek2 + earningsWeek3 + earningsWeek4

let remainingBudget = budget - totalExpenses

let percentageSpent = totalExpenses / budget * 100
let budgetStatus = ""

if (percentageSpent <= 50) {
  budgetStatus = "Great job! You have managed your expenses well within the budget."
} else if (percentageSpent <= 75) {
  budgetStatus = "You are doing okay, but keep an eye on your spending to stay within the budget."
} else {
  budgetStatus = "You have exceeded your budget. Consider reviewing your expenses and making adjustments."
}

console.log("Monthly Expense Report")
console.log("----------------------")
console.log("Budget: " + "Rs." + budget)
console.log("Total Expenses: " + "Rs." + totalExpenses)
console.log("Total Earnings: " + "Rs." + totalEarnings)
console.log("Remaining Budget: " + "Rs." + remainingBudget)
console.log("Percentage Spent: " + percentageSpent + "%")
console.log("")
console.log(budgetStatus)