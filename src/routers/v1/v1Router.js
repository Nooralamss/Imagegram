import express from 'express';
import postRouter from'./post.js';
import userRouter from './user.js';

const router=express.Router();
router.use('/post',postRouter);//if in the remaining url i.e after 
// /api/v1, we have the url starting with /post, then the request is forwarded
//to postRouter

router.use('/users',userRouter);//if in the remaining url i.e after 
// /api/v1,we have the url starting with /users, then the request is 
// forwared to userRouter

export default router;