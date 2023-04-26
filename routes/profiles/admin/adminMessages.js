const express = require('express');
const messageControllers = require("../../../controllers/message");
const router = express.Router();

router.get('/', messageControllers.messageSortAndSearch);

router.get('/delete', messageControllers.deleteMessages);

router.get('/pagination', messageControllers.pageChange);

module.exports = router;