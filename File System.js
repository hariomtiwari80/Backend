const fs=require('fs')

// writing data to file
fs.writeFileSync("dummy.txt","Hello I am Hari !!!")                //Sync
fs.writeFile("dummy1.txt","Hello I am ...",(err)=>{                //Async
    console.error(err);
})

// Reading data from file
const t=fs.readFileSync("dummy.txt","utf8");                       //Sync
console.log(t);
fs.readFile("dummy1.txt","utf8",(err,res)=>{                       //Async
    if(err) console.error(err);
    else console.log(res);
})

//Creating a directory
fs.mkdirSync("myfolder")                                            //Sync
fs.mkdir('Folder2',(err)=>{                                         //Async
    if(err) console.error(err);
})                                                
