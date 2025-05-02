const protectedRoute = (req, res) => {
  console.log(`Protected route accessed by user: ${req.user.id}`);
  res.status(200).json({
    success: true,
    message: 'Acesso autorizado',
    user: {
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    }
  });
};

module.exports = {
  protectedRoute
};
