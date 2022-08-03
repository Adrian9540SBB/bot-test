const { execute } = require("../Message/messageCreate");

module.exports = {
    name: "ready",
    execute(cilent) {
        console.log("Yay, the bot is now ready!!")
    }
}