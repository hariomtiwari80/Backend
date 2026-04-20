const {Transform,pipeline}=require('stream')
const fs=require('fs')

const rs=fs.createReadStream('dummy.txt')
const ws=fs.createWriteStream('dummy1.txt')


const uppercase=new Transform({
    transform(chunk,encoding,callback){
        const res=chunk.toString().toUpperCase()
        callback(null,res)
    }
})

pipeline(rs,uppercase,ws,(err)=>{
    if(err) console.error(err);
    else console.log("TASK COMPLETED");
})
