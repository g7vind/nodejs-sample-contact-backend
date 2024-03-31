# Contacts Management API

A RESTful API for managing contacts and users, built with Node.js, Express.js, and MongoDB.

## Features

- User Authentication: Register, login, and logout functionality with JWT token-based authentication.
- CRUD Operations: Perform CRUD operations on contacts, including creating, reading, updating, and deleting contacts.
- User Management: Manage user accounts, including getting user details and updating user information.

## Prerequisites

- Node.js installed on your machine
- MongoDB installed and running locally or accessible via a remote connection
- Basic knowledge of JavaScript and RESTful APIs

## Installation

1. Clone the repository:

    ```
    git clone https://github.com/g7vind/nodejs-sample-contact-backend.git
    ```

2. Navigate to the project directory:

    ```
    cd nodejs-sample-contact-backend
    ```

3. Install the dependencies:

    ```
    npm install
    ```

4. Create a `.env` file in the project root directory and add the following environment variables:

    ```
    DB=<your_mongodb_connection_string>
    JWT_SECRET=<your_jwt_secret_key>
    SALT=<bcrypt_salt_rounds>
    PORT=<your_desired_port>
    ```

   Replace the placeholders with your actual values.

5. Start the server:

    ```
    npm run dev
    ```

   The server will start running on the specified port.

---

### Dependencies

This project uses the following dependencies:

- **express:** Web application framework for Node.js
- **mongoose:** MongoDB object data modeling (ODM) library
- **bcrypt:** Library for hashing passwords
- **jsonwebtoken:** Library for generating and verifying JSON Web Tokens
- **cookie-parser:** Middleware for parsing cookies
- **cors:** Middleware for configuring Cross-Origin Resource Sharing (CORS)
- **dotenv:** Library for loading environment variables from a .env file

---

### Contributing

Contributions are welcome! If you find any issues or want to add new features, please open an issue or submit a pull request.
