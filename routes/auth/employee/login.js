const express = require("express");
const bcrypt = require('bcryptjs')
const router = express.Router();
const Employee = require('../../../models/employee')

router.get("/", (req, res) => {
    res.render("./HTML/Authentication/employeeLogin.ejs");
})

const checkPassword = (Password, hashedPassword) => {
    return bcrypt.compareSync(Password, hashedPassword)
}
router.post("/", async function (req, res) {
    let mail = req.body.name
    let password = req.body.passWord
    const employees = await Employee.find({ mailId: mail })
    if (employees.length != 0) {
        matched = checkPassword(password, employees[0].password)
        if (matched == true) {
            req.session.userMail = mail
            let name = employees[0].name.firstName.concat(" ", employees[0].name.lastName)
            req.session.userName = name
            console.log(req.session);
            res.render("./HTML/LandingPages/mainLandingPage", { error: true, message: "Login Successfull!", notlogin: false })
        }
        else {
            res.render("./HTML/Authentication/login", { error: true, message: "Incorrect Password!Please try again" })
        }
    }
    else {
        res.render("./HTML/Authentication/login", { error: true, message: "Invalid Mail!Please try again" })
    }
})


module.exports = router;