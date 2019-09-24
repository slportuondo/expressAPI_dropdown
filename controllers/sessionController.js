const express = require('express')
const router = express.Router()
const Image = require('../models/image.js')
const Session = require('../models/session.js')
const bodyParser = require('body-parser')

// Session auth
router.post('/login', async (req, res, next) => {
  // Query database to verify that user exists
  try {
    const sessionFound = await Session.findOne({sessionName: req.body.sessionName})

    if (sessionFound) {
      if (req.body.sessionKey == sessionFound.sessionKey) {
        const response = res.json({
					wasSuccessful : true,
					sessionId : sessionFound._id
				})
      } else {
				res.json({
					wasSuccessful : 'false'
				})
      }
    } else {
			res.json({
				wasSuccessful : 'false'
			})
		}
  } catch (err) {
    next(err);
  }
})


// Get the current session key
router.post('/key', async (req, res, next) => {
	try {
		const currentSession = await Session.findById(req.body.currentSessionId)

		res.json({ currentKey: currentSession.sessionKey })

	} catch (err) {
		next(err)
	}
})

// Create a new session
router.post('/new', async (req, res, next) => {
	try {
		const { currentSessionID, sessionName } = req.body

		if (currentSessionID) {
			Session.findOneAndRemove(currentSessionID)
		}

		const newSession = new Session()
		const randomKey = Math.floor(Math.random() * 89999999 + 10000000)

		newSession.sessionName = req.body.sessionName
		newSession.sessionKey = randomKey
		await newSession.save()

		res.json(newSession)

	} catch (err) {
		next(err)
	}
})



module.exports = router;
