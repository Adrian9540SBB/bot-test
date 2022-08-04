
const Discord = require("discord.js");
const { Intents, Collection } = Discord;
const mongoose = require("mongoose")
const testSchema = require("./Commands/Utils/test-schema")
const client = new Discord.Client({
    intents: 
    [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS
    ]
});


client.on('ready', async () =>  {
    console.log("YAYYYYY")
})


client.commands = new Collection();
client.cooldowns = new Collection();

["commandHandlers", "eventHandlers"].forEach(handler => {
    require(`./Handlers/${handler}`)(client, Discord);
});
    

client.login(process.env.TOKEN).then(() => mongoose.connect(process.env.MONGO_URI))
