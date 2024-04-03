const { any } = require('../middlewares/multerMiddleware')
const pointstables = require('../models/pointstableModel')

// add points
exports.addpoint = async(req,res)=>{
    const {clubname,won,tie, loss, point}= req.body 
    try {
        const existingClub = await pointstables.findOne({clubname}) 
        if(existingClub){
            res.status(406).json("club already registered")
        }else{
            const newClub = new pointstables({
                clubname,won,tie,loss,point
            })
            await newClub.save()
            res.status(200).json(newClub) 
        }
    } 
    catch (err) {      
        res.status(401).json(err)
    }
}

// get points
exports.getallpointController = async(req,res)=>{  
    // 
    try {
        // getting all points
    const result = await pointstables.find()
    res.status(200).json(result)
    } catch (err) {
        res.status(401).json(err)
    }
}

// get single point 
exports.getsinglepointController = async(req,res)=>{
    const {_id} = req.params
    try {
        const result = await pointstables.findOne({_id})
        res.status(200).json(result)
    } catch (err) {
        res.status(401).json(err)  
    }
}

// update point 
exports.updatesinglepointController = async(req,res)=>{
    const {_id} = req.params
    const {clubname,won,tie, loss, point}= req.body
    try {
        const updatepoints = await pointstables.findByIdAndUpdate({_id},{
            clubname,won,tie, loss, point
        },{new:true})
        await updatepoints.save()  
        res.status(200).json(updatepoints) 
    } catch (err) {
        res.status(401).json(err)
    }
}

// remove table 
exports.removepointController = async (req,res)=>{
    const {_id} = req.params
    console.log(_id);
    try {
        const removepoint = await pointstables.findByIdAndDelete({_id})
        console.log("points removed");
        console.log(removepoint);
        res.status(200).json(removepoint)
    } catch (err) {
        res.status(401).json(err)
    }
}