const UserRepository = require('../repositories/userRepository')

class RefreshUseCase{
    async findUserById(id){
        try{
            const user = UserRepository.findUserById(id)
            return user
        }
        catch(error){
            throw new Error(`Use cases find by id error ${error}`)
        }
    }
}

module.exports = new RefreshUseCase