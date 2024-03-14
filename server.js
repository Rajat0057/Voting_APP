const express = require('express');
const app = express();
const db = require('./db')
const bodyParser = require('body-parser');
require('dotenv').config();


const personroutes=require("./routes/personRoute")
const menuroutes= require("./routes/menuRoutes")

app.use(bodyParser.json());

const PORT = process.env.PORT || 4400 ;



app.listen(PORT, (resp, req) => {
    console.log("the server is start",PORT);
})

app.get('/', (req, resp) => {
    
    resp.send("welcome to my hotel")
})

app.use('/person',personroutes)
app.use('/menu',menuroutes)














