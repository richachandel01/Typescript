// Day 04 - Classes

// Basic Class

class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce(): string {
    return `Hi, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const user1 = new User("Richa", 22);

console.log(user1.introduce());


// Class with methods

class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }
}

const calculator = new Calculator();

console.log("Addition:", calculator.add(10, 5));
console.log("Subtraction:", calculator.subtract(10, 5));
console.log("Multiplication:", calculator.multiply(10, 5));


// Parameter Properties

class Product {
  constructor(
    public name: string,
    public price: number
  ) {}

  getDetails(): string {
    return `${this.name} costs ₹${this.price}`;
  }
}

const product = new Product("Laptop", 55000);

console.log(product.getDetails());