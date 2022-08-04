const {MessageEmbed} = require("discord.js")
const {User} = require("../Utils/test-schema")
const fs = require("fs");
var ExpantaNum = require("./ExpantaNum.js");
module.exports = {
    name: "bal",
    description: "Your balance",
    async execute(message, args, commandName, client, Discord) {
            const user = message.author.id
            const userData = await User.findOne({id: target.id}) || new User({id: user})
            const balanceEmbed = new MessageEmbed()
            .setTitle(`${message.author.username}'s balance`)
            .setDescription("Wallet and bank details of requested user")
            .setColor("GREEN")
            .setThumbnail(user.displayAvatarURL())
            .addField("- Wallet", `**\` ${userData.bal} \`**`, true)
            .addField("- Bank", `**\` ${userData.bank} \`**`, true)
    
            return message.channel.send({
                embeds: [ balanceEmbed ]
            })
    }
}