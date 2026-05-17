import {Router} from 'express';
import authMiddleware from '../middleware/authMiddleware.js';

const router = Router();        

router.get("/dashboard",authMiddleware,(req,res)=>{
    res.status(200).send({
        message:"Welcome to the dashboard"
    })
});

export default router;
