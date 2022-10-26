const Router = require('express')
const router = new Router()
const carsController = require('./carController')


router.post('/cars', carsController.create)
module.exports = router
