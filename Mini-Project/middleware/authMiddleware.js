import { validateToken } from "../utils/token-utils.js";

const authMiddleware=(req,res,next)=>{
    const token=req.headers.authorization
    if(token && validateToken(token)){
        next();
    }else{
        res.status(401).send({
            message:"Unauthorized access. Please provide a valid token."
        })
    }
}

export default authMiddleware;
