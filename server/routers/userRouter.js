const Router = require('express')
const cors = require('cors')
const UsersController = require('../Controllers/UsersController.js')

const router = new Router()

router.get('/users', cors(), UsersController.getUsers)

module.exports = router