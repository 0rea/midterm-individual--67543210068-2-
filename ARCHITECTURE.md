# 🏗 Software Architecture Documentation
## Student Management System – ENGSE207 Midterm Examination

---

## 📌 Architecture Overview
This document describes the software architecture of the **Student Management System**
developed for the ENGSE207 Software Architecture midterm examination.

The system was refactored from a **Monolithic Architecture** into a **Layered Architecture (3-tier)**
to improve separation of concerns, maintainability, and scalability.

---

## ❌ Problems of Monolithic Architecture (Original System)

The original system suffered from the following issues:

- Business logic, data access, and HTTP handling were tightly coupled
- All logic resided in a single or few files
- Difficult to maintain and extend the system
- Hard to test individual components independently
- Poor scalability and low code readability
- High risk of bugs when modifying existing code

---

## ✅ Layered Architecture Solution

To solve these problems, the system was refactored into a **3-tier Layered Architecture**.
Each layer has a clear responsibility and communicates only with adjacent layers.

---

## 🧩 Architecture Layers

### 1️⃣ Presentation Layer
**Responsibility:**
- Handles HTTP requests and responses
- Acts as the interface between client and system

**Components:**
- Routes
- Controllers
- Middlewares (Error handling)

**Key Characteristics:**
- No business logic
- Delegates processing to the Business Layer

---

### 2️⃣ Business Layer
**Responsibility:**
- Contains core business logic and rules
- Validates input data
- Coordinates system operations

**Components:**
- Services
- Validators

**Key Characteristics:**
- Independent from HTTP and database implementation
- Central place for business rules enforcement

---

### 3️⃣ Data Access Layer
**Responsibility:**
- Manages data persistence
- Communicates with the database

**Components:**
- Repositories
- Database connection (SQLite)

**Key Characteristics:**
- Isolates SQL queries from the rest of the system
- Easy to change database implementation in the future

---

## 🔄 Data Flow

The following describes how data flows through the system:

1. Client sends an HTTP request
2. Request is received by Routes
3. Controller handles the request and calls Service
4. Service applies business logic and validation
5. Repository interacts with the database
6. Data is returned back through Service → Controller → Client

Client → Routes → Controllers → Services → Repositories → Database

---

## 📊 Architecture Diagram

┌─────────────────────────────────────┐
│ Client │
└─────────────────────────────────────┘
│
▼
┌─────────────────────────────────────┐
│ Presentation Layer │
│ Routes → Controllers → Middleware │
└─────────────────────────────────────┘
│
▼
┌─────────────────────────────────────┐
│ Business Layer │
│ Services → Validators │
└─────────────────────────────────────┘
│
▼
┌─────────────────────────────────────┐
│ Data Layer │
│ Repositories → Database │
└─────────────────────────────────────┘
│
▼
┌─────────────────────────────────────┐
│ SQLite Database │
└─────────────────────────────────────┘

---

## 🎯 Benefits of the New Architecture

- Clear separation of concerns
- Improved code readability and structure
- Easier maintenance and extension
- Better support for testing
- Scalable design suitable for future enhancements

---

## 📝 Conclusion
The refactoring from Monolithic Architecture to Layered Architecture significantly improves
the overall quality of the Student Management System. The new design aligns with software
architecture best practices taught in ENGSE207.

---
