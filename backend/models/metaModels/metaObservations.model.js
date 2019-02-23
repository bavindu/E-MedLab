const mongoose=require('mongoose');


const metaObservationSchema=mongoose.Schema(
    {
        observationName:{
            type:String
        },
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