// Day 03 - Union Types

// Basic Union Type

let userId: string | number;

userId = 101;
console.log("Numeric User ID:", userId);

userId = "USR-101";
console.log("String User ID:", userId);


// Union type in function parameter

function printId(id: string | number): void {
  console.log("User ID:", id);
}

printId(101);
printId("USR-202");


// Type narrowing

function formatId(id: string | number): string {
  if (typeof id === "number") {
    return `ID-${id}`;
  }

  return id.toUpperCase();
}

console.log(formatId(101));
console.log(formatId("usr-202"));


// Union with literal values

let status: "pending" | "success" | "failed";

status = "success";

console.log("Status:", status);