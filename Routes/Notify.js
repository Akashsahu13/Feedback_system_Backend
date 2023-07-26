
const Notify=(io)=>{

io.on("connect", (socket)=>{
console.log(10);
socket.on('send-name',(name)=>{
    console.log("inside socket io");
    console.log(`line${8} inside notify`)
    console.log("count")
    io.emit("Notification", name);
})
})
}
module.exports= Notify
