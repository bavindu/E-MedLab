const express=require('express');
const router=express.Router();

const ctrlMetaObservation=require('../controllers/metaControllers/metaTest.controller')
const ctrlTestRocord=require('../controllers/testRecord.controller')
const ctrlUser=require('../controllers/user.controller');
const jwtHelper=require('../config/jwtHelper')







router.post('/addMetaTest',jwtHelper.jwtVerify,ctrlMetaObservation.addMetaTest);
router.post('/addTestResults',jwtHelper.jwtVerify,ctrlTestRocord.addTestRecord);
router.post('/register',ctrlUser.addUser);
router.post('/login',ctrlUser.authenticate);
router.get('/getresponse',ctrlMetaObservation.getResponse);
router.get('/load-test',ctrlMetaObservation.loadTest);
router.get('/get-test',ctrlMetaObservation.getTest);
router.get('/userProfile',jwtHelper.jwtVerify,ctrlUser.userProfile);
router.post('/update-user',jwtHelper.jwtVerify,ctrlUser.updateUserDetails)
module.exports.router=router;