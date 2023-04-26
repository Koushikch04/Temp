const express = require('express')
const customerController = require('../../../controllers/customers')
const router = express.Router();

router.get('/', customerController.customersSortAndSearch)

module.exports = router;