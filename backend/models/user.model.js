const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

const userSchema=mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    userName:{
        type:String,
        unique:true
    },
    sex:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    birthDay:{
        type:Date
    },
    userType:{
        type:String
    },
    password:{
        type:String
    },
    saltSecret:{
        type:String
    }
})


userSchema.pre('save',function(next){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(this.password,salt,(err,hash)=>{
            this.password=hash;
            this.saltSecret=salt;
            next();
        })
    })
})

userSchema.methods.verifyPassword=function(enteredPW){
    return bcrypt.compareSync(enteredPW,this.password);

}

userSchema.methods.generateJWT=function(){
    return jwt.sign({_id:this._id},
       "SECTET#123",
       {
           expiresIn:"20m"
       }
       ); 
}



const User=mongoose.model('User',userSchema);


module.exports.User=User;