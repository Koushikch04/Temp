const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const announcement = new Schema({
    message: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Announcement', announcement);