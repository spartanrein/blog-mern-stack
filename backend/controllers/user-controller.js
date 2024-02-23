const User = require('../models/userModel')

const login_user = async (req, res) => {
    res.json({"mssg": "Logged In"})
}

const signup_user = async (req, res) => {
    const {email, password} = req.body

    try {
        const user = await User.signup(email, password)
        res.status(200).json({email, user})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

module.exports= { login_user, signup_user } 