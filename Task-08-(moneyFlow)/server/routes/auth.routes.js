// const express = require('express')
// const router = express.Router()

// Model => Data Modeling
// Controller => Route Handlers
// Router => Route definition

const { User } = require('../models/user.model');
const {Password} = require('../utils/password.utils')
const {UserDto} = require('../dto/user.dto');
const { JWT } = require('../utils/jwt.util');
const { SigninController } = require('../controllers/auth/signin.controller');
const { SignupController } = require('../controllers/auth/signup.controller');

const router = require('express').Router()


router.post('/signup',  SignupController)

router.post('/signin',   SigninController)

module.exports = router;