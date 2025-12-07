// Get elements from the page
const incomeInput = document.getElementById("income-input");
const addIncomeButton = document.getElementById("add-income");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseTypeSelect = document.getElementById("expense-type");
const addExpenseButton = document.getElementById("add-expense");
const expenseList = document.getElementById("expense-list");
const totalIncomeDisplay = document.getElementById("total-income");
const totalExpensesDisplay = document.getElementById("total-expenses");
const balanceDisplay = document.getElementById("balance");

// Variables to keep track of totals
let totalIncome = 0;
let totalExpenses = 0;

// When "Enter" is clicked for income
addIncomeButton.addEventListener("click", function() {
  let income = parseFloat(incomeInput.value);

  // Check if the input is a valid number
  if (!isNaN(income)) {
    totalIncome += income;
    totalIncomeDisplay.textContent = totalIncome;
    incomeInput.value = ""; // clear box
    updateBalance();
  }
});

// When "Add" is clicked for expense
addExpenseButton.addEventListener("click", function() {
  let expense = parseFloat(expenseAmountInput.value);
  let type = expenseTypeSelect.value;

  if (!isNaN(expense)) {
    totalExpenses += expense;
    totalExpensesDisplay.textContent = totalExpenses;

    // Add to the expense list
    let listItem = document.createElement("li");
    listItem.textContent = type + ": $" + expense;
    expenseList.appendChild(listItem);

    expenseAmountInput.value = "";
    updateBalance();
  }
});

// Function to update balance
function updateBalance() {
  let balance = totalIncome - totalExpenses;
  balanceDisplay.textContent = balance;
}
