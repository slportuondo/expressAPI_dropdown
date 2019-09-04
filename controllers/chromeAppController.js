const express = require('express')
const router = express.Router()
const Image = require('../models/image.js')
const User = require('../models/user.js')
const bodyParser = require('body-parser')

router.get('/:userID', async(req, res, next) => {
	try {
		const newKey = await User.findById(req.params.userID)
		res.send('message/create.ejs', {
			photo: newKey.key
		})
	} catch (err) {
		next(err)
	}
})
