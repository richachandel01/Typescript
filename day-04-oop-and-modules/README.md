# Day 04 — OOP & Modules

Day 04 focuses on Object-Oriented Programming concepts and modular code organization in TypeScript.

The goal is to understand how TypeScript supports object-oriented design, encapsulation, inheritance, abstraction, and reusable modules.

---

## 📚 Topics Covered

- Classes
- Constructors
- Methods
- Parameter Properties
- Public Access Modifier
- Private Access Modifier
- Protected Access Modifier
- Encapsulation
- Inheritance
- `extends`
- `super`
- Method Overriding
- Abstract Classes
- Abstract Methods
- Polymorphism
- Modules
- `export`

---

## 1. Classes

Classes provide a blueprint for creating objects.

```typescript
class User {
  constructor(
    public name: string,
    public age: number
  ) {}

  introduce(): string {
    return `Hi, my name is ${this.name}`;
  }
}