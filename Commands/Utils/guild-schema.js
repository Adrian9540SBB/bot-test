const mongoose = require("mongoose")

const reqString = {
    type: String,
    required: true,
}


const User2 = new mongoose.Schema({
    _id: reqString,
    userID: reqString
})

module.exports = { User2: mongoose.model("Guild", User)}