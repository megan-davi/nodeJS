var HighSchool = require('../models/highSchool');

exports.index = function(req, res) {
    res.send('NOT IMPLEMENTED: Site Home Page');
};

// Display list of all high schools.
exports.highSchoolList = function(req, res) {
    res.send('NOT IMPLEMENTED: High school list');
};

// Display detail page for a specific high school.
exports.highSchoolDetail = function(req, res) {
    res.send('NOT IMPLEMENTED: High school detail: ' + req.params.id);
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