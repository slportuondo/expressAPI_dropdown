const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  sessionName: String,
  sessionKey: Integer
})

module.exports = mongoose.model('User', userSchema)
