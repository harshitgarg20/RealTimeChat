const express = require("express");
const socket = require("socket.io");
const app = express();

app.use(express.static('public'));

var server = app.listen(4000, () => {
    console.log("App is running on port 4000");
})

var io = socket(server);

io.on("connection", (socket) => {
    socket.on('textMessage', (data) => {
        io.sockets.emit("textMessage", data);
    });
    socket.on("typing",function(data){
        socket.broadcast.emit("typing",data);
    });
})

