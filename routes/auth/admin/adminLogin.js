const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("./HTML/Admin/adminLogin.ejs", { error: false })
})

router.get("/admin-logout", async (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.log("Some error in destroying the session");
        }
        else {
            res.redirect('/')
        }
    })
})

router.post("/", async (req, res) => {
    let mail = req.body.Email
    let pass = req.body.Password
    console.log(mail, pass)
    if (mail === "admin@123" && pass === "Admin@123") {
        res.render("./HTML/Admin/admin", { error: true, message: "Login Successful!" })
    } else {
        res.render("./HTML/Admin/adminLogin", { error: true, message: "Invalid Username or Password! Please try again!" })
    }
})

module.exports = router;