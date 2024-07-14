//Http protocol library
const http = require('http').createServer();

//Socket.io library for websockets
const io = require("socket.io")(http, {
    cors: {
        origin: "*"
    }
});

//Express library for routing
io.on('connection', (socket) => {
    socket.on('message', () => {
        console.log('message received');
    });
});

//Define a port connection
http.listen(3000)