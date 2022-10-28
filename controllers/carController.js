const { json } = require('express')
const Car = require('../models/Car')


class carController {


    async create(req, res) {
        try {
            const { engine, mark, model } = req.body
            const car = new Car({
                engine, mark, model
            })

            if (req.files.carouselPhotos) {
                let path = ''
                req.files.carouselPhotos.forEach((file) => {
                    car.carouselPhotos.push(file.path)
                })
              
            }
            if (req.files.photo) {
                car.photo = req.files.photo[0].path
            }
            car.save()
            return res.json(car)
        } catch (e) {
            console.log(e)
            res.status(400).json({ message: 'Car create error' })
        }

    }
    async getAll(req, res) {
        try {
            const cars = await Car.find()
            return res.json(cars)
        } catch (e) {
            console.log(e);
        }
    }

}

module.exports = new carController()
