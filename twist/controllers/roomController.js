var Room = require('../models/room');

// Display list of all rooms.
exports.roomList = function(req, res) {
    res.send('NOT IMPLEMENTED: room list');
};

// Display detail page for a specific room.
exports.roomDetail = function(req, res) {
    res.send('NOT IMPLEMENTED: room detail: ' + req.params.id);
};

// Display room create form on GET.
exports.roomCreateGet = function(req, res) {
    res.send('NOT IMPLEMENTED: room create GET');
};

// Handle room create on POST.
exports.roomCreatePost = function(req, res) {
    res.send('NOT IMPLEMENTED: room create POST');
};

// Display room delete form on GET.
exports.roomDeleteGet = function(req, res) {
    res.send('NOT IMPLEMENTED: room delete GET');
};

// Handle room delete on POST.
exports.roomDeletePost = function(req, res) {
    res.send('NOT IMPLEMENTED: room delete POST');
};

// Display room update form on GET.
exports.roomUpdateGet = function(req, res) {
    res.send('NOT IMPLEMENTED: room update GET');
};

// Handle room update on POST.
exports.roomUpdatePost = function(req, res) {
    res.send('NOT IMPLEMENTED: room update POST');
};
