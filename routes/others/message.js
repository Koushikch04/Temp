const express = require('express')
const router = express.Router();
const message = require('../../controllers/message')

router.post('/contact', message.contactUs);

module.exports = router;