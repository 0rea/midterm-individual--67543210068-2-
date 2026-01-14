# ENGSE207 Midterm Examination - Student Management System

## 📌 Project Overview
This project is part of the ENGSE207 Software Architecture midterm examination.
The system is a simple Student Management System developed using Node.js and Express,
refactored from a Monolithic Architecture into a Layered Architecture (3-tier).

---

## 🏗 Architecture Overview
The system follows a Layered Architecture consisting of:

- **Presentation Layer**
  - Handles HTTP requests and responses
  - Controllers and Routes using Express

- **Business Layer**
  - Contains business logic and validation rules
  - Services and Validators

- **Data Layer**
  - Manages data persistence
  - SQLite database and Repository pattern

---

## 🚀 How to Run the Project

```bash
npm install
node server.js

Server will run at: 
http://localhost:3000


---

## 📡 API Endpoints

| Method | Endpoint | Description |
|------|---------|------------|
| GET | /api/students | Get all students |
| POST | /api/students | Create a new student |

---

## 🧪 Example Request (POST)

```json
{
  "name": "Test Student",
  "email": "test@student.com",
  "major": "Software Engineering"
}

Author

Student ID: 67543210068-2