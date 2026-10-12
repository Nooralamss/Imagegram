import { createUser } from "../repositories/userRepositories"

export const signupUserService=async (user)=>{
    const newUser=await createUser(user);
    return newUser;
}