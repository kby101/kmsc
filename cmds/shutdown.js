const {RichEmbed} = require("discord.js"); // [package required: discord.js]
const config = require('../config.json');

exports.run = async (bot, msg, args) => {
  if (msg.channel.type == "dm") return;
 
if (msg.author.id !== '400330864124493825') return undefined;
  
 
  let embed = new RichEmbed()
  .setColor(config.k)
  .setDescription(`📴 ${bot.user.username} is shutting down!`)
  await msg.channel.send(embed)
  .then(msg => bot.destroy())
};

exports.help = {
  name: "reboot",
  category: "bot creator"
}
