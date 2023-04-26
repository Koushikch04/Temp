const express = require("express");
const users = require("../../models/userSchema")
const orders = require("../../models/orders")
const productSchema = require("../../models/productSchema")
const router = express.Router();
const count = require("../../models/counts")

router.get("/", (req, res) => {
    res.render("./HTML/PaymentPage/paymentPage.ejs")
})

router.post("/", async (req, res) => {
    if (req.session.userName) {
        const user = await users.findOne({ mailId: req.session.userMail }, { userCart: 1, _id: 1 })
        user.userCart.forEach(async element => {
            let product = await productSchema.findOne({ "productDetails.Name": element.productDetails.title, "productDetails.price": element.productDetails.price })
            console.log(product._id);
            orders.create({ prodId: product._id, userId: user._id, status: 'pending' })
            await count.findOneAndUpdate({}, { $inc: { 'countSales': element.productDetails.price } })
        });
        await count.findOneAndUpdate({}, { $inc: { 'countOrders': user.userCart.length } })
        await user.updateOne({ $pull: { userCart: {} } });
    }
    res.redirect("/")
})

module.exports = router;