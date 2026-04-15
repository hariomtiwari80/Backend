const fs=require('fs')

// writing data to file
fs.writeFileSync("dummy.txt","Hello I am Hari !!!")                //Sync
fs.writeFile("dummy1.txt","Hello I am ...",(err)=>{                //Async
    if(err) console.error(err);
})

// Reading data from file
const t=fs.readFileSync("dummy.txt","utf8");                       //Sync
console.log(t);
fs.readFile("dummy1.txt","utf8",(err,res)=>{                       //Async
    if(err) console.error(err);
    else console.log(res);
})

//Creating a directory
try{                                                               //Sync
    fs.mkdirSync("myfolder")
}catch(err){
    if(err) console.error(err)
}
fs.mkdir('Folder2',(err)=>{                                        //Async
    if(err) console.error(err);
})          

//Deleting a directory
try{                                                               //Sync
    fs.rmSync("myfolder",{ recursive: true, force: true })
}catch(err){
    console.error(err);
}
fs.rm("Folder2",{ recursive: true, force: true },(err)=>{          //Async
    if(err) console.error(err)
})

//Deleting a file
try{                                                               //Sync
    fs.unlinkSync('dummy.txt')
}catch(err){
    if(err) console.log(err)
}
fs.unlink('dummy1.txt',(err)=>{                                    //Async
    if(err) console.error(err);
})

//Rename a file/folder
try{                                                                //Sync
    fs.renameSync('dummy.txt','hari.txt');
}catch(err){
    if(err) console.log(err);
}
fs.rename('hari.txt','dummy.txt',(err)=>{                           //Async
    if(err) console.error(err);
})
