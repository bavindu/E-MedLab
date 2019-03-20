const mongoose=require('mongoose');
mongoose.set('useFindAndModify', false);



mongoose.connect('mongodb://localhost:27017/MedicalLab',{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log('connected to mongodb!')
    }
})