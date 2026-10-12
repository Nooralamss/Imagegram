import { checkIfUserExists } from "../services/userService.js";
import { verifyJWT } from "../utils/jwt.js";

export const isAuthenticated= async (req,res,next)=>{
    //check if jwt is passed in the header
    const token = req.headers["x-access-token"];
     
    if(!token ){
        return res.status(400).json({
            success:false,
            message:"token is required"
        });
    }

    //verify the token
    try{
        const response=verifyJWT(token);

        const doesUserExists = await checkIfUserExists(response.email);
        
        req.user=response;

        next();
    }
    catch(error){
        return res.status(401).json({
            success:false,
            message:"Invalid token"
        });
    }
}