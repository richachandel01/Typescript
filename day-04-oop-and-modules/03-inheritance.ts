// Day 04 - Inheritance

// Parent Class

class Person {
  constructor(
    public name: string,
    public age: number
  ) {}

  introduce(): void {
    console.log(
      `My name is ${this.name} and I am ${this.age} years old.`
    );
  }
}


// Child Class

class Developer extends Person {
  constructor(
    name: string,
    age: number,
    public programmingLanguage: string
  ) {
    super(name, age);
  }

  writeCode(): void {
    console.log(
      `${this.name} is writing ${this.programmingLanguage} code.`
    );
  }
}


const developer = new Developer(
  "Richa",
  22,
  "TypeScript"
);

developer.introduce();
developer.writeCode();


// Another child class

class Designer extends Person {
  constructor(
    name: string,
    age: number,
    public designTool: string
  ) {
    super(name, age);
  }

  createDesign(): void {
    console.log(
      `${this.name} is designing using ${this.designTool}.`
    );
  }
}

const designer = new Designer(
  "Aman",
  24,
  "Figma"
);

designer.introduce();
designer.createDesign();