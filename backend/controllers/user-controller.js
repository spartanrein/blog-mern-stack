const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const login_user = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.status(200).json({email, token})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

const signup_user = async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await User.signup(email, password)
        const token = createToken(user._id)
        res.status(200).json({email, token})
    } catch (err) {
        res.status(400).json({error: err.message})
    }
}

function createToken(_id){
    return jwt.sign({_id}, process.env.TOKEN_SECRET, {expiresIn: "1d"})
}

module.exports= { login_user, signup_user } 