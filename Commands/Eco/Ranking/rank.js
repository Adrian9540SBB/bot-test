const fs = require("fs");
const {MessageEmbed, MessageAttachment, ReactionUserManager} = require("discord.js")
const { createCanvas, loadimage, loadImage } = require("canvas")
const { User } = require("../../Utils/test-schema.js")
const ExpantaNum = require("../ExpantaNum.js")
console.log("lol")
module.exports = {
    name: "rank",
    description: "yes",
    async execute(message, args, commandName, client, Discord) {
        message.channel.send("test")
        console.log("lol")
        const userData = await User.findOne({id: user}) || new User({id: user})
        xp(message)
        console.log("lol")
            const member = message.mentions.users.first() || message.author;
            const level = `${userData.level}`
            const xp = `${userData.xp}`
            console.log("lol")
            const xpneed = ExpantaNum(ExpantaNum.mul(level, ExpantaNum.mul(250, ExpantaNum.add(250,0))))
            let backgroundrank = `${userData.backgroundrank}`
            if(!backgroundrank) {
                const FBGRL = "https://png.pngtree.com/png-clipart/20200701/original/pngtree-abstract-star-space-transparency-background-png-image_5439546.jpg"
                userData.backgroundrank = FBGRL
                userData.save()
                return
            }
            console.log("lol")
    
            const canvas = createCanvas(1000,333)
            console.log("lol")
            const ctx = canvas.getContext('2d')
            if(!backgroundrank || backgroundimage === null) {
                const FBGRL = "https://png.pngtree.com/png-clipart/20200701/original/pngtree-abstract-star-space-transparency-background-png-image_5439546.jpg"
                userData.backgroundrank = FBGRL
                userData.save()
                message.reply("Try Again")
                return
            }
            let backgroundimage = await loadImage(backgroundrank)
    
            ctx.drawImage(backgroundimage,0,0,canvas.width,canvas.height)
    
            ctx.beginPath()
            ctx.lineWidth = 4
            ctx.strokeStyle = "#0085f2"
            ctx.globalAlpha = 0.2
            cts.fillStyle = '#ff3700'
            ctx.fillRect(180,216,775,65)
            ctx.fill()
            ctx.globalAlpha = 1
            ctx.strokeRect(180,216,775,65)
            ctx.stroke
    
    
            ctx.fillStyle = "#b3ff00"
            ctx.globalAlpha= 0.6
            ctx.fillRect(200,216,((ExpantaNum.mul(ExpantaNum.mul(Expantanum.div(100,ExpantaNum.mul(level, ExpantaNum.mul(250, ExpantaNum.add(250,0)))),xp),7.5))).toString(),65) // Uses ExpantaNum
            ctx.fill()
            ctx.globalAlpha = 1
    
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
    
    
            ctx.font = '35px sans-serif'
            ctx.textAlign = 'left'
            ctx.fillStyle = "#FF0000"
            ctx.fillText(`${xp} / ${xpneed}`, 600, 260)
    
            ctx.font = '50px sans-serif'
            ctx.textAlign = 'left'
            ctx.fillStyle = "#FF0000"
            ctx.fillText(member.username, 325, 155)
    
    
            ctx.font = '40px sans-serif'
            ctx.fillStyle = "#FF0000"
            ctx.fillText('Level:', 770, 120)
            ctx.fillText(`${level}`, 920, 120)
            
            ctx.arc(170,160,120,0,Math.PI * 2,true)
            ctx.lineWidth = 6
            ctx.strokeStyle = '#00ffff'
            ctx.stroke()
            ctx.closePath()
            ctx.clip()
    
    
            const avatar = await loadImage(member.displayAvatarURL({ format: 'jpg' }))
            ctx.drawImage(avatar,40,40,250,250)
            
            const attachment = new MessageAttachment(canvas.toBuffer(), 'rank.png')
            message.channel.send(attachment)
    
            function xp(message) {
                if(message.author.bot) return
                const randomXP = Math.floor(Math.random() * 150) + 50
                userData.xp = ExpantaNum(ExpantaNum.add(userData.xp,randomXP)).toString()
                const level = `${userData.level}`
                const xp = `${userData.xp}`
                const xpneed = ExpantaNum(ExpantaNum.mul(level, ExpantaNum.mul(250, ExpantaNum.add(250,0)))).toString()
    
                if (ExpantaNum.gte(ExpantaNum(xp),ExpantaNum(xpneed))) {
                    const levelnew = ExpantaNum.add(`${userData.level}`,1).toString()
                    userData.save()
                }
            }
    
        
        
    }
    
}
