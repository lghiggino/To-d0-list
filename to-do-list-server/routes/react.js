const express = require('express')
const router = express.Router()
const authReactController = require('../controllers/authReact') 
const homeController = require('../controllers/home')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', homeController.getIndexReact)
router.get('/login', authReactController.getLogin)
router.post('/login', authReactController.postLogin)
router.get('/logout', authReactController.logout)
router.get('/signup', authReactController.getSignup)
router.post('/signup', authReactController.postSignup)

module.exports = router