# Day 03 — Advanced TypeScript Types

Day 03 focuses on advanced TypeScript features that improve type safety, flexibility, and reusability in real-world applications.

---

## 📚 Topics Covered

- Union Types
- Intersection Types
- Literal Types
- Enums
- Generics
- Generic Constraints
- `keyof`
- Type Narrowing
- `typeof`
- `instanceof`
- Custom Type Guards

---

## 1. Union Types

Union types allow a value to have more than one possible type.

```typescript
let userId: string | number;

userId = 101;
userId = "USR-101";