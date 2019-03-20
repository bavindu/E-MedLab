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
let updateUserDetails=function(req,res){
    console.log('inside update user details');
    console.log(req.body);
    User.findByIdAndUpdate(req._id,req.body,(err,doc)=>{
        if(err){
            res.status(500).send('cant update');
        }else{
            res.status(200);
        }
    })
}

let searchPatient=function(req,res){
    console.log("this is request "+req.body.input);
    const searchTerm=req.body.input;
    User.find({userName:{$regex:new RegExp(searchTerm)}},"userName",(err,data)=>{
        if(err){
            res.json("error");
        }
        else{
            console.log(data)
            res.send(data);
        }
    }).limit(10);
    
    
}


module.exports.searchPatient=searchPatient;
module.exports.updateUserDetails=updateUserDetails;
module.exports.addUser=addUser;
module.exports.authenticate=authenticate;
module.exports.userProfile=userProfile;