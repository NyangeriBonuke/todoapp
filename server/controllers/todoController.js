const TodoUseCase = require('../usecases/todoUseCase')

class TodoController{
    async createTodo(req, res){
        try{
            const {title, description, completed} = req.body
            const createdTodo = await TodoUseCase.createTodo(title, description, completed)
            res.status(200).send(createdTodo)
        }
        catch(error){
            res.status(400).send(`Create todo controller error: ${error}`)
        }
    }

    async getTodo(req, res){
        try{
            const todoget = await TodoUseCase.getTodo()
            res.status(200).send(todoget)
        }
        catch(error){
            res.status(400).send(`Get todo controller error: ${error}`)
        }
    }

    async updateTodo(req, res){
        try{
            const {id, update} = req.body
            const updatedtodo = await TodoUseCase.updateTodo(id, update)
            res.status(200).send(updatedtodo)
        }
        catch(error){
            res.status(400).send(`Update todo controller error: ${error}`)
        }
    }

    async deleteTodo(req, res){
        try{
            const {id} = req.body
            const deleteTodo = await TodoUseCase.deleteTodo(id)
            res.status(200).send(deleteTodo)
        }
        catch(error){
            res.status(400).send(`Delete todo controller error: ${error}`)
        }
    }
}

module.exports = new TodoController