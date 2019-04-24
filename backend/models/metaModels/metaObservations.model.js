const mongoose=require('mongoose');
const metaCodedValueSchema=require('./metaCodedValues.model').metaCodedValueSchema;
const metaTestSchema=require('./metaTest.model');

const metaObservationSchema=mongoose.Schema(
    {
        
        observationName:{
            type:String
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
// metaObservationSchema.pre('deleteOne',(err,doc)=>{
//     console.log('Inside pre remove');
//     console.log('err  '+JSON.stringify(err));
//     console.log('doc  '+JSON.stringify(doc));
//     const MetaTest=metaTestSchema.MetaTest;
//     const observationId=doc._id;
//     // MetaTest.find({observations:{$in:[observationId]}}).then(metaTests=>{
//     //     console.log("post delete "+JSON.stringify(metaTests));
//     //     Promise.all(
//     //         metaTests.map(metaTest=>{
//     //             MetaTest.deleteOne({_id:metaTest._id})
//     //         })
//     //     )
//     // })
//     MetaTest.find({observations:{$in:[observationId]}},(err,doc)=>{
//         console.log("post doc"+doc);
//     })
// });





const MetaObservation=mongoose.model('MetaObservation',metaObservationSchema);
module.exports.MetaObservation=MetaObservation;
module.exports.metaObservationSchema=metaObservationSchema;