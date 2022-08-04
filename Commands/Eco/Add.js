const { MessageEmbed } = require("discord.js")
const { User } = require("../Utils/test-schema")
const fs = require("fs");
var ExpantaNum = require("./ExpantaNum.js")
module.exports = {
    name: "add",
    description: "lol",
    async execute(message, args, commandName, client, Discord) {
            const user = message.mentions.users.first() || message.author;
            const userData = await User.findOne({id: user}) || new User({id: user})
            const embed = new MessageEmbed({ color: "BLUE"})
            userData.bal = ExpantaNum.add(userData.bal,args[1]).toStringWithDecimalPlaces(2)
            return message.channel.send({
             embeds: [
                 embed.setDescription('Added ' + ExpantaNum(args[1]).toString() + " to " + `${user.username}`)
                ]
            })
     

    }
} 