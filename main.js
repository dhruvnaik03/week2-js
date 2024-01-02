
import { add, subtract, multiply, divide } from './mathOperations.js';

import { concatenate, uppercase, lowercase } from './stringOperations.js';

const result_add = add(5, 3);
const result_subtract = subtract(8, 2);
const result_multiply = multiply(4, 6);
const result_divide = divide(10, 2);

console.log("Math Operations:");
console.log("Addition:", result_add);
console.log("Subtraction:", result_subtract);
console.log("Multiplication:", result_multiply);
console.log("Division:", result_divide);

const str1 = "Hello";
const str2 = "World";

const result_concatenate = concatenate(str1, str2);
const result_uppercase = uppercase(str1);
const result_lowercase = lowercase(str2);

console.log("\nString Operations:");
console.log("Concatenation:", result_concatenate);
console.log("Uppercase:", result_uppercase);
console.log("Lowercase:", result_lowercase);
