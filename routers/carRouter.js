const Router = require('express')
const router = new Router()
const carController = require('../controllers/carController')
const upload = require('../middlewaree/uploadFiles')
router.post('/create', upload.fields([{
    name: 'carouselPhotos', maxCount: 5
}, {
    name: 'photo', maxCount: 1
}]), carController.create)
router.get('/getAll', carController.getAll)

module.exports = router
