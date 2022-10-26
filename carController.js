const Car = require('./models/Car')
var mongo = require('mongodb');
class carController {


    async create(req, res) {
        try {
            const { mark, engine, model } = req.body
            const car = new Car({mark, engine, model})
            car._id= new mongo.ObjectID();
            console.log(req.body, req.files);
            await car.save()
            return res.json(car)
        } catch (e) {
            console.log(e)
            res.status(400).json({ message: 'Car create error' })
        }
    }


}

module.exports = new carController()
