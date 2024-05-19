const jwt = require('jsonwebtoken')

const authenticateToken = async (req, res, next)=> {
    const token = req.cookies.jwt || req.headers['authorization']

    if (!token){
        res.status(401).json({message: "Access denied. You need authorization"})
    }
    try{
        const decoded = jwt.verify(token, process.env.SECRETE);
        req.user = decoded;
        next()
    } catch(err){
        res.status(400).json({message: "invalid token"})
    }
}

module.exports = authenticateToken;