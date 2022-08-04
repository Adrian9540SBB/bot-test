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
        default: "0",
    },
    bank: {
        type: String,
        required: true,
        default: "0",
    },
    cooldowns: {
        daily: {type: Date}
    }
})
module.exports = { User: mongoose.model("User", User)}