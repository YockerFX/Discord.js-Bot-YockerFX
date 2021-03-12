const Discord = require("discord.js");

module.exports = {
    name: "coinflip",
    aliases: ["flip", "ht", "hot"],
    category: "fun",
    description: "Heads or tails",
    run: async (client, message, args) => {
        let random = (Math.floor(Math.random() * Math.floor(2)));
        if(random === 0) {
          const embed = new Discord.MessageEmbed()
          .setColor(0xFFFF00)
          .setTitle('Coinflip')
          .setThumbnail(`https://cdn.discordapp.com/attachments/796372488941731921/801026048384696330/head.png`)
          .addFields({
            name: 'You got:',
            value: ("Heads")
        });
      message.channel.send({ embed });
  } else {
      const embed = new Discord.MessageEmbed()
          .setColor(0xFFFF00)
          .setTitle('Coinflip')
          .setThumbnail(`https://cdn.discordapp.com/attachments/796372488941731921/801026050980184074/tails.png`)
          .addFields({
            name: 'You got:',
            value: ("Tails")
        });
      message.channel.send({ embed });
  }
}
}