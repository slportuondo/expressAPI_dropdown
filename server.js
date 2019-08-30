const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
// const cors = require('cors') // will likely be necessary if socket.io is used

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json)



app.get('/test-react-native', (req, res) => {
  res.json({
    message: 'it worked'
  })
})


const localPort = 9000
app.listen(process.env.PORT || localPort, () => {
  console.log('express server is running: ', process.env.PORT || localPort)
})
