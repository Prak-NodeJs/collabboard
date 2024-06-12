const express= require('express')

const app = express()

const PORT  = process.env.PORT || 5000
const server = app.listen(PORT, ()=>{
    console.log(`listing on port number ${PORT}`)
})


const io = require('socket.io')(server, {
    pingTimeout: 6000,
    cors: {
      origin:"https://91f9-2401-4900-1aa4-1b89-59c3-d082-354a-27dd.ngrok-free.app"
    }
  });

io.on('connection', (socket)=>{
    socket.on('setup', (id)=>{
        socket.join(id)
        console.log("user opened board with id", id)
    })


    socket.on('textInput', (data) => {
        console.log(data)
        const { id, text } = data;
        socket.to(id).emit('updateText', text);
    });
})