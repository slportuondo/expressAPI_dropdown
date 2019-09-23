const express = require('express')
const router = express.Router()
const Image = require('../models/image.js')
const Session = require('../models/session.js')
const bodyParser = require('body-parser')


router.get('/', async (req, res, next) => {
	try {
		// const currentKey = await Session.findById(req.body.id)
    // const foundImages = await Image.find({owner: currentKey})

    // const foundImages = await Image.find({}, {foundOnURL:1, _id:0})
		const foundImages = await Image.find()

		res.json({
			droppedImages: foundImages
		})

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
