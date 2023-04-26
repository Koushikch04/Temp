const express = require('express');
const path = require('path')
const sqlite = require('sqlite3')
const bcrypt = require('bcryptjs')
const Users = require("../../../models/userSchema");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("./HTML/Authentication/signup.ejs", { error: false })
})

router.post("/", async function (req, res) {
    const temp = await Users.find({ mailId: req.body.Email })
    if (temp.length != 0) {
        res.render("./HTML/Authentication/signup", { error: true, message: "User already exists" });
    } else if (req.body.Password === req.body.ConfirmPassword) {
        let hash = bcrypt.hashSync(req.body.Password, 10)
        const user = await Users.create({ name: { firstName: req.body.FirstName, lastName: req.body.LastName }, mailId: req.body.Email, password: hash, userCart: [] })
        await user.save()
        res.render("./HTML/Authentication/login", { error: true, message: "Congratulations, Your account has been successfully created! Please login to continue." });
    }
    else {
        res.render("./HTML/Authentication/signup");
    }
})
module.exports = router;


