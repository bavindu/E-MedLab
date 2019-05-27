const mongoose=require('mongoose');
const User=require('../models/user.model').User;
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
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
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
        }],
        comments:{
            type:String
        }
    }
);

// testRecordSchema.pre('save',function (next) {
//     console.log('*********pre save hook');
//     User.find({_id:this.patientId,userType:'patient'},(err,doc)=>{
//         if(!err){
//             console.log('%%%%doc '+doc);
//             if(doc.length===0){
//                 abort();
//             }
//             else{
//                 next();
//             }
//         }
//     })
// })


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