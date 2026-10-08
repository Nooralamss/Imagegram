import {createPost} from "../repositories/postRepositories";
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