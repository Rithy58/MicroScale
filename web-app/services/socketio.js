'use strict';

var socketIo;

const startSocket = function (app, port) {
    const server = require('http').Server(app);
    socketIo = require('socket.io')(server);

    socketIo.on('connection', (socket) => {
        console.log('user connected');

        socket.on('startProcess', (uid) => {
            console.log('startProcess for ' + uid);
        });

        socket.on('addProcess', (uid, pid) => {
            console.log('addProcess ' + pid + ' for ' + uid);
        });
    });

    server.listen(port);
}

module.exports = {
    startSocket
}