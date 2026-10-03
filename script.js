// Reusable function to calculate the remaining balance
function calculateBalance(totalBudget, totalExpenses) {
    return totalBudget - totalExpenses;
}

console.log("--- SpendWise System Initializing ---");

// Collect input using pop-up boxes and change text to math numbers
let budgetInput = prompt("Enter your overall monthly Budget amount (e.g. 50000):");
let budget = Number(budgetInput);

let expensesInput = prompt("Enter your total monthly Expenses amount (e.g. 15000):");
let expenses = Number(expensesInput);

// Run calculation logic
let remainingBalance = calculateBalance(budget, expenses);

// Output result directly to your browser's inspect element tool console
console.log("User Total Budget: " + budget);
console.log("User Total Expenses: " + expenses);
console.log("---------------------------------------");
console.log("Calculated Remaining Balance: " + remainingBalance);

if (remainingBalance < 0) {
    console.log("⚠️ Alert: You are over budget!");
} else {
    console.log("✅ Success: You are safely within your budget limits.");
}
