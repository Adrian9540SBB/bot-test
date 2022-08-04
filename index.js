
const Discord = require("discord.js");
const { Intents, Collection } = Discord;
const mongoose = require("mongoose")
const testSchema = require("./test-schema.js")
const client = new Discord.Client({
    intents: 
    [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS
    ]
});


cilent.on('ready', async () =>  {
    await mongoose.connect(
        process.env.MONGO_URI,
        {
            keepAlive: true
        }
    )
    setTimeout(async () => {
        await new testSchema({
            message: "hi"
        }).save()
    }, 1000);
})


client.commands = new Collection();
client.cooldowns = new Collection();

["commandHandlers", "eventHandlers"].forEach(handler => {
    require(`./Handlers/${handler}`)(client, Discord);
});
    

client.login(process.env.TOKEN);
console.log("bee")
