const mongoose = require ('mongoose')
var Schema = mongoose.Schema;

const participantSchema = new Schema({
    LastName: {type: String},
    FirstName: {type: String},
    Address: {type: Number},
    Email: {type: String},
    TimeStamp: {type: Date, default: Date.now},
    ParticipantType: {type: String},
    });

//Export model
module.exports = mongoose.model ('participatnt', participantSchema);
