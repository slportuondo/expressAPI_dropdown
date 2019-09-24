const express = require('express')
const router = express.Router()
const Image = require('../models/image.js')
const Session = require('../models/session.js')
const bodyParser = require('body-parser')


router.post('/', async (req, res, next) => {
	try {
		const foundImages = await Image.find({'owner':req.body.id})
		console.log(foundImages);
		res.json({
			droppedImages: foundImages
		})
		console.log('anything');
	} catch (err) {
		next(err)
	}
})

// Delete route
router.delete('/', async (req, res, next) => {
	try {
		const foundSession = await Image.deleteMany({'owner':req.body.id})
		res.send('success!')
	} catch (err) {
		next(err)
	}
})

module.exports = router
