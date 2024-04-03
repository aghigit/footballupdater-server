const mongoose = require('mongoose')

 const pointstableSchema = new mongoose.Schema({
    clubname:{
        type:String,
        required:true
    },
    won:{
        type:String
    },
    tie:{
        type:String
    },
    loss:{
        type:String
    },
    point:{
        type:String, 
        required:true
    }
 })

 const pointstables = mongoose.model("pointstables",pointstableSchema)
  module.exports = pointstables