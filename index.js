require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./connection/db')
const router = require('./routes/router')

const footballServer = express()
footballServer.use(cors())
footballServer.use(express.json())
footballServer.use(router)
footballServer.use('/uploads',express.static('./uploads'))
const PORT = 3000 || process.env.PORT
footballServer.listen(PORT,()=>{
    console.log(`football server started at port ${PORT}`); 
})

footballServer.get('/',(req,res)=>{
    res.send("football server started...")
}) 