const express = require('express')
const router = express.Router();
const message = require('../../controllers/message')

router.post('/contact', message.contactUs);
router.post('/announcement', message.announcementAdd)

module.exports = router;