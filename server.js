const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const Pusher = require('pusher')
const crypto = require('crypto')
const morgan  = require('morgan')


//This tells express to log via morgan
//and morgan to log in the "combined" pre-defined format
app.use(morgan('combined'))

const serveStatic = require("serve-static")


app.use(serveStatic(path.join(__dirname, 'dist')));

const pusher = new Pusher({
  appId: '',
  key: '',
  secret: '',
  cluster: 'eu',
  encrypted: true
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*')
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true)
  // Pass to next layer of middleware
  next()
})

//app.set('port', (5000))
//how port
var port = process.env.PORT || 5000


app.get('/', (req, res) => {
  res.send('Welcome')
})

app.post('/pusher/auth', (req, res) => {
  let socketId = req.body.socket_id
  let channel = req.body.channel_name
  let presenceData = {
    user_id: crypto.randomBytes(16).toString('hex')
  }
  let auth = pusher.authenticate(socketId, channel, presenceData)
  res.send(auth)
})



// app.listen(app.get('port'), () => {
//   console.log('Node app is running on port', app.get('port'))
// })
app.listen(port, () => {
  console.log('Node app is running on port', port)
})
