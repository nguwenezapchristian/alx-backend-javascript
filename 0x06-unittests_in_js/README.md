# Unit Tests in JavaScript

## Project Overview

This project demonstrates unit testing using Mocha, Chai, and Sinon with Node.js and Express. It includes various tasks to help you understand how to write and organize unit tests, use assertion libraries, and apply different testing techniques.

## Project Structure

- `0-calcul.js`: Contains the basic `calculateNumber` function.
- `0-calcul.test.js`: Test suite for `calculateNumber` using Node's `assert` library.
- `1-calcul.js`: Enhanced `calculateNumber` function with operations based on type.
- `1-calcul.test.js`: Test suite for `1-calcul.js` using Node's `assert` library.
- `2-calcul_chai.js`: Same functionality as `1-calcul.js`, but with Chai for assertions.
- `2-calcul_chai.test.js`: Test suite for `2-calcul_chai.js` using Chai's `expect`.
- `utils.js`: Contains the `calculateNumber` function within a Utils module.
- `3-payment.js`: Defines `sendPaymentRequestToApi` using `Utils.calculateNumber`.
- `3-payment.test.js`: Tests `sendPaymentRequestToApi` using Sinon spies.
- `4-payment.js`: Same as `3-payment.js`, but uses Sinon stubs for `Utils.calculateNumber`.
- `4-payment.test.js`: Tests `4-payment.js` using Sinon stubs and spies.
- `5-payment.js`: Same as `4-payment.js`, with hooks for setup and teardown.
- `5-payment.test.js`: Tests `sendPaymentRequestToApi` with hooks.
- `6-payment_token.js`: Contains `getPaymentTokenFromAPI` function for async testing.
- `6-payment_token.test.js`: Tests `getPaymentTokenFromAPI` with async support.
- `7-skip.test.js`: Demonstrates how to skip failing tests without removing them.
- `8-api/`: Directory with an Express server and related tests.
  - `api.js`: Defines Express routes for integration testing.
  - `api.test.js`: Tests the Express API.
- `9-api/`: Extends `8-api` with additional routes and tests.
  - `api.js`: Adds new endpoints with regex validation.
  - `api.test.js`: Tests the new endpoints.
- `10-api/`: Further extends `9-api` with deep equality checks.
  - `api.js`: Adds new endpoints with response objects.
  - `api.test.js`: Tests the new endpoints.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/alx-backend-javascript.git
   cd alx-backend-javascript
   ```

2. Install the required packages:
   ```bash
   npm install
   ```

## Running Tests

Each task contains its own set of tests. Run the tests for a specific task using:

```bash
npm test <test-file>
```

For example, to run the tests for Task 0:
```bash
npm test 0-calcul.test.js
```

## Learning Objectives

By completing this project, you will be able to:

- Use Mocha to write test suites.
- Utilize different assertion libraries (Node's `assert` or Chai).
- Structure long test suites effectively.
- Use spies and stubs to control and verify function behavior.
- Apply hooks for setup and teardown in tests.
- Handle async functions in unit tests.
- Write integration tests with a small Node server.