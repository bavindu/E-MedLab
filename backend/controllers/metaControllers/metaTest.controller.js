const metaTestModel=require('../../models/metaModels/metaTest.model')
const metaObservationSchema=require('../../models/metaModels/metaObservations.model');
const metaCodeValueSchema=require('../../models/metaModels/metaCodedValues.model')
const MetaTest=metaTestModel.MetaTest;



let addMetaTest= function(req,res){
    //res.send(req.body.observations);
    const metaTest=new MetaTest();
    metaTest.testName=req.body.testName;
    metaTest.observations=[];
    for (var i=0;i<req.body.observations.length;i++){
        var observation=new metaObservationSchema.MetaObservation();
        if(req.body.observations[i].unit.length!==0){
            observation.codedValues=undefined;
            observation.observationName=req.body.observations[i].observationName;
            observation.unit=req.body.observations[i].unit;
            observation.referenceRange=req.body.observations[i].referenceRange;
            
            
        }
        else{
            console.log(req.body.observations[i].unit.length);
            observation.observationName=req.body.observations[i].observationName;
            req.body.observations[i].codedValues.forEach(element => {
                observation.codedValues.push(element.codedValue)
            });
            console.log(observation.codedValues)
        }
        observation.save((err,doc)=>{
            if(err){
                console.log(err)
                res.send(err)
            }
            else{
                console.log('inside observation save '+doc._id)
                metaTest.observations.push(doc._id);
                console.log(metaTest.observations)
            }
        });

    }
    metaTest.save((err,doc)=>{
         if(!err){
             console.log('metaObservation added successfull!');
             console.log(doc);
         }
         else{
             console.log(err)
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
