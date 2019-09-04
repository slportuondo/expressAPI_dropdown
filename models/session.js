const mongoose = require('mongoose')

const sessionSchema = new mongoose.Schema({
  sessionName: { type: String, default: 'Sebastian'},
  sessionKey: { type: Number, default: 100 }
})

module.exports = mongoose.model('Session', sessionSchema)
