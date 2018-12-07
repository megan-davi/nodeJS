var Session = require('../models/session');

// Display list of all sessions.
exports.sessionList = function(req, res) {
    res.send('NOT IMPLEMENTED: session list');
};

// Display detail page for a specific session.
exports.sessionDetail = function(req, res) {
    res.send('NOT IMPLEMENTED: session detail: ' + req.params.id);
};

// Display session create form on GET.
exports.sessionCreateGet = function(req, res) {
    res.send('NOT IMPLEMENTED: session create GET');
};

// Handle session create on POST.
exports.sessionCreatePost = function(req, res) {
    res.send('NOT IMPLEMENTED: session create POST');
};

// Display session delete form on GET.
exports.sessionDeleteGet = function(req, res) {
    res.send('NOT IMPLEMENTED: session delete GET');
};

// Handle session delete on POST.
exports.sessionDeletePost = function(req, res) {
    res.send('NOT IMPLEMENTED: session delete POST');
};

// Display session update form on GET.
exports.sessionUpdateGet = function(req, res) {
    res.send('NOT IMPLEMENTED: session update GET');
};

// Handle session update on POST.
exports.sessionUpdatePost = function(req, res) {
    res.send('NOT IMPLEMENTED: session update POST');
};
