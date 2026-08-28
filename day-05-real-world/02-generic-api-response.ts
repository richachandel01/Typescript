// Day 05 - Generic API Response


// Generic API Response

interface ApiResponse<T> {
  data: T;
  success: boolean;
  message: string;
  timestamp: string;
}


// User type

interface User {
  id: number;
  name: string;
  email: string;
}


// Product type

interface Product {
  id: number;
  name: string;
  price: number;
}


// User API response

const userResponse: ApiResponse<User> = {
  data: {
    id: 1,
    name: "Richa",
    email: "richa@example.com"
  },
  success: true,
  message: "User fetched successfully",
  timestamp: new Date().toISOString()
};


// Product API response

const productResponse: ApiResponse<Product> = {
  data: {
    id: 101,
    name: "Laptop",
    price: 75000
  },
  success: true,
  message: "Product fetched successfully",
  timestamp: new Date().toISOString()
};


// Generic function

function printResponse<T>(
  response: ApiResponse<T>
): void {
  console.log("Success:", response.success);
  console.log("Message:", response.message);
  console.log("Data:", response.data);
}


printResponse(userResponse);
printResponse(productResponse);