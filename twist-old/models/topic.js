const mongoose = require ('mongoose')
var Schema = mongoose.Schema;


const topicSchema = new Schema({
    Title: {type: String},
    Description: {type: String},
    });

//Export model
module.exports = mongoose.model ('topic', topicSchema);
