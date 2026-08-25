// Day 03 - Type Guards


// typeof type guard

function processValue(value: string | number): void {
  if (typeof value === "string") {
    console.log("String value:", value.toUpperCase());
  } else {
    console.log("Number value:", value * 2);
  }
}

processValue("typescript");
processValue(25);


// instanceof type guard

class Developer {
  constructor(
    public name: string,
    public language: string
  ) {}
}

class Designer {
  constructor(
    public name: string,
    public tool: string
  ) {}
}

function printProfile(
  profile: Developer | Designer
): void {
  if (profile instanceof Developer) {
    console.log(
      `${profile.name} is a developer using ${profile.language}`
    );
  } else {
    console.log(
      `${profile.name} is a designer using ${profile.tool}`
    );
  }
}

const developer = new Developer("Richa", "TypeScript");
const designer = new Designer("Aman", "Figma");

printProfile(developer);
printProfile(designer);


// Custom Type Guard

interface Admin {
  role: "admin";
  permissions: string[];
}

interface Candidate {
  role: "candidate";
  resume: string;
}

type User = Admin | Candidate;

function isAdmin(user: User): user is Admin {
  return user.role === "admin";
}

function handleUser(user: User): void {
  if (isAdmin(user)) {
    console.log("Admin permissions:", user.permissions);
  } else {
    console.log("Candidate resume:", user.resume);
  }
}

handleUser({
  role: "admin",
  permissions: ["read", "write", "delete"]
});

handleUser({
  role: "candidate",
  resume: "resume.pdf"
});