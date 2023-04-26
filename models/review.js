const mongoose = require('mongoose')
const reviewSchema = new mongoose.Schema({
    Name: String,
    review: String,
},{ timestamps: true}
)

module.exports = mongoose.model("reviewSchema", reviewSchema)