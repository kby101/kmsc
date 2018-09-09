const Discord = require('discord.js');
const config = require('../config.json');

exports.run = async (bot, message, args) => {
    
  let bicon = bot.user.displayAvatarURL;
  let hembed = new Discord.RichEmbed()
  .setColor(config.k)
  .setThumbnail(bicon)
  .setTitle("Hii:)", bicon)
  .setDescription("Thanks to invite me to you'r guild🙃")
  .addField("**Link**", "[Invite me](https://discordapp.com/oauth2/authorize?client_id=471757779091193856&scope=bot&permissions=1664478529) | [Support Server](https://discord.gg/JPUa7KP)")
  .setTimestamp()
  message.channel.send(hembed);
} 
