const jwt = require('jsonwebtoken');
const ErrorResponse = require('../utils/errorResponse');

const protect = async (req, res, next) => {
  let token;
  
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }
  
  if (!token) {
    console.log('Attempt to access protected route without token');
    return next(new ErrorResponse('Acesso não autorizado', 401));
  }
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { id: decoded.id, name: decoded.name, email: decoded.email };
    next();
  } catch (error) {
    console.log(`JWT verification error: ${error.message}`);
    next(new ErrorResponse('Token inválido', 401));
  }
};

module.exports = { protect };
