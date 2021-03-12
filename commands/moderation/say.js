const { RichEmbed } = require("discord.js");

module.exports = {
    name: "say",
    aliases: ["bc", "broadcast"],
    description: "Says your input via the bot",
    usage: "moderation",
    run: (client, message, args) => {
        if (!member.hasPermission('MANAGE_MESSAGES', { checkAdmin: false, checkOwner: false })) return msg.reply("❌**Error:** You don't have the permission to do that!");
        
        message.delete();
        
        if (message.content.includes("@everyone")  || message.content.includes("@here")) return message.channel.send("You ain't making me Ping anyone BOI!");
        message.channel.send(args.join(" ")).cleanContent;
    }
}