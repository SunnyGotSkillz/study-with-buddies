const mongoose = require('mongoose')
const {ObjectId} = require('mongodb')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const { db } = require('../models/userModel')
const { useInRouterContext } = require('react-router-dom')

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d' })
}

// login user
const loginUser = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.login(email, password)

        const token = createToken(user._id)
        res.status(200).json({email, token,  userId: user._id })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// signup user
const signupUser = async (req, res) => {
    const { email, password, userName, fullName, age, sports, eventsCreated } = req.body
    try {
        const user = await User.signup(email, password, userName, fullName, age, sports, eventsCreated)
        const token = createToken(user._id)
        res.status(200).json({email, token,  userId: user._id })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
