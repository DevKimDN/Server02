const mongoose = require('mongoose')

const numXSchema = new mongoose.Schema({
    numX: {type:Number,required: [true, 'Need a number !']}
})

const NumX = mongoose.model('numX',numXSchema);

module.exports = NumX;