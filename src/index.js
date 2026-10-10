import express from 'express';
import { connect } from 'mongoose';
import connectDB from './config/DbConfig.js';
import { postController } from './controller/postController.js';
import apiRouter from'./routers/v1/v1Router.js';
import multer from 'multer';
const PORT=5000;

const app=express();

const upload =multer();
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());
app.use(upload.single());

app.use('/api',apiRouter);

app.get('/',(req,res)=>{
    return res.send('HOME')
})

app.get('/ping',(req,res)=>{
    return res.send('pong')
})

app.get('/about',(req,res)=>{
    return res.send('About')
})


function m1(req,res,next){
    console.log(m1);
    next();
}

function m2(req,res,next){
    console.log(m2);
    next();
}

function m2(req,res,next){
    console.log(m3);
    next();
}

app.post('/post',m1,m2,m3,postController)

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
    connectDB();
})