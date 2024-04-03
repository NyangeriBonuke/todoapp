const TodoRepository = require('../repositories/todoRepository')

class TodoUseCase{
    async createTodo(title, description, completed){
        try{
            const todo = await TodoRepository.createTodo(title, description, completed)
            return todo
        }
        catch(error){
            throw new Error(`Craete todo usecase error: ${error}`)
        }
    }

    async getTodo(){
        try{
            const todo = await TodoRepository.getTodo()
            return todo
        }
        catch(error){
            throw new Error(`Get todo usecase error: ${error}`)
        }
    }

    async updateTodo(id, update){
        try{
            const updatedtodo = await TodoRepository.updateTodo(id, update)
            return updatedtodo
        }
        catch(error){
            throw new Error(`Delete todo usecase error: ${error}`)
        }
    }

    async deleteTodo(id){
        try{
            const deleteTodo = await TodoRepository.deleteTodo(id)
            return deleteTodo
        }
        catch(error){
            throw new Error(`Delete todo usecase error: ${error}`)
        }
    }
}

module.exports = new TodoUseCase