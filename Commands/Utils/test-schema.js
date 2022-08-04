const mongoose = require("mongoose")

const User = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    username: {
        type: String,
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
    levelranking: {
        level: {
            type: String,
            required: true,
            default: "0",
        },
        xp: {
            type: String,
            required: true,
            default: "0",
        },
        bg: {
            type: String,
            required: true,
            default: "",
        },
        xpneeded: {
            type: String,
            required: true,
            default: "100",
        },
        total: {
            type: String,
            required: true,
            default: "100",
        },
    },
    cooldowns: {
        daily: {type: Date}
    }
})
module.exports = { User: mongoose.model("User", User)}