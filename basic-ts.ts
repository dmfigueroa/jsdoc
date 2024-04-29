let str: string;

str = "Hola mundo";
// @ts-expect-error
str = 5;

export function fibonacci(n: number): number {
  if (n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci(20);
// @ts-expect-error
fibonacci("Hola mundo");

let age: number | string;

age = 18;
age = "Eighteen";
age = "18";
// @ts-expect-error
age = false;

let numbers: number[] = [];

numbers.push(1);
numbers.push(1000);
numbers.push(-1000);
// @ts-expect-error
numbers.push("a");
// @ts-expect-error
numbers.push(false);
// @ts-expect-error
numbers.push({ a: 10 });

let result: {
  sum?: number;
  description?: string;
} = {};

result.sum = 10;
result.description = "The sum of all the values";
// @ts-expect-error
result.originalValues = [1, 2, 3, 4];
// @ts-expect-error
const multiplication = result.multiplication;

let numberOrString =
  Math.random() < 0.5 ? "hello" : 100;
let typeAssertedNumber = numberOrString as number;

// @ts-expect-error
typeAssertedNumber = "Hola mundo";

const numbersObj = { one: 1, two: 2 } as const;
// @ts-expect-error
numbers.one = 2;
