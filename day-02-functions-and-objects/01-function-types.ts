// Day 02 - Function Types

// Function with typed parameters and return type

function add(a: number, b: number): number {
  return a + b;
}

console.log("Addition:", add(10, 20));


// Function with no return value

function printMessage(message: string): void {
  console.log(message);
}

printMessage("Learning TypeScript function types");


// Function type

let multiply: (a: number, b: number) => number;

multiply = (a, b) => {
  return a * b;
};

console.log("Multiplication:", multiply(5, 4));


// Callback function

function calculate(
  a: number,
  b: number,
  operation: (x: number, y: number) => number
): number {
  return operation(a, b);
}

const result = calculate(10, 5, (x, y) => x - y);

console.log("Calculation result:", result);