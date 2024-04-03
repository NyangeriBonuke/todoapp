const UserUseCase = require('../usecases/userUseCase')
const TokenUseCase = require('../usecases/tokenUseCase')
const jwt = require('jsonwebtoken')

class UserController{
    async signup(req, res){
        try{
            const {userName, email, password} = req.body
            if(!userName || !email || !password){
                res.status(400).send('Wrong Credentials')
            }
            const newUser = await UserUseCase.handleSignup(userName, email, password)
            if(newUser){
                const accessToken = jwt.sign({"username": userName}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '10s'})
                const refreshToken = jwt.sign({"username": userName}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '30s'})
                await TokenUseCase.postToken(newUser._id, refreshToken)
                res.cookie('jwt', refreshToken, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000})
                res.json(accessToken)
            }
            return res.send('Login First')
        }
        catch(error){
            return res.status(400).send(`Controller singup error: ${error}`)
        }
    }

    async login(req, res){
        try{
            const {email, password} = req.body
            const foundUser = await UserUseCase.handleLogin(email, password)
            const accessToken = jwt.sign({"username": foundUser.userName}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "30s"})
            const refreshToken = jwt.sign({"username": foundUser.userName}, process.env.REFRESH_TOKEN_SECRET, {expiresIn: "30s"})
            await TokenUseCase.postToken(foundUser._id, refreshToken)
            res.cookie('jwt', refreshToken, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000})
            res.json({accessToken})
        }
        catch(error){
            return res.status(400).send(`Controller login error: ${error}`)
        }
    }
}

module.exports = new UserController