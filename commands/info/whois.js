const Discord = require('discord.js');
const moment = require('moment')
const status = {
    online: ":green_circle:  Online",
    idle: ":yellow_circle:  Idle",
    dnd: ":red_circle: Do Not Disturb",
    offline: ":white_circle: Offline/Invisible"
  }

  const flags = {
	DISCORD_EMPLOYEE: 'Discord Employee',
	DISCORD_PARTNER: 'Discord Partner',
	BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
	BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
	HYPESQUAD_EVENTS: 'HypeSquad Events',
	HOUSE_BRAVERY: 'House of Bravery',
	HOUSE_BRILLIANCE: 'House of Brilliance',
	HOUSE_BALANCE: 'House of Balance',
	EARLY_SUPPORTER: 'Early Supporter',
	TEAM_USER: 'Team User',
	SYSTEM: 'System',
	VERIFIED_BOT: 'Verified Bot',
	VERIFIED_DEVELOPER: 'Verified Bot Developer'
};

module.exports = {
    name: "who",
    aliases: ["userinfo"],
    category: "info",
    description: "Find out some nice instagram statistics",
    usage: "<name>",
    run: async (client, message, args) => {
   
        const member = message.mentions.members.last() || message.guild.members.cache.get(args) || message.member || message.author;
        let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 2048 }) : message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 });
        const roles = member.roles.cache
        .sort((a, b) => b.position - a.position)
        .map(role => role.toString())
        .slice(0, -1);
    const userFlags = member.user.flags.toArray();


        if (message.mentions.users.size > 0) {
 	
            const embed = new Discord.MessageEmbed()
                .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
                .setColor('#00ffa4')
                .setDescription(`__***User info for ${message.mentions.users.first().username}:***__`)
                .addField('▷Account', [
                    `**▹ Username:** ${member.user.username}`,
                    `**▹ Discriminator:** ${member.user.discriminator}`,
                    `**▹ ID:** ${member.id}`,
                    `**▹ Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`,
                    `**▹ Avatar:** [Link to avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
                    `**▹ Time Created:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
                    `**▹ Status:** ${member.user.presence.status}`,
                    `**▹ Game:** ${member.user.presence.game || 'Not playing a game.'}`,
                    `\u200b`
                ])
                .addField('▷Member', [
                    `**▹ Nickname** ${member.nickname !== null ? ` ${member.nickname}` : `${message.mentions.users.first().username}`}`,
                    `**▹ Server Join Date:** ${moment(member.joinedAt).format('LL LTS')}`,
                    `**▹ Highest Role:** ${member.roles.highest.id === message.guild.id ? 'None' : member.roles.highest.name}`,
                    `**▹ Roles [${roles.length}]:** ${roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : 'None'}`,
                    `\u200b`
                ])
                .setFooter(`,who executed by ${message.author.username}`) 
         message.channel.send(embed)
        } else { 	
            const embed = new Discord.MessageEmbed()
                .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
                .setColor(member.displayHexColor || 'BLUE')
                .setDescription(`__***User info for ${message.author.username}:***__`)
                .addField('▷Account', [
                    `**▹ Username:** ${member.user.username}`,
                    `**▹ Discriminator:** ${member.user.discriminator}`,
                    `**▹ ID:** ${member.id}`,
                    `**▹ Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`,
                    `**▹ Avatar:** [Link to avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
                    `**▹ Time Created:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
                    `**▹ Status:** ${member.user.presence.status}`,
                    `**▹ Game:** ${member.user.presence.game || 'Not playing a game.'}`,
                    `\u200b`
                ])
                .addField('▷Member', [
                    `**▹ Nickname** ${member.nickname !== null ? ` ${member.nickname}` : `${message.author.username}`}`,
                    `**▹ Server Join Date:** ${moment(member.joinedAt).format('LL LTS')}`,
                    `**▹ Highest Role:** ${member.roles.highest.id === message.guild.id ? 'None' : member.roles.highest.name}`,
                    `**▹ Roles [${roles.length}]:** ${roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : 'None'}`,
                    `\u200b`
                ])
                .setFooter(`,who executed by ${message.author.username}`) 
         message.channel.send(embed)
        }
    }
}
