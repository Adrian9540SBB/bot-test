const {MessageEmbed, User} = require("discord.js")
const fs = require("fs");
function randomInt(min, max){
	return Math.floor((Math.random() * (max-min+1)) + min);
}
module.exports = {
    name: "slot",
    description: "Your balance",

    execute(message, args, commandName, client, Discord) {
        
    }
}