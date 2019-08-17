const express = require('express')

const routes = new express.Router()

const authMiddleware = require('../middlewares/auth')
const controllers = require('../controllers')

routes.get('/', (req, res) => {
  res.send('hello word')
})

routes.post('/sessions', controllers.SessionController.store)

routes.get('/user', controllers.UserController.index)
routes.get('/user/:id', controllers.UserController.show)
routes.post('/user', controllers.UserController.store)
routes.put('/user/:id', controllers.UserController.update)
routes.delete('/user/:id', controllers.UserController.destroy)

routes.get('/test', authMiddleware, (req, res) => res.json({ ok: true }))

module.exports = routes
