const studentRepository = require('../../data/repositories/student.repository');
const { validateStudent } = require('../validators/student.validator');

exports.getAllStudents = async () => {
  return await studentRepository.findAll();
};

exports.createStudent = async (student) => {
  validateStudent(student);
  return await studentRepository.create(student);
};
