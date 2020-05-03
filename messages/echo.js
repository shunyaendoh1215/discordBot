import { client } from '../index';

export default Echo = client.on('message', (message) => {
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
