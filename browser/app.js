var socket = io(window.location.origin);
// var data = require('../server')


socket.on('connect', function () {

    socket.on('tomadata', function (dibujo) {
        for (var i = 0; i < dibujo.start.length; i++) {
            whiteboard.draw(dibujo.start[i], dibujo.end[i], dibujo.strokeColor[i])
        }
    })
    console.log('Tengo hecho una conexión persistente bilateral al servidor!');
});

whiteboard.on('draw', function (start, end, strokeColor) {
    socket.emit('dibujo', start, end, strokeColor)
})

socket.on('donatello', function (start,end,strokeColor) {
    whiteboard.draw(start,end,strokeColor)
})



