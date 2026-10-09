import {countAllPosts, createPost, deletePostById, updatePostById} from "../repositories/postRepositories";
export const createPostServie=async (createPostObject)=>{
    const caption=createPostObject.caption?.trim();
    const image=createPostObject.image;
    //const user=createPostObject.user;
    const post= await createPost(caption,image);
    return post;

    //take image of a post and upload on aws

    //get the url of image from aws response

    //create the post with the caption and image url in db using repositories

    // return the post object

    
}
 export const getAllPostService=async (offset , limit)=>{
    const posts=await findAllPosts(offset, limit);

    //calculate total number of posts and total number of pages
    const totalDocuments=await countAllPosts();

    const totalPages=Math.ceil(totalDocuments / limit);
    return{
        posts,totalPages, totalDocuments
    }

 }
 export const deletePostService=async (id)=>{
    //call the repository function
    const response=await deletePostById(id);
    return response;
 }

 export const updatePostService=async (id,updateObject)=>{
    //call the repository function
    const response=await updatePostById(id,updateObject);
    return response;
 }