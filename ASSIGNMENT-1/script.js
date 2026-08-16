// ==========================================================================
// BANK CUSTOMER PORTAL & JAVASCRIPT CASE STUDY (SINGLE FILE script.js)
// Comprehensive line-by-line commented JavaScript for learning & execution
// ==========================================================================

// 1. Initial State Data Object storing login auth, account details & transactions
const bankData = {
  // Authentication state
  isLoggedIn: false,
  // Demo valid login credentials
  demoUsername: "alex.morgan",
  demoPassword: "password123",

  // Customer profile info
  customerName: "Alex Morgan",
  // Initial checking account balance
  checkingBalance: 12500.50,
  // Initial savings account balance
  savingsBalance: 45000.00,
  // Privacy setting for balance masking
  isMasked: false,
  // Array of initial bank transaction objects
  transactions: [
    { id: 1, title: "Salary Credit", amount: 4500.00, type: "income", date: "2026-08-01" },
    { id: 2, title: "Apple Store", amount: 299.00, type: "expense", date: "2026-08-02" },
    { id: 3, title: "Grocery Market", amount: 120.50, type: "expense", date: "2026-08-03" },
    { id: 4, title: "Utility Bill", amount: 180.00, type: "expense", date: "2026-08-04" }
  ]
};

// 2. Select DOM Elements using document.getElementById for dynamic updates
const loginScreen = document.getElementById("login-screen"); // Login screen modal element
const appScreen = document.getElementById("app-screen"); // Main bank portal app container element
const loginForm = document.getElementById("login-form"); // Login form element
const loginErrorMsg = document.getElementById("login-error"); // Login error message text container
const logoutBtn = document.getElementById("logout-btn"); // Logout button in top header

const checkingEl = document.getElementById("checking-balance"); // Checking balance DOM element
const savingsEl = document.getElementById("savings-balance"); // Savings balance DOM element
const totalEl = document.getElementById("total-balance"); // Total balance DOM element
const txListEl = document.getElementById("tx-list"); // Transaction list container DOM element
const maskBtn = document.getElementById("mask-btn"); // Balance mask toggle button
const transferForm = document.getElementById("transfer-form"); // Money transfer form element
const searchInput = document.getElementById("search-input"); // Transaction search input element
const themeBtn = document.getElementById("theme-btn"); // Light/Dark theme toggle button

// 3. Login Form Submission Handler Function
loginForm.addEventListener("submit", (e) => {
  // Prevent form submission page refresh
  e.preventDefault();

  // Get username value from input
  const usernameInput = document.getElementById("login-username").value.trim();
  // Get password value from input
  const passwordInput = document.getElementById("login-password").value.trim();

  // Clear previous login error message text
  loginErrorMsg.style.display = "none";

  // Validate entered credentials against demo username and password
  if (usernameInput === bankData.demoUsername && passwordInput === bankData.demoPassword) {
    // Set authentication state to true
    bankData.isLoggedIn = true;
    
    // Hide login screen overlay from DOM
    loginScreen.style.display = "none";
    // Show main bank portal application container
    appScreen.style.display = "block";

    // Render fresh balance figures on UI
    renderBalances();
    // Render initial transaction list on UI
    renderTransactions();
    // Calculate initial loan EMI slider values
    calculateEMI();
  } else {
    // Show authentication failure error message
    loginErrorMsg.textContent = "Invalid username or password! (Hint: alex.morgan / password123)";
    // Make error message element visible in DOM
    loginErrorMsg.style.display = "block";
  }
});

// 4. Logout Button Click Event Handler Function
logoutBtn.addEventListener("click", () => {
  // Set authentication state back to false
  bankData.isLoggedIn = false;
  // Hide main bank portal application container
  appScreen.style.display = "none";
  // Show login screen overlay again in DOM
  loginScreen.style.display = "flex";
  // Reset login form input fields
  loginForm.reset();
  // Hide any remaining login error text
  loginErrorMsg.style.display = "none";
});

// 5. Function to update and render balances on the webpage
function renderBalances() {
  // Calculate total balance by adding checking and savings balance
  const total = bankData.checkingBalance + bankData.savingsBalance;
  
  // If isMasked is true, show hidden dots; otherwise format numbers as currency
  checkingEl.textContent = bankData.isMasked ? "••••••••" : "$" + bankData.checkingBalance.toFixed(2);
  savingsEl.textContent = bankData.isMasked ? "••••••••" : "$" + bankData.savingsBalance.toFixed(2);
  totalEl.textContent = bankData.isMasked ? "••••••••" : "$" + total.toFixed(2);
}

// 6. Function to render transaction history list with filtering support
function renderTransactions(filterText = "") {
  // Clear existing items in transaction list container
  txListEl.innerHTML = "";

  // Filter transactions array based on search input matching transaction title
  const filtered = bankData.transactions.filter(tx => 
    tx.title.toLowerCase().includes(filterText.toLowerCase())
  );

  // Loop through filtered transactions using array forEach method
  filtered.forEach(tx => {
    // Create a new list item element for each transaction
    const li = document.createElement("li");
    // Add CSS class for styling the list item
    li.className = "tx-item";
    
    // Determine CSS class based on income vs expense type
    const amountClass = tx.type === "income" ? "income-text" : "expense-text";
    // Determine sign prefix (+) for income, (-) for expense
    const sign = tx.type === "income" ? "+" : "-";

    // Set inner HTML content of list item using template literals
    li.innerHTML = `
      <div>
        <strong>${tx.title}</strong>
        <div class="tx-date">${tx.date}</div>
      </div>
      <span class="${amountClass}">${sign}$${tx.amount.toFixed(2)}</span>
    `;

    // Append list item child to transaction list container in DOM
    txListEl.appendChild(li);
  });
}

// 7. Event Listener for Mask/Unmask Balance Toggle Button
maskBtn.addEventListener("click", () => {
  // Toggle boolean state value between true and false
  bankData.isMasked = !bankData.isMasked;
  // Update button text label dynamically
  maskBtn.textContent = bankData.isMasked ? "Show Balances" : "Hide Balances";
  // Re-render balance elements on UI
  renderBalances();
});

// 8. Event Listener for Money Transfer Form Submission
transferForm.addEventListener("submit", (e) => {
  // Prevent default form submission page refresh behavior
  e.preventDefault();

  // Get recipient input value from form
  const recipient = document.getElementById("transfer-to").value;
  // Get amount input value and parse string to floating point number
  const amount = parseFloat(document.getElementById("transfer-amount").value);

  // Validate if amount is valid number and positive
  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount!");
    return; // Stop execution if invalid
  }

  // Check if checking account has sufficient balance
  if (amount > bankData.checkingBalance) {
    alert("Insufficient funds in checking account!");
    return; // Stop execution if balance is low
  }

  // Deduct transfer amount from checking balance
  bankData.checkingBalance -= amount;

  // Add new transaction object to top of transactions array using unshift
  bankData.transactions.unshift({
    id: Date.now(), // Generate unique ID using current timestamp
    title: "Transfer to " + recipient, // Recipient description title
    amount: amount, // Transfer amount value
    type: "expense", // Set transaction type as expense
    date: new Date().toISOString().split("T")[0] // Current date formatted as YYYY-MM-DD
  });

  // Reset form input fields
  transferForm.reset();
  // Update balances on UI
  renderBalances();
  // Update transaction list on UI
  renderTransactions();
  // Show confirmation alert message
  alert(`Successfully transferred $${amount.toFixed(2)} to ${recipient}`);
});

// 9. Event Listener for Real-time Transaction Search Input
searchInput.addEventListener("input", (e) => {
  // Pass user search query text to renderTransactions filter function
  renderTransactions(e.target.value);
});

// 10. Interactive Loan EMI Calculator Function
function calculateEMI() {
  // Get loan principal amount value from slider input
  const principal = parseFloat(document.getElementById("loan-principal").value);
  // Get annual interest rate percentage value from slider input
  const rate = parseFloat(document.getElementById("loan-rate").value);
  // Get loan tenure in years from slider input
  const years = parseFloat(document.getElementById("loan-years").value);

  // Update slider label values in DOM
  document.getElementById("principal-val").textContent = "$" + principal.toLocaleString();
  document.getElementById("rate-val").textContent = rate + "%";
  document.getElementById("years-val").textContent = years + " Yrs";

  // Calculate monthly interest rate (annual rate / 12 months / 100)
  const monthlyRate = rate / 12 / 100;
  // Calculate total number of monthly installments
  const months = years * 12;

  // Calculate monthly EMI using financial compound interest formula
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
  
  // Display calculated EMI result formatted to 2 decimal places
  document.getElementById("emi-result").textContent = "$" + emi.toFixed(2);
}

// 11. Event Listeners for Loan Calculator Slider Inputs
document.getElementById("loan-principal").addEventListener("input", calculateEMI);
document.getElementById("loan-rate").addEventListener("input", calculateEMI);
document.getElementById("loan-years").addEventListener("input", calculateEMI);

// 12. Event Listener for Theme Toggle Button (Light/Dark Mode)
themeBtn.addEventListener("click", () => {
  // Toggle "light-mode" class on document body
  document.body.classList.toggle("light-mode");
  // Update theme button text icon indicator
  themeBtn.textContent = document.body.classList.contains("light-mode") ? "☀️ Dark Mode" : "🌙 Light Mode";
});
