const mongoose = require ('mongoose')
var Schema = mongoose.Schema;

const scheduleSchema = new Schema({
    TopicCode: {type: Number},
    PresenterID: {type: Number},
    });


//Export model
module.exports = mongoose.model ('schedule', scheduleSchema);
