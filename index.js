
const Discord = require("discord.js");
const { Intents, Collection } = Discord;
const client = new Discord.Client({
    intents: 
    [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS
    ]
});

client.commands = new Collection();
client.cooldowns = new Collection();

["commandHandlers", "eventHandlers"].forEach(handler => {
    require(`./Handlers/${handler}`)(client, Discord);
});
    

client.login(process.env.TOKEN);
console.log("bee")
