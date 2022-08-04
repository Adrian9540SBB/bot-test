const mongoose = require("mongoose")

const User = new mongoose.Schema({
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
module.exports = { User: mongoose.model("User", User)}