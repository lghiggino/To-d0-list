const express = require('express')
const router = express.Router()
const apiController = require('../controllers/api') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, apiController.getTodos)

router.post('/createTodo', apiController.createTodo)

router.put('/markComplete', apiController.markComplete)

router.put('/markIncomplete', apiController.markIncomplete)

router.delete('/deleteTodo', apiController.deleteTodo)

module.exports = router