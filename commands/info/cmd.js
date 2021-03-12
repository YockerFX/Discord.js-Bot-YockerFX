const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "cmd",
    category: "info",
    description: "Returns all commands, or one specific command info",
    usage: "[command | alias]",
    run: async (client, message, args) => {

        //Sort your commands into categories, and make seperate embeds for each category

        const over = new Discord.MessageEmbed()
        .setTitle('Overview')
        .setColor("#00d8ff")
        .setDescription('<:wumpus_gold:802963424011223051>__**CATEGORY LIST**__<:wumpus_gold:802963424011223051>\n\n:slight_smile: *FUN*\n\n:mag_right: *INFORMATION*\n\n:man_police_officer: *MODERATION*\n\n:hammer_pick: *TEST*')
        .setTimestamp()

        const moderation = new Discord.MessageEmbed()
        .setDescription(':man_police_officer: __**Moderation**__')
        .setColor("RED")
        .addField('`,lock`', 'Locks a channel down.')
        .addField('`,open`', 'Reopens the channel again.')
        .addField('`,clear`', 'Purges messages (max: 99)')
        .addField('`,poll`', 'Send a poll.')
        .setTimestamp()

        const fun = new Discord.MessageEmbed()
        .setDescription(':slight_smile: __**Fun**__')
        .setColor("GREEN")
        .addField('`,8ball`', 'Gives a random answer.')
        .addField('`,ascii`', 'Converts text into ascii')
        .addField('`,avatar`', 'Displays the avatar.')
        .addField('`,coinflip`', 'Head or tails.')
        .addField('`,dadjoke`', 'Sends a boomer jokes.')
        .addField('`,pat`', 'Send a pat gif.')
        .addField('`,roll`', 'Rolls a dice.')
        .addField('`,rps`', '🗻, 📰, ✂')
        .addField('`,shibe`', 'Sends a dog picture')
        .addField('`,timer`', 'Is a timer in ms.')
        .addField('`,tictactoe`', 'Is a tictactoe 1v1.')
        .addField('`,hangman`', 'Is a Hangman game')
        .addField('`,timer`', 'Is a simple')
        .addField('`,math`', 'Get the answer to a math problem')
        .setTimestamp()

        const info = new Discord.MessageEmbed()
        .setDescription(':mag_right: __**Info**__')
        .setColor("#ff6781")
        .addField('`,bot`', 'Shows bot information.')
        .addField('`,list`', ',list (command)')
        .addField('`,sinfo`', 'Shows server information.')
        .addField('`,status`', 'Shows the uptime and the progress state.')
        .addField('`,who`', 'Shows informations about a user.')
        .addField('`,ping`', 'Get the bot\'s API ping')
        .setTimestamp()

        const test = new Discord.MessageEmbed()
        .setDescription(':mag_right: __**Test**__')
        .setColor("YELLOW")
        .addField('`,instagram`', 'Shows informations about an account.' )
        .addField('`,meme`', 'Sends a random meme.')
        .setTimestamp()

        const pages = [
                over,
                fun,
                info,
                moderation,
                test
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '300000';

        pagination(message, pages, emojiList, timeout)
    }
}



