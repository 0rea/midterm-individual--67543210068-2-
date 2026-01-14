const studentRepository = require('../../data/repositories/student.repository');
const {
  validateStudent,
  validateGPA,
  validateStatus
} = require('../validators/student.validator');

exports.getAllStudents = async (major, status) => {
  const students = await studentRepository.findAll(major, status);

  const statistics = {
    total: students.length,
    active: students.filter(s => s.status === 'active').length,
    inactive: students.filter(s => s.status === 'inactive').length
  };

  return { students, statistics };
};

exports.getStudentById = async (id) => {
  const student = await studentRepository.findById(id);
  if (!student) throw new Error('Student not found');
  return student;
};

exports.createStudent = async (student) => {
  validateStudent(student);
  return await studentRepository.create(student);
};

exports.updateStudent = async (id, student) => {
  validateStudent(student);
  return await studentRepository.update(id, student);
};

exports.updateGPA = async (id, gpa) => {
  validateGPA(gpa);
  return await studentRepository.updateGPA(id, gpa);
};

exports.updateStatus = async (id, status) => {
  validateStatus(status);
  return await studentRepository.updateStatus(id, status);
};

exports.deleteStudent = async (id) => {
  return await studentRepository.delete(id);
};
