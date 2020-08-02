const mongoose = require('mongoose')

var Promotion = mongoose.model('Promotion', {
    id: { type: Number },
    brand: { type: String },
    description: { type: String },
    image: { type: String },
    price: { type: Number }
})


module.exports = { Promotion }