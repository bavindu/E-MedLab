const TestRecord=require('../models/testRecord.model').TestRecord;
const Observation=require('../models/observation.model').Observation;
const User=require('../models/user.model').User;




let addTestRecord=async function(req,res){
    const testRecord=new TestRecord();
    testRecord.testId=req.body.testId;
    testRecord.testName=req.body.testName;
    testRecord.patientId=req.body.patientId;
    testRecord.comments=req.body.comments;
    testRecord.date=req.body.date;
    try {
        if(testRecord.patientId){
            let doc=await User.find({_id:testRecord.patientId,userType:'patient'})
            if(doc.length===0){
                res.json({"code":11005})
            }
            else{
                console.log("request patient id   "+req.body.patientId);
                console.log("this is patient id "+testRecord.patientID);
                const inputobservations=req.body.inputobservations;
                console.log(req.body.inputobservations.length)
                for (let index = 0; index < req.body.inputobservations.length; index++) {
                    testRecord.observations.push({
                        observationValue:inputobservations[index].observationValue,
                        observationId:inputobservations[index].observationId
                    })
                }
                testRecord.save((err,doc)=>{
                    if(!err){
                        res.json({"code":11000});
                        console.log(err+"ssasas")
                    }else{
                        console.log('This is doc');
                        console.log(doc);
                        res.json({"code":11006});
                    }
                })
            }
        }
        else{
            res.json({"code":11005})
        }
    }
    catch (e) {
        console.log("&&&&&&&patient id error "+e);
        res.json({"code":11006})
    }


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

let getAllTestRecord=function(req,res){
    console.log('Inside get all test record');
    TestRecord.find({},'testName patientId date').populate('patientId','userName').exec(function (err,doc) {
        if(err){
            console.log(err);
            res.json("error")
        }
        else{
            res.send(doc);
        }
    })

};

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
};
let deleteTestRecord=function(req,res){
    TestRecord.deleteOne({_id:req.body._id},(err,doc)=>{
        if(!err){
            console.log("doc "+JSON.stringify(doc));
            res.status(200).send('ok');
        }
        else{
            console.log('error '+err);
            res.send('error');
        }
    })
};

let getPatientsTestRecords=function(req,res){
    console.log("*******get patients test record");
    console.log("id "+req.body._id);
    //{patientId:req.body._id}
    TestRecord.find({patientId:req.body._id},'testName date',(err,doc)=>{
        if(!err){
            console.log("doc  "+JSON.stringify(doc));
            res.send(doc);
        }
        else{
            res.send('err');
        }
    })
};

module.exports.getTestRecord=getTestRecord;
module.exports.getManyTestRecords=getManyTestRecords;
module.exports.addTestRecord=addTestRecord;
module.exports.getTestRecordName=getTestRecordName;
module.exports.getAllTestRecord=getAllTestRecord;
module.exports.deleteTestRecord=deleteTestRecord;
module.exports.getPatientsTestRecords=getPatientsTestRecords;