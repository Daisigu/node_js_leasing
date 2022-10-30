const Router = require('express')
const router = new Router()
const requestController = require('../controllers/requestController')

router.post('/clientRequest', requestController.clientRequest)


module.exports = router
