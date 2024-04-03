const TokenRepository = require('../repositories/tokenRepository')

class TokenUseCase{
    async postToken(userId, token){
        try{
            const userToken = await TokenRepository.createRefershToken(userId, token)
            return userToken
        }
        catch(error){
            throw new Error(`Usecase token error ${error}`)
        }
    }
}

module.exports = new TokenUseCase