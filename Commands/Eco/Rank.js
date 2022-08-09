
const fs = require("fs");
const {MessageEmbed, MessageAttachment, ContextMenuInteraction} = require("discord.js")
const { createCanvas, loadImage } = require("canvas")
const { User } = require("../Utils/test-schema.js")
const ExpantaNum = require("./ExpantaNum.js");
module.exports = {
    name: "rank",
    description: "yes",
    async execute(message, args, commandName, client, Discord) {
        const user = message.mentions.users.first() || message.author;
        const userData = await User.findOne({id: user}) || new User({id: user})
        const member = message.mentions.users.first() || message.author;
        const level = `${userData.levelranking.level}`
        const xp = `${userData.levelranking.xp}`
        const xpneed = ExpantaNum(ExpantaNum.add(ExpantaNum.mul(ExpantaNum.mul(level,2),250),250)).toStringWithDecimalPlaces(2)

        //level * 2 * 250 + 250
        let backgroundranks = userData.levelranking.backgroundrank
        if (!backgroundranks) {
            console.log("leeol")
            const FBGRL = "https://s3.amazonaws.com/ssrc-static/wp-content/uploads/2022/04/07131756/space-g25e2d7df9_1920-1000x333.jpg"
            userData.levelranking.backgroundrank = FBGRL
            userData.save()
            return
        }
    
            const canvas = createCanvas(1000,333)
            const ctx = canvas.getContext('2d')
            let backgroundimage = await loadImage(backgroundranks)
            if(!backgroundimage || backgroundimage === null) {
                console.log("aaaaa")
                const FBGRL = "https://s3.amazonaws.com/ssrc-static/wp-content/uploads/2022/04/07131756/space-g25e2d7df9_1920-1000x333.jpg"
                userData.levelranking.backgroundrank = FBGRL
                message.reply("Try Again")
                return
            }
    
            ctx.drawImage(backgroundimage,0,0,canvas.width,canvas.height)
    
            ctx.beginPath()
            ctx.lineWidth = 4
            ctx.strokeStyle = "#0085f2"
            ctx.globalAlpha = 0.2
            ctx.fillStyle = '#ff3700'
            ctx.fillRect(180,216,775,65)
            ctx.fill()
            ctx.globalAlpha = 1
            ctx.strokeRect(180,216,775,65)
            ctx.stroke
    
    
            ctx.fillStyle = "#b3ff00"
            ctx.globalAlpha= 0.6
            console.log("1")
            ctx.fillRect(200,216,ExpantaNum.div(ExpantaNum.mul(ExpantaNum.mul(ExpantaNum.add(ExpantaNum.mul(ExpantaNum.mul(level,2),250),250),xp),7.5),100),65) // Uses ExpantaNum
            console.log("2")
            ctx.fill()
            ctx.globalAlpha = 1
            //((ExpantaNum(100 / (level * 2 * 250 + 250))* xp ) * 7.5)
            ctx.beginPath()
            ctx.lineWidth = 4
            ctx.fillStyle = '#ffae00'
            ctx.strokeStyle = '#ff3700'
            ctx.globalAlpha = 0.2
            ctx.fillRect(300,75,650,120)
            ctx.fill()
            ctx.globalAlpha = 1
            ctx.strokeRect(300,75,650,120)
            ctx.stroke()
    
            
            ctx.font = "36px sans-serif"
            ctx.textAlign = 'left'
            ctx.fillStyle = "#FF0000"
            ctx.fillText(`${xp} / ${xpneed}`, 600, 265)
    
            ctx.font = '50px sans-serif'
            ctx.textAlign = 'left'
            ctx.fillStyle = "#FF0000"
            ctx.fillText(member.username, 325, 155)
    
    
            ctx.font = '40px sans-serif'
            ctx.fillStyle = "#FF0000"
            ctx.fillText(`Level: ${level}`, 600, 155)
            
            ctx.arc(170,160,120,0,Math.PI * 2,true)
            ctx.lineWidth = 6
            ctx.strokeStyle = '#00ffff'
            ctx.stroke()
            ctx.closePath()
            ctx.clip()
            console.log("5")
            
            const avatar = await loadImage(user.displayAvatarURL({ format: 'jpg' }))
            console.log("3")
            ctx.drawImage(avatar,40,40,250,250)
            console.log("4")

            const attachment = new Discord.MessageAttachment(canvas.toBuffer(),'rank.png')
            
            try {
                message.channel.send({
                    files: [attachment]
                })
            } catch(error) {
                console.log(error)
            }

            console.log("if it has made it here its a problem with the attachment")

    }   
}

