const express = require("express")
const app = express ()
const server = app.listen(5000)

const io = require("socket.io")(server, {cors : {origin : '*'}})


io.on("connection" , socket => {
    socket.on("receiveMessage" , message => {
        io.emit("sendMessage" , message)
    })
})