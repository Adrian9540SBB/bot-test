const {MessageEmbed} = require("discord.js")
const fs = require("fs");
module.exports = {
    name: "start",
    description: "Start your game",
    execute(message, args, commandName, client, Discord) {
        const target = message.mentions.users.first() || message.author;
        const member = message.guild.members.cache.get(target.id);
        const embed = new MessageEmbed()
        .setColor("GREEN")
        .setTitle("**Account**")
        .setDescription("You have made an account")
        let UserJSON = JSON.parse(fs.readFileSync("././Data/users.json"))
        if (UserJSON[member.id]) {
            const embed2 = new MessageEmbed()
            .setColor("RED")
            .setTitle("**Account**")
            .setDescription("You already have an account")
            message.channel.send({embeds: [embed2]})
        }
        if (!UserJSON[member.id]) {
            const embed = new MessageEmbed()
            .setColor("GREEN")
            .setTitle("**Account**")
            .setDescription("You have made an account")
            message.channel.send({embeds: [embed]})
            UserJSON[member.id] = {
                bal: "2",
                lastClaim: 0,
            }
            fs.writeFileSync("././Data/users.json", JSON.stringify(UserJSON));
        }
    }
}