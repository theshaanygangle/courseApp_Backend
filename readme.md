# 🎓 CourseApp Backend

Backend for a **Course Selling Platform** built using Node.js, Express.js, MongoDB, JWT, Zod, and Bcrypt. 
It supports user and admin authentication, course management, and purchase handling.

## 📦 Tech Stack

- **Node.js** – Server runtime
- **Express.js** – Routing and server framework
- **MongoDB** – NoSQL database
- **JWT** – Token-based authentication
- **Zod** – Input validation
- **Bcrypt** – Password hashing

## 📁 Folder Structure

COURSEAPP/
├── middlewares/ # Auth and role-based middleware
│ ├── admin.js
│ └── user.js
├── routes/ # Route handlers
│ ├── admin.js
│ ├── course.js
│ └── user.js
├── config.js # Configuration constants
├── db.js # MongoDB connection
├── index.js # Entry point
├── .env # Environment variables
├── .gitignore
├── package.json
└── README.md

## 🧪 Features

### 👤 Users
- Sign up & login with hashed passwords
- View and purchase courses
- Access list of purchased courses

### 🧑‍💼 Admin
- Create, update, and manage courses
- Secure admin-only routes

## 🔐 Authentication

- JWT for session management
- Passwords secured with bcrypt
- Middleware for user/admin route protection

## 🛠️ Setup Instructions

1. **Clone the repo**

```bash
git clone https://github.com/yourusername/courseapp-backend.git
cd courseapp-backend

Install dependencies
npm install
Create .env file

MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
Run the server

npm run dev
Server will start at: http://localhost:3000

📬 Sample API Endpoints
Method	Endpoint	Description
POST	/admin/signup	Admin registration
POST	/admin/courses	Create a course
GET	/admin/courses	View all courses
POST	/users/signup	User registration
GET	/users/courses	View available courses
POST	/users/courses/:id	Purchase a course
GET	/users/purchasedCourses	List purchased courses

📌 Dependencies
bash
npm install express mongoose dotenv jsonwebtoken bcrypt zod
Happy coding! 🚀
