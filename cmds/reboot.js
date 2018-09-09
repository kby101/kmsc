const Discord = require('discord.js');
const config = require('../config.json');
const errors = require('../utils/errors.js');

exports.run = async (bot, msg, args) => {
  if (msg.channel.type == "dm") return;
  
  if (msg.author.id !== '400330864124493825') return errors.notCreator(msg, 'BOT CREATOR');
  
    msg.channel.send("**⏱️Rebooting now. . .**")
    .then(msg => bot.destroy())
    .then(() => bot.login(process.env.BOT_TOKEN));
          }

exports.help = {
  name: "reboot",
  category: "creator"
  }
