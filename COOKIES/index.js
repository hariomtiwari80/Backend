import express from 'express';
import cookieParser from 'cookie-parser';


const app = express();
app.use(cookieParser())

app.get('/set-cookies',(req,res)=>{
    res.cookie('username','Hariom',{
        maxAge:1000*60*60*24,
        httpOnly:true,
        secure:false
    })
    res.send('Cookies have been set');
})

app.get('/get-cookies',(req,res)=>{
    const cookies=req.cookies;
    res.send(JSON.stringify(cookies));
})

app.get('/clear-cookies',(req,res)=>{
    res.clearCookie('username');
    res.send('Cookies have been cleared');
})



app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
