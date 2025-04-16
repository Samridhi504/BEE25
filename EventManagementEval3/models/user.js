const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  date: String,
  time: String,
  location: String,
  description: String
});

module.exports = mongoose.model('User', userSchema);


