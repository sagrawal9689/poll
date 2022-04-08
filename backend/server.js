import path from 'path'
import http from 'http'
import express from 'express'
import dotenv from 'dotenv'
import { Server } from 'socket.io'
import connectDB from './config/db.js'
import pollRoutes from './routes/pollRoutes.js'
import globalErrorHandler from './controllers/errorController.js'

dotenv.config({ path: "./backend/config.env" })
connectDB()

const app = express()
const server = http.createServer(app);
const io = new Server(server)
// console.log(process.env.PORT)
app.use(express.json())


app.use('/api/poll', pollRoutes)


const PORT = process.env.PORT || 5000;

io.on('connection', socket => {
  socket.on('joinRoom', (room) => {

    // console.log('joined room')
    socket.join(room);
    // console.log('room',room)

  });


  socket.on('increaseCount', ({ pollId, optionId }) => {
    // console.log('count Increased backend',pollId)

    socket.broadcast.to(pollId).emit('increaseCountDone', {
      pollId, optionId
    });

  })

});

const __dirname = path.resolve()

app.use(express.static(path.join(__dirname, '/frontend/build')))

app.get('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
)

app.use(globalErrorHandler)

server.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
)
