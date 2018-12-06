var express = require('express');
var router = express.Router();

// Require controller modules.
var highSchoolController = require('../controllers/highSchoolController');
var participantController = require('../controllers/participantController');
var presenterController = require('../controllers/presenterController');
// var author_controller = require('../controllers/authorController');
// var genre_controller = require('../controllers/genreController');
// var book_instance_controller = require('../controllers/bookinstanceController');

/// HIGH SCHOOL ROUTES ///

// GET twist home page.
router.get('/', highSchoolController.index);

// GET request for creating a high school. 
router.get('/highSchool/create', highSchoolController.highSchoolCreateGet);

// POST request for creating high school.
router.post('/highSchool/create', highSchoolController.highSchoolCreatePost);

// GET request to delete high school.
router.get('/highSchool/:id/delete', highSchoolController.highSchoolDeleteGet);

// POST request to delete high school.
router.post('/highSchool/:id/delete', highSchoolController.highSchoolDeletePost);

// GET request to update high school.
router.get('/highSchool/:id/update', highSchoolController.highSchoolUpdateGet);

// POST request to update high school.
router.post('/highSchool/:id/update', highSchoolController.highSchoolUpdatePost);

// GET request for one high school.
router.get('/highSchool/:id', highSchoolController.highSchoolDetail);

// GET request for list of all high schools.
router.get('/highSchool', highSchoolController.highSchoolList);

/// PARTICIPANT ROUTES ///

// GET request for creating a participant. 
router.get('/participant/create', participantController.participantCreateGet);

// POST request for creating participant.
router.post('/participant/create', participantController.participantCreatePost);

// GET request to delete participant.
router.get('/participant/:id/delete', participantController.participantDeleteGet);

// POST request to delete participant.
router.post('/participant/:id/delete', participantController.participantDeletePost);

// GET request to update participant.
router.get('/participant/:id/update', participantController.participantUpdateGet);

// POST request to update participant.
router.post('/participant/:id/update', participantController.participantUpdatePost);

// GET request for one participant.
router.get('/participant/:id', participantController.participantDetail);

// GET request for list of all participant.
router.get('/participant', participantController.participantList);

/// PRESENTER ROUTES ///

// GET request for creating a presenter. 
router.get('/presenter/create', presenterController.presenterCreateGet);

// POST request for creating presenter.
router.post('/presenter/create', presenterController.presenterCreatePost);

// GET request to delete presenter.
router.get('/presenter/:id/delete', presenterController.presenterDeleteGet);

// POST request to delete presenter.
router.post('/presenter/:id/delete', presenterController.presenterDeletePost);

// GET request to update presenter.
router.get('/presenter/:id/update', presenterController.presenterUpdateGet);

// POST request to update presenter.
router.post('/presenter/:id/update', presenterController.presenterUpdatePost);

// GET request for one presenter.
router.get('/presenter/:id', presenterController.presenterDetail);

// GET request for list of all presenter.
router.get('/presenter', presenterController.presenterList);

// /// GENRE ROUTES ///

// // GET request for creating a Genre. NOTE This must come before route that displays Genre (uses id).
// router.get('/genre/create', genre_controller.genre_create_get);

// //POST request for creating Genre.
// router.post('/genre/create', genre_controller.genre_create_post);

// // GET request to delete Genre.
// router.get('/genre/:id/delete', genre_controller.genre_delete_get);

// // POST request to delete Genre.
// router.post('/genre/:id/delete', genre_controller.genre_delete_post);

// // GET request to update Genre.
// router.get('/genre/:id/update', genre_controller.genre_update_get);

// // POST request to update Genre.
// router.post('/genre/:id/update', genre_controller.genre_update_post);

// // GET request for one Genre.
// router.get('/genre/:id', genre_controller.genre_detail);

// // GET request for list of all Genre.
// router.get('/genres', genre_controller.genre_list);

// /// BOOKINSTANCE ROUTES ///

// // GET request for creating a BookInstance. NOTE This must come before route that displays BookInstance (uses id).
// router.get('/bookinstance/create', book_instance_controller.bookinstance_create_get);

// // POST request for creating BookInstance. 
// router.post('/bookinstance/create', book_instance_controller.bookinstance_create_post);

// // GET request to delete BookInstance.
// router.get('/bookinstance/:id/delete', book_instance_controller.bookinstance_delete_get);

// // POST request to delete BookInstance.
// router.post('/bookinstance/:id/delete', book_instance_controller.bookinstance_delete_post);

// // GET request to update BookInstance.
// router.get('/bookinstance/:id/update', book_instance_controller.bookinstance_update_get);

// // POST request to update BookInstance.
// router.post('/bookinstance/:id/update', book_instance_controller.bookinstance_update_post);

// // GET request for one BookInstance.
// router.get('/bookinstance/:id', book_instance_controller.bookinstance_detail);

// // GET request for list of all BookInstance.
// router.get('/bookinstances', book_instance_controller.bookinstance_list);

module.exports = router;