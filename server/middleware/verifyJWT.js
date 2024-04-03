const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers['authorization']
    if(!authHeader) return res.sendStatus(401)
    const authToken = authHeader.split(' ')[1]
    jwt.verify(authToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err) return res.sendStatus(403)
        req.user = decoded.userName
        next()
    })
}

module.exports = verifyJWT