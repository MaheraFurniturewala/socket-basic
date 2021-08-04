const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

app.set('view engine', 'ejs');


app.get('/',(req,res)=>{
    return res.render('home.ejs');
});

io.on('connection',(socket)=>{
    console.log("User connected :" + socket.id);
})


server.listen(port,(err)=>{
    if(err) {
        console.log(`Error in running server on port : ${port}`);
    }else{
        console.log(`Server up and running on port : ${port}`);
    }
})