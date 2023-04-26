const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    prodId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'products'
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'userSchema'
    },
    status: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema)