const mongoose=require('mongoose');


const observationSchema=new mongoose.Schema({

    observationValue:{
        type:String
    },
    observationID:{
        type:String
    }

})


const Observation=mongoose.model('Observation',observationSchema);

module.exports.Observation=Observation;
module.exports.observationSchema=observationSchema;