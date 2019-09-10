const express = require('express')
const router = express.Router()
const Image = require('../models/image.js')
const Session = require('../models/session.js')
const superagent = require('superagent')

router.post('/', async (req, res, next) => {

	try {
		let imageURI= req.body.srcUrl;

		// Fetches image from given url and returns the data as a Buffer array
		// This is necessary because while many src attribute values on chrome are already base64 encoded, we need to account for those that are not
		if (req.body.srcUrl.indexOf('data:') == -1 || req.body.srcUrl.indexOf(';base64,') == -1) {
			const imageFileBuffer = await superagent.get(req.body.srcUrl)
			.buffer(true).parse(superagent.parse.image)

			// Encodes image buffer array to a base64 string, which will be easier for the react native app to parse
			const headers = imageFileBuffer.headers['content-type']
			const body = imageFileBuffer.body.toString('base64')
			imageURI= 'data:' + headers + ';base64,' + body
		}


		const createdImage = new Image;

		// const foundOwner = await Session.findOne(req.body.id)
		
    // createdImage.owner = foundOwner
    // createdImage.title = req.body.title
    createdImage.foundOnURL = req.body.foundOnURL;
    createdImage.imgURI = imageURI;
		await createdImage.save()

    res.send('Your image has been dropped')
	} catch(err) {
		next(err)
		res.send('Image could not be dropped')
	}
})

module.exports = router
