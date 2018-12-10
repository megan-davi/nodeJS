var presenter = require('../models/presenter');

// Display list of all presenters.
exports.presenterList = function(req, res) {
    res.send('NOT IMPLEMENTED: presenter list');
};

// Display detail page for a specific presenter.
exports.presenterDetail = function(req, res) {
    res.send('NOT IMPLEMENTED: presenter detail: ' + req.params.id);
};

// Display presenter create form on GET.
exports.presenterCreateGet = function(req, res) {
    res.send('NOT IMPLEMENTED: presenter create GET');
};

// Handle presenter create on POST.
exports.presenterCreatePost = function(req, res) {
    res.send('NOT IMPLEMENTED: presenter create POST');
};

// Display presenter delete form on GET.
exports.presenterDeleteGet = function(req, res) {
    res.send('NOT IMPLEMENTED: presenter delete GET');
};

// Handle presenter delete on POST.
exports.presenterDeletePost = function(req, res) {
    res.send('NOT IMPLEMENTED: presenter delete POST');
};

// Display presenter update form on GET.
exports.presenterUpdateGet = function(req, res) {
    res.send('NOT IMPLEMENTED: presenter update GET');
};

// Handle presenter update on POST.
exports.presenterUpdatePost = function(req, res) {
    res.send('NOT IMPLEMENTED: presenter update POST');
};
