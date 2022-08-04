const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    bal: {
        type: String,
        required: true,
    },
    bank: {
        type: String,
        required: true,
    },
    cooldowns: {
        daily: {type: Date}
    }
})
module.exports = mongoose.model('testing',schema)