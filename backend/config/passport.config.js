const passport=require('passport');
const localStrategy=require('passport-local').Strategy;


var User=require('../models/user.model').User;


passport.use(
    new localStrategy({
        usernameField:'email'
        },
        (userName,password,done)=>{
            console.log('inside passport use');
            User.findOne({email:userName},
                (err,user)=>{
                    if(err){
                        console.log(err);
                        return done(err);
                    }
                    else if(!user){
                        console.log('unknown user');
                        return done(null,false,{message:'unknown user'});
                    }
                    else if(!user.verifyPassword(password)){
                        console.log('wrong password');
                        return done(null,false,{message:'wrong password'})
                    }
                    else{
                        return done(null,user)
                    }
                }
            )
        }
    )
);




