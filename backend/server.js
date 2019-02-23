require('./models/metaModels/db');
const express=require('express');
const rtIndex=require('./routes/index.routes')
const cors=require('cors')
const bodybarser=require('body-parser')


const app=express();

app.use(cors());
app.use(bodybarser.json());
app.use('/api',rtIndex.router);





app.listen('3000',(err)=>{
    if(!err){
        console.log('listening to port 3000')
    }
})