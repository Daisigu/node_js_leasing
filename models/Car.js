const {Schema, model} = require('mongoose')


const Car = new Schema({
    mark: {type: String, required: true},
    engine: {type: String, required: true},
    price: {type: String, required: true},
    mileage: {type: String, required: true},
    availability: {type: String, required: true},
    model: {type: String, required: true},
    photo: {type: String, required: true},
    carouselPhotos: {type: Array, required: true}
})

module.exports = model('Car', Car)
