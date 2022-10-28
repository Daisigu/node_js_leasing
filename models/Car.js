const {Schema, model} = require('mongoose')


const Car = new Schema({
    engine: {type: String, required: true},
    mark: {type: String, required: true},
    model: {type: String, required: true}
})

module.exports = model('Car', Car)
