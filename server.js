const express = require('express');
const app = express();

const studentRoutes = require('./src/presentation/routes/student.routes');
const errorMiddleware = require('./src/presentation/middlewares/error.middleware');

app.use(express.json());
app.use('/api/students', studentRoutes);

// error handler (middleware)
app.use(errorMiddleware);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
