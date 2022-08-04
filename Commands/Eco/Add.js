const { MessageEmbed } = require("discord.js")
const { User } = require("../Utils/test-schema")
const fs = require("fs");
var ExpantaNum = require("./ExpantaNum.js")
module.exports = {
    name: "add",
    description: "lol",
    async execute(message, args, commandName, client, Discord) {
            const target = message.mentions.users.first() || message.author;
            const users = message.guild.members.cache.get(target.id);
            const userData = await User.findOne({id: users}) || new User({id: users})
            const embed = new MessageEmbed({ color: "BLUE"})
            userData.bal = ExpantaNum.add(`${userData.bal}`,args[0])
            return message.channel.send({
             embeds: [
                 embed.setDescription('Added ' + ExpantaNum(args[0]).toStringWithDecimalPlaces(2) + " to " + `${users.username}`)
                ]
            })
     

    }
} 