const Discord = require('discord.js');
const moment = require('moment');
module.exports = {
    name: "bot",
    aliases: ["ad", "info", "help"],
    category: "info",
    description: "Find out some nice instagram statistics",
    usage: "<name>",
    run: async (client, message, args) => {
        
        const botEmbed = new Discord.MessageEmbed() // creates a embed that we gonna call botEmbed
        .setColor(`RANDOM`) // will set the color for the embed
        .setTitle(`Bot's Info`) // make the title for the cmd
        .setThumbnail(client.user.displayAvatarURL()) // it will put the bot avatar (pfp) in the embed
        .addField(`**▷General**`, [ // say general then...
            `**Username:** ${client.user.username}`, // this will be the username of the bot
            `**Tag:** ${client.user.tag}`, // the actual name for the bot
            `**ID:** ${client.user.id}`, // this will be the ID for the bot
            `**Owner:** HeuteNicht#7492`, // who created the bot
            '\u200b'
        ])
        .addField(`**▷Stats**`,[ // it will say stats then...
            `**Servers:** ${client.guilds.cache.size}`, // how many servers the bot is in
            `**Created At:** ${moment(client.user.createdAt).format("DD-MM-YYYY [at] HH:mm")}`, // this will say when the bot is created 
            `**Discord.js Version:** 12.5.1`, // the discord.js modules version
            `**Node.js Version:** 2.0.4` // node.js version
        ])
        message.channel.send(botEmbed) // it sends the embed
    }
}
