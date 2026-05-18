# 🚀 Safora Platform - UI Automation (QA Intern Assignment)

![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![JavaScript](https://img.shields.io/badge/-javascript-%23323330?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

## 📌 Overview
This repository contains the automated UI testing script developed for the **Safora Website's "Contact Us" module**. It was created as Part 2 of the QA Engineering Intern assignment to demonstrate modern automation practices, robust DOM element selection, and proper QA methodology.

## 🏗️ Project Structure
```text
📁 safora-qa-automation
├── 📁 cypress
│   ├── 📁 e2e               # Test scripts (Spec files)
│   │   └── 📄 contact-us.cy.js
│   ├── 📁 fixtures          # External test data (Auto-generated)
│   └── 📁 support           # Custom commands & global overrides
├── 📄 cypress.config.js     # Main Cypress configuration
├── 📄 package.json          # Node.js dependencies
└── 📄 README.md             # Project documentation (You are here)
```

## 🧪 Test Scenarios & Assertions
The test suite strictly covers both **Happy Path** and **Negative Path** validations:

| Test ID | Scenario | Type | Expected Behavior |
| :--- | :--- | :--- | :--- |
| **TC_01** | Submit empty form | Negative | Form submission is blocked; native HTML5 validation triggers for required fields. |
| **TC_02** | Submit invalid email | Negative | Form submission is blocked; specific email format validation error is displayed. |
| **TC_03** | Submit valid data | Positive | Payload is accepted successfully; form submits without client-side errors. |

## ⚙️ QA Best Practices Implemented
* **Robust Error Handling:** Added global event listeners (`uncaught:exception`) to prevent tests from failing due to external 3rd-party JavaScript errors on the target application.
* **Deterministic Actions:** Validated DOM state (`be.visible`) before interacting with elements to avoid flaky tests.
* **Headless Ready:** The script is optimized to run in CI/CD pipelines using Cypress headless mode.

---

## 💻 Execution Guide

### 1. Prerequisites
Ensure you have the following installed on your local machine:
* [Node.js](https://nodejs.org/en/) (v14 or higher)
* Git

### 2. Installation
Clone the repository and install the required dependencies:
```bash
# Clone the repository
git clone <YOUR_GITHUB_REPO_LINK_HERE>

# Navigate into the project directory
cd safora-qa-automation

# Install Cypress and dependencies
npm install
```

### 3. Running the Tests

**Option A: Interactive UI Mode (Test Runner)**
Recommended for visual debugging and step-by-step observation.
```bash
npx cypress open
```
*Instructions:* Select `E2E Testing` ➔ Choose `Chrome` ➔ Click on `contact-us.cy.js`

**Option B: Headless Mode (CI/CD Pipeline Simulation)**
Recommended for fast, background execution.
```bash
npx cypress run --spec "cypress/e2e/contact-us.cy.js" --browser chrome
```

---
*Developed by Ishani Perera for the QA Engineering Intern Assessment.*
```

