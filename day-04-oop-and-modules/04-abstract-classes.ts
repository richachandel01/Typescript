// Day 04 - Abstract Classes

abstract class Employee {
  constructor(
    public name: string,
    public employeeId: number
  ) {}

  // Abstract method
  abstract calculateSalary(): number;

  // Concrete method
  displayInfo(): void {
    console.log(
      `Employee: ${this.name}, ID: ${this.employeeId}`
    );
  }
}


// Full-time employee

class FullTimeEmployee extends Employee {
  constructor(
    name: string,
    employeeId: number,
    private monthlySalary: number
  ) {
    super(name, employeeId);
  }

  calculateSalary(): number {
    return this.monthlySalary;
  }
}


// Part-time employee

class PartTimeEmployee extends Employee {
  constructor(
    name: string,
    employeeId: number,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(name, employeeId);
  }

  calculateSalary(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}


const fullTimeEmployee = new FullTimeEmployee(
  "Richa",
  101,
  60000
);

fullTimeEmployee.displayInfo();

console.log(
  "Monthly Salary:",
  fullTimeEmployee.calculateSalary()
);


const partTimeEmployee = new PartTimeEmployee(
  "Aman",
  102,
  500,
  80
);

partTimeEmployee.displayInfo();

console.log(
  "Monthly Salary:",
  partTimeEmployee.calculateSalary()
);


// Polymorphism

const employees: Employee[] = [
  fullTimeEmployee,
  partTimeEmployee
];

for (const employee of employees) {
  console.log(
    `${employee.name}: ₹${employee.calculateSalary()}`
  );
}