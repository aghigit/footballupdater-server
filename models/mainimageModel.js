const mongoose = require('mongoose')

const mainimageSchema = new mongoose.Schema({
    mainimage:{
        type:String,
        required:true
    }
})

const mainimages = mongoose.model("mainimages",mainimageSchema)
module.exports = mainimages