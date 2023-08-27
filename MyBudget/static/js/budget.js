// Get elements from the HTML
const budgetInput = document.getElementById('budget');
const depenseInput = document.getElementById('depense');
const montantInput = document.getElementById('montant');
const addBtn = document.querySelector('.add-btn');
const expensesList = document.querySelector('.expenses-list');
const incomeSpan = document.querySelector('.income span');
const expenseSpan = document.querySelector('.expense span');
const balanceSpan = document.querySelector('.balance span');

let totalBudget = 0;
let totalExpenses = 0;

// Function to update budget-related information
function updateBudgetInfo() {
  incomeSpan.textContent = totalBudget.toFixed(2);
  expenseSpan.textContent = totalExpenses.toFixed(2);
  balanceSpan.textContent = (totalBudget - totalExpenses).toFixed(2);

  if (totalBudget - totalExpenses < 0) {
    balanceSpan.classList.add('negative-balance');
  } else {
    balanceSpan.classList.remove('negative-balance');
  }
}

// Event listener for adding expenses
addBtn.addEventListener('click', function () {
  const depenseValue = depenseInput.value.trim();
  const montantValue = parseFloat(montantInput.value.trim());

  if (depenseValue === '' || isNaN(montantValue)) {
    // Display a warning message
    const warningSpan = document.querySelector('.warning');
    warningSpan.style.display = 'block';
    return;
  }

  // Create a new expenses item
  const expensesItem = document.createElement('div');
  expensesItem.classList.add('expenses-item');
  expensesItem.innerHTML = `<span>${depenseValue} ${montantValue.toFixed(2)}€</span>`;
  expensesList.appendChild(expensesItem);

  // Update total expenses and clear input fields
  totalExpenses += montantValue;
  montantInput.value = '';
  depenseInput.value = '';

  // Update budget-related information
  updateBudgetInfo();
});

// Event listener for resetting expenses
const resetBtn = document.querySelector('.reset-btn');
resetBtn.addEventListener('click', function () {
  expensesList.innerHTML = '';
  totalExpenses = 0;
  updateBudgetInfo();
});

// Event listener for budget input change
budgetInput.addEventListener('input', function () {
  totalBudget = parseFloat(budgetInput.value) || 0;
  updateBudgetInfo();
});

// Initialize budget-related information
updateBudgetInfo();

// Event listener for budget input change
budgetInput.addEventListener('input', function () {
    totalBudget = parseFloat(budgetInput.value) || 0;
    updateBudgetInfo();
  
    // Hide the warning message when budget input is filled
    const warningSpan = document.querySelector('.warning');
    if (totalBudget > 0) {
      warningSpan.style.display = 'none';
    }
});
