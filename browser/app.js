var socket = io(window.location.origin);

socket.on('connect', function () {
    console.log('Tengo hecho una conexión persistente bilateral al servidor!');
});

// document.addEventListener('click', function () {
//     socket.emit('clickeando')
// })

 whiteboard.on('draw', function (start, end, strokeColor) {
     socket.emit('dibujo', start, end, strokeColor)
 })


