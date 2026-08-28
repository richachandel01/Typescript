// Day 05 - API Types

// User returned by an API

interface ApiUser {
  id: number;
  name: string;
  email: string;
  username: string;
  isActive: boolean;
  profile?: {
    avatar: string;
    bio?: string;
  };
}


// Product returned by an API

interface ApiProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  inStock: boolean;
}


// Function that accepts an API user

function displayUser(user: ApiUser): void {
  console.log("User ID:", user.id);
  console.log("Name:", user.name);
  console.log("Email:", user.email);
  console.log("Username:", user.username);
  console.log("Active:", user.isActive);

  if (user.profile) {
    console.log("Avatar:", user.profile.avatar);

    if (user.profile.bio) {
      console.log("Bio:", user.profile.bio);
    }
  }
}


// Example API data

const user: ApiUser = {
  id: 101,
  name: "Richa Chandel",
  email: "richa@example.com",
  username: "richa_dev",
  isActive: true,
  profile: {
    avatar: "profile.jpg",
    bio: "TypeScript developer"
  }
};


const product: ApiProduct = {
  id: 501,
  title: "Laptop",
  price: 75000,
  category: "Electronics",
  inStock: true
};


displayUser(user);

console.log("Product:", product);