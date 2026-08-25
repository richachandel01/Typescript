// Day 03 - Generics


// Generic Function

function identity<T>(value: T): T {
  return value;
}

const numberValue = identity<number>(100);
const stringValue = identity<string>("TypeScript");

console.log("Number:", numberValue);
console.log("String:", stringValue);


// TypeScript can infer the generic type

const inferredNumber = identity(500);
const inferredString = identity("Generic Type");

console.log(inferredNumber);
console.log(inferredString);


// Generic Array Function

function getFirstElement<T>(items: T[]): T {
  return items[0];
}

const firstNumber = getFirstElement([10, 20, 30]);
const firstSkill = getFirstElement([
  "Java",
  "TypeScript",
  "React"
]);

console.log("First number:", firstNumber);
console.log("First skill:", firstSkill);


// Generic Interface

interface ApiResponse<T> {
  data: T;
  success: boolean;
  message: string;
}

const userResponse: ApiResponse<string> = {
  data: "Richa",
  success: true,
  message: "User fetched successfully"
};

console.log("User Response:", userResponse);