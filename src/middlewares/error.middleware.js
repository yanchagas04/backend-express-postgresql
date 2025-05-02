const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;
  
  console.log(`${err.statusCode || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
  
  if (err.name === 'CastError') {
    const message = `Recurso não encontrado`;
    error = new ErrorResponse(message, 404);
  }
  
  if (err.code === 11000) {
    const message = 'Valor de campo duplicado';
    error = new ErrorResponse(message, 400);
  }
  
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message);
    error = new ErrorResponse(message, 400);
  }
  
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Erro no servidor'
  });
};

class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

module.exports = errorHandler;
