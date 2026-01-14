const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');

// GET all students
router.get('/', studentController.getStudents);

// GET student by id
router.get('/:id', studentController.getStudentById);

// CREATE student
router.post('/', studentController.createStudent);

// UPDATE student
router.put('/:id', studentController.updateStudent);

// UPDATE GPA
router.patch('/:id/gpa', studentController.updateGPA);

// UPDATE status
router.patch('/:id/status', studentController.updateStatus);

// DELETE student
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
