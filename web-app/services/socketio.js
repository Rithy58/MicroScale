'use strict';

var socketIo;

const startSocket = function (app, port) {
    const server = require('http').Server(app);
    socketIo = require('socket.io')(server);

    socketIo.on('connection', (socket) => {
        console.log('user connected');
    });

    server.listen(port);
}

module.exports = {
    startSocket
}