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

// routes.get('/test', authMiddleware, (req, res) => res.json({ ok: true }))

routes.use(authMiddleware)

// Questions routers
routes.get('/questions', controllers.QuestionsController.index)
routes.get('/questions/:questionId', controllers.QuestionsController.show)
routes.post('/questions', controllers.QuestionsController.store)
routes.put('/questions/:questionId', controllers.QuestionsController.update)
routes.delete('/questions/:questionId', controllers.QuestionsController.delete)

// Opportunity routes
routes.get('/opportunity', controllers.OpportunityController.index)
routes.get('/opportunity/:opportunityId', controllers.OpportunityController.show)
routes.post('/opportunity', controllers.OpportunityController.store)
routes.put('/opportunity/:opportunityId', controllers.OpportunityController.update)
routes.delete('/opportunity/:opportunityId', controllers.OpportunityController.delete)

module.exports = routes
