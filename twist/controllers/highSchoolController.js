var HighSchool = require('../models/highSchool');
var Participant = require('../models/participant');
var async = require('async');

// Displays home page
exports.index = function(req, res) {

    async.parallel({
        highSchoolCount: function(callback) {
            HighSchool.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
        participantCount: function(callback) {
            Participant.countDocuments({}, callback);
        }
    }, function(err, results) {
        res.render('index', { title: 'TWIST Home', error: err, data: results });
    });
};

// // Display list of all high schools.
exports.highSchoolList = function(req, res, next) {
  HighSchool.find({})
    .exec(function (err, results) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('highSchoolList', { title: 'High School List', highSchoolList: results });
    });
};


// Display detail page for a specific high school.
exports.highSchoolDetail = function(req, res, next) {
    async.parallel({
        highSchool: function(callback) {
            HighSchool.findById(req.params.id)
              .exec(callback)
        },
    }, function(err, results) {
        if (err) { return next(err); } // Error in API usage.
        if (results.highSchool==null) { // No results.
            var err = new Error('High School not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('highSchoolDetail', { title: 'High School Detail', highSchool: results.highSchool } );
    });

};


// Display Author create form on GET.
exports.highSchoolCreateGet = function(req, res) {
    res.send('NOT IMPLEMENTED: High School create GET');
};


// Handle high school create on POST.
exports.highSchoolCreatePost = function(req, res) {
    res.send('NOT IMPLEMENTED: High school create POST');
};

// Display high school delete form on GET.
exports.highSchoolDeleteGet = function(req, res) {
    res.send('NOT IMPLEMENTED: High school delete GET');
};

// Handle high school delete on POST.
exports.highSchoolDeletePost = function(req, res) {
    res.send('NOT IMPLEMENTED: High school delete POST');
};

// Display high school update form on GET.
exports.highSchoolUpdateGet = function(req, res) {
    res.send('NOT IMPLEMENTED: High school update GET');
};

// Handle high school update on POST.
exports.highSchoolUpdatePost = function(req, res) {
    res.send('NOT IMPLEMENTED: High school update POST');
};
