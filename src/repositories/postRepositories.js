import Post from "../schema/post.js";

export const createPost=async(caption, image,user)=> {
    try{
        const newPost=await Post.create({caption,image, user});
        return newPost;

    }
    catch(error){
        console.log(error);
    }
}

export const findAllPosts=async ()=> {
    try{
        const posts=await Post.find();
        return posts;
    }
    catch(error){
        console.log(error);
    }
}
