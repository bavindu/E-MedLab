const TestRecord=require('../models/testRecord.model').TestRecord;
const Observation=require('../models/observation.model').Observation;




let addTestRecord=function(req,res){
    const testRecord=new TestRecord();
    testRecord.testId=req.body.testId;
    testRecord.testName=req.body.testName;
    testRecord.patientId=req.body.patientId;
    testRecord.comments=req.body.comments;
    testRecord.date=req.body.date;
    console.log("request patient id   "+req.body.patientId);
    console.log("this is patient id "+testRecord.patientID);
    const inputobservations=req.body.inputobservations;
    console.log(req.body.inputobservations.length)
    for (let index = 0; index < req.body.inputobservations.length; index++) {

        // const observation=new Observation();
        // observation.observationValue=inputobservations[index].observationValue;
        // observation._id=inputobservations[index].observationId;
        // testRecord.observations.push(observation)

        testRecord.observations.push({
            observationValue:inputobservations[index].observationValue,
            observationId:inputobservations[index].observationId
        })     
    }
    testRecord.save((err,doc)=>{
        if(!err){
            res.send(err)
            console.log(err+"ssasas")
        }else{
            console.log('This is doc');
            console.log(doc);
            res.json('Hello')
        }
    })

};

let getTestRecordName=function(req,res){
    TestRecord.find({patientId:req._id},"testName date",(err,data)=>{
        if(err){
            res.json("error getiing data")
        }
        else{
            console.log(data)
            res.send(data);
        }
    })
}

let getTestRecord=function(req,res){
    console.log('get test data');
    console.log(req.query.Id);
    TestRecord.findById(req.query.Id).populate('observations.observationId','unit referenceRange observationName').exec(function(err,doc){
        if(err){
            res.json("error")
        }
        else{
            console.log(doc);
            res.send(doc);
        }
    })
}

let getManyTestRecords=function(req,res){
    console.log("query params "+req.query.IdList);
    TestRecord.find({_id:{$in:req.query.IdList}}).populate('observations.observationId','unit referenceRange observationName').exec(function(err,doc){
        if(err){
            res.json("error");
            console.log(err);
        }
        else{
            console.log("get many test doc "+doc);
            res.send(doc);
        }
    })
}

module.exports.getTestRecord=getTestRecord;
module.exports.getManyTestRecords=getManyTestRecords;
module.exports.addTestRecord=addTestRecord;
module.exports.getTestRecordName=getTestRecordName;