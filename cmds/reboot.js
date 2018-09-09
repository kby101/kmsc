const Discord = require('discord.js');
const config = require('../config.json');

exports.run = async (bot, msg, args) => {
  if (msg.channel.type == "dm") return;
  
  if (msg.author.id !== '400330864124493825') return undefined;
  
    msg.channel.send("**⏱️Rebooting now. . .**")
    .then(msg => bot.destroy())
    .then(() => bot.login(process.env.BOT_TOKEN));
          }

exports.help = {
  name: "reboot",
  category: "creator"
  }
