const express = require('express');
const orderController = require('../../../controllers/orders')
const router = express.Router();

router.get('/', orderController.ordersSortSearchAndFilters)
router.get('/delete', orderController.deleteProduct)
module.exports = router;