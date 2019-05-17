const metaTestModel=require('../../models/metaModels/metaTest.model')
const metaObservationSchema=require('../../models/metaModels/metaObservations.model');
const metaCodeValueSchema=require('../../models/metaModels/metaCodedValues.model')
const MetaTest=metaTestModel.MetaTest;



let addMetaTest= async function(req,res){
    const metaTest=new MetaTest();
    metaTest.testName=req.body.testName;
    metaTest.date=req.body.date;
    metaTest.observations=[];
    let loopterminate=false;
    let dupObsName;
    for (var i=0;i<req.body.observations.length;i++){
        if(req.body.observations[i].hasOwnProperty("observationName")){
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
            try{
                let doc =  await observation.save();
                metaTest.observations.push(doc._id);
            }catch(e){
                console.log("*****ob catch "+e);
                loopterminate=true;
                dupObsName=observation.observationName;
                break;
            }
        }
        else if(req.body.observations[i].hasOwnProperty("existingObservation")){
            metaTest.observations.push(req.body.observations[i].existingObservation._id);
        }
    }

    if(!loopterminate){
        try {
            let savedoc=await metaTest.save();
            console.log("****************Saved doc"+savedoc);
            res.json({"code":11002})
        }catch (e) {
            console.log("&&&&&&&test save error "+e);
            res.send(e)
        }
    }
    else{

        res.json({"code":11001,"dupObsName":dupObsName})
    }
   
    
    
    
};

let getResponse=function(req,res){
    console.log('Inside get Response');
    res.send('Hello');
};

let loadTest=function(req,res){
    console.log('inside load test');
    MetaTest.find((err,doc)=>{
        if(!err){
            console.log('***********************');
            console.log(doc);
            res.send(doc);
        }else{
            console.log(err)
        }
    });
};

let getTest=function(req,res){
    var id=req.query.id;
    MetaTest.findById(id).populate('observations').exec(function(err,doc){
        if(!err){
            res.send(doc);
            console.log(doc)
        }
        else{
            console.log(err)
        }
    })
};

let getAllMetaTestName=function (req,res) {
    MetaTest.find({},'testName',(err,doc)=>{
        if(err){
            res.json('error while retreving tests')
        }
        else{
            res.send(doc);
        }
    })
};

let deleteMetaTest=function(req,res){
    console.log('inside delete meta test');
    console.log('test id '+req.body.id);
    MetaTest.deleteOne({_id:req.body.id},(err)=>{
        if(err){
            res.status(501).json('Cant delete');
        }
        else{
            res.status(202).json('deleted successful');
        }
    });
};

function saveModel(model){
    model.save((err,doc)=>{
        if(!err){
            console.log('metaObservation added successfull!');
            console.log(doc);
        }
        else{
            console.log(err)
            res.send(err);
        }
   });
};


module.exports.addMetaTest=addMetaTest;
module.exports.getResponse=getResponse;
module.exports.loadTest=loadTest;
module.exports.getTest=getTest;
module.exports.getAllMetaTestName=getAllMetaTestName;
module.exports.deleteMetaTest=deleteMetaTest;
