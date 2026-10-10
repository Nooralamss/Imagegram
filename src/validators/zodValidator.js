export const validate =(schema)=>{
    return async (requestAnimationFrame,res,next)=>{
        try{
            schema.parse(requestAnimationFrame.body);
            next();
        }
        catch (error){
            return res.status(400).json({
                success:false,
                message:"validation Error",
                errors:error.errors
            })
        }
    }
}