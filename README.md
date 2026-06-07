# DecodersLab Task 3 - Secure Authentication System

A secure REST API built with Node.js, Express.js, and MongoDB that implements user authentication using bcrypt password hashing and JSON Web Tokens (JWT).

## 🚀 Features

* User Registration
* Password Hashing with bcrypt
* User Login
* JWT Token Generation
* Protected Routes using Authentication Middleware
* MongoDB Atlas Integration

## 🛠️ Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* bcryptjs
* JSON Web Token (JWT)
* dotenv
* Postman

## 📌 API Endpoints

| Method | Endpoint             | Description           |
| ------ | -------------------- | --------------------- |
| POST   | `/api/auth/register` | Register a new user   |
| POST   | `/api/auth/login`    | Login and receive JWT |
| GET    | `/api/auth/profile`  | Protected route       |

## 📂 Project Structure

```
DecodersLab-task3/
│
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

## ⚙️ Installation

```bash
git clone <repository-url>
cd DecodersLab-task3
npm install
```

Create a `.env` file:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the server:

```bash
node server.js
```

## 🧪 Testing

Use Postman to test:

* User Registration
* User Login
* JWT Protected Route

## 🔒 Authentication Flow

1. Register a user.
2. Password is securely hashed using bcrypt.
3. Login with valid credentials.
4. Receive a JWT token.
5. Access protected routes by sending:

```
Authorization: Bearer <your_token>
```

## 👨‍💻 Author

**Vishnu Vardhan**

Backend Development Internship Project - DecodeLabs
