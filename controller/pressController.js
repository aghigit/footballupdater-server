const presses = require('../models/pressModel')

exports.addpressController = async (req,res)=>{
    const {pressHeading,pressDiscription}= req.body 
    try {
        const existingPress = await presses.findOne({pressHeading})
        if(existingPress){
            res.status(406).json("News already added")
        }else{
            const newPress = new presses({
                pressHeading,pressDiscription
            })
            await newPress.save()
            res.status(200).json(newPress)
        }
    } catch (err) {
        res.status(401).json(err)
    }
}

// get press controller
exports.getpressController = async(req,res)=>{
    try {
       const press = await presses.find()
       res.status(200).json(press) 
    } catch (err) {
        res.status(401).json(err)
    }
}

// get single press
exports.getsinglepressController = async (req,res)=>{
    const {_id} = req.params
    try {
        const result = await presses.findOne({_id})
        res.status(200).json(result)
    } catch (err) {
        res.status(401).json(err) 
    } 
}

// update single
exports.updatesinglepressController = async (req,res)=>{
    const {_id} = req.params
    const {pressHeading,pressDiscription}= req.body 
    try {
        const updatePress = await presses.findByIdAndUpdate({_id},
          {pressHeading,pressDiscription},
          {new:true} )
          await updatePress.save()
          res.status(200).json(updatePress) 
    } catch (err) {
        res.status(401).json(err)
    }
}

// delete press 
exports.deletepressController = async (req,res)=>{
    const {_id} = req.params
    try {
        const removePress = await presses.findByIdAndDelete({_id})
        res.status(200).json(removePress)
    } catch (err) {
        res.status(401).json(err)
    }
}