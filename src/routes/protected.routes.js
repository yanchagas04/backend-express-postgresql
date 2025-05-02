const express = require('express');
const { protect } = require('../middlewares/auth.middleware');
const { protectedRoute } = require('../controllers/protected.controller');

const router = express.Router();

router.get('/protected', protect, protectedRoute);

module.exports = router;
