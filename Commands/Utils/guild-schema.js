const mongoose = require("mongoose")

const reqString = {
    type: String,
    required: true,
}


const User2 = new mongoose.Schema({
    _id: reqString,
    CI: reqString,
    text: reqString,
})

module.exports = { User2: mongoose.model("welcomeMessage", User)}