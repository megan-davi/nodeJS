var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res) {
  res.redirect('/catalog');
});

module.exports = router;


//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://maori:(2Seamless)@ds155252.mlab.com:55252/local_library_mb';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
