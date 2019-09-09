const mongoose = require('mongoose')

const imageModel = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,  // ._id
    ref: 'Session'
  },
  title: String,
  foundOnURL: String,
  img: {
    data: Buffer,
    contentType: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Image', imageModel)
