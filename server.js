require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
require('./db/db')

app.use(express.static('public'))
app.use(bodyParser.json())

const sessionController = require('./controllers/sessionController.js')
app.use('/session', sessionController)

const PORT = 3000

app.listen(PORT, () => {
  console.log('express server is running: ', PORT)
})
