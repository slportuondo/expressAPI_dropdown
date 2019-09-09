const express = require('express')
const router = express.Router()
const Image = require('../models/image.js')
const Session = require('../models/session.js')
const multer = require('multer')
const fs = require('fs')

const dropImage = multer({dest: 'imagesDropped/'})

router.post('/', )

// router.post('/', dropImage.single('image'), async (req,res,next) => {
router.post('/', async (req,res,next) => {
	console.log('SOMEONE JUST POSTED, here\'s what');
  // //Create a file in the imagesDropped folder
	// const filePath = req.file.path

	console.log(req.body);
  const foundOwner = await Session.findOne(req.body.id)
  const createdImage = new Image

  try {
    // createdImage.owner = foundOwner
    // createdImage.title = req.body.title
    createdImage.foundOnURL = req.body.foundOnURL
    // createdImage.img.data = fs.readFileSync(filePath)
		// createdImage.img.contentType = req.file.mimetype

		await createdImage.save()

		res.send(createdImage)
    // Delete the file from the imagesDropped folder
		// fs.unlinkSync(filePath)
    // res.send(createdImage)
	} catch(err){
		next(err)
	}
})

module.exports = router
