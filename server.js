const express = require('express');
const app = express();
const db = require('./db')
const bodyParser = require('body-parser');


const personroutes=require("./routes/personRoute")
const menuroutes= require("./routes/menuRoutes")

app.use(bodyParser.json());


app.listen(4400, (resp, req) => {
    console.log("the server is start");
})

app.get('/', (req, resp) => {
    
    resp.send("welcome to my hotel")
})

app.use('/person',personroutes)
app.use('/menu',menuroutes)














