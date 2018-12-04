const mongoose = require ('mongoose')
var Schema = mongoose.Schema;

const roomSchema = new Schema({
    Building: {type:String},
    Capacity: {type: Number},
    });

//Export model
module.exports = mongoose.model ('room', roomSchema);
