const express = require('express')
const router = express.Router()
const Image = require('../models/image.js')
const Session = require('../models/session.js')
const superagent = require('superagent')


router.get('/', async (req, res, next) => {
	try {
		const foundImages = await Image.find()
		res.json({
			droppedImages: foundImages
		})
	} catch (err) {
		next(err)
	}
})

module.exports = router
