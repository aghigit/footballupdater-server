const mongoose = require('mongoose')

const livescoreSchema = new mongoose.Schema({
    clubname1:{
        type:String,
        required:true
    },
   score1:{
        type:String,
    }, 
    clubname2:{
        type:String,
        required:true
    },
    score2:{
        type:String,
    },
    stadium:{
        type:String,
        required:true
    },
    discription:{
        type:String, 
    }
})

const livescores = mongoose.model("livescores",livescoreSchema)
module.exports = livescores  