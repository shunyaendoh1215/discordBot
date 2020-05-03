const Services = require('./messages/services');
const Info = require('./messages/info');
const Echo = require('./messages/echo');
// import { Services } from './messages/services';
// import { Info } from './messages/info';
// import { Echo } from './messages/echo';
const Discord = require('discord.js');
client = new Discord.Client();

client.on('ready', () => {
  console.log('ready...');
});

Services;
Info;
Echo;

client.login('NzA1NDAxMTI1MjUxMTg2Njk4.XqwQsQ.UNMh7GHqeHDvwcxAnAvUmKoHpIU');
