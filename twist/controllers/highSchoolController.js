var HighSchool = require('../models/highSchool');

// Display list of all high schools.
exports.highSchoolList = function(req, res) {
    res.send('NOT IMPLEMENTED: High school list');
};

// Display detail page for a specific high school.
exports.highSchoolDetail = function(req, res) {
    res.send('NOT IMPLEMENTED: High school detail: ' + req.params.id);
};

// Display high school create form on GET.
exports.highSchoolCreateGet = function(req, res, next) { 
      
    // Get all authors and genres, which we can use for adding to our book.
    async.parallel({
        authors: function(callback) {
            Author.find(callback);
        },
        genres: function(callback) {
            Genre.find(callback);
        },
    }, function(err, results) {
        if (err) { return next(err); }
        res.render('highSchoolForm', { title: 'Create High School', authors: results.authors, genres: results.genres });
    });
    
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
exports.highSchooolUpdatePost = function(req, res) {
    res.send('NOT IMPLEMENTED: High school update POST');
};