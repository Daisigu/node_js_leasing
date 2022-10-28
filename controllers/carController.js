const { json } = require('express')
const Car = require('../models/Car')


class carController {


    async create(req, res) {
        try {
            const { engine, mark, model, price, mileage, availability } = req.body
            const car = new Car({
                engine, mark, model, price, mileage, availability
            })

            if (req.files.carouselPhotos) {
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
    async getCar(req,res){
       const {id} = req.params
        try {
            const car = await Car.findById(id)
            return res.json(car)
        } catch (e){

        }
    }

}

module.exports = new carController()
