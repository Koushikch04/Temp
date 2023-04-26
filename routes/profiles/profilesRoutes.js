const express = require('express');
const router = express.Router();
const adminDashboard = require('./admin/adminDashboard')
const adminCustomers = require('./admin/adminCustomers')
const adminOrders = require('./admin/adminOrders')
const adminEmployees = require('./admin/adminEmployees')
const adminMessages = require('./admin/adminMessages')
const adminProducts = require('./admin/adminProducts')

router.use('/admin/dashboard', adminDashboard);
router.use('/admin/customers', adminCustomers);
router.use('/admin/orders', adminOrders);
router.use('/admin/employees', adminEmployees);
router.use('/admin/Messages', adminMessages);
router.use('/admin/products', adminProducts);


module.exports = router;

