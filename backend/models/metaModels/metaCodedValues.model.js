const mongoose=require('mongoose');


const metaCodedValueSchema=mongoose.Schema(
    {
       codedValue:{
           type:String
       } 
    }
)

const MetaCodedValue=mongoose.model('MetaCodedValue',metaCodedValueSchema);
module.exports.MetaCodedValue=MetaCodedValue;
module.exports.metaCodedValueSchema=metaCodedValueSchema;