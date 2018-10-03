// var server = require('../server')
var socket = io(window.location.origin);
// var socketio = require('socket.io');
// var io = socketio(server);

socket.on('connect', function () {
    console.log('Tengo hecho una conexión persistente bilateral al servidor!');
});

socket.on('disconnect', function () {
    console.log('chupala pajero')
})