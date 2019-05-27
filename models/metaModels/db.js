const mongoose=require('mongoose');
mongoose.set('useFindAndModify', false);

// let db = 'MedicalLab';
//
// if(process.env.NODE_ENV!=='test'){
//     mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true},(err)=>{
//         if(!err){
//             console.log('connected to '+process.env.MONGODB_URI)
//         }
//         else{
//             console.log("error connecting to mongodb "+err);
//         }
//     });
// }
mongoose.connect("mongodb+srv://bavindu:abcd@1234@cluster0-lbiru.mongodb.net/test?retryWrites=true",{useNewUrlParser:true},(err)=>{
    if(!err){
        console.log('connected to '+process.env.MONGODB_URI)
    }
    else{
        console.log("error connecting to mongodb "+err);
    }
});

//"mongodb+srv://bavindu:abcd@1234@cluster0-lbiru.mongodb.net/test?retryWrites=true"


