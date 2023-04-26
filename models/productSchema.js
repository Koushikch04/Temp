const mongoose = require('mongoose')
const productDetails = new mongoose.Schema({
    Name: String,
    price: Number,
    quantity: String,
    src: String
})

const product = new mongoose.Schema({
    productType: String,
    petType: String,
    productDetails: productDetails
})

module.exports = mongoose.model("products", product)