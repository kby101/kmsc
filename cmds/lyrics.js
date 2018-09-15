const { RichEmbed } = require('discord.js');
const snek = require('node-superfetch');
const { load } = require('cheerio');
const number = ['1⃣', '2⃣', '3⃣', '4⃣', '5⃣'];

function chunk(array, chunkSize) {
    const temp = [];
    for(let i = 0; i < array.length; i+= chunkSize){
      temp.push(array.slice(i, i+chunkSize));
    }
    return temp;
  }

exports.run = async (client, msg, args) => {

	if(!args[1]) return msg.channel.send({embed: {color: 0x45A1DB, description: 'No query provided'}});
		const embed = new RichEmbed()
		embed.setColor(0x45A1DB);
		const { body } = await snek.get('https://api.genius.com/search')
		.query({ q: args.slice(1).join('+') })
		.set('Authorization', `Bearer ${process.env.GENIUS_API}`);
		if(!body.response.hits.length) return msg.channel.send({ embed: { color: 0x45A1DB, description: 'No result found'}});
		const result = body.response.hits.splice(0, 5);
		const thisMess = await msg.channel.send(embed.setDescription(result.map((x, i) => `${number[i]} [${x.result.full_title}](${x.result.url})`).join('\n')));
		for(let i = 0; i < result.length; i++){
			await thisMess.react(number[i]);
		}
		const filter = (rect, usr) => number.includes(rect.emoji.name) && usr.id === msg.author.id
		const response = await thisMess.awaitReactions(filter, {
			max: 1,
			time: 15000
		});
    if (response.size){
       thisMess.delete();
    }
		if(!response.size){
			return thisMess.edit('**You took to long to reply!**', {}).then(x => x.delete(6000));
		}
		const choice = number.indexOf(response.first().emoji.name);
		const { text } = await snek.get(result[choice].result.url);
	   const ouch = chunk(load(text)('.lyrics').text().trim(), 400)
     const pilGan = ['⬅', '🔴', '➡'];
    let index = 0;
    embed.setTitle(result[choice].result.full_title);
		embed.setColor(0x45A1DB);
		embed.setURL(result[choice].result.url);
		embed.setThumbnail(result[choice].result.header_image_thumbnail_url);
		embed.setDescription(ouch[index])
    embed.setFooter(`Page ${index+1} of ${ouch.length}`);
		const thisMes = await msg.channel.send(embed)
    
    for(const pil of pilGan){
		await thisMes.react(pil);
	}
	paginate();
	async function paginate(){
		const filter = (rect, usr) => pilGan.includes(rect.emoji.name) && usr.id === msg.author.id;		
		const response = await thisMes.awaitReactions(filter, {
			max: 1,
			time: 90000000,
		});
		if(!response.size) return undefined;
		const emoji = response.first().emoji.name;
		if(emoji === '🔴') return thisMes.delete();
		if(emoji === '⬅') index--;
		if(emoji === '➡') index++;
		index = ((index % ouch.length) + ouch.length) % ouch.length;
		embed.setColor(0x45A1DB);
		embed.setDescription(ouch[index]);
		embed.setFooter(`Page ${index+1} of ${ouch.length}`);
		thisMes.edit(embed);
		return paginate();
	} 
}
