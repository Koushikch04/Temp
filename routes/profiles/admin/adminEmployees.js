const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('./HTML/Admin/adminEmployees.ejs', { login: true });
})

module.exports = router;