const mongoose = require('mongoose')
const student = new mongoose.Schema({
  name: {type: String, trim: true, default: ''}, // trim:true trims whitespace
  address: {type: String, trim: true, default: ''},
  city: {type: String, trim: true, default: ''},
  state: {type: String, trim: true, default: ''},
  school: {type: String, trim: true, default: ''},
  gradeLevel: {type: String, trim: true, default: ''},
  email: {type: String, trim: true, default: ''},
  phone: {type: Number, default: '0'}
})

module.exports = mongoose.model('student', student)
