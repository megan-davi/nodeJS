const mongoose = require ('mongoose')
var Schema = mongoose.Schema;

const presenterSchema = new Schema({
    LastName: {type: String},
    FirstName: {type: String},
    Occupation: {type: String},
    MainPhone: {type: Number},
    MobilePhone: {type: Number},
    Email: {type: String},
    });


//Export model
module.exports = mongoose.model ('presenter', presenterSchema);


// test
