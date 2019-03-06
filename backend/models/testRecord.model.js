const mongoose=require('mongoose');
const observationSchema=require('./observation.model').observationSchema

const testRecordSchema=new mongoose.Schema(
    {
        patientID:{
            type:String
        },
        observations:[observationSchema]
    }
);


const TestRecord=mongoose.model('TestRecord',testRecordSchema);


module.exports.TestRecord=TestRecord;