// Typed Functions

function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string): string {
  return `Hello, ${name}!`;
}

function isAdult(age: number): boolean {
  return age >= 18;
}

console.log(add(10, 20));
console.log(greet("Richa"));
console.log(isAdult(22));

// TypeScript checks function arguments

// add("10", 20); // Error
// greet(100);     // Error