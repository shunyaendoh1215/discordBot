const func = require('../functions/getChampionName.js');

console.log('ready for services.js.');
const Services = () => {
  client.on('message', (message) => {
    if (message.author.bot) return;
    switch (true) {
      case /\/yourgg (.+)$/.test(message.content):
        message.reply(
          `
        📈SN: ${RegExp.$1}をYOUR.GGで検索...

        https://your.gg/jp/profile/${RegExp.$1}
        `
        );
        break;
      case /\/opgg (.+)$/.test(message.content):
        message.reply(
          `
        📈SN: ${RegExp.$1}をOP.GGで検索...

        https://jp.op.gg/summoner/userName=${RegExp.$1}
        `
        );
        break;
      case /\/krbuild (.+)$/:
        break;
      case /\/champgg (.+)/.test(message.content):
        let champSearchName = message.content.split(' ')[1];
        let championGG = func.getChampionName(champSearchName);
        // let championGG = getChampionName(champSearchName);
        if (championGG !== 'notFound') {
          message.reply(
            `
        📈CHAMPION GGで${champSearchName}の情報を検索...

        https://champion.gg/champion/${championGG}
        `
          );
        } else {
          message.reply(
            `
        📈CHAMPION GGで${champSearchName}の情報を検索...

        お探しのチャンピオンは見つかりませんでした。
        `
          );
        }
        break;
      case /\/ugg (.+)/.test(message.content):
        let uggSearchName = message.content.split(' ')[1];
        let uGG = func.getChampionName(uggSearchName);
        if (uGG !== 'notFound') {
          message.reply(
            `
        📈U.GGで${uggSearchName}の情報を検索...

        https://u.gg/lol/champions/${uGG.toLowerCase()}/build
        `
          );
        } else {
          message.reply(
            `
        📈CHAMPION GGで${uggSearchName}の情報を検索...

        お探しのチャンピオンは見つかりませんでした。
        `
          );
        }
        break;
      case /\/dra info/.test(message.content):
        message.reply(
          `
        🐉リュウさん☆の配信コミュニティはこちら...

        https://com.nicovideo.jp/community/co1210870

        🐲リュウさん☆のTwitterはこちら...

        https://twitter.com/dragonngt
        `
        );
        break;
      default:
        break;
    }
  });
};

exports.Services = Services();
