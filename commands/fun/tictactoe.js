const { tictactoe } = require('reconlx')

module.exports = {
    name: "tictactoe",
    aliases: ["tic", "ttt"],
    category: "test",
    description: "Find out some nice instagram statistics",
    usage: "<name>",
    run: async (client, message, args) => {
        const member = message.mentions.members.first() 
            if(!member)  return  message.channel.send('Please specify a member')
        
        new tictactoe({
            player_two: member, 
            message: message
        })
    }}