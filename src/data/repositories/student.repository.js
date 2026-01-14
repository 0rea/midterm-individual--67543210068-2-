const db = require('../database');

exports.findAll = () =>
  new Promise((resolve, reject) => {
    db.all('SELECT * FROM students', [], (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });

exports.create = (student) =>
  new Promise((resolve, reject) => {
    const { name, email, major } = student;
    db.run(
      'INSERT INTO students (name, email, major) VALUES (?, ?, ?)',
      [name, email, major],
      function (err) {
        if (err) reject(err);
        else resolve({ id: this.lastID, ...student });
      }
    );
  });
