const mongoose = require('mongoose');

const mongoURL = 'mongodb://localhost:27017/hotels'






mongoose.connect(mongoURL,{
useNewUrlParser:true,
useUnifiedTopology:true}

)

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("server is connected")
})

db.on('error',(e)=>{
    console.log("their are some error",e)
})


db.on('disconnected',()=>{
    console.log("server is disconnected")
})


module.exports =db;