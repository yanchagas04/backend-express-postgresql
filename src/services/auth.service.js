const jwt = require('jsonwebtoken');
const User = require('../database/models/User');
const ErrorResponse = require('../utils/errorResponse');

const registerUser = async (name, email, password) => {

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ErrorResponse('Email já está em uso', 400);
  }
  
  const user = await User.create({ name, email, password });
  return user;
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    throw new ErrorResponse('Credenciais inválidas', 401);
  }
  
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new ErrorResponse('Credenciais inválidas', 401);
  }
  
  const token = jwt.sign(
    { id: user._id, name: user.name, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE || '30d' }
  );
  
  return { token, user };
};

module.exports = {
  registerUser,
  loginUser
};
