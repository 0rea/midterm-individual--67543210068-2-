const express = require('express');
const app = express();

const studentRoutes = require('./src/presentation/routes/student.routes');

app.use(express.json());

app.use('/api/students', studentRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
