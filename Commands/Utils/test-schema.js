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
        backgroundrank: {
            type: String,
            required: true,
            default: "https://png.pngtree.com/png-clipart/20200701/original/pngtree-abstract-star-space-transparency-background-png-image_5439546.jpg",
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