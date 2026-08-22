// any

let flexibleValue: any = "Hello";

flexibleValue = 100;
flexibleValue = true;

console.log("Any:", flexibleValue);

// unknown

let unknownValue: unknown = "TypeScript";

if (typeof unknownValue === "string") {
  console.log("Length:", unknownValue.length);
}

// never

function throwError(message: string): never {
  throw new Error(message);
}

// throwError("Something went wrong");