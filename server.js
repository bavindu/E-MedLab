require('./config/config');
require('./models/metaModels/db');
require('./config/passport.config');


const express=require('express');
const rtIndex=require('./routes/index.routes');
const cors=require('cors');
const bodyParser=require('body-parser');
const passport=require('passport');
const path=require('path');



const app=express();
var distDir = __dirname + "/frontend/dist/frontend";

app.use(express.static(distDir));
app.use(cors());
app.use(bodyParser.json());
app.use('/api',rtIndex.router);
app.use(passport.initialize());




const port=process.env.PORT ||8080;
var server=app.listen(port,(err)=>{
    if(!err){
        console.log('listening to port '+server.address().port)
    }
    else{
        console.log("erro "+err)
    }
});

app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/frontend/dist/frontend/index.html'));
});

module.exports=server;