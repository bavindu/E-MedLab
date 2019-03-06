const jwt=require('jsonwebtoken');

let jwtVerify=function(req,res,next){
    var token;
    if('autherization' in req.headers){
        console.log(req.headers['autherization'].split(' ')[1]);
        token=req.headers['autherization'].split(' ')[1];
    }else{
        console.log('no header')
    }
    if(!token){
        console.log('no token provided')
        return res.status(403).send({auth:false,message:'no token provided'})
    }
    else{
        jwt.verify(token,"SECTET#123",(err,decoded)=>{
            if(err){
                console.log(err);
                return res.status(500).send({auth:false,message:"Token authentication failed"})
            }
            else{
                req._id=decoded._id;
                next();
            }
        })
    }
}

module.exports.jwtVerify=jwtVerify;