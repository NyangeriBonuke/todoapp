const express = require('express')
const UserController = require('../controllers/userController')

const routes = express.Router()

routes.post('/signup', UserController.signup)
routes.post('/login', UserController.login)

module.exports = routes