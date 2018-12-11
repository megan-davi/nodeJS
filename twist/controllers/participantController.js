var Participant = require('../models/participant');
var HighSchool = require('../models/highSchool');
var async = require('async');

// 👀 Display list of all participants.
exports.participantList = function(req, res, next) {

  Participant.find()
    .sort([['lastName', 'ascending']])
    .exec(function (err, participantListFunction) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('participantList', { title: 'Participant List', participantList: participantListFunction });
    });

};

// 👀 Display detail page for a specific participant.
exports.participantDetail = function(req, res, next) {
    async.parallel({
        participant: function(callback) {
            Participant.findById(req.params.id)
              .exec(callback)
        },
        highSchool: function(callback) {
            HighSchool.find({ 'highSchoolName': req.params.id }, 'highSchoolName')
            .exec(callback);
        },
    }, function(err, results) {
        if (err) { return next(err); } // Error in API usage.
        if (results.participant==null) { // No results.
            var err = new Error('Participant not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('participantDetail', { title: 'Participant Detail', participant: results.participant, highSchool: results.highSchool } );
    });
};

// ⭐️ Display participant create form on GET.
exports.participantCreateGet = function(req, res, next) {
    async.parallel({
    }, function(err, results) {
        if (err) { return next(err); }
        res.render('participantForm', { title: 'Create Participant' });
    });

};

// ⭐️ Handle participant create on POST.
exports.participantCreatePost = [
    // Validate fields.
    body('firstName', 'Name must not be empty.').isLength({ min: 1 }).trim(),
    body('lastName', 'Name must not be empty.').isLength({ min: 1 }).trim(),
    body('email').isLength({ min: 1 }).trim(),
    body('address').isLength({ min: 1 }).trim(),
    body('participantType').isLength({ min: 1 }).trim(),
    body('highSchool').isLength({ min: 1 }).trim(),

    // Sanitize fields (using wildcard).
    sanitizeBody('*').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a participant object with escaped and trimmed data.
        var participant = new Participant(
          { firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            participantType: req.body.participantType,
            highSchool: req.body.highSchool,
            address: req.body.address,
           });

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/error messages.
            async.parallel({
            }, function(err, results) {
                    if (err) { return next(err); }
                res.render('participantForm', { title: 'Create Participant', participant: results.participant, errors: errors.array() });
            });
            return;
        }
        else {
            // Data from form is valid. Save participant.
            participant.save(function (err) {
                if (err) { return next(err); }
                   //successful - redirect to new participant record.
                   res.redirect(participant.url);
                });
        }
    }
];

// ❌ Display participant delete form on GET.
exports.participantDeleteGet = function(req, res) {
    res.send('NOT IMPLEMENTED: participant delete GET');
};

// ❌ Handle participant delete on POST.
exports.participantDeletePost = function(req, res) {
    res.send('NOT IMPLEMENTED: participant delete POST');
};

// 🔄 Display participant update form on GET.
exports.participantUpdateGet = function(req, res) {
    res.send('NOT IMPLEMENTED: participant update GET');
};

// 🔄 Handle participant update on POST.
exports.participantUpdatePost = function(req, res) {
    res.send('NOT IMPLEMENTED: participant update POST');
};
