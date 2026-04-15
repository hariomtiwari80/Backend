const http=require('http')
const fs=require('fs')

const PORT=3000
const server=http.createServer((req,res)=>{
    const log=`${Date.now()} & from ${req.url} New Req Received\n`
    fs.appendFile('log.txt',log,(err)=>{
        if(err){
            console.error(err);
            res.statusCode=500;
            console.log('Internal Server Error');
            return;
        }
        res.end('Hello')
    })
    res.write("Iron man\n")
    res.write("Iron man 2\n")
    res.end("Hello I am Hari")
})

server.listen(PORT,()=>{
    console.log(`Server is listening at : ${PORT}`);
})
