const express = require("express");
const winston = require('winston');
const expressWinston = require('express-winston');
const fs = require('fs');

const app = express();
const props = fs.readFileSync('appSettings.json');
let value = JSON.parse(props);
const loggingEnabled = value['logging'];

// enabling logging by default
if (loggingEnabled == true) {
    app.use(expressWinston.logger({
        transports: [
            new winston.transports.File({filename: 'app.log'})
        ],
        format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.json()
        ),
        level: 'debug',
        statusLevels: true,
        timestamp: true,
        meta: false,
        msg: "HTTP  {{req.method}} {{req.url}}",
        expressFormat: true,
        colorize: false,
        ignoreRoute: function (req, res) { return false; }
    }));
}

app.get('/api', async function(req, res) {
    if (req.headers.accept) {
        const myData = {
            message: "hello world"
            };
        res.send(myData);
    }
    else {
        let sendMe = "<p> hello, world</p>";
        res.send(sendMe);
    }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api', async function(req, res) {
    if (req.headers.accept) {
        const myData = {
            message: "hello world"
            };
        res.send(myData);
    }
  });


module.exports = app;