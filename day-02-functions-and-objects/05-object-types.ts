// Day 02 - Advanced Object Types


interface Employee {
  id: number;
  name: string;
  department: string;
  skills: string[];
  address: {
    city: string;
    country: string;
  };
}


const employee: Employee = {
  id: 101,
  name: "Richa",
  department: "Software Development",
  skills: ["Java", "TypeScript", "React"],
  address: {
    city: "Kanpur",
    country: "India"
  }
};

console.log("Employee:", employee);


// Readonly object property

interface Account {
  readonly accountId: number;
  username: string;
  isActive: boolean;
}

const account: Account = {
  accountId: 5001,
  username: "richa_dev",
  isActive: true
};

console.log("Account:", account);


// keyof operator

type EmployeeKey = keyof Employee;

const key: EmployeeKey = "name";

console.log("Selected key:", key);


// Function using keyof

function getEmployeeValue(
  employee: Employee,
  key: keyof Employee
) {
  return employee[key];
}

console.log(
  "Employee name:",
  getEmployeeValue(employee, "name")
);

console.log(
  "Employee department:",
  getEmployeeValue(employee, "department")
);