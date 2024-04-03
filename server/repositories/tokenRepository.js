const Token = require('../models/tokenModel')

class TokenRepository{
    async createRefershToken(userId, token){
        return await Token.create({ user: userId, token })
    }

    async findRefershToken(token){
        return await Token.findOne({token}).populate('user')
    }

    async deleteRefreshToken(token){
        return await Token.deleteOne({token})
    }
}

module.exports = new TokenRepository