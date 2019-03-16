const User=require('../models/user.model').User;
const passport=require('passport');
const lodash=require('lodash')



let addUser=function(req,res){
    console.log('Add user');
    const user=new User();
    user.userName=req.body.userName;
    user.email=req.body.email;
    user.userType=req.body.userType;
    user.password=req.body.password;
    user.save((err,doc)=>{
        if(err){
            res.send(doc);
        }
    });
}

let authenticate=function(req,res,next){
    console.log('inside authetication');
    passport.authenticate('local',(err,user,info)=>{
         if(err){
             return res.status(400).json(err);
         }
         else if(user){
            return res.status(200).json({'token':user.generateJWT()});
         }
         else{
            console.log(info)
            return res.status(404).json(info);
         }
    })(req,res)
};

let userProfile=function(req,res,next){
    console.log('inside user profile');
    User.findOne({_id:req._id},(err,user)=>{
        if(err){
            return res.status(404).json({status:false,message:"No user record found"})
        }
        else{
            return res.status(200).json({status:true,user:lodash.pick(user,["userName","email","userType"])})
        }
    })

}


module.exports.addUser=addUser;
module.exports.authenticate=authenticate;
module.exports.userProfile=userProfile;