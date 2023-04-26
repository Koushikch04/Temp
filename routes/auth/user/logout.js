const express = require("express");
const path = require('path')
const sqlite = require('sqlite3')
const bcrypt = require('bcryptjs')
const router = express.Router();
var flush = require('connect-flash')

router.get('/', function (req, res) {
    req.session.destroy((err) => {
        if (err) {
            console.log("Some error in destroying the session");
        }
        else {
            res.redirect('/')
        }
    })
})

module.exports = router