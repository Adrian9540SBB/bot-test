const {MessageEmbed, User} = require("discord.js")
const fs = require("fs");
var ExpantaNum = require("./ExpantaNum.js")
module.exports = {
    name: "add",
    description: "lol",
    execute(message, args, commandName, client, Discord) {
        const target = message.mentions.users.first() || message.author;
        const member = message.guild.members.cache.get(target.id);
        let UserJSON = JSON.parse(fs.readFileSync("././Data/users.json"))
        console.log(new ExpantaNum(100000))
        if (message.author.id == 941883718044356718 || message.author.id == 847462484683522059) {
            if (!UserJSON[member.id]) {
                const embed3 = new MessageEmbed()
                .setColor("RED")
                .setDescription("You dont have an account yet, type ^^start to make an account")
                message.channel.send({embeds: [embed3]})
                return;
            }
            if (ExpantaNum.isNaN(args[1])) {
                const embed2 = new MessageEmbed()
                .setColor("RED")
                .setDescription("That is not a number")
                message.channel.send({embeds: [embed2]})
                return;
            }
    
            UserJSON[member.id].bal = ExpantaNum.add(UserJSON[member.id].bal,args[1]).toStringWithDecimalPlaces(2)
            fs.writeFileSync("././Data/users.json", JSON.stringify(UserJSON));
            const embed1 = new MessageEmbed()
            .setColor("GREEN")
            .setDescription("Added " + ExpantaNum(args[1]) + " to " + target.username + "'s balance")
            message.channel.send({embeds: [embed1]})
        }
    }
}