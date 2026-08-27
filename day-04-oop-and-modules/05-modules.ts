// Day 04 - Modules

// Exported function

export function add(a: number, b: number): number {
  return a + b;
}


// Exported function

export function multiply(
  a: number,
  b: number
): number {
  return a * b;
}


// Exported constant

export const applicationName: string =
  "TypeScript Learning Project";


// Exported interface

export interface User {
  id: number;
  name: string;
  email: string;
}


// Example usage inside this module

const user: User = {
  id: 1,
  name: "Richa",
  email: "richa@example.com"
};

console.log("Application:", applicationName);
console.log("User:", user);

console.log("Addition:", add(10, 20));
console.log("Multiplication:", multiply(5, 4));