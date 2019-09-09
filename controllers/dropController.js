const express = require('express')
const router = express.Router()
const Image = require('../models/image.js')
const Session = require('../models/session.js')
const multer = require('multer')
const fs = require('fs')
const superagent = require('superagent')

//node-fetch
//superagent

//superagent.get(http://cdn.cnn.com/cnnnext/dam/assets/190905104224-she-shed-exlarge-169.jpg).then(data => {data is your data, data.contnentType})

router.post('/', async (req,res,next) => {
	try {
		const imageFile = await superagent.get(req.body.srcUrl)
			.buffer(true).parse(superagent.parse.image)

		console.log(imageFile.body);
		console.log(imageFile.header);

		// const filePath = imageFile.file.path

		// console.log(req.body);
	  // const foundOwner = await Session.findOne(req.body.id)
	  // const createdImage = new Image
		//
    // // createdImage.owner = foundOwner
    // // createdImage.title = req.body.title
    // createdImage.foundOnURL = req.body.foundOnURL
    // // createdImage.img.data = fs.readFileSync(filePath)
		// // createdImage.img.contentType = req.file.mimetype
		//
		// await createdImage.save()
		//
    // // Delete the file from the imagesDropped folder
		// fs.unlinkSync(filePath)
    // res.send(createdImage)
	} catch(err){
		next(err)
	}
})

module.exports = router
