const crypto=require('crypto')

//Generating random bytes
const random=crypto.randomBytes(16).toString("hex")
console.log(random);


//Creating a hash
const hash=crypto.createHash("sha256").update("HariomTiwari").digest("hex")
console.log(hash);



const key=crypto.randomBytes(32)
const iv=crypto.randomBytes(16)
const algo='aes-256-cbc'


//Encryption
function encrypt(){
    const cipher=crypto.createCipheriv(algo,key,iv)
    let encrypted=cipher.update("hello","utf8","hex")
    encrypted+=cipher.final("hex")
    return encrypted
}

const data=encrypt()
//Decryption
function decrypt(hash){
    const decipher=crypto.createDecipheriv(algo,key,iv)
    let decrypt=decipher.update(hash,"hex","utf8")
    decrypt+=decipher.final("utf8")
    return decrypt
}
console.log(data);
console.log(decrypt(data));
