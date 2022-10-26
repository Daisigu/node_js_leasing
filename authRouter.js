const Router = require('express')
const router = new Router()
const userController = require('./authController')
const carsController = require('./carController')
const {check} = require("express-validator")
const authMiddleware = require('./middlewaree/authMiddleware')
const roleMiddleware = require('./middlewaree/roleMiddleware')

router.post('/registration', [
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль должен быть больше 4 и меньше 10 символов").isLength({min:4, max:10})
], userController.registration)
router.post('/login', userController.login)
router.get('/users', roleMiddleware(["ADMIN"]), userController.getUsers)
router.post('/cars', carsController.create)
module.exports = router
