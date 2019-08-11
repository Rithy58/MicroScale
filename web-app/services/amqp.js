'use strict';

const amqp = require('amqplib/callback_api');

let amqpConn = null;
const establish = function (url) {
    amqp.connect(url, function (err, conn) {
        if (err) {
            console.error('[AMQP]', err.message);
            console.log('[AMQP] reconnecting...');
            return setTimeout(() => { establish(url) }, 1000);
        }
        conn.on("error", function (err) {
            if (err.message !== "Connection closing") {
                console.error('[AMQP]', err.message);
            }
        });
        conn.on("close", function () {
            console.log("[AMQP] connection closed. reconnecting...");
            return setTimeout(() => { establish(url) }, 1000);
        });

        console.log("[AMQP] connected");
        amqpConn = conn;
    });
}

module.exports = {
    establish
}