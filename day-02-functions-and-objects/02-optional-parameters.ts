// Day 02 - Optional, Default and Rest Parameters


// Optional parameter

function greetUser(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello ${name}, you are ${age} years old.`;
  }

  return `Hello ${name}.`;
}

console.log(greetUser("Richa"));
console.log(greetUser("Richa", 22));


// Default parameter

function calculateDiscount(
  price: number,
  discount: number = 10
): number {
  return price - (price * discount) / 100;
}

console.log("Price after discount:", calculateDiscount(1000));
console.log("Price after discount:", calculateDiscount(1000, 20));


// Rest parameter

function calculateTotal(...prices: number[]): number {
  return prices.reduce((total, price) => total + price, 0);
}

console.log("Total:", calculateTotal(100, 200, 300, 400));