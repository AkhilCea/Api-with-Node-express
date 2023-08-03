const userController = require('../controllers/userController.js')

const express = require('express');
const router = express();


// User Signup
router.post('/signup', userController.signup);

// User Login
router.post('/login', userController.login);