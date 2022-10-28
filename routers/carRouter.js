const Router = require('express')
const router = new Router()
const carController = require('../controllers/carController')

router.post('/create', carController.create)
router.get('/getAll', carController.getAll)

module.exports = router
