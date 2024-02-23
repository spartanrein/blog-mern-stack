const User = require('../models/userModel')

const login_user = async (req, res) => {
    res.json({"mssg": "Logged In"})
}

const signup_user = async (req, res) => {
    res.json({"mssg": "Signed Up"})
}

module.exports= { login_user, signup_user} 