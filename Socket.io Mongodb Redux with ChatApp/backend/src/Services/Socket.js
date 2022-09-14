const User = require('../Models/User')
require('dotenv').config();
const initSocket = (server) => {
    const io = require("socket.io")(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    })

    io.on('connection', (socket) => {
        console.log(`user connected = ${socket.id}`)

        socket.on('join', ({ name, room }) => {
            const user = new User(socket.id, name, room)
            user.join()

            console.log(`user = ${JSON.stringify(user)}`)
            socket.join(user.room)

            console.log(user)
            socket.emit('message', {
                id: user.id,
                name: user.name,
                text: `Welcome ${user.name}`
            })

            socket.broadcast.to(user.room).emit('message', {
                id: user.id,
                name: user.name,
                text: `${user.name} has joinned the chat`
            })
        })

        socket.on('chat', (message) => {
            const user = User.getUser(socket.id)

            console.log(user)
            console.log(socket.id)

            console.log(`message -> ${JSON.stringify(message)}`)

            io.to(user.room).emit('message', {
                id: user.id,
                name: user.name,
                text: message.text
            })
        })

        socket.on('disconnect', () => {
            const user = User.disconnect(socket.id)

            if (user) {
                io.to(user.room).emit("message", {
                    id: user.id,
                    name: user.username,
                    text: `${user.username} has left the room`,
                });
            }
        });
    })
}

module.exports = initSocket