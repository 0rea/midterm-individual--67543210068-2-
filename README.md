# 💻 ENGSE207 Midterm Examination - Student Management System

## 📋 Project Information
- **Course:** ENGSE207 Software Architecture
- **Examination:** Midterm Practical Exam (Individual)
- **Student ID:** 67543210068-2
- **System:** Student Management System

---

## 📌 Project Overview
This project is part of the ENGSE207 Software Architecture midterm examination.  
The system is a simple **Student Management System** developed using **Node.js** and **Express**.

The original system was implemented using a **Monolithic Architecture** and has been **refactored into a Layered Architecture (3-tier)** to improve maintainability, readability, and scalability.

---

## 🏗️ Architecture Style
**Layered Architecture (3-tier)**

### 1️⃣ Presentation Layer
- Handles HTTP requests and responses
- Implemented using Express Routes and Controllers
- Responsible for input/output with clients

### 2️⃣ Business Layer
- Contains business logic and validation rules
- Implemented using Services and Validators
- Ensures data correctness and enforces business rules

### 3️⃣ Data Layer
- Manages data persistence
- Uses SQLite database
- Implements Repository pattern for database access

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
├── database.js
└── repositories/

---

## 🎯 Refactoring Summary

### ❌ Problems of Monolithic Architecture (Original System)
- Business logic, validation, and database access mixed in the same files
- Difficult to maintain and extend
- Hard to test individual components
- Poor separation of concerns

### ✅ Solution Using Layered Architecture
- Separated responsibilities into Presentation, Business, and Data layers
- Moved validation logic into Validators
- Centralized business rules inside Services
- Isolated database operations using Repository pattern

### ⭐ Benefits Achieved
- Clear separation of concerns
- Easier maintenance and future extension
- Improved code readability
- Better scalability and team collaboration

---

## 🚀 How to Run the Project

```bash
# Install dependencies
npm install

# Run the server
node server.js

Server will run at:
http://localhost:3000

📡 API Endpoints
Method	Endpoint	Description
GET	/api/students	Get all students
POST	/api/students	Create a new student

Example Request (POST)
{
  "name": "Test Student",
  "email": "test@student.com",
  "major": "Software Engineering",
  "gpa": 3.5
}

Example Response
{
  "id": 1,
  "name": "Test Student",
  "email": "test@student.com",
  "major": "Software Engineering",
  "gpa": 3.5
}

✅ Technologies Used

Node.js

Express.js

SQLite

Git & GitHub

📤 Submission Notes

This project is submitted as part of the ENGSE207 Midterm Practical Examination

The repository includes multiple commits showing step-by-step development

Author:
Student ID: 67543210068-2
Course: ENGSE207 Software Architecture