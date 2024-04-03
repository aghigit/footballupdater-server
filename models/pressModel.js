const mongoose = require('mongoose')

const pressSchema = new mongoose.Schema({
    pressHeading:{
        type:String,
        required:true
    },
    pressDiscription:{
        type:String
    }
})

const presses = mongoose.model("presses",pressSchema)
module.exports = presses