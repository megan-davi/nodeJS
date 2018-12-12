var Room = require('../models/room');
var async = require('async');

// Import validation and sanitization methods
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

// 👀 Display list of all rooms.
exports.roomList = function(req, res, next) {
  Room.find()
    .exec(function (err, roomListFunction) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('roomList', { title: 'Room List', roomList: roomListFunction });
    });
};

// 👀 Display detail page for a specific room.
exports.roomDetail = function(req, res, next) {
    async.parallel({
        room: function(callback) {
            Room.findById(req.params.id)
              .exec(callback)
        },
    }, function(err, results) {
        if (err) { return next(err); } // Error in API usage.
        if (results.room==null) { // No results.
            var err = new Error('room not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('roomDetail', { title: 'Room Detail', room: results.room } );
    });
};

// ⭐️ Display room create form on GET.
exports.roomCreateGet = function(req, res, next) {
    async.parallel({
    }, function(err, results) {
        if (err) { return next(err); }
        res.render('roomForm', { title: 'Create New Room' });
    });
};

// ⭐️ Handle room create on POST.
exports.roomCreatePost = [
    // Validate fields.
    body('roomNumber', 'Number must not be empty.').isLength({ min: 1 }).trim(),
    body('building', 'Building must not be empty.').isLength({ min: 1 }).trim(),
    body('capacity').isLength({ min: 1 }).trim(),

    // Sanitize fields (using wildcard).
    sanitizeBody('*').trim().escape(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a room object with escaped and trimmed data.
        var room = new Room(
          { roomNumber: req.body.roomNumber,
            building: req.body.building,
            capacity: req.body.capacity,
           });

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values/error messages.
            async.parallel({
            }, function(err, results) {
                    if (err) { return next(err); }
                res.render('roomForm', { title: 'Create New Room', room: results.room, errors: errors.array() });
            });
            return;
        }
        else {
            // Data from form is valid. Save room.
            room.save(function (err) {
                if (err) { return next(err); }
                   //successful - redirect to new room record.
                   res.redirect(room.url);
                });
        }
    }
];

// ? Display room delete form on GET.
exports.roomDeleteGet = function(req, res, next) {

    async.parallel({
        room: function(callback) {
            room.findById(req.params.id).exec(callback)
        },
    }, function(err, results) {
        if (err) { return next(err); }
        if (results.room==null) { // No results.
            res.redirect('/twist/room');
        }
        // Successful, so render.
        res.render('roomDelete', { title: 'Delete room', room: results.room } );
    });
};

// ? Handle room delete on POST.
exports.roomDeletePost = function(req, res, next) {

    async.parallel({
        room: function(callback) {
            room.findById(req.body.roomid).exec(callback)
        },
    }, function(err, results) {
        if (err) { return next(err); }
        // Success
        room.findByIdAndRemove(req.body.roomid, function deleteroom(err) {
            if (err) { return next(err); }
            // Success - go to room list
            res.redirect('/twist/room')
            })
        });
};


// Display room update form on GET.
exports.roomUpdateGet = function(req, res) {
    res.send('NOT IMPLEMENTED: room update GET');
};

// Handle room update on POST.
exports.roomUpdatePost = function(req, res) {
    res.send('NOT IMPLEMENTED: room update POST');
};
