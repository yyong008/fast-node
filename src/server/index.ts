import express from 'express'
import http from 'http'
import createSocketIO from './socket-io'
import morgan from 'morgan'

const app = express()
const server = http.createServer(app)

createSocketIO(server)

app.use(morgan('tiny'))

app.use('/test', (req, res) => {
  res.send('test')
})

server.listen(9000, () => {
  console.log('listening on *:9000');
})
