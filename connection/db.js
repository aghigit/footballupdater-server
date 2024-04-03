const mongoose = require('mongoose')

const connectionString = process.env.DB_CONNECTION

mongoose.connect(connectionString).then(
    (res)=>{
        console.log("football server connected successfully with mongodb atlas");
    }
).catch((err)=>{
    console.log(err);
})