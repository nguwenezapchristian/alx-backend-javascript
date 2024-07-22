# Unit Tests in JavaScript

This project demonstrates the use of unit and integration tests in Node.js using Mocha, Chai, and Sinon. It includes examples of basic testing, combining descriptions, using spies, stubs, and asynchronous tests.

## Table of Contents

1. [Installation](#installation)
2. [Project Structure](#project-structure)
3. [Tasks](#tasks)
4. [Running Tests](#running-tests)
5. [Contributing](#contributing)

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd <repository-directory>
npm install
```

## Project Structure

- **`0-calcul.js`**: Implements a basic function for rounding and summing two numbers.
- **`0-calcul.test.js`**: Contains unit tests for `0-calcul.js` using Node's built-in assertion library.
- **`1-calcul.js`**: Updates `calculateNumber` to handle different operations (SUM, SUBTRACT, DIVIDE).
- **`1-calcul.test.js`**: Tests `1-calcul.js` using Node's assertion library.
- **`2-calcul_chai.js`**: Similar to `1-calcul.js` but for Chai assertions.
- **`2-calcul_chai.test.js`**: Tests `2-calcul_chai.js` using Chai's `expect`.
- **`utils.js`**: Defines a utility module that includes the `calculateNumber` function.
- **`3-payment.js`**: Implements a function that uses the `calculateNumber` function and logs the result.
- **`3-payment.test.js`**: Tests `3-payment.js` using Sinon to spy on function calls.
- **`4-payment.js`**: Same as `3-payment.js`, but includes usage of Sinon stubs.
- **`4-payment.test.js`**: Tests `4-payment.js` using Sinon stubs.
- **`5-payment.js`**: Copies `4-payment.js` with added Mocha hooks for setup and teardown.
- **`5-payment.test.js`**: Tests `5-payment.js` using Mocha hooks (`beforeEach`, `afterEach`).
- **`6-payment_token.js`**: Implements an asynchronous function that returns a promise.
- **`6-payment_token.test.js`**: Tests `6-payment_token.js` with async/await and the `done` callback.
- **`7-skip.test.js`**: Demonstrates how to skip a test in Mocha.
- **`8-timeout.test.js`**: Shows how to set a timeout for a test in Mocha.

## Tasks

1. **Basic Test with Mocha and Node Assertion Library**: Implement and test a function using Mocha and Node's built-in assertion library.
2. **Combining Descriptions**: Extend the function to handle various operations and test it using Node's assertion library.
3. **Basic Test Using Chai Assertion Library**: Rewrite tests using Chai's `expect` assertions.
4. **Spies**: Use Sinon to create spies for monitoring function calls.
5. **Stubs**: Use Sinon to stub functions and control their behavior in tests.
6. **Async Tests with Done**: Test asynchronous functions using Mocha's `done` callback.
7. **Skip**: Demonstrate how to skip a test using Mocha.
8. **Timeout**: Set a timeout for tests to handle slow-running scenarios.

## Running Tests

To run the tests, use the following command:

```bash
npm test
```

This will execute all the tests using Mocha.

## Contributing

Feel free to contribute to this project by submitting issues, pull requests, or suggestions. For significant changes, please open an issue first to discuss what you would like to change.
