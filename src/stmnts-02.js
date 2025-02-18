/**
 * Calculates the result of raising a base to an exponent.
 * @param {number} base - The base number.
 * @param {number} exponent - The exponent.
 * @returns {number} - The result of base raised to the power of exponent.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation
 */
function power(base, exponent) {
  let result = base ** exponent;

  return result;
}

// DO NOT MODIFY THE EXPORTS BELOW.
module.exports = {
  power,
};
