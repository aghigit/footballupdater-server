const livescores = require('../models/livescoreModel') 

// add live
exports.addliveController = async(req,res)=>{
    const {clubname1,score1,clubname2,score2,stadium,discription} = req.body 
    
    try {
        const existingLive = await livescores.findOne({clubname1})
        if(existingLive){
            res.status(406).json("club already registered")
        }else{
            const newLive = new livescores({
                clubname1,score1,clubname2,score2,stadium,discription
            })
            await newLive.save()
            res.status(200).json(newLive)
        }
    } catch (err) {
        res.status(401).json(err)
    }
}

// get live
exports.getliveController = async(req,res)=>{
    
    try {
        const livescore = await livescores.find()
    res.status(200).json(livescore)
    } catch (err) {
        res.status(401).json(err)
    }
}

// get single live
exports.getsingleliveController = async (req,res)=>{
    const {_id} = req.params
    try {
        const result = await livescores.findOne({_id})
        res.status(200).json(result)        
    } catch (err) {
        res.status(401).json(err)  
    }
}

// update live
exports.updateliveController = async(req,res)=>{
    const {_id} = req.params
    const {clubname1,score1,clubname2,score2,stadium,discription} = req.body
    try {
        const updateLive = await livescores.findByIdAndUpdate({_id},
            {clubname1,score1,clubname2,score2,stadium,discription},
            {new:true})
            await updateLive.save()
            res.status(200).json(updateLive)
    } catch (err) {
        res.status(401).json(err)
    }

}

// delete live
exports.deleteliveController = async(req,res)=>{
    const {_id} = req.params 
    try {
        const removeLive = await livescores.findByIdAndDelete({_id})
        res.status(200).json(removeLive)
    } catch (err) {
        res.status(401).json(err)
    }
}

// update live
exports.updateliveController = async(req,res)=>{
    const {_id} = req.params
    const {clubname1,score1,clubname2,score2,stadium,discription} = req.body
    try {
       const updateLive = await livescores.findByIdAndUpdate({_id},
        {clubname1,score1,clubname2,score2,stadium,discription},
        {new:true}) 
        await updateLive.save()
        res.status(200).json(updateLive) 
    } catch (err) {
        res.status(401).json(err)
    }
}