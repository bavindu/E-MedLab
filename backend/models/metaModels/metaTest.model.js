const mongoose=require('mongoose')
const metaObservationSchema=require('./metaObservations.model').metaObservationSchema;

const metaTestSchema=new mongoose.Schema(
    {
        testName:{
            type:String
        },
        observations:[metaObservationSchema]
        
    }
)


const MetaTest=mongoose.model('MetaTest',metaTestSchema)
module.exports.MetaTest=MetaTest