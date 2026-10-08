//here all the post related router are present 
//we look at the remaining url part after /post
import express from 'express';

import {s3uploader} from '../../config/multerConfig.js';
import {createPost, getAllPosts}from '../../controller/postController.js';

const router =express.Router();// Router object to modularize the routes
router.post('/',s3uploader.single('image'), createPost);
router.get('/',getAllPosts);

export default router;