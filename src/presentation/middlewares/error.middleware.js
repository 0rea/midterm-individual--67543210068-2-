module.exports = (err, req, res, next) => {
  const statusCode = err.status || 400;

  res.status(statusCode).json({
    error: err.message || 'Something went wrong'
  });
};
