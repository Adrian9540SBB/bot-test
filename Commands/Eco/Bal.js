const {MessageEmbed, User} = require("discord.js")
const fs = require("fs");
var ExpantaNum = require("./ExpantaNum.js")
module.exports = {
    name: "bal",
    description: "Your balance",
    execute(message, args, commandName, client, Discord) {
        run: async(message) => {
            const target = message.mentions.users.first() || message.author;
            const user = message.guild.members.cache.get(target.id);
            const userData = User.findOne({id: user}) || new User({id: user})
            const balanceEmbed = new MessageEmbed()
            .setTitle(`${user.username}'s balance`)
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
}