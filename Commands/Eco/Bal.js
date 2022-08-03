const {MessageEmbed, User} = require("discord.js")
const fs = require("fs");
var ExpantaNum = require("./ExpantaNum.js")
module.exports = {
    name: "bal",
    description: "Your balance",
    execute(message, args, commandName, client, Discord) {
        console.log(ExpantaNum(33))
        const target = message.mentions.users.first() || message.author;
        const member = message.guild.members.cache.get(target.id);
        let UserJSON = JSON.parse(fs.readFileSync("././Data/users.json"))
        if (!UserJSON[member.id]) {
            const embed3 = new MessageEmbed()
            .setColor("RED")
            .setDescription("You dont have an account yet, type ^^start to make an account")
            message.channel.send({embeds: [embed3]})
            return;
        }
        const embed = new MessageEmbed()
        .setColor("BLUE")
        .setDescription(target.username + "'s balance is: " + ExpantaNum(UserJSON[member.id].bal).toStringWithDecimalPlaces(2))
        message.channel.send({embeds: [embed]})
    }
}