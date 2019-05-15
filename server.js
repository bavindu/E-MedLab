require('./models/metaModels/db');
require('./config/passport.config');

const express=require('express');
const rtIndex=require('./routes/index.routes');
const cors=require('cors');
const bodyParser=require('body-parser');
const passport=require('passport');



const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api',rtIndex.router);
app.use(passport.initialize());




const port=process.env.PORT ||3000;
app.listen(port,(err)=>{
    if(!err){
        console.log('listening to port 3000')
    }
})