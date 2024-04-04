const User = require('../models/userModel')

class UserRepository{
    async createUser(userData){
        try{
            const user = await User.create(userData)
            return user
        }
        catch(error){
            throw new Error(`Create user error ${error}`)
        }
    }

    async findUser(email){
        try{
            const user = await User.findOne({email})
            return user
        }
        catch(error){
            throw new Error(`Find user error ${error}`)
        }
    }

    async findUserById(id){
        try{
            const user = await User.findById(id)
            return user
        }
        catch(error){
            throw new Error(`Find user by id error ${error}`)
        }
    }
}

module.exports = new UserRepository