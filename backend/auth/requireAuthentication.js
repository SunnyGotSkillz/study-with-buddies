const jwt = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req,res,next) => {
    
    const { auth } = req.headers

    if (!auth){
        return res.status(401).json({error:'requires Auth token'})
    }

    const token = auth.split(' ')[1] // token generator

    try {
        const {_id} = jwt.verify(token, process.env.SECRET) // token verification

        req.user = await User.findOne({ _id }).select('_id')
        next()

    } catch (error) {
        console.log(error)
        res.status(401).json({error: 'Unauthorized request'}) // token error
    }

}

module.exports = requireAuth