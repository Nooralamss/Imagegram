import {createPostService, deletePostService, getAllPostService, updatePostService}from '../services/postServices.js' 

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
   try{
    const limit=req.query.limit //10;
    const offset=req.query.offset // 0;

    const paginatedPosts= await getAllPostService(offset,limit);
    return res.status(200).json({
        success:true,
        message:"All posts fetched successfully",
        data:paginatedPosts
    });
   }
   catch(error){
    console.log(error);
    return res.status(501).json({
        success:false,
        message:"not Implemented"
    });
}
}

export async function deletePost(req,res){
    try{
        const postId=req.params.id;
        const response=await deletePostService(postId);
        return res.status(200).json({
            success:true,
            message:"post delete successfully",
            data:response
        })

    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Internal Server Error"
        });
    }
}

export async function updatePost(req,res){
    try{
        const updateObject=req.body;
        if(req.file){
            updateObject.image=req.file.location;
        }
        const response=await updatePostService(req.params.id,updateObject);
        return res.status(200).json({
            success:true,
            message:"post update successfully",
            data:response
        });
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"internal Server Error"
        });

    }
}