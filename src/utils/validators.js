const validator = require('validator');
const ErrorResponse = require('./errorResponse');

const validateRegister = (req, res, next) => {
  const { name, email, password } = req.body;
  
  if (!name || !email || !password) {
    throw new ErrorResponse('Por favor, informe nome, email e senha', 400);
  }
  
  if (!validator.isEmail(email)) {
    throw new ErrorResponse('Email inválido', 400);
  }
  
  if (password.length < 6) {
    throw new ErrorResponse('A senha deve ter pelo menos 6 caracteres', 400);
  }
  
  next();
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    throw new ErrorResponse('Por favor, informe email e senha', 400);
  }
  
  if (!validator.isEmail(email)) {
    throw new ErrorResponse('Email inválido', 400);
  }
  
  next();
};

module.exports = {
  validateRegister,
  validateLogin
};
