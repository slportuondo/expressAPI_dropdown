const mongoose = require('mongoose')

const imageModel = new mongoose.Schema({
  title: String,
  foundOnURL: String, //In case users later want to see what website they dropped the image from
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
