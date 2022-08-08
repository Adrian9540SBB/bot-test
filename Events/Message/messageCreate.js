const { Client, Message, MessageEmbed, Collection} = require("discord.js");
const ExpantaNum = require("../../Commands/Eco/ExpantaNum.js")
const { User } = require("../../Commands/Utils/test-schema.js")

module.exports = {
    name: "messageCreate",
    /**
     * @param (Client) client
     * @param (Message) message
     */
    async execute(message, client, Discord) {
        console.log("LOL")
        const user = message.mentions.users.first() || message.author;
        const userData = await User.findOne({id: user}) || new User({id: user})
        xps(message)
        const level = `${userData.levelranking.level}`
        const xp = `${userData.levelranking.xp}`
        const xpneed = ExpantaNum(ExpantaNum.add(ExpantaNum.mul(ExpantaNum.mul(level,2),250),250)).toStringWithDecimalPlaces(2)
        let backgroundranks = userData.levelranking.backgroundrank
        userData.save()
        function xps(message) {
            if(message.author.bot) return
            const randomXP = ExpantaNum(ExpantaNum.add(ExpantaNum.mul(ExpantaNum(Math.random()),150),50)).toStringWithDecimalPlaces(2)
            //Math.floor(Math.random() * 150) + 50
            userData.levelranking.xp = ExpantaNum.add(userData.levelranking.xp,randomXP).toStringWithDecimalPlaces(2)
            console.log(userData.xp + "e " + randomXP)
            const level = `${userData.levelranking.level}`
            const xp = `${userData.levelranking.xp}`
            const xpneed = ExpantaNum(ExpantaNum.add(ExpantaNum.mul(ExpantaNum.mul(level,2),250),250)).toString()
            if (ExpantaNum.gte(ExpantaNum(xp),ExpantaNum(xpneed))) {
                const levelnew = ExpantaNum.add(`${userData.levelranking.level}`,1)
                userData.levelranking.xp = 0
                userData.levelranking.level = levelnew
            }
        }
        if (!message.content.startsWith(process.env.PREFIX) || message.author.bot ) return
        const args = message.content.slice(process.env.PREFIX.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const command = client.commands.get(commandName) ||
        client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
        if (!command) return;

        if (command.permissions) {
            const authorPerms = message.channel.permissionsFor(message.author);
            if (!authorPerms || !authorPerms.has(command.permissions)) {
                const noPerms = new MessageEmbed()
                .setColor('RED')
                .setDescription(`You dont have the permissions for that command`)
                Message.reply({embeds: [noPerms]})
                return;
            } 
        }

        const { cooldowns } = client
        if (!cooldowns.has(command.name)) {
            cooldowns.set(command.name, new Collection());
        }

        const now = Date.now();
        const timestamps = cooldowns.get(command.name);
        const cooldownamount = (command.cooldown || 1) * 1000

        if (timestamps.has(message.author.id)) {
            const exptime = timestamps.get(message.author.id) + cooldownamount;
            if (now < exptime) {
                const timeLeft = (exptime - now) / 1000
                const tlEm = new MessageEmbed()
                .setColor("RED")
                .setTitle("**Cooldown**")
                .setDescription(`Please wait ${timeLeft.toFixed(2)}) more seconds to use this command again`)
                return message.channel.send({embeds: [tlEm]});
            }
        }
        try {
            command.execute(message,args,commandName,client,Discord)
        } catch (error) {
            console.log(error);
            const errorEmbed = new MessageEmbed()
            .setColor('RED')
            .setDescription('An error has occured while trying to run the command.')
            message.channel.send({embeds: [errorEmbed]});
            return;
        };
    }
};