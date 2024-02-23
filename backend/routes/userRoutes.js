const express = require('express')
const userController = require('../controllers/user-controller')

const router = express.Router()

//login user
router.post('/login', userController.login_user)

//signup user
router.post('/signUp', userController.signup_user)

module.exports = router