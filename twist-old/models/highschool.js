const mongoose = require ('mongoose')
var Schema = mongoose.Schema;


const highschoolSchema = new Schema({
    HSName: {type: String},
    });


    //Export model
module.exports = mongoose.model ('highschool', highschoolSchema);
