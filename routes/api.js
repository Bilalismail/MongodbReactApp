// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const Profile = require('../models/Profile')

router.get('/profile', (req, res) => {
	//const query = req.query
	const queryString = req.query;

	Profile.find({ product_title: { $regex: `^${queryString}.*`, $options: "i" } })
	.then(profiles => {
		res.json({
			confirmation: 'success',
			data: profiles
			
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
