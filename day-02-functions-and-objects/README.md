# Day 02 — Functions & Objects

This section focuses on functions, objects, interfaces, type aliases, and advanced object typing in TypeScript.

The goal is to understand how TypeScript provides type safety when working with functions and structured data.

---

## 📚 Topics Covered

- Function Types
- Function Return Types
- `void`
- Callback Functions
- Optional Parameters
- Default Parameters
- Rest Parameters
- Interfaces
- Readonly Properties
- Type Aliases
- Union Types
- Object Types
- Nested Objects
- `keyof` Operator

---

## 1. Function Types

TypeScript allows us to define types for function parameters and return values.

```typescript
function add(a: number, b: number): number {
  return a + b;
}