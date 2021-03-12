const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "poll",
  usage: "poll <message>",
  description: "Send your poll",
  category: "moderation",
  run: (client, message, args) => {
    
    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("❌**Error:** You don't have the permission to do that!");

    if(!args.length) {
      return message.channel.send("Please Give the Suggestion")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "survey" || x.name === "polls" || x.name === "poll" || x.name === "surveys" ))
    
    
    if(!channel) {
      return message.channel.send("there is no channel with name - survey, surveys, poll or polls")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("POLL: " + message.author.tag, message.author.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("#ff2050")
    .setDescription(args.join(" "))
    .setFooter(`poll by ${message.author.tag}`)
    
    
    channel.send(embed).then(m => {
      m.react("🟢")
      m.react("🟡")
      m.react("🔴")
    })
    

    
    message.channel.send("Sended your poll to " + channel)
    
  }
}