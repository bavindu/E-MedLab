const mongoose=require('mongoose');
const metaCodedValueSchema=require('./metaCodedValues.model').metaCodedValueSchema;
const metaTestSchema=require('./metaTest.model');

const metaObservationSchema=mongoose.Schema(
    {
        
        observationName:{
            type:String,
            unique:true
        },
        codedValues:[{
            type:String,
            default:undefined,
            required: true
        }],
        unit:{
            type:String
        },
        referenceRange:{
            type:String
        },

    }
);






const MetaObservation=mongoose.model('MetaObservation',metaObservationSchema);
module.exports.MetaObservation=MetaObservation;
module.exports.metaObservationSchema=metaObservationSchema;