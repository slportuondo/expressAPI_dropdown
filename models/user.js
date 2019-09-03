const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: String, 
  sessionKey: Integer
})

module.exports = mongoose.model('User', userSchema)
