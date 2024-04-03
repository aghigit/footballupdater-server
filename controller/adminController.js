const admins = require('../models/adminModel')     
const jwt = require('jsonwebtoken')

// admin register
exports.registerController = async(req,res)=>{
    const{username,email,password} = req.body 
    try {
        const existingUser = await admins.findOne({email})
        if(existingUser){
            res.status(406).json('account already exist')
        }else{
            const newadmin = new admins({
                username,email,password
            })
            await newadmin.save()
            res.status(200).json(newadmin)
        }
    } catch (err) {
        res.status(401).json(err)   
    }
} 

// login  
exports.loginController = async (req,res)=>{
    const{email,password} = req.body
    try {
        const existingUser = await admins.findOne({email,password})
        if(existingUser){
            const token = jwt.sign({userId:existingUser._id},process.env.JWT_SECRET)
            res.status(200).json({
                token,existingUser
            })
        }else{
            res.status(404).json("invalid email or password...")

        }
    } catch (err) {
        res.status(401).json(err)
    }
}