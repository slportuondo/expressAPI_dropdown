const mongoose = require('mongoose')

mongoose.connect('http://localhost/9000', {
  useNewUrlParser: true
})

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected')
});

mongoose.connection.on('error', (err) => {
  console.log(err, '--- Mongoose failed to connect')
});

mongoose.connection.on('disconncted', () => {
  console.log('Mongoose is disconnected')
});
