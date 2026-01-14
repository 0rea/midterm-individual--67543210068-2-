exports.validateStudent = (student) => {
  const { name, email, major } = student;

  if (!name || !email || !major) {
    throw new Error('Missing required student fields');
  }

  if (!email.includes('@')) {
    throw new Error('Invalid email format');
  }
};
