var HighSchool = require('../models/highSchool');
var Participant = require('../models/participant');
var async = require('async');

// Import validation and sanitization methods
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// 🏠 Displays home page
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

// 👀 Display list of all high schools.
exports.highSchoolList = function(req, res, next) {
  HighSchool.find({})
    .exec(function (err, results) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('highSchoolList', { title: 'High School List', highSchoolList: results });
    });
};


// 👀 Display detail page for a specific high school.
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


// ⭐️ Display high school create form on GET.
exports.highSchoolCreateGet = function(req, res, next) {
    async.parallel({
    }, function(err, results) {
        if (err) { return next(err); }
        res.render('highSchoolForm', { title: 'Create High School' });
    });

};

// ⭐️ Handle high school create on POST.
exports.highSchoolCreatePost = [
    // Validate fields.
    body('highSchoolName', 'Name must not be empty.').isLength({ min: 1 }).trim(),
    body('address').isLength({ min: 1 }).trim(),

    // Sanitize fields (using wildcard).
    sanitizeBody('*').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a high school object with escaped and trimmed data.
        var highSchool = new HighSchool(
          { highSchoolName: req.body.highSchoolName,
            address: req.body.address,
           });

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/error messages.
            async.parallel({
            }, function(err, results) {
                    if (err) { return next(err); }
                res.render('highSchoolForm', { title: 'Create High School', highSchool: results.highSchool, errors: errors.array() });
            });
            return;
        }
        else {
            // Data from form is valid. Save high school.
            highSchool.save(function (err) {
                if (err) { return next(err); }
                   //successful - redirect to new high school record.
                   res.redirect(highSchool.url);
                });
        }
    }
];

// ❌ Display high school delete form on GET.
exports.highSchoolDeleteGet = function(req, res) {
    res.send('NOT IMPLEMENTED: High school delete GET');
};

// ❌ Handle high school delete on POST.
exports.highSchoolDeletePost = function(req, res) {
    res.send('NOT IMPLEMENTED: High school delete POST');
};

// 🔄 Display high school update form on GET.
exports.highSchoolUpdateGet = function(req, res) {
    res.send('NOT IMPLEMENTED: High school update GET');
};

// 🔄 Handle high school update on POST.
exports.highSchoolUpdatePost = function(req, res) {
    res.send('NOT IMPLEMENTED: High school update POST');
};
