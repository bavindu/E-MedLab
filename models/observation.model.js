const mongoose=require('mongoose');


const observationSchema=new mongoose.Schema({

    observationValue:{
        type:String
    },
    _id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'MetaObservation'
        
    }

})


const Observation=mongoose.model('Observation',observationSchema);

module.exports.Observation=Observation;
module.exports.observationSchema=observationSchema;