const EventEmitter=require('events')
const fs=require('fs')

const emitter=new EventEmitter()

let count={
    login:0,
    logout:0,
    purchase:0,
}

if(fs.existsSync('count.txt')){
    const file=fs.readFileSync('count.txt',"utf8")
    count=JSON.parse(file)
}



emitter.on('login',(name)=>{
    console.log(`User Login : ${name}`);
    count.login++;
})
emitter.on('logout',(name)=>{
    console.log(`User Logout : ${name}`);
    count.logout++;
})
emitter.on('purchase',(name,items)=>{
    console.log(`${name} purchases ${items} items`);
    count.purchase++;
})

emitter.emit('login','hari')
emitter.emit('logout','hari')
emitter.emit('purchase','hari','5')

fs.writeFileSync('count.txt',JSON.stringify(count))

console.log(count)
