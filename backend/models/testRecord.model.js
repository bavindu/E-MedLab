const mongoose=require('mongoose');
const observationSchema=require('./observation.model').observationSchema

const testRecordSchema=new mongoose.Schema(
    {
        testId:{
            type:String
        },
        testName:{
            type:String
        },
        patientId:{
            type:String
        },
        date:{
            type:Date
        },
        observations:[{
            observationValue:{
                type:String
            },
            observationId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:'MetaObservation'
            }
        }]
    }
);


const TestRecord=mongoose.model('TestRecord',testRecordSchema);


module.exports.TestRecord=TestRecord;

// observations:[{
//     observationValue:{
//         type:String
//     },
//     observationId:{
//         type:mongoose.Schema.Types.ObjectId,
//         ref:'MetaObservation'
//     }
// }]


// observations:[observationSchema]