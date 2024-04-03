const Todo = require('../models/todoModel')

class TodoRepository{
    async createTodo(title, description, completed){
        return await Todo.create({title, description, completed})
    }

    async getTodo(){
        return await Todo.find()
    }

    async updateTodo(id, update){
        return await Todo.findByIdAndUpdate(id, update, {new: true})
    }

    async deleteTodo(id){
        return await Todo.findByIdAndDelete(id)
    }
}

module.exports = new TodoRepository