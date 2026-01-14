const db = require('../database');

exports.findAll = (major, status) =>
  new Promise((resolve, reject) => {
    let query = 'SELECT * FROM students WHERE 1=1';
    const params = [];

    if (major) {
      query += ' AND major = ?';
      params.push(major);
    }

    if (status) {
      query += ' AND status = ?';
      params.push(status);
    }

    db.all(query, params, (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });

exports.findById = (id) =>
  new Promise((resolve, reject) => {
    db.get('SELECT * FROM students WHERE id = ?', [id], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });

exports.create = (student) =>
  new Promise((resolve, reject) => {
    const { name, email, major, gpa = 0.0, status = 'active' } = student;
    db.run(
      `INSERT INTO students (name, email, major, gpa, status)
       VALUES (?, ?, ?, ?, ?)`,
      [name, email, major, gpa, status],
      function (err) {
        if (err) reject(err);
        else resolve({ id: this.lastID, ...student });
      }
    );
  });

exports.update = (id, student) =>
  new Promise((resolve, reject) => {
    const { name, email, major } = student;
    db.run(
      `UPDATE students
       SET name = ?, email = ?, major = ?
       WHERE id = ?`,
      [name, email, major, id],
      function (err) {
        if (err) reject(err);
        else resolve({ id, ...student });
      }
    );
  });

exports.updateGPA = (id, gpa) =>
  new Promise((resolve, reject) => {
    db.run(
      'UPDATE students SET gpa = ? WHERE id = ?',
      [gpa, id],
      function (err) {
        if (err) reject(err);
        else resolve({ id, gpa });
      }
    );
  });

exports.updateStatus = (id, status) =>
  new Promise((resolve, reject) => {
    db.run(
      'UPDATE students SET status = ? WHERE id = ?',
      [status, id],
      function (err) {
        if (err) reject(err);
        else resolve({ id, status });
      }
    );
  });

exports.delete = (id) =>
  new Promise((resolve, reject) => {
    db.run('DELETE FROM students WHERE id = ?', [id], function (err) {
      if (err) reject(err);
      else resolve();
    });
  });
