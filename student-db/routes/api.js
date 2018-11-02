// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const school = require('../models/school')
const student = require('../models/student')
/*  This is a sample API route. */

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


module.exports = router
