#!/usr/bin/env node
// file: calculator.js
const { add, subtract, times, divide, modulus } = require('./src/stmnts-01');
const { power } = require('./src/stmnts-02');

if (process.argv.length < 5) {
  console.error("usage: node calculator.js number operator number");
  process.exit(1);
}

const num1 = parseFloat(process.argv[2]);
const operation = (process.argv[3]).toLowerCase();
const num2 = parseFloat(process.argv[4]);

if (operation === 'divide' && num2 === 0) {
  console.error("Invalid Number.");
  process.exit(1);
}

if (isNaN(num1)) {
  console.error("Invalid Number.");
  process.exit(1);
}

else if (isNaN(num2)) {
  console.error("Invalid Number.");
  process.exit(1);
}

if (operation === 'add') {
  let result = add(num1, num2);
  console.log('result: ' + result);
  process.exit(0);
}

else if (operation === 'subtract') {
  let result = subtract(num1, num2);
  console.log('result: ' + result);
  process.exit(0);
}

else if (operation === 'times' || operation === 'multiply') {
  let result = times(num1, num2);
  console.log('result: ' + result);
  process.exit(0);
}

else if (operation === 'divide') {
  let result = divide(num1, num2);
  console.log('result: ' + result);
  process.exit(0);
}

else if (operation === 'modulus' || operation === 'remainder') {
  let result = modulus(num1, num2);
  console.log('result: ' + result);
  process.exit(0);
}

else if (operation === 'power') {
  let result = power(num1, num2);
  console.log('result: ' + result);
  process.exit(0);
}

else {
  console.error("unknown operation.");
  process.exit(1);
}
