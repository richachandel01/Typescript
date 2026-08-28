// Day 05 - Error Handling


// Custom Error Class

class ApiError extends Error {
  statusCode: number;

  constructor(
    message: string,
    statusCode: number
  ) {
    super(message);

    this.name = "ApiError";
    this.statusCode = statusCode;
  }
}


// Simulated API function

function fetchUser(
  userId: number
): string {
  if (userId <= 0) {
    throw new ApiError(
      "Invalid user ID",
      400
    );
  }

  if (userId === 404) {
    throw new ApiError(
      "User not found",
      404
    );
  }

  return `User-${userId}`;
}


// Error handling

function getUser(userId: number): void {
  try {
    const user = fetchUser(userId);

    console.log(
      "User fetched successfully:",
      user
    );
  } catch (error: unknown) {
    if (error instanceof ApiError) {
      console.log(
        `API Error ${error.statusCode}: ${error.message}`
      );
    } else if (error instanceof Error) {
      console.log(
        `Unexpected Error: ${error.message}`
      );
    } else {
      console.log("Unknown error occurred.");
    }
  } finally {
    console.log(
      "User request completed."
    );
  }
}


// Successful request

getUser(101);


// Not found

getUser(404);


// Invalid request

getUser(0);