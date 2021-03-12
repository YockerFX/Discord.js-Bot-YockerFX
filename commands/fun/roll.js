const Discord = require("discord.js");


module.exports = {
    name: "roll",
    aliases: ["dice"],
    category: "fun",
    description: "Roll a dice",
    usage: "<name>",
    run: async (client, message, args) => {   
        const diceembed = new Discord.MessageEmbed()
        .setColor('#e53935')
        .setDescription(':game_die: ')
        .setThumbnail('https://i.pinimg.com/564x/cd/18/f1/cd18f1c40c148545b66e9f6a851c98d2.jpg')
        .addFields({
            name: 'You rolled a:',
            value: (`${Math.floor(Math.random() * 6) + 1}`)
        });
    message.channel.send(diceembed);
}}
