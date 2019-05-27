const mongoose=require('mongoose');
mongoose.set('useFindAndModify', false);

let db = 'MedicalLab';

if(process.env.NODE_ENV!=='test'){
    mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true},(err)=>{
        if(!err){
            console.log('connected to '+process.env.MONGODB_URI)
        }
        else{
            console.log("error connecting to mongodb "+err);
        }
    });
}


