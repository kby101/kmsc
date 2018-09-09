const Discord = require('discord.js');
const config = require('../config.json');

exports.run = (client, message, args) => {
    var bug = args.slice(0).join(" ")
    if(!bug) return message.reply("**Please describe a bug you was found!**");
    let report = new Discord.RichEmbed()
	  .setColor(config.k)
	  .setAuthor('Incoming Bug Report')
  	.addField('Bug :', bug)
  	.addField('Report by :', `${message.author.tag}`)
    .setTimestamp()
    .setFooter('Bug Report Feature' );  	
	
        client.guilds.get("486181978446626826").channels.get("488398842560118807").send(report)
	message.delete();
      let reply= new Discord.RichEmbed()
	    .setColor(0x8DB8DA)
	    .setAuthor('Success')
      .setDescription('Thanks you for your report, we\'ll fix it soon. Your report was send to Bot Creator!')
      .setTimestamp()
      .setFooter('Bug Report Feature' );
    	message.channel.send(reply);
}

exports.help = {
    name: "bugreport",
    category: "utility",
    alliases: "bug"
}
