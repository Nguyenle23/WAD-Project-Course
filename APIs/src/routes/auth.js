const express = require('express');
const router = express.Router();

const authController = require('../controllers/AuthController');

const { validateUser } = require('../models/User');
const validateMiddleWare = require('../middlewares/validData');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/forgot', authController.forgot);
router.post('/reset/:id', authController.reset);

module.exports = router;