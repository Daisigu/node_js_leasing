const Router = require('express')
const router = new Router()
const carController = require('../controllers/carController')
const upload = require('../middlewaree/uploadFiles')
router.post('/create', upload.single('photo'),carController.create)
router.get('/getAll', carController.getAll)

module.exports = router
