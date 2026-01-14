const studentService = require('../../business/services/student.service');

// GET /api/students
exports.getStudents = async (req, res, next) => {
  try {
    const { major, status } = req.query;
    const result = await studentService.getAllStudents(major, status);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

// GET /api/students/:id
exports.getStudentById = async (req, res, next) => {
  try {
    const student = await studentService.getStudentById(req.params.id);
    res.json(student);
  } catch (error) {
    next(error);
  }
};

// POST /api/students
exports.createStudent = async (req, res, next) => {
  try {
    const student = await studentService.createStudent(req.body);
    res.status(201).json(student);
  } catch (error) {
    next(error);
  }
};

// PUT /api/students/:id
exports.updateStudent = async (req, res, next) => {
  try {
    const student = await studentService.updateStudent(req.params.id, req.body);
    res.json(student);
  } catch (error) {
    next(error);
  }
};

// PATCH /api/students/:id/gpa
exports.updateGPA = async (req, res, next) => {
  try {
    const student = await studentService.updateGPA(req.params.id, req.body.gpa);
    res.json(student);
  } catch (error) {
    next(error);
  }
};

// PATCH /api/students/:id/status
exports.updateStatus = async (req, res, next) => {
  try {
    const student = await studentService.updateStatus(
      req.params.id,
      req.body.status
    );
    res.json(student);
  } catch (error) {
    next(error);
  }
};

// DELETE /api/students/:id
exports.deleteStudent = async (req, res, next) => {
  try {
    await studentService.deleteStudent(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
