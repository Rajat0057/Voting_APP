const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        required:true,
        enum:['chef','waiter','manager']
    },
    mobile:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    address:{
        type:String
    },
    salary:{
        type:Number
    }

});

const Person = mongoose.model('Person',personSchema);

module.exports=Person;