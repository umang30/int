var express=require('express');
var app=express(); 
var http=require('http'); 
var server=http.createServer(app);
var Server=require('socket.io').Server;
var io=new Server(server);


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/socket.html');
})

io.on('connection', (socket) => {
    socket.on('chat',function(mgs){
        io.emit('final',mgs);
    });
});


server.listen(6969,(err)=>{
    if(err)
    throw err;
console.log("Listening on port 6969");
});


