const Discord = require("discord.js");
const config = require('../config.json');

exports.run = async (bot, message, args) => {
	
	let start = Date.now(); message.channel.send(':ping_pong:').then(message => { 
      message.delete();
        let diff = (Date.now() - start); 
        let API = (bot.ping).toFixed(2)
	
        let embed = new Discord.RichEmbed()
        .setTitle(`⏳ PINGING!`)
        .setColor(config.k)
        .addField("📶 Latency", `\`${diff}ms\``, true)
        .addField("📱 Websocket", `\`${API}ms\``, true)
	message.channel.send(embed);
    });
 
	
}

exports.help = {
	name : "ping",
	category: "info"
}
