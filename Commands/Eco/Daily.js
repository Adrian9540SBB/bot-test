const {MessageEmbed, DataResolver} = require("discord.js")
const fs = require("fs");
var OmegaNum = require("./ExpantaNum.js")
module.exports = {
    name: "daily",
    description: "Your daily",
    execute(message, args, commandName, client, Discord) {
        const target = message.mentions.users.first() || message.author;
        const member = message.guild.members.cache.get(target.id);
        let UserJSON = JSON.parse(fs.readFileSync("././Data/users.json"));
        if (!UserJSON[member.id]) {
            const embed3 = new MessageEmbed()
            .setColor("RED")
            .setDescription("You dont have an account yet, type ^^start to make an account")
            message.channel.send({embeds: [embed3]})
            return;
        }
        if (Math.floor(new Date().getTime() - UserJSON[member.id].lastClaim) / (1000 * 60 * 60 * 24 ) < 1 ) {
            const embed2 = new MessageEmbed()
            .setColor("RED")
            .setDescription("You have already claimed it today")
            message.channel.send({embeds: [embed2]})

            return;
        }
        var y = OmegaNum(OmegaNum.add(OmegaNum.log10(OmegaNum.log10(UserJSON[member.id].bal)),1.8)).toStringWithDecimalPlaces(2)
        UserJSON[member.id].bal = OmegaNum(OmegaNum.pow(UserJSON[member.id].bal, y)).toStringWithDecimalPlaces(2)
        UserJSON[member.id].lastClaim = new Date().getTime()
        fs.writeFileSync("././Data/users.json", JSON.stringify(UserJSON));
        const embed = new MessageEmbed()
        .setColor("BLUE")
        .setTitle('**Your daily reward**')
        .addField('Money', 'You now have ' + UserJSON[member.id].bal + ' money', true)
        .setDescription("Your money has powered by " + y)
        message.channel.send({embeds: [embed]})


    }
}