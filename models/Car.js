const { Schema, model } = require('mongoose')


const Car = new Schema({
    mark: { 
        type: String, required: true 
    },
    engine: {
         type: String, required: true 
    },
    model: {
         type: String, required: true 
    },
    photo: {
         type: String, required: true 
    },
})

module.exports = model('Car', Car)
