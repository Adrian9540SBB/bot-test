const {MessageEmbed} = require("discord.js")
const {User} = require("../../test-schema.js")
const fs = require("fs");
var ExpantaNum = require("./ExpantaNum.js")
module.exports = {
    name: "add",
    description: "lol",
    execute(message, args, commandName, client, Discord) {
            const target = message.mentions.users.first() || message.author;
            const user = message.guild.members.cache.get(target.id);
            const userData = User.findOne({id: user}) || new User({id: user})
            const embed = new MessageEmbed({ color: "BLUE"})
            userData.bal = ExpantaNum.add(args[0])
            return message.channel.send({
             embeds: [
                 embed.setDescription('Added' + ExpantaNum(args[0]).toStringWithDecimalPlaces(2) + "to" + user.username)
                ]
            })
     

    }
} 