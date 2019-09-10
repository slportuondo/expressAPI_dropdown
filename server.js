require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('./db/db')

app.use(express.static('public'))
app.use(bodyParser.json())

app.use(cors());



const sessionController = require('./controllers/sessionController.js')
app.use('/session', sessionController)

const dropController = require('./controllers/dropController.js')
app.use('/drop', dropController)

const droppedController = require('./controllers/droppedController.js')
app.use('/dropped', droppedController)

const PORT = 3000

app.listen(PORT, () => {
  console.log('express server is running: ', PORT)
})
