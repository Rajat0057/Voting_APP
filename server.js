const express = require('express');
const app = express();
const db = require('./db')
const bodyParser = require('body-parser');
require('dotenv').config();
const passport = require("./auth")



const personroutes=require("./routes/personRoute")
const menuroutes= require("./routes/menuRoutes")

app.use(bodyParser.json());

const PORT = process.env.PORT || 4400 ;

const logRequest=(req,resp,next)=>{
    console.log(`[${new Date().toLocaleDateString()}]Request Mode to: ${req.originalUrl}`);
    next();
}

app.use(logRequest)
app.use(passport.initialize()); 

app.listen(PORT, (resp, req) => {
    console.log("the server is start",PORT);
})

const localMiddleware  = passport.authenticate('local',{session:false});
app.get('/',localMiddleware,function (req, resp)  {
    
    resp.send("welcome to my hotel")
})

app.use('/person',personroutes)
app.use('/menu',localMiddleware,menuroutes)














