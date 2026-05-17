// DOWNLOAD CONTENT FROM SERVER
const http=require('http')
const fs=require('fs')


const app=http.createServer((req,res)=>{
    const rs=fs.createReadStream('dummy.txt',{
        highWaterMark:64*1024
    });
    rs.pipe(res)
})

app.listen(4000);
