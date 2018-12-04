var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PresenterSchema = new Schema(
  {
    presenterId: {type: String, required: true},
    lastName: {type: String, max: 100, required: true},
    firstName: {type: String, max: 100, required: true},
    occupation: {type: String, max: 100},
    mainPhone: {type: Number, max: 100},
  }
);


// Virtual for presenter's URL
PresenterSchema
.virtual('url')
.get(function () {
  return '/twist/presenter/' + this._id;
});

// Export model
module.exports = mongoose.model('Presenter', PresenterSchema);
