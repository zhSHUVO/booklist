# Booklist API

Booklist is a RESTful API for managing books, categories, users, and orders. It provides endpoints for creating, retrieving, updating, and deleting various resources.

## Table of Contents

-   [Technologies Used](#technologies-used)
-   [Installation](#installation)
-   [Routes](#routes)

## Technologies Used

This project is built using the following technologies and dependencies:

-   [Node.js](https://nodejs.org/)
-   [Express.js](https://expressjs.com/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Prisma](https://www.prisma.io/)
-   [JWT (JSON Web Tokens)](https://jwt.io/)
-   [bcrypt](https://www.npmjs.com/package/bcrypt)
-   [dotenv](https://www.npmjs.com/package/dotenv)
-   [cors](https://www.npmjs.com/package/cors)
-   Other dependencies as listed in the [package.json](package.json) file.

## Installation

To get started with the Booklist API, follow these steps:

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/zhSHUVO/booklist.git
    ```

2. Change into the project directory:

    ```bash
    cd booklist
    ```

3. Install the project dependencies:

    ```bash
    yarn install
    ```

4. Create a `.env` file in the project root and configure your environment variables:

    ```
     NODE_ENV=development

     PORT=5000

     DATABASE_URL=your_database_url_here

     BCRYPT_SALT_ROUNDS=your_becrypt_salt_round_here

     JWT_SECRET=your_jwt_secret_here

     JWT_EXPIRES_IN=your_jwt_expire_duration_here

     JWT_REFRESH_SECRET=your_jwt_refresh_secret_here

     JWT_REFRESH_EXPIRES_IN=your_jwt_expire_duration_here
    ```

5. Start the server:

    ```bash
    npm run dev
    ```

The Booklist API should now be up and running on http://localhost:5000.

## Routes

The API is organized into the following routes:

-   **Authentication:** `/api/v1/auth`
-   **Users:** `/api/v1/users`
-   **Categories:** `/api/v1/categories`
-   **Books:** `/api/v1/books`
-   **Orders:** `/api/v1/orders`

Each route contains specific endpoints for their respective operations.

You can use tools like Postman to interact with the API. Here are some example API requests:

### User

-   **User Signup (POST):** Create a new user account

    ```
    POST http://localhost:5000/api/v1/auth/signup
    ```

-   **Get Users (GET):** Retrieve a list of all users

    ```
    GET http://localhost:5000/api/v1/users
    ```

-   **Get Single User (GET):** Retrieve a specific user by ID

    ```
    GET http://localhost:5000/api/v1/users/6177a5b87d32123f08d2f5d4
    ```

-   **Update User (PATCH):** Update a user's information

    ```
    PATCH http://localhost:5000/api/v1/users/6177a5b87d32123f08d2f5d4
    ```

-   **Delete User (DELETE):** Delete a user account

    ```
    DELETE http://localhost:5000/api/v1/users/6177a5b87d32123f08d2f5d4
    ```

-   **Get Profile (GET):** Retrieve the user's profile
    ```
    GET http://localhost:5000/api/v1/profile
    ```

### Category

-   **Create Category (POST):** Create a new category

    ```
    POST http://localhost:3000/api/v1/categories/create-category
    ```

-   **Get Categories (GET):** Retrieve a list of all categories

    ```
    GET http://localhost:3000/api/v1/categories
    ```

-   **Get Single Category (GET):** Retrieve a specific category by ID

    ```
    GET http://localhost:3000/api/v1/categories/6177a5b87d32123f08d2f5d4
    ```

-   **Update Category (PATCH):** Update a category's information

    ```
    PATCH http://localhost:3000/api/v1/categories/6177a5b87d32123f08d2f5d4
    ```

-   **Delete Category (DELETE):** Delete a category

    ```
    DELETE http://localhost:3000/api/v1/categories/6177a5b87d32123f08d2f5d4
    ```

### Book

-   **Create Book (POST):** Create a new book

    ```
    POST http://localhost:3000/api/v1/books/create-book
    ```

-   **Get Books (GET):** Retrieve a list of all books

    ```
    GET http://localhost:3000/api/v1/books
    ```

-   **Get Books by Category (GET):** Retrieve books by category ID

    ```
    GET http://localhost:3000/api/v1/books/:categoryId/category
    ```

-   **Get Single Book (GET):** Retrieve a specific book by ID

    ```
    GET http://localhost:3000/api/v1/books/:id
    ```

-   **Update Book (PATCH):** Update a book's information

    ```
    PATCH http://localhost:3000/api/v1/books/:id
    ```

-   **Delete Book (DELETE):** Delete a book

    ```
    DELETE http://localhost:3000/api/v1/books/:id
    ```

### Orders

-   **Create Order (POST):** Create a new order

    ```
    POST http://localhost:3000/api/v1/orders/create-order
    ```

-   **Get Orders (GET):** Retrieve a list of all orders

    ```
    GET http://localhost:3000/api/v1/orders
    ```

-   **Get Single Order (GET):** Retrieve a specific order by ID
    ```
    GET http://localhost:3000/api/v1/orders/:orderId
    ```
