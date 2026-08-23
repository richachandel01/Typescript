// Day 02 - Type Aliases


// Basic type alias

type UserId = number;

let currentUserId: UserId = 101;

console.log("User ID:", currentUserId);


// Object type alias

type Student = {
  id: number;
  name: string;
  course: string;
};

const student: Student = {
  id: 1,
  name: "Richa",
  course: "Computer Science"
};

console.log("Student:", student);


// Union type with type alias

type Status = "pending" | "success" | "failed";

let requestStatus: Status = "success";

console.log("Request Status:", requestStatus);


// Function type alias

type MathOperation = (a: number, b: number) => number;

const subtract: MathOperation = (a, b) => {
  return a - b;
};

console.log("Subtraction:", subtract(20, 8));