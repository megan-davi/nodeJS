var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ParticipantSchema = new Schema(
  {
    participantId: {type: Number, required: true},
    lastName: {type: String, max: 100},
    firstName: {type: String, max: 100},
    address: {type: String, max: 400},
    email: {type: String, max: 300},
    timeStamp: {type: Date, default: Date.now},
    participantType: {type: String, enum: ['Educator/Sponsor', 'Student'], default: 'Student', required: true}
  }
);


// Virtual for participant's URL
ParticipantSchema
.virtual('url')
.get(function () {
  return '/twist/participant/' + this._id;
});

// Export model
module.exports = mongoose.model('Participant', ParticipantSchema);
