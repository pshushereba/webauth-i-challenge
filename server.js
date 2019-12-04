const express = require('express');

const server = express();

// Import router

server.use(express.json());

// server.use('/endpoint', Router)

server.get('/', (req, res) => {
    res.send('<h1>Project Default Route</h1>')
})

module.exports = server;