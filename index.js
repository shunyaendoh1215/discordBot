const Discord = require('discord.js');
export const client = new Discord.Client();
import Services from './messages/services';
import Info from './messages/info';
import Echo from './messages/echo';

client.on('ready', () => {
  console.log('ready...');
});

Services;
Info;
Echo;

client.login('NzA1NDAxMTI1MjUxMTg2Njk4.XqwQsQ.UNMh7GHqeHDvwcxAnAvUmKoHpIU');
