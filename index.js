const express = require('express')

const app = express()
app.use(express.static('public'))

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket) => {
    socket.on('message', (e) => {
        socket.broadcast.emit('message', e)
    })
})

io.on('disconnect', (e) => {
    console.log('Disconnect')
})

server.listen(3000);