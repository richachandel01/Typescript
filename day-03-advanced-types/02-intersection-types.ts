// Day 03 - Intersection Types


interface Person {
  name: string;
  age: number;
}

interface Developer {
  programmingLanguages: string[];
  experience: number;
}


// Intersection Type

type DeveloperProfile = Person & Developer;


const developer: DeveloperProfile = {
  name: "Richa",
  age: 22,
  programmingLanguages: ["Java", "TypeScript", "JavaScript"],
  experience: 1
};

console.log("Developer:", developer);


// Another example

interface Employee {
  employeeId: number;
  department: string;
}

interface Manager {
  teamSize: number;
  responsibilities: string[];
}

type ManagerEmployee = Employee & Manager;

const manager: ManagerEmployee = {
  employeeId: 501,
  department: "Engineering",
  teamSize: 8,
  responsibilities: [
    "Team Management",
    "Code Review",
    "Project Planning"
  ]
};

console.log("Manager:", manager);