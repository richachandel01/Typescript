// Day 05 - User Management


interface User {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  isActive: boolean;
}


// User creation type

type CreateUser = Omit<User, "id">;


// User update type

type UpdateUser = Partial<
  Omit<User, "id">
>;


// Public user information

type PublicUser = Pick<
  User,
  "id" | "name" | "role"
>;


class UserManager {
  private users: User[] = [];

  // Create user

  createUser(userData: CreateUser): User {
    const user: User = {
      id: this.users.length + 1,
      ...userData
    };

    this.users.push(user);

    return user;
  }


  // Get all users

  getUsers(): User[] {
    return [...this.users];
  }


  // Get user by ID

  getUserById(id: number): User | undefined {
    return this.users.find(
      user => user.id === id
    );
  }


  // Update user

  updateUser(
    id: number,
    updates: UpdateUser
  ): User | undefined {
    const user = this.getUserById(id);

    if (!user) {
      return undefined;
    }

    Object.assign(user, updates);

    return user;
  }


  // Get public information

  getPublicUser(
    user: User
  ): PublicUser {
    return {
      id: user.id,
      name: user.name,
      role: user.role
    };
  }
}


// Example usage

const userManager = new UserManager();


const user1 = userManager.createUser({
  name: "Richa",
  email: "richa@example.com",
  role: "admin",
  isActive: true
});


const user2 = userManager.createUser({
  name: "Aman",
  email: "aman@example.com",
  role: "user",
  isActive: true
});


console.log("All Users:");
console.log(userManager.getUsers());


console.log("User by ID:");
console.log(userManager.getUserById(1));


userManager.updateUser(2, {
  isActive: false
});


console.log("Updated User:");
console.log(userManager.getUserById(2));


console.log("Public User:");
console.log(
  userManager.getPublicUser(user1)
);
