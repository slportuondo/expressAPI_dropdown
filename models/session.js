const mongoose = require('mongoose')

const sessionSchema = new mongoose.Schema({
  sessionName: { type: String, default: 'Sebastian'},
  sessionKey: { type: Number, required: true }
})

module.exports = mongoose.model('Session', sessionSchema)
