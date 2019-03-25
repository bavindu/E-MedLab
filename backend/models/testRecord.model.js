const mongoose=require('mongoose');
const observationSchema=require('./observation.model').observationSchema

const testRecordSchema=new mongoose.Schema(
    {
        testId:{
            type:String
        },
        patientId:{
            type:String
        },
        observations:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'MetaObservation'
        }]
    }
);


const TestRecord=mongoose.model('TestRecord',testRecordSchema);


module.exports.TestRecord=TestRecord;