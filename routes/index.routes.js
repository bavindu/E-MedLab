const express=require('express');
const router=express.Router();

const ctrlMetaObservation=require('../controllers/metaControllers/metaObservation.controller')
const ctrlTestRocord=require('../controllers/testRecord.controller')
const ctrlUser=require('../controllers/user.controller');
const ctrlMetaTest=require('../controllers/metaControllers/metaTest.controller')
const jwtHelper=require('../config/jwtHelper')






router.get('/getresponse',ctrlMetaTest.getResponse);
router.get('/load-test',ctrlMetaTest.loadTest);
router.get('/get-test',ctrlMetaTest.getTest);
router.get('/userProfile',jwtHelper.jwtVerify,ctrlUser.userProfile);
router.get('/getUserType',jwtHelper.jwtVerify,ctrlUser.getUserType);
router.get('/getTestRecordName',jwtHelper.jwtVerify,ctrlTestRocord.getTestRecordName);
router.get('/getTestRecord',jwtHelper.jwtVerify,ctrlTestRocord.getTestRecord);
router.get('/getManyTestRecord',jwtHelper.jwtVerify,ctrlTestRocord.getManyTestRecords);
router.get('/getobservationList',jwtHelper.jwtVerify,ctrlMetaObservation.getObservationList);
router.get('/getAllMetaTestName',jwtHelper.jwtVerify,ctrlMetaTest.getAllMetaTestName);
router.post('/deleteMetaTest',jwtHelper.jwtVerify,ctrlMetaTest.deleteMetaTest);
router.post('/deleteClickMetaObservation',jwtHelper.jwtVerify,ctrlMetaObservation.deleteClickObservation);
router.post('/deleteMetaObservation',jwtHelper.jwtVerify,ctrlMetaObservation.deleteObservation);
router.post('/addMetaTest',jwtHelper.jwtVerify,ctrlMetaTest.addMetaTest);
router.post('/addTestResults',jwtHelper.jwtVerify,ctrlTestRocord.addTestRecord);
router.post('/register',ctrlUser.addUser);
router.post('/login',ctrlUser.authenticate);
router.post('/search-patient',jwtHelper.jwtVerify,ctrlUser.searchPatient);
router.post('/update-user',jwtHelper.jwtVerify,ctrlUser.updateUserDetails);
router.post('/addObservation',jwtHelper.jwtVerify,ctrlMetaObservation.addObservation);

module.exports.router=router;