const metaObservationSchema=require('../../models/metaModels/metaObservations.model');



let addObservation=function(req,res){
    console.log("inside addObservation");
    observation=new metaObservationSchema.MetaObservation();
    observation.observationName=req.body.observationName;
    if(req.body.unit.length!==0){
        console.log(req.body.unit.length);
        observation.unit=req.body.unit;
        observation.referenceRange=req.body.referenceRange;
        observation.codedValues=undefined;
    }
    else{
        observation.codedValues=[];
        req.body.codedValues.forEach(element => {
            observation.codedValues.push(element.codedValue);
        });
    }
    
    console.log(observation);
    observation.save((err,doc)=>{
        if(err){
            console.log(err)
            res.json("Error")
        }else{
            console.log(doc)
            res.send(doc);
        }
    })
};

let getObservationList=function(req,res){
    metaObservationSchema.MetaObservation.find((err,doc)=>{
        if(!err){
            console.log(doc);
            res.send(doc)
        }
        else{
            console.log(err);
        }
    }).select('observationName');
}


module.exports.addObservation=addObservation;
module.exports.getObservationList=getObservationList;