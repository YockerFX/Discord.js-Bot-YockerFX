module.exports = {
    name: "clear",
    aliases: ["purge", "nuke"],
    category: "moderation",
    description: "Clears the chat",
    run: async (client, message, args) => {

        if (message.deletable) {
            message.delete();
        }
    
        // Member doesn't have permissions
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("You can't delete messages....").then(m => m.delete(5000));
        }
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('Lack of Perms!');
    
        let deleteAmount;
    
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) { return message.reply('Please put a number only!') }
    
        if (parseInt(args[0]) > 100) {
            return message.reply('You can only delete 99 messages at a time!')
        } else {
            deleteAmount = parseInt(args[0]);
        }
        setTimeout(function(){ 
            //Code
            message.channel.bulkDelete(deleteAmount + 1, true);
            message.reply(`**Successfully** deleted **${deleteAmount}** Messages.`).then(message.delete())
            console.log(message.author.tag +  ` deleted ${deleteAmount} Messages.`)
         }, 5000); 
    }
}