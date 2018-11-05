// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

// Require schemas
const school = require('../models/school')
const student = require('../models/student')

// 📚 READ school data
router.get('/school', (req, res) => {
	school.find()
	.then(schoolData => {
		res.json({
			confirmation: 'success',
			data: schoolData
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

// 📚 READ student data
router.get('/student', (req, res) => {
	const query = req.query

	student.find(query)
	.then(studentData => {
		res.json({
			confirmation: 'success',
			data: studentData
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

// 🔄 UPDATE school, reach this endpoint using /api/school/update?=id
// ⚠️ Non-RESTful, just for development purposes
router.get('/school/update', (req, res) => {
	const query = req.query // require: id, key=value
	const schoolId = query.id
	delete query['id']

	school.findByIdAndUpdate(schoolId, query, {new:true})
	.then(school => {
		res.json({
			confirmation: 'success',
			data: school
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: 'school with id ' + id + ' not found.'
		})
	})
})

// 🔄 UPDATE student, reach this endpoint using /api/student/update?=id
// ⚠️ Non-RESTful, just for development purposes
router.get('/student/update', (req, res) => {
	const query = req.query // require: id, key=value
	const studentId = query.id
	delete query['id']

	student.findByIdAndUpdate(studentId, query, {new:true})
	.then(student => {
		res.json({
			confirmation: 'success',
			data: student
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: 'student with id ' + id + ' not found.'
		})
	})
})

// ❌ DELETE school
router.get('/school/remove', (req, res) => {
	const query = req.query
	school.findByIdAndRemove(query.id)
	.then(data => {
		res.json({
			confirmation: 'success',
			data: 'School ' + query.id + ' successfully removed.'
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

// ❌ DELETE student
router.get('/student/remove', (req, res) => {
	const query = req.query
	student.findByIdAndRemove(query.id)
	.then(data => {
		res.json({
			confirmation: 'success',
			data: 'Student ' + query.id + ' successfully removed.'
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

// 🔎 Used to search for a school via id
router.get('/school/:id', (req, res) => {
	const id = req.params.id

	school.findById(id)
	.then(school => {
		res.json({
			confirmation: 'success',
			data: school
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: 'school with id ' + id + ' not found.'
		})
	})
})

// 🔎 Used to search for a student via id
router.get('/student/:id', (req, res) => {
	const id = req.params.id

	student.findById(id)
	.then(student => {
		res.json({
			confirmation: 'success',
			data: student
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: 'student with id ' + id + ' not found.'
		})
	})
})

// ➡️ INSERT for school data
router.post('/school', (req, res) => {
	school.create(req.body)
	.then(school => {
		res.json({
			confirmation: 'success',
			data: school
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})

// ➡️ INSERT for student data
router.post('/student', (req, res) => {
	student.create(req.body)
	.then(student => {
		res.json({
			confirmation: 'success',
			data: student
		})
	})
	.catch(err => {
		res.json({
			confirmation: 'fail',
			message: err.message
		})
	})
})


module.exports = router
