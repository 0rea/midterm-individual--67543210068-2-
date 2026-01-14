# Software Architecture Documentation

## ❌ Problems of Monolithic Architecture
- Business logic and presentation logic are tightly coupled
- Difficult to maintain and extend
- Hard to test individual components
- Poor scalability

---

## ✅ Layered Architecture Solution

This system is refactored into a 3-tier Layered Architecture.

### 1️⃣ Presentation Layer
- Controllers and Routes
- Handles HTTP requests and responses

### 2️⃣ Business Layer
- Services and Validators
- Contains business rules and validation logic

### 3️⃣ Data Layer
- Repositories and Database
- Manages data persistence using SQLite

---

## 🔄 Data Flow

Client → Routes → Controllers → Services → Repositories → Database

---

## 📊 Architecture Diagram

