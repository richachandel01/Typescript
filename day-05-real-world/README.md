# Day 05 — Real-World TypeScript

Day 05 focuses on applying TypeScript concepts to real-world development scenarios such as API data modeling, generic API responses, user management, error handling, and a small task management project.

---

## 📚 Topics Covered

- API Data Modeling
- Interfaces
- Optional Properties
- Generic API Responses
- Generics
- Classes
- Utility Types
- `Partial`
- `Pick`
- `Omit`
- CRUD Operations
- Custom Error Classes
- `unknown`
- Error Type Narrowing
- Generic Constraints
- Mini Project

---

## 1. API Types

TypeScript interfaces can describe the structure of data received from APIs.

```typescript
interface ApiUser {
  id: number;
  name: string;
  email: string;
  username: string;
  isActive: boolean;
}