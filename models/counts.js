const mongoose = require('mongoose')

const countsSchema = new mongoose.Schema({
    countMessage: {
        type: Number,
        required: true
    },
    countViews: {
        type: Number,
        required: true
    },
    countEmployees: {
        type: Number,
        required: true
    },
    countOrders: {
        type: Number,
        required: true
    },
    countProducts: {
        type: Number,
        required: true
    },
    countCustomers: {
        type: Number,
        required: true
    },
    countSales: {
        type: Number,
        required: true
    },
    countId: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("count", countsSchema);