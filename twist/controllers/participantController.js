var Participant = require('../models/participant');
var HighSchool = require('../models/highSchool');
var async = require('async');

// Display list of all participants.
exports.participantList = function(req, res, next) {

  Participant.find()
    .sort([['lastName', 'ascending']])
    .exec(function (err, participantListFunction) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('participantList', { title: 'Participant List', participantList: participantListFunction });
    });

};

// Display detail page for a specific participant.
exports.participantDetail = function(req, res, next) {
    async.parallel({
        participant: function(callback) {
            Participant.findById(req.params.id)
              .exec(callback)
        },
        highSchool: function(callback) {
            HighSchool.find({ 'highSchool': req.params.id })
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

// Display participant create form on GET.
exports.participantCreateGet = function(req, res) {
    res.send('NOT IMPLEMENTED: participant create GET');
};

// Handle participant create on POST.
exports.participantCreatePost = function(req, res) {
    res.send('NOT IMPLEMENTED: participant create POST');
};

// Display participant delete form on GET.
exports.participantDeleteGet = function(req, res) {
    res.send('NOT IMPLEMENTED: participant delete GET');
};

// Handle participant delete on POST.
exports.participantDeletePost = function(req, res) {
    res.send('NOT IMPLEMENTED: participant delete POST');
};

// Display participant update form on GET.
exports.participantUpdateGet = function(req, res) {
    res.send('NOT IMPLEMENTED: participant update GET');
};

// Handle participant update on POST.
exports.participantUpdatePost = function(req, res) {
    res.send('NOT IMPLEMENTED: participant update POST');
};
