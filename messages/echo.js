const Discord = require('discord.js');
client = new Discord.Client();

const Echo = client.on('message', (message) => {
  if (message.author.bot) return;
  if (message.content.includes('のまぼ')) {
    message.reply(
      `
      @everyone
      ${message.author.username}さんがノーマル募集中！
      `
    );
  }
});

export default Echo;
