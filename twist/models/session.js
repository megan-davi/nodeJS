var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SessionSchema = new Schema(
  {
    sessionNum: {type: Number, required: true},
    time: {type: Date, default: Date.now}
  }
);


// Virtual for session's URL
SessionSchema
.virtual('url')
.get(function () {
  return '/twist/session/' + this._id;
});

// Export model
module.exports = mongoose.model('Session', SessionSchema);
