'use strict';

const express = require('express');
const amqp = require('./services/amqp.js');
const socketIo = require('./services/socketio.js');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const AMQP_URL = 'amqp://guest:guest@broker';
const SOCKETPORT = 8050;

// App
const app = express();
app.get('/hello', (req, res) => {
  res.send('Hello world\n');
});

// AMQP
amqp.establish(AMQP_URL);

// SocketIO
socketIo.startSocket(app, SOCKETPORT);
console.log(`SocketIO Running on http://${HOST}:${SOCKETPORT}`);

app.listen(PORT, HOST);
console.log(`Web App Running on http://${HOST}:${PORT}`);