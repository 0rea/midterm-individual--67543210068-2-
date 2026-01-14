const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./students.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      major TEXT NOT NULL,
      gpa REAL DEFAULT 0.0,
      status TEXT DEFAULT 'active'
    )
  `);
});

module.exports = db;
