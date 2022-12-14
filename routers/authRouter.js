const Router = require('express')
const router = new Router()
const authController = require('../controllers/authController')
const {check} = require("express-validator")
const authMiddleware = require('../middlewaree/authMiddleware')
const roleMiddleware = require('../middlewaree/roleMiddleware')

router.post('/registration', [
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть больше 4 и меньше 10 символов").isLength({min:4, max:10})
], authController.registration)
router.post('/login', authController.login)
router.get('/users', roleMiddleware(["ADMIN"]), authController.getUsers)

module.exports = router
