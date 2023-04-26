const mongoose = require('mongoose');

const appointmentSchema =new mongoose.Schema({
    userName: String,
    package: String,
    number: String,
    date: String,
    time: String,
    appointmentType : String,
    status: String,
})

module.exports = mongoose.model("appointmentSchema",appointmentSchema)