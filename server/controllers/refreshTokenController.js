const RefreshUseCase = require('../usecases/refreshUseCase')
const jwt = require('jwt')

class RefreshTokenController{
    async handleRefreshToken(req, res){
        const cookies = req.cookies
        if(!cookies?.jwt) return res.status(401)
        const refreshToken = cookies.jwt

        const decoded = jwt.decoded(refreshToken)
        const userId = decoded.userId
        const foundUser = await RefreshUseCase.findUserById(userId)
        if(!foundUser) return res.status(403)
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err || foundUser.userName !== decoded.userName) return res.status(403)
            const accessToken = jwt.sign({'username': decoded.userName}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "30s"})
        })
        res.json(accessToken)
    }
}

module.exports = new RefreshTokenController