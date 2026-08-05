# 🏦 ApexBank - Dynamic Customer Portal & JavaScript Case Study

A dynamic, interactive, and fully responsive Bank Customer Web Application built using **HTML5, Vanilla CSS3, and Vanilla JavaScript**.

This repository serves both as a functional online banking portal simulation and an educational **JavaScript Case Study** with **line-by-line comments** in `script.js` explaining every core DOM selection, state mutation, financial formula, and array operation.

---

## 🔑 Demo Login Credentials

Try out the realistic online banking authentication flow:

- **Username**: `alex.morgan`
- **Password**: `password123`

---

## 🌟 Key Features

1. **Realistic Customer Authentication**:
   - Secure login screen with username/password validation.
   - Real-time error message feedback for invalid credentials.
   - One-click **Logout** button in top header to return to the login screen.

2. **Account Balances & Privacy Control**:
   - Displays **Standard Checking** ($12,500.50), **High-Yield Savings** ($45,000.00), and **Total Net Worth** ($57,500.50).
   - **Balance Masking Toggle**: Hide sensitive balance figures (`••••••••` vs `$12,500.50`) with instant DOM updates.

3. **Money Transfer & Instant History Update**:
   - Send money to any recipient with account balance validation.
   - Dynamically deducts transfer amounts from checking balance and prepends a new transaction item to the transaction list.

4. **Interactive Financial Calculators**:
   - **Loan EMI Calculator**: Real-time slider adjustments for Loan Amount, Annual Interest Rate, and Tenure.
   - Calculates exact monthly EMI installments using the financial compound interest formula (`Math.pow`).

5. **Real-time Transaction History Filter**:
   - Instant search input filtering transactions dynamically using `Array.prototype.filter`.
   - Clear visual differentiation between Income (`+`) and Expense (`-`) records.

6. **Theme Customization**:
   - Smooth **Dark Mode / Light Mode** toggle button.

7. **Line-by-Line Commented JavaScript**:
   - Every single line in `script.js` features explanatory inline comments explaining what each DOM selection, event listener callback, state object mutation, and calculation does.

---

## 📁 Project Structure

```text
epam-site/
├── index.html        # Semantic HTML5 layout with Login Overlay & App Dashboard
├── styles.css        # Custom CSS design system, dark/light themes, card grids & components
├── script.js        # Single-file JavaScript logic with line-by-line educational comments
└── README.md         # Project documentation
```

---

## 🚀 How to Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ajiteshvish/EPAM-project---26.git
   cd EPAM-project---26
   ```

2. **Open in Browser**:
   - Simply open `index.html` in any web browser (Chrome, Firefox, Safari, Edge).
   - Or start a local development server:
     ```bash
     python3 -m http.server 8080
     ```
     Then navigate to `http://localhost:8080` in your browser.

---

## 📚 JavaScript Case Study Topics Covered

- **DOM Selection & Manipulation**: `document.getElementById`, `element.textContent`, `element.style.display`
- **Event Listeners**: `addEventListener("submit")`, `addEventListener("input")`, `addEventListener("click")`
- **Array Methods**: `Array.prototype.filter()`, `Array.prototype.forEach()`, `Array.prototype.unshift()`
- **Form Handling**: `e.preventDefault()`, `form.reset()`, `parseFloat()`, string validation
- **Financial Math Algorithms**: Monthly EMI formula calculation using `Math.pow()`

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
