const Discord = require("discord.js");
const config = require('../config.json');

exports.run = async (bot, message, args, color, prefix) => {
  if (message.channel.type == "dm") return;
  
    if (message.author.id !== '400330864124493825' && message.author.id !== '444454206800396309') return undefined;
    if(args[0] == "help"){ message.reply(`Usage: \*${config.prefix}eval <code>\*`);
       return;
                       }
    try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setAuthor('Evaluate Command')
        .setColor(config.conan)
        .addField(':inbox_tray: Input', `\`\`\`js\n${codein}\`\`\``)
        .addField(':outbox_tray: Output', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
}

exports.help = {
    name: 'eval',
    aliases: ['ev'],
    description: 'only my onwer can use this command',
    usage: '{prefix}eval [some javascript code]'
}
