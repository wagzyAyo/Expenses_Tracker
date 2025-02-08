const jwt = require('jsonwebtoken');
const User = require('../models/user')

const authenticateToken = async (req, res, next)=> {
    const token = req.cookies.jwt

    if (!token){
        return res.status(401).json({message: "Access denied. You need authorization"})
    }
    try{
        const decoded = jwt.verify(token, process.env.SECRETE);
        req.user = await User.findById(decoded.userId).select('-password');
        next()
    } catch(err){
        if(err.name === 'TokenExpiredError'){
            return res.status(401).json({ message: "Token expired. Please log in again." });
        }
        res.status(400).json({message: "invalid token"})
    }
}

module.exports = authenticateToken;