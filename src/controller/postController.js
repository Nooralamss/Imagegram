import {createPostService}from '../services/postServices.js' 

export async function postController(req,res){
   console.log(req.file);
    //call the service layer function
    const post=await createPostService({
        caption:req.body.caption,
        image:req.file,location
    })
   // return res.send('post created succesfully');

   return res.status(201).json({
    success: true,
    message: "post create successfully",
    data:post
   });
}

export async function getAllPosts(req,res){
    //return unimplemented
    return res.status(501).json({
        success:false,
        message:"not Implemented"
    });
}