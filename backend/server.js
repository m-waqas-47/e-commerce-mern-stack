import express from 'express';
import data from './data.js';

const app =express();

app.get('/api/products',function(req,res,next){
    res.send(data.products);
    next();
})

const port =process.env.PORT || 5000;

app.listen(port , ()=>{
    console.log(`Server started at http://localhost:${port}`);
})