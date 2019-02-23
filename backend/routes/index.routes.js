const express=require('express');
const router=express.Router();

const ctrlMetaObservation=require('../controllers/metaControllers/metaTest.controller')








router.post('/addMetaTest',ctrlMetaObservation.addMetaTest);
router.get('/getresponse',ctrlMetaObservation.getResponse)
module.exports.router=router;