const Discord = require('discord.js');
client = new Discord.Client();

client.on('ready', () => {
  console.log('ready...');
});

require('./messages/services');
require('./messages/info');
require('./messages/echo');

client.login('NzA1NDAxMTI1MjUxMTg2Njk4.Xq7u8Q.lozXt1AW3EfuUFaqG7OXpMiRhDc');
