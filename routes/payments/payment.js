const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("./HTML/PaymentPage/paymentPage.ejs")
})

router.post("/", (req, res) => {

})

module.exports = router;