const passport = require('passport')
const Person = require('./models/person')

const LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy(async(username,password,done)=>{
    try{
        console.log("the get password",username,password);
        const user = await Person.findOne({username:username});
        if(!user)
        {
            return done(null,false,{message:'User Not Found'});

        }
        const isPasswordMatch= await user.comparePassword(password); 

        if(isPasswordMatch)
        {
            return done(null,user);
        }
        else{
            return done(null,false,{message:'password Not match'});
        }

    }catch(err){
        return done(err);

    }
}))

module.exports=passport;////////////////////////////////// 