const { MessageEmbed } = require("discord.js")
const { User } = require("../Utils/test-schema")
const fs = require("fs");
var ExpantaNum = require("./ExpantaNum.js");
const messageOutputsSuccess1 = [
    '','Your mom','Your Dad', 'Your sister', 'Your Brother', 'Donald Trump', 'Adrian9540',
    'Your Friend', 'Your Dog', 'Your Cat', 'This bot', 'A Stranger', 'TrollFace', 'Obama',
    'The owner of this server', 'Your self', 'God'
]

const messageOutputsSuccess2 = [
    'has given you', 'found', 'has found', 'traded', 'gave'

]
const messageOutputsSuccess3 = ['Congrats!,',  'Nice', 'Wow!', 
    'What HOW'
]


const messageOutputsFail1 = [
    'you idiot, you shouldve known that you wouldnt get any coins', 'you begged on the street and got slapped by a stranger lmfao',
    'You got some coins but someone stole them, be careful with your stuff next time smh',
    'You didnt beg enough so you did not get enough coins, sorry :('
]

module.exports = {
    name: "beg",
    description: "Beg for Money!",
    async execute(message,args,commandName,Client,Discord) {
        const user = message.author;
        const userData = await User.findOne({id: user}) || new User({id: user})
        const randomBegAmount = ExpantaNum(ExpantaNum.div(ExpantaNum.mul(Math.random(), userData.bal),135.358))
        const success = Math.floor(Math.random() * 2) + 1
        const messageOutputSay1 = Math.floor(Math.random() * messageOutputsSuccess1.length)
        const messageOutputSay2 = Math.floor(Math.random() * messageOutputsSuccess2.length)
        const messageOutputSay3 = Math.floor(Math.random() * messageOutputsSuccess3.length)
        const messageOutputSay4 = Math.floor(Math.random() * messageOutputsFail1.length)
        if (success === 1) {
            if(messageOutputSay3 == messageOutputsSuccess1[1]) {                
                userData.bal = randomBegAmount;
                const DiscordEmbed1 = new MessageEmbed()
                .setDescription(`${messageOutputsSuccess3[messageOutputSay3] + messageOutputsSuccess1[messageOutputSay1] + 1 + messageOutputsSuccess2[messageOutputSay3] + randomBegAmount} coins`)
                message.channel.send({
                    embeds: [DiscordEmbed1]
                })
            } else {
                userData.bal = randomBegAmount;
                const DiscordEmbed2 = new MessageEmbed()
                .setDescription(`${messageOutputsSuccess1[messageOutputSay1 + 1] + " " + messageOutputsSuccess2[messageOutputSay3] + " " + ExpantaNum(randomBegAmount)} coins`)
                message.channel.send({
                    embeds: [DiscordEmbed2]
                })
            }
        } else {
                const DiscordEmbed3 = new MessageEmbed()
                .setDescription(`${messageOutputsFail1[messageOutputSay4]}`)
                message.channel.send({
                    embeds: [DiscordEmbed3]
                })
            }

            userData.save()
            
        }
        

    }