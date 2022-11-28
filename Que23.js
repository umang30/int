//create chat client server application using socket.io method

var express = require('express');
var app = express();
var http = require('http');
const { Socket } = require('socket.io');
var server = http.createServer(app);
var Server= require('socket.io').Server;
var io = new Server(server);


app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/Que23.html')
})

io.on('connection', (Socket)=>{
    Socket.on('chat', function(mgs){
        io.emit('final', mgs);
    });
});


server.listen(5000, (err)=>{
    if(err) throw err;
    console.log("listening on port 5000")
})