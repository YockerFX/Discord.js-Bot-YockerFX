module.exports = {
    name: "open",
    aliases: ["unlock"],
    category: "moderation",
    description: "opens a channel",
    run: async (client, message, args) => {

if (!client.openit) client.openit = [];
if (!message.member.hasPermission("MANAGE_CHANNELS")) return msg.reply("❌**Error:** You don't have the permission to do that!");

message.channel.createOverwrite(message.guild.id, {
    SEND_MESSAGES: true
  })
    message.channel.send(`Finally, **${message.author.username}** just opened the channel again.`);
}
}