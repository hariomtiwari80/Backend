const {Readable,Writable,pipeline}=require('stream')

const rs=new Readable({
    highWaterMark:64*1024,
    read(){}
})
const ws=new Writable({
    write(chunk,encoding,callback){
        callback()
    }
})


