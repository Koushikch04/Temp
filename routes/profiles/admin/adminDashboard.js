const express = require('express');
const counts = require('../../../models/counts');
const dashboardController = require('../../../controllers/adminDashboard')
const router = express.Router();

router.get('/', dashboardController.dashboard)

module.exports = router;