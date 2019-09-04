const express = require('express')
const router = express.Router()
const Image = require('../models/image.js')
const Session = require('../models/session.js')
const bodyParser = require('body-parser')

router.get('/', async (req, res, next) => {
	try {
		const currentKey = await Session.findById(req.body.id)

		res.json({
			currentKey: currentKey.sessionKey
		})

	} catch (err) {
		next(err)
	}
})

router.post('/', async (req, res, next) => {
	try {
		const { currentSessionID, sessionName } = req.body

		if (currentSessionID) {
			Session.findOneAndRemove(currentSessionID)
		}

		const newSession = new Session
		const randomKey = Math.floor(Math.random() * 89999999 + 10000000)

		newSession.sessionName = req.body.sessionName
		newSession.sessionKey = randomKey
		newSession.save()

		res.json({
			newSession: newSession
		})

	} catch (err) {
		next(err)
	}
})



module.exports = router;
