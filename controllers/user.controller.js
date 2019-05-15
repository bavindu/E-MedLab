const User=require('../models/user.model').User;
const passport=require('passport');
const lodash=require('lodash');



let addUser=function(req,res){
    console.log('Add user');
    const user=new User();
    user.firstName=req.body.firstName;
    user.lastName=req.body.lastName;
    user.sex=req.body.sex;
    user.userName=req.body.userName;
    user.email=req.body.email;
    user.birthDay=req.body.birthDay;
    user.userType=req.body.userType;
    user.password=req.body.password;
    user.save((err,doc)=>{
        if(err){
            console.log(err);
            res.send(err);
        }
        else{
            console.log('User added successfully')
        }
    });
}

let authenticate=function(req,res,next){
    console.log('inside authentication');
    passport.authenticate('local',(err,user,info)=>{
         if(err){
             return res.status(400).json(err);
         }
         else if(user){
            return res.status(200).json({'token':user.generateJWT()});
         }
         else{
            console.log(info);
            return res.status(404).json(info);
         }
    })(req,res)
};

let userProfile=function(req,res){
    console.log('inside user profile');
    User.findOne({_id:req._id},(err,user)=>{
        if(err){
            return res.status(404).json({status:false,message:"No user record found"})
        }
        else{
            console.log(user);
            return res.status(200).json({status:true,user:lodash.pick(user,["userName","email","userType","firstName","lastName","birthDay","sex"])})
        }
    })


}
let updateUserDetails=function(req,res){
    console.log('inside update user details');
    console.log(req.body);
    User.findById(req._id,(err,doc)=>{
        if(!err){
            if(req.body.newPassword){
                console.log("new password is not null");
                doc.firstName=req.body.firstName;
                doc.lastName=req.body.lastName;
                doc.userName=req.body.userName;
                doc.email=req.body.email;
                doc.password=req.body.newPassword;
                doc.save((err,sdoc)=>{
                    if(err){
                        console.log(err);
                        res.send(err);
                    }
                    else{
                        console.log('User added successfully')
                    }
                });
            }
            else{
                console.log("new password is null");
                // doc.firstName=req.body.firstName;
                // doc.lastName=req.body.lastName;
                // doc.userName=req.body.userName;
                // doc.email=req.body.email;
                User.update({
                    _id:doc._id
                    },
                    {
                        $set:{
                            firstName:req.body.firstName,
                            lastName:req.body.lastName,
                            userName:req.body.userName,
                            email:req.body.email
                        }
                    },
                    (err,doc)=>{
                    if(err){
                        console.log(err);
                        res.send(err);
                    }
                    else{
                        console.log('User added successfully')
                    }
                })
            }

        }
    })
}

let searchPatient=function(req,res){
    console.log("this is request "+req.body.input);
    const searchTerm=req.body.input;
    User.find({userName:{$regex:new RegExp(searchTerm)},userType:'patient'},"userName",(err,data)=>{
        if(err){
            res.json("error");
        }
        else{
            console.log(data)
            res.send(data);
        }
    }).limit(10);
    
    
}

let getUserType=function(req,res){
    console.log('inside get user type')
    User.findById(req._id,"userType",(err,data)=>{
        if(err){
            res.send(err)
        }
        else{
            res.send(data)
        }
    })
}


module.exports.searchPatient=searchPatient;
module.exports.updateUserDetails=updateUserDetails;
module.exports.addUser=addUser;
module.exports.authenticate=authenticate;
module.exports.userProfile=userProfile;
module.exports.getUserType=getUserType;