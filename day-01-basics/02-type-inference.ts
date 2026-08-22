// Type Inference

let language = "TypeScript";
let version = 5;
let isPopular = true;

console.log(language);
console.log(version);
console.log(isPopular);

// TypeScript automatically infers:
// language -> string
// version -> number
// isPopular -> boolean

// language = 10; // Error
// version = "five"; // Error