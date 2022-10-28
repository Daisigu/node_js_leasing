const Car = require('../models/Car')


class carController {


    async create(req, res) {
        try {
            const { engine, mark, model } = req.body
            const car = new Car({
                engine, mark, model
            })
            car.save()
            return res.json( car )
        } catch (e) {
            console.log(e)
            res.status(400).json({ message: 'Car create error' })
        }
    }
    async getAll(req,res){
        try{
            const cars = await Car.find()
            return res.json(cars)
        } catch (e){

        }
    }

}

module.exports = new carController()
