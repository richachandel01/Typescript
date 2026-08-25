// Day 03 - Generic Constraints


// Generic constraint

function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

console.log(getLength("TypeScript"));
console.log(getLength([10, 20, 30, 40]));


// Generic constraint with interface

interface HasId {
  id: number;
}

function printId<T extends HasId>(item: T): void {
  console.log("ID:", item.id);
}

const user = {
  id: 101,
  name: "Richa"
};

const product = {
  id: 202,
  name: "Laptop",
  price: 75000
};

printId(user);
printId(product);


// keyof with generics

function getProperty<T, K extends keyof T>(
  object: T,
  key: K
): T[K] {
  return object[key];
}

const employee = {
  id: 1,
  name: "Richa",
  department: "Engineering"
};

console.log(getProperty(employee, "name"));
console.log(getProperty(employee, "department"));