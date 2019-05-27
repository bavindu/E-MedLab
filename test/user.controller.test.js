process.env.NODE_ENV='test';
const mongoose=require('mongoose');
const request=require('supertest');
const User=require('../models/user.model').User;
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
                id=user._id;
                token=user.generateJWT();
                console.log('*******token '+token);
            }
        })
    });

    describe('Create User',function () {
        it('should create a new user', function (done) {
            var req={
                body:{
                    firstName:'newFirstName',
                    lastName:'newLastName',
                    email:'newUser@gmail.com',
                    userName:'newuser',
                    birthDay:Date.now(),
                    sex:'male',
                    userType:'admin',
                    password:'123'
                }
            };
            request(app).post('/api/register')
                .send({
                    firstName:'newFirstName',
                    lastName:'newLastName',
                    email:'newUser@gmail.com',
                    userName:'newuser',
                    birthDay:Date.now(),
                    sex:'male',
                    userType:'admin',
                    password:'123'
                })
                .expect(200,done)
        });
    });

    describe('user login',function () {

        it('should not login 1',function (done) {
            request(app).post('/api/login')
                .send({email:'dsdsdsdsd',
                    password:'123'})
                .expect(404,done);

        });
        it('should not login 2',function (done) {

            request(app).post('/api/login')
                .send({email:'newUser@gmail.com',
                    password:'assasa'})
                .expect(404,done);

        });
        it('should login',function (done) {
            var req={
                email:'newUser@gmail.com',
                password:'123'
            };
            request(app).post('/api/login')
                .send({email:'dummy@gmail.com',
                    password:'123'})
                .expect(200,done);

        })
    });

    describe('User profile',function () {
        console.log('token '+token);
        it('should get user profile', function (done) {
            console.log('%%%%%%%%%%%%token '+token);
            request(app).get('/api/userProfile')
                .set('autherization', 'Bearer ' + token)
                .expect(200,done)
        });
    })

    after(function (done) {
        User.deleteMany ({},function (err) {
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