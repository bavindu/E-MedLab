const mongoose=require('mongoose');
const metaCodedValueSchema=require('./metaCodedValues.model').metaCodedValueSchema;

const metaObservationSchema=mongoose.Schema(
    {
        observationName:{
            type:String
        },
        codedValues:[metaCodedValueSchema],
        unit:{
            type:String
        },
        referenceRange:{
            type:String
        }
    }
)

const MetaObservation=mongoose.model('MetaObservation',metaObservationSchema);
module.exports.MetaObservation=MetaObservation;
module.exports.metaObservationSchema=metaObservationSchema;