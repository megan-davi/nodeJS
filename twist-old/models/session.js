const mongoose = require ('mongoose')
var Schema = mongoose.Schema;

const sessionSchema = new Schema({
    Time: {type: Date},
    });

//Export model
module.exports = mongoose.model ('session', sessionSchema);
