var path = require('path');
var express = require('express');
var app = express(); // the app returned by express() is a JavaScript Function. Not something we can pass to our sockets!
var socketio = require('socket.io');

// app.listen() returns an http.Server object
// http://expressjs.com/en/4x/api.html#app.listen
var server = app.listen(1337, function () {
    console.log('The server is listening on port 1337!');
});
var io = socketio(server);
// console.log(io.sockets)

io.on('connection', function (socket) {
    console.log(socket.id);
    socket.on('disconnect', function() {
        console.log('Desconectado')
    });
     
    socket.on('dibujo', function (start,end,strokeColor) {
        socket.broadcast.emit('donatello', start, end, strokeColor)
    })
    
});



app.use(express.static(path.join(__dirname, 'browser')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});
