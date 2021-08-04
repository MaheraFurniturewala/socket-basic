const { log } = require('console');
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server,{cors: {origin : "*"}});

app.set('view engine', 'ejs');


app.get('/',(req,res)=>{
    return res.render('home.ejs');
});



server.listen(port,(err)=>{
    if(err) {
        console.log(`Error in running server on port : ${port}`);
    }else{
        console.log(`Server up and running on port : ${port}`);
    }
});

io.on('connection',(socket)=>{
    console.log("User connected :" + socket.id);
    
    socket.on('message',(data)=>{
       
        socket.broadcast.emit('message',data);
    });
});