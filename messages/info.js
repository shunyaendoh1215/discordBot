const Discord = require('discord.js');
client = new Discord.Client();

const Info = client.on('message', (message) => {
  if (message.author.bot) return;
  if (message.content == '/help lolbot') {
    message.reply(
      `
      "/yourgg [SN]": 📈YOUR.GGでサモナーを検索

      "/opgg [SN]": 📈OP.GGでサモナーを検索

      "/champgg [Champion Name]": 📈CHAMPION GGでチャンピオン情報を検索

      "/ugg [Champion Name]": 📈U.ggでチャンピオン情報を検索

      "/dra info": 🐉リュウさん☆の情報を検索
      `
    );
  }
});
