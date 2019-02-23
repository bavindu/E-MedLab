const metaTestModel=require('../../models/metaModels/metaTest.model')
const metaObservationSchema=require('../../models/metaModels/metaObservations.model');
const MetaTest=metaTestModel.MetaTest;


let addMetaTest=function(req,res){
    console.log('On Add meta Test')
    console.log(req.body.observations.length);
    //res.send(req.body.observations);
    const metaTest=new MetaTest();
    metaTest.testName=req.body.testName;
    metaTest.observations=[];
    for (var i=0;i<req.body.observations.length;i++){
        var observation=new metaObservationSchema.MetaObservation(req.body.observations[i]);
        metaTest.observations.push(observation);
    }
    metaTest.save((err,doc)=>{
         if(!err){
             console.log('metaObservation added successfull!')
         }
         else{
             res.send(err);
         }
    });
    // const metaTest=new MetaTest();
    // metaTest.testName=req.body.testName;
    // metaTest.observations=req.body.obseravtions;
    // metaTest.save((err,doc)=>{
    //     if(!err){
    //         console.log('metaObservation added successfull!')
    //     }
    //     else{
    //         res.send(err);
    //     }
    // })
}

let getResponse=function(req,res){
    console.log('Inside get Response');
    res.send('Hello');
}


module.exports.addMetaTest=addMetaTest;
module.exports.getResponse=getResponse;
