const express = require('express');

const server = express();

// Import router

const authRouter = require('./auth/auth-router.js');

server.use(express.json());

server.use('/api/auth', authRouter);


server.get('/', (req, res) => {
    res.send('<h1>Project Default Route</h1>')
})

module.exports = server;