import {Router} from 'express';
import {generateToken , validateToken} from '../utils/token-utils.js';
const router = Router();

router.get('/generate-token',(req,res)=>{
    const token=generateToken();
    res.status(200).send({
        message:"Token generated successfully and Save it for future use",
        token:token
    })
})

router.get("/",(req,res)=>{
    res.status(200).send({
        message:"Welcome to the Home page"
    })
});

export default router;
