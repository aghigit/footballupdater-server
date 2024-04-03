const mainimages = require('../models/mainimageModel')

exports.addmainImg = async(req,res)=>{
    console.log("inside add project api");
    const mainimage = req.file.filename
    console.log(mainimage);
    try { 
        const newMainimage = new mainimages({ 
            mainimage
        })
       await newMainimage.save()
        res.status(200).json(newMainimage) 

    } catch (err) {
        res.status(401).json(err) 
    }
} 

// get 
exports.getmainimageController = async(req,res)=>{
    try {
        // getting all points
    const result = await mainimages.find()
    res.status(200).json(result)
    } catch (err) {
        res.status(401).json(err)
    }
}

// delete image
exports.deleteimageControlller = async(req,res)=>{
    const {_id} = req.params 
    try {
        const removeImage = await mainimages.findByIdAndDelete({_id})
        res.status(200).json(removeImage) 
    } catch (err) {
        res.status(401).json(err)
    }
}
