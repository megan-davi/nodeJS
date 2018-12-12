var Schedule = require('../models/schedule');

// Display list of all schedules.
exports.scheduleList = function(req, res) {
    res.send('NOT IMPLEMENTED: schedule list');
};

// Display detail page for a specific schedule.
exports.scheduleDetail = function(req, res) {
    res.send('NOT IMPLEMENTED: schedule detail: ' + req.params.id);
};

// Display schedule create form on GET.
exports.scheduleCreateGet = function(req, res) {
    res.send('NOT IMPLEMENTED: schedule create GET');
};

// Handle schedule create on POST.
exports.scheduleCreatePost = function(req, res) {
    res.send('NOT IMPLEMENTED: schedule create POST');
};

// ? Display schedule delete form on GET.
exports.scheduleDeleteGet = function(req, res, next) {

    async.parallel({
        schedule: function(callback) {
            schedule.findById(req.params.id).exec(callback)
        },
    }, function(err, results) {
        if (err) { return next(err); }
        if (results.schedule==null) { // No results.
            res.redirect('/twist/schedule');
        }
        // Successful, so render.
        res.render('scheduleDelete', { title: 'Delete schedule', schedule: results.schedule } );
    });
};

// ? Handle schedule delete on POST.
exports.scheduleDeletePost = function(req, res, next) {

    async.parallel({
        schedule: function(callback) {
            schedule.findById(req.body.scheduleid).exec(callback)
        },
    }, function(err, results) {
        if (err) { return next(err); }
        // Success
        schedule.findByIdAndRemove(req.body.scheduleid, function deleteschedule(err) {
            if (err) { return next(err); }
            // Success - go to room list
            res.redirect('/twist/schedule')
            })
        });
};

// Display schedule update form on GET.
exports.scheduleUpdateGet = function(req, res) {
    res.send('NOT IMPLEMENTED: schedule update GET');
};

// Handle schedule update on POST.
exports.scheduleUpdatePost = function(req, res) {
    res.send('NOT IMPLEMENTED: schedule update POST');
};
