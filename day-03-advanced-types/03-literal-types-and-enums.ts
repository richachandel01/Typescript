// Day 03 - Literal Types and Enums


// Literal Types

type Direction = "north" | "south" | "east" | "west";

let currentDirection: Direction = "north";

console.log("Direction:", currentDirection);


// Function using literal type

function move(direction: Direction): void {
  console.log(`Moving towards ${direction}`);
}

move("east");
move("south");


// Status literal type

type OrderStatus = "pending" | "processing" | "shipped" | "delivered";

function updateOrderStatus(status: OrderStatus): void {
  console.log(`Order status: ${status}`);
}

updateOrderStatus("processing");
updateOrderStatus("shipped");


// Enum

enum Role {
  Admin,
  Recruiter,
  Candidate
}

let currentRole: Role = Role.Candidate;

console.log("Current Role:", currentRole);


// String Enum

enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE"
}

const method: HttpMethod = HttpMethod.GET;

console.log("HTTP Method:", method);