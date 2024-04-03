const UserRepository = require('../repositories/userRepository')
const bcrypt = require('bcrypt')

class UserUseCase{
    async handleSignup(userName, email, password){
        try{
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)
            const newUser = await UserRepository.createUser({userName, email, password: hashedPassword})
            return newUser
        }
        catch(error){
            throw new Error(`Usecase signup error: ${error}`)
        }
    }

    async handleLogin(email, password){
        try{
            const user = await UserRepository.findUser(email)
            if(!user){
                throw new Error(`Wrong credentials`)
            }
            const checkUser = await bcrypt.compare(password, user.password)
            if(!checkUser){
                throw new Error(`Wrong credentials`)
            }
            return checkUser
        }
        catch(error){
            throw new Error(`Usecase login error: ${error}`)
        }
    }
}

module.exports = new UserUseCase