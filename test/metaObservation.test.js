process.env.NODE_ENV='test';
const mongoose=require('mongoose');
const request=require('supertest');
const User=require('../models/user.model').User;
const MetaObservation=require('../models/metaModels/metaObservations.model').MetaObservation;
const userctrl=require('../controllers/user.controller');
const testUtils=require('../utils/testutils');
const app=require('../server');
var chai = require('chai')
    , expect = chai.expect
    , should = chai.should();
mongoose.Promise=global.Promise;

describe("Post API",function () {
    var dummyUser;
    var id;
    var token;
    before(function (done) {
        mongoose.connect('mongodb://localhost:27017/MedicalLab_test',{useNewUrlParser:true},function () {
            console.log("Connected to testDB");
            done();
        });


    });


    describe("Create metaObservation",function () {
        beforeEach(function (done) {
            dummyUser=new User({
                'firstName':'dummyFirstName',
                'lastName':'dummyLastName',
                'email':'dummy@gmail.com',
                'birthDay':Date.now(),
                'userName':'dummy',
                'sex':'male',
                'userType':'admin',
                'password':'123'

            });
            dummyUser.save(function (err,user) {
                if(err){
                    console.log(err)
                }
                else{
                    console.log('user saved');
                    id=user._id;
                    token=user.generateJWT();
                    console.log('*******token '+token);
                }
                done();
            });
        });
        it('should create metaObservation', async ()=>{
            await request(app).post('/api/addObservation')
                .set('autherization', 'Bearer ' + token)
                .send({observationName: "Height", unit: "m", referenceRange: "10"})
                .expect(200);
        });
        afterEach(function () {
           User.deleteMany ({},function (err) {
               if(err){
                   console.log(err)
               }
               else{
                   console.log('removed users')
               }
            });

        })
    });



    after(function (done) {
        MetaObservation.deleteMany ({},function (err) {
            if(err){
                console.log(err)
            }
            else{
                console.log('removed')
            }
        });
        done();
    })

});