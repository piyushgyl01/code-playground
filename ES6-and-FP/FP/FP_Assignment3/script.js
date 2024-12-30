const expenses = [

    { id: 1, name: "Groceries", amount: 150 },

    { id: 2, name: "Utilities", amount: 80 },

    { id: 3, name: "Dining Out", amount: 120 },

    { id: 4, name: "Transportation", amount: 50 }

 ];

const expenseFilter = document.querySelector("#expenseFilter");
const expenseListContainer = document.querySelector("#expenseList");
const totalExpensesContainer = document.querySelector("#totalExpenses");

const renderExpenses = (filterExpenseMoreThan100) => {
    const filteredExpenses = filterExpenseMoreThan100 ? expenses.filter((expense) => expense.amount > 100) : expenses;

    const expenseFilterHTML = filteredExpenses.map((expense) => `
        <li>
            <strong>ID:</strong> ${expense.id} <br>
            <strong>Name:</strong> ${expense.name} <br>
            <strong>Amount:</strong> ${expense.amount}<br>
        </li>
        <hr>
    `);
    expenseListContainer.innerHTML = expenseFilterHTML.join("")

    let totalCost = filteredExpenses.reduce((acc, curr) => curr.amount + acc, 0)
    totalExpensesContainer.textContent = `${totalCost}`
}

renderExpenses(false)
expenseFilter.addEventListener("click", function() {
    renderExpenses(expenseFilter.checked);
})