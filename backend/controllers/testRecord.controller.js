const TestRecord=require('../models/testRecord.model').TestRecord;
const Observation=require('../models/observation.model').Observation;




let addTestRecord=function(req,res){
    const testRecord=new TestRecord();
    testRecord.patientID=req.body.patientID;
    const inputobservations=req.body.inputobservations;
    for (let index = 0; index < req.body.inputobservations.length; index++) {

        const observation=new Observation();
        observation.observationValue=inputobservations[index].observationValue;
        observation.observationID=inputobservations[index].observationId;
        testRecord.observations.push(observation)
        
        
    }
    testRecord.save((err,doc)=>{
        if(!err){
            res.send(err)
        }else{
            res.json('Hello')
        }
    })

}

module.exports.addTestRecord=addTestRecord;