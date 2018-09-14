const Discord = require("discord.js");
const moment = require("moment");
const config = require('../config.json');
const queue = require('../server.js').queue.size

const run = exports.run = async (client, msg, args) => {
  if (msg.channel.type == "dm") return;
  
  let start = Date.now()
  let postMsg = await msg.channel.send(`**Please wait . . .**`);
    const os = require('os');
    const arch = os.arch()
    const used = process.memoryUsage().heapUsed / 1024 / 1024;
  
    let owner = '<@400330864124493825>'
    let totalSeconds = process.uptime();
    let realTotalSecs = Math.floor(totalSeconds % 60);
    let hours = Math.floor((totalSeconds / 3600) % 24);
    let mins = Math.floor((totalSeconds / 60) % 60);
    let diff = (Date.now() - start);
    var cpu = process.cpuUsage().system / 1024 / 1024;
    var cpu_usage = Math.round(cpu * 100) / 100;    
    
    let bicon = client.user.displayAvatarURL;
    let info = new Discord.RichEmbed()
        .setColor(config.k)
        .setAuthor('Bot Stats :', bicon)
        .setThumbnail("https://i.ytimg.com/vi/${song.id}/default.jpg?width=80&height=60")
        .addField('General Stats', `• Shard: **${client.shard.count}**
• Servers: **${client.guilds.size}**
• Channels: **${client.channels.size}**
• Users: **${client.users.size}**
• Queue: **${queue}**`)
        .addField('System Stats', `• Operating System: **${os.platform}** 
• CPU Architecture: **${arch}**
• CPU Used: **${cpu_usage}%**
• Memory Used: **${Math.round(used * 100) / 100}Mb**
• Latency: **${diff}ms**
• Websocket: **${client.ping.toFixed(2)}ms**
• Uptime: \`\`${hours}hrs\`\` | \`\`${mins}mins\`\` | \`\`${realTotalSecs}secs\`\``, true)
        .addField('Libs. Stats', `• Node.js **${process.version}**\n• Discord.js **v${Discord.version}**`)
        .setTimestamp()

         setTimeout(() => {
         postMsg.edit(info)
          }, 2000);
} 

exports.help = {
    name: 'stats', 
    aliases: ['info']
}
