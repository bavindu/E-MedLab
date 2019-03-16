const metaTestModel=require('../../models/metaModels/metaTest.model')
const metaObservationSchema=require('../../models/metaModels/metaObservations.model');
const metaCodeValueSchema=require('../../models/metaModels/metaCodedValues.model')
const MetaTest=metaTestModel.MetaTest;


let addMetaTest=function(req,res){
    //res.send(req.body.observations);
    const metaTest=new MetaTest();
    metaTest.testName=req.body.testName;
    metaTest.observations=[];
    for (var i=0;i<req.body.observations.length;i++){
        // for (let j = 0; j < req.body.observations[i].codeValues; j++) {
        //     var codeValue=new metaCodeValueSchema.MetaCodedValue(req.body.observations)
        // }
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
    
}

let getResponse=function(req,res){
    console.log('Inside get Response');
    res.send('Hello');
}
let loadTest=function(req,res){
    console.log('inside load test');
    MetaTest.find((err,doc)=>{
        if(!err){
            console.log(doc);
            res.send(doc);
        }else{
            console.log(err)
        }
    });
}
let getTest=function(req,res){
    var id=req.query.id;
    MetaTest.findById(id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }else{
            res.send(err)
        }
    })
}


module.exports.addMetaTest=addMetaTest;
module.exports.getResponse=getResponse;
module.exports.loadTest=loadTest;
module.exports.getTest=getTest;
