exports.validateStudent = (student) => {
  const { name, email, major } = student;

  if (!name || !email || !major) {
    throw new Error('Missing required student fields');
  }

  if (!email.includes('@')) {
    throw new Error('Invalid email format');
  }
};

exports.validateGPA = (gpa) => {
  if (gpa < 0 || gpa > 4) {
    throw new Error('GPA must be between 0.0 and 4.0');
  }
};

exports.validateStatus = (status) => {
  if (!['active', 'inactive'].includes(status)) {
    throw new Error('Invalid student status');
  }
};
