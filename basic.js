/** @type {string} */
let str;

str = "Hola mundo";
str = 5;

/**
 *
 * @param {number} n
 * @returns {number}
 */
function fibonacci(n) {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(20));
console.log(fibonacci("Hola mundo"));

/** @type {number | string} */
let age;

age = 18;
age = "Eighteen";
age = "18";
age = false;

console.log(age);

/** @type {number[]} */
let numbers = [];

numbers.push(1);
numbers.push(1000);
numbers.push(-1000);
numbers.push("a");
numbers.push(false);
numbers.push({ a: 10 });

/** @type {{ sum?: number; description?: string }} */
let result = {};

result.sum = 10;
result.description = "The sum of all the values";
result.originalValues = [1, 2, 3, 4];
const multiplication = result.multiplication;

let numberOrString =
  Math.random() < 0.5 ? "hello" : 100;
let typeAssertedNumber = /** @type {number} */ (
  numberOrString
);

// @ts-expect-error
typeAssertedNumber = "Hola mundo";

let one = /** @type {const} */ (1);
one = 2;
