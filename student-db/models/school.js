const mongoose = require('mongoose')
const school = new mongoose.Schema({
  name: {type: String, trim: true, default: ''}, // trim:true trims whitespace
  address: {type: String, trim: true, default: ''},
  city: {type: String, trim: true, default: ''},
  state: {type: String, trim: true, default: ''},
  zip: {type: Number, default: '0'}
})

module.exports = mongoose.model('school', school)
