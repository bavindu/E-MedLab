const mongoose=require('mongoose');
mongoose.set('useFindAndModify', false);



// mongoose.connect('mongodb+srv://bavindu:abcd@1234@cluster0-lbiru.mongodb.net/test?retryWrites=true',{useNewUrlParser:true},(err)=>{
//     if(!err){
//         console.log('connected to mongodb!')
//     }
//     else{
//         console.log("error connecting to mongodb "+err);
//     }
// });

mongoose.connect('mongodb://localhost:27017/MedicalLab',{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log('connected to mongodb!')
    }
    else{
        console.log("error connecting to mongodb "+err);
    }
});