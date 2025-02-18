/*
 * stmnts-01.js
 * Language: JavaScript
 * Test: tests/stmnts-01.test.js
 * Path: src/stmnts-01.js
 *
 * Arithmetic Assignment:
 * Implement the following functions to perform basic arithmetic
 * operations. Your implementations should pass all tests defined in
 * the provided test file.
 *
 * Note for beginners: Use the operator symbols directly (e.g., +, *, -)
 * and refer to the MDN links for more explanation.
 */

/**
 * Calculates the product of two numbers.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} - The product.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication
 */
function times(a, b) {
  let result = a * b;

  return result;
}

/**
 * Calculates the sum of two numbers.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} - The sum.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition
 */
function add(a, b) {
  let result = a + b;

  return result;
}

/**
 * Calculates the difference between two numbers.
 * @param {number} a - First number.
 * @param {number} b - Second number.
 * @returns {number} - The result of subtracting b from a.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction
 */
function subtract(a, b) {
  let result = a - b;

  return result;
}

/**
 * Calculates the quotient of two numbers.
 * @param {number} a - Numerator.
 * @param {number} b - Denominator.
 * @returns {number} - The quotient (a divided by b). Assumes b is nonzero.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division
 */
function divide(a, b) {
  if (b === 0) {
    return NaN;
  }
  let result = a / b;

  return result;
}

/**
 * Calculates the remainder of dividing a by b.
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} - The remainder, or NaN if b is 0.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder
 */
function modulus(a, b) {
  let result = a % b;

  return result;
}

// DO NOT CHANGE THE FOLLOWING EXPORT STATEMENT.
// The test file relies on these exported function names.
module.exports = {
  times,
  add,
  subtract,
  divide,
  modulus,
};
