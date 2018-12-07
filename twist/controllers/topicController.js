var Topic = require('../models/topic');

// Display list of all topics.
exports.topicList = function(req, res) {
    res.send('NOT IMPLEMENTED: topic list');
};

// Display detail page for a specific topic.
exports.topicDetail = function(req, res) {
    res.send('NOT IMPLEMENTED: topic detail: ' + req.params.id);
};

// Display topic create form on GET.
exports.topicCreateGet = function(req, res) {
    res.send('NOT IMPLEMENTED: topic create GET');
};

// Handle topic create on POST.
exports.topicCreatePost = function(req, res) {
    res.send('NOT IMPLEMENTED: topic create POST');
};

// Display topic delete form on GET.
exports.topicDeleteGet = function(req, res) {
    res.send('NOT IMPLEMENTED: topic delete GET');
};

// Handle topic delete on POST.
exports.topicDeletePost = function(req, res) {
    res.send('NOT IMPLEMENTED: topic delete POST');
};

// Display topic update form on GET.
exports.topicUpdateGet = function(req, res) {
    res.send('NOT IMPLEMENTED: topic update GET');
};

// Handle topic update on POST.
exports.topicUpdatePost = function(req, res) {
    res.send('NOT IMPLEMENTED: topic update POST');
};
