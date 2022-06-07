const express = require('express');
const router = express.Router();

const authController = require('../controllers/AuthController');

const { validateUser } = require('../models/User');
const validateMiddleWare = require('../middlewares/validData');

router.post('/register', validateMiddleWare(validateUser), authController.register);
router.post('/login', authController.login);

module.exports = router;