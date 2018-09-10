const Discord = require('discord.js');
const config = require('../config.json');

exports.run = async (bot, message, args) => {
  if (message.channel.type == "dm") return;
  
      let bocon = bot.user.displayAvatarURL;
      let vembed = new Discord.RichEmbed()
      .setColor(config.k)
      .setThumbnail("https://media.giphy.com/media/wdi1xUhDaAGuQ/giphy.gif")
      .setAuthor(`Thank you for voting ${bot.user.username}:)`)
      .setDescription("[Vote Me, Click here](https://discordbots.org/bot/471757779091193856/vote)")
      .setFooter(`Please always vote ${bot.user.username} everyday. Thanks!:)`)
      message.channel.send(vembed);
}
