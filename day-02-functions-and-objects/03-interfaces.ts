// Day 02 - Interfaces


interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}


// Object using interface

const user1: User = {
  id: 1,
  name: "Richa",
  email: "richa@example.com",
  age: 22
};

console.log("User:", user1);


// Another object using same interface

const user2: User = {
  id: 2,
  name: "Aman",
  email: "aman@example.com"
};

console.log("User:", user2);


// Interface with readonly property

interface Product {
  readonly id: number;
  name: string;
  price: number;
}

const product: Product = {
  id: 101,
  name: "Laptop",
  price: 55000
};

console.log("Product:", product);

// product.id = 102; // Error because id is readonly


// Interface with function

interface Calculator {
  calculate(a: number, b: number): number;
}

const calculator: Calculator = {
  calculate(a, b) {
    return a + b;
  }
};

console.log("Calculator:", calculator.calculate(10, 20));