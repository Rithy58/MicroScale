'use strict';

const express = require('express');
const amqp = require('./services/amqp.js');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const AMQP_URL = 'amqp://guest:guest@broker';

// App
const app = express();
app.get('/hello', (req, res) => {
  res.send('Hello world\n');
});

// AMQP
amqp.establish(AMQP_URL);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);