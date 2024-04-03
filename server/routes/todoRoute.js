const express = require('express')
const TodoController = require('../controllers/todoController')
const todoroutes = express.Router()

todoroutes.post('/createtodo', TodoController.createTodo)
todoroutes.get('/gettodo', TodoController.getTodo)
todoroutes.put('/updatetodo', TodoController.updateTodo)
todoroutes.delete('/deleteupdate/:id', TodoController.deleteTodo)

module.exports = todoroutes