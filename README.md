# Student Management System - Layered Architecture

## 📋 Project Information
- **Student Name:** Nattapong
- **Student ID:** 67543210068-2
- **Course:** ENGSE207 Software Architecture

---

## 📌 Project Overview
This project is part of the ENGSE207 Software Architecture midterm examination.
The system is a Student Management System developed using Node.js and Express,
refactored from a Monolithic Architecture into a Layered Architecture (3-tier).

---

## 🏗 Architecture Style
**Layered Architecture (3-tier)**

### Architecture Layers
- **Presentation Layer**
  - Handles HTTP requests and responses
  - Controllers, Routes, and Middlewares

- **Business Layer**
  - Contains business logic and validation rules
  - Services and Validators

- **Data Layer**
  - Handles data persistence
  - SQLite database and Repository pattern

---

## 📂 Project Structure
src/
├── presentation/
│ ├── controllers/
│ ├── routes/
│ └── middlewares/
├── business/
│ ├── services/
│ └── validators/
└── data/
├── repositories/
└── database/


---

## 🎯 Refactoring Summary

### ❌ Problems of Monolithic Architecture
- All logic was implemented in a single file
- Business logic mixed with HTTP handling and database queries
- Difficult to maintain and extend
- Hard for multiple developers to work together

### ✅ Solution Using Layered Architecture
- Separated system into Presentation, Business, and Data layers
- Each layer has a clear responsibility
- Business rules are isolated from HTTP and database code

### 🚀 Benefits
- Easier to maintain and debug
- Improved code readability
- Better scalability for future features
- Supports teamwork and cleaner development process

---

## 🚀 How to Run the Project

```bash
npm install
node server.js

Server will run at:
http://localhost:3000

| Method | Endpoint                 | Description           |
| ------ | ------------------------ | --------------------- |
| GET    | /api/students            | Get all students      |
| GET    | /api/students/:id        | Get student by ID     |
| POST   | /api/students            | Create new student    |
| PUT    | /api/students/:id        | Update student        |
| PATCH  | /api/students/:id/gpa    | Update student GPA    |
| PATCH  | /api/students/:id/status | Update student status |
| DELETE | /api/students/:id        | Delete student        |

Example Request (POST)
{
  "name": "Test Student",
  "email": "test@student.com",
  "major": "Software Engineering"
}
