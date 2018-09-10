const Discord = require("discord.js");
const config = require('../config.json');

exports.run = async (bot, message, args) => {	
  if (message.channel.type == "dm") return;
	
    const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
		let avembed = new Discord.RichEmbed()
		.setAuthor(`${member.user.username}'s Avatar`)
    .setDescription(`[Download](${member.user.displayAvatarURL})`)
		.setImage(member.user.displayAvatarURL)
		.setColor(config.conan)
		.setTimestamp()
		
   message.channel.send(avembed)
}

exports.help = {
	name : "avatar",
	category: "image"
}
