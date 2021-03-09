module.exports = {
	name: 'Unmute',
	description: 'Unmutes a member',
	usage: '<@member>',
	aliases: ['none'],
	example: '.unmute v8',
	args: true,
	async execute(client, message, _args, log, { config, Ticket }) {
        if (!message.member.hasPermission("MUTE_MEMBER")) return message.channel.send('You do not have permission to mute.')
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I require \`MANGE_ROLES\`')

        let reason = args.slice(1).join(" ")
       const muteRole = message.guild.roles.cache.get('818195411062882355')
       const memberRole = message.guild.roles.cache.get('817850567626981376')
        const mentionedMember = message.mentions.members.first()
        const unmuteEmbed = new Discord.MessageEmbed()
        .setTitle(`You have been **__Unmuted__** in ${message.guild.name}`)
        .setDescription(`Reason for being unmuted: ${reason}`)
        .setColor("#5708ab")
        .setTimestamp()
     

        if(!args[0]) return message.channel.send(`\`/unmute @member reason\``)
        if (!mentionedMember) return message.channel.send("The member stated is not in the server")
        if (mentionedMember.user.id == message.author.id) return message.channel.send('You cannot unmute yourself')
        if (mentionedMember.user.id == client.user.id) return  message.channel.send('You cant mute me.')
        if (!reason) reason = 'No reason given'
        if (mentionedMember.roles.cache.has(memberRole.id)) return message.channel.send('This member is already unmuted.')
        if (message.member.roles.highest.postition <= mentionedMember.roles.highest.postition) return message.channel.send('You cannot unmute someone the same role or higher then you.')
       await mentionedMember.send(unmuteEmbed).catch(err => console.log(err))
       await mentionedMember.roles.add(memberRole.id).catch(err => console.log(err).then(message.channel.send('there was an error giving the member role')))
       await mentionedMember.roles.remove(muteRole.id).catch(err => console.log(err).then(message.channel.send('there was an error removing the mute role')))

    }
   }
    