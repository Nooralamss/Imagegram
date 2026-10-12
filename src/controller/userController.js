import { signupUserService } from "../services/userService"

export async function getProfile(req,res){
    //return unimplemented
    res.status(501).json({
        success:false,
        message:"not implemented"
    })
}
export async function signup (req,res){
    try{
        const user=await signupUserService(req.body);
        return res.status(200).json({
            success:true,
            message:"user created successfully",
            data: user
        });

    }
    catch(error){
        console.log(error);
        return res.status(400).json({
            success:false,
            message:"Internal Server Error"
        });
    }
}