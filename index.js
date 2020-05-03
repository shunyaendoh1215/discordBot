const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('ready...');
});

client.on('message', (message) => {
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
  } else {
    switch (true) {
      case /のまぼ/.test(message.content):
        message.reply(
          `
          @everyone
          ノーマル募集中！
          `
        );
        break;
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
        let championGG = getChampionName(message.content);
        let champSearchName = message.content.split(' ')[1];
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
        let uGG = getChampionName(message.content);
        let uggSearchName = message.content.split(' ')[1];
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
  }
});

client.login('NzA1NDAxMTI1MjUxMTg2Njk4.XqwQsQ.UNMh7GHqeHDvwcxAnAvUmKoHpIU');
// client.login(process.env.BOT_TOKEN);

function getChampionName(content) {
  let name = content.split(' ')[1];
  switch (true) {
    case /Aatrox|aatrox|a太郎|エイトロックス|エイトロ/.test(name):
      return 'Aatrox';
      break;
    case /Ahri|ahri|アーリ|キツネ|狐/.test(name):
      return 'Ahri';
      break;
    case /Akali|akali|アカリ/.test(name):
      return 'Akali';
      break;
    case /Alistar|alistar|アリスター|牛/.test(name):
      return 'Alistar';
      break;
    case /Amumu|amumu|アムム/.test(name):
      return 'Amumu';
      break;
    case /Anivia|anivia|アニビア|スタンミ鳥/.test(name):
      return 'Anivia';
      break;
    case /Annie|annie|アニー|ティバーズ/.test(name):
      return 'Annie';
      break;
    case /Aphelios|aphelios|アフェリオス|阿部政権を許すな/.test(name):
      return 'Aphelios';
      break;
    case /Ashe|ashe|アッシュ|アシェ/.test(name):
      return 'Ashe';
      break;
    case /AurelionSol|Aurelion Sol|Sol|aurelionsol|aurelion sol|sol|オレリオンソル|オレソル/.test(
      name
    ):
      return 'AurelionSol';
      break;
    case /Azir|azir|アジール/.test(name):
      return 'Azir';
      break;
    case /Bard|bard|バード/.test(name):
      return 'Bard';
      break;
    case /Blitzcrank|blitzcrank|Blitz|blitz|ブリッツクランク|ブリッツ/.test(
      name
    ):
      return 'Blitzcrank';
      break;
    case /Brand|brand|ブランド/.test(name):
      return 'Brand';
      break;
    case /Braum|braum|ブラウム/.test(name):
      return 'Braum';
      break;
    case /Caitlyn|caitlyn|ケイトリン|ケイト/.test(name):
      return 'Caitlyn';
      break;
    case /Camille|camille|カミール/.test(name):
      return 'Camille';
      break;
    case /Cassiopeia|cassiopeia|cass|カシオペア|カス/.test(name):
      return 'Cassiopeia';
      break;
    case /Chogath|ChoGath|chogath|Cho'Gath|cho'gath|チョガス/.test(name):
      return 'Chogath';
      break;
    case /Corki|corki|コーキ|コーギー/.test(name):
      return 'Corki';
      break;
    case /Darius|darius|ダリウス/.test(name):
      return 'Darius';
      break;
    case /Diana|diana|RQE|Dianya|ダイアニャ|ダイアナ|ニャーさん/.test(name):
      return 'Diana';
      break;
    case /DrMundo|drmundo|Dr.Mundo|Mundo|mundo|ムンド|ドクタームンド|バカ/.test(
      name
    ):
      return 'DrMundo';
      break;
    case /Draven|draven|ドレイブン/.test(name):
      return 'Draven';
      break;
    case /Ekko|ekko|エコー|エッコ/.test(name):
      return 'Ekko';
      break;
    case /Elise|elise|エリス|エリゼ/.test(name):
      return 'Elise';
      break;
    case /Evelynn|evelynn|eve|イブリン/.test(name):
      return 'Evelynn';
      break;
    case /Ezreal|ezreal|ez|エズリアル|エズ/.test(name):
      return 'Ezreal';
      break;
    case /Fiddlesticks|fiddlesticks|Fiddle|fiddle|フィドル|フィドルスティックス/.test(
      name
    ):
      return 'Fiddlesticks';
      break;
    case /Fiora|fiora|フィオラ/.test(name):
      return 'Fiora';
      break;
    case /Fizz|fizz|フィズ|魚/.test(name):
      return 'Fizz';
      break;
    case /Galio|galio|ガリオ/.test(name):
      return 'Galio';
      break;
    case /Gangplank|gangplank|gp|ガンプラ|ガングプランク/.test(name):
      return 'Gangplank';
      break;
    case /Garen|garen|ガレン/.test(name):
      return 'Garen';
      break;
    case /Gnar|gnar|ナー/.test(name):
      return 'Gnar';
      break;
    case /Gragas|gragas|グラガス/.test(name):
      return 'Gragas';
      break;
    case /Graves|graves|グレイブス|グブ/.test(name):
      return 'Graves';
      break;
    case /Hecarim|hecarim|heca|ヘカリム/.test(name):
      return 'Hecarim';
      break;
    case /Heimerdinger|heimerdinger|ヘイマー|ハイマー|ハイマーディンガー/.test(
      name
    ):
      return 'Heimerdinger';
      break;
    case /Illaoi|illaoi|イラオイ/.test(name):
      return 'Illaoi';
      break;
    case /Irelia|irelia|イレリア/.test(name):
      return 'Irelia';
      break;
    case /Ivern|ivern|アイバーン/.test(name):
      return 'Ivern';
      break;
    case /Janna|janna|ジャンナ/.test(name):
      return 'Janna';
      break;
    case /JarvanIV|jarvanIV|Jarvan|jarvan|ジャーバン|ジャーバン4世/.test(name):
      return 'JarvanIV';
      break;
    case /Jax|jax|ジャックス/.test(name):
      return 'Jax';
      break;
    case /Jayce|jayce|ジェイス/.test(name):
      return 'Jayce';
      break;
    case /Jhin|jhin|ジン/.test(name):
      return 'Jhin';
      break;
    case /Jinx|jinx|ジンクス/.test(name):
      return 'Jinx';
      break;
    case /Kaisa|kaisa|Kai'Sa|kai'sa|カイサ/.test(name):
      return 'Kaisa';
      break;
    case /Kalista|kalista|kali|カリスタ/.test(name):
      return 'Kalista';
      break;
    case /Karma|karma|カルマ/.test(name):
      return 'Karma';
      break;
    case /Karthus|karthus|カーサス|サーカス/.test(name):
      return 'Karthus';
      break;
    case /Kassadin|kassadin|kass|カサディン/.test(name):
      return 'Kassadin';
      break;
    case /Katarina|katarina|kat|カタリナ/.test(name):
      return 'Katarina';
      break;
    case /Kayle|kayle|ケイル/.test(name):
      return 'Kayle';
      break;
    case /Kayn|kayn|ケイン/.test(name):
      return 'Kayn';
      break;
    case /Kennen|kennen|ケンネン|ケネン/.test(name):
      return 'Kennen';
      break;
    case /Khazix|khazix|Kha|kha|Kha'Zix|kha'zix|カジックス/.test(name):
      return 'Khazix';
      break;
    case /Kindred|kindred|kind|キンドレッド|キンド/.test(name):
      return 'Kindred';
      break;
    case /Kled|kled|クレッド/.test(name):
      return 'Kled';
      break;
    case /KogMaw|kogmaw|Kog'Maw|kog'maw|kog|コグマウ|コグ/.test(name):
      return 'Kogmaw';
      break;
    case /LeBlanc|leblanc|Leblanc|lb|ルブラン|ルブ/.test(name):
      return 'Leblanc';
      break;
    case /LeeSin|leesin|lee|リーシン|リー/.test(name):
      return 'LeeSin';
      break;
    case /Leona|leona|レオナ/.test(name):
      return 'Leona';
      break;
    case /Lissandra|lissandra|lissa|リサンドラ/.test(name):
      return 'Lissandra';
      break;
    case /Lucian|lucian|ルシアン/.test(name):
      return 'Lucian';
      break;
    case /Lulu|lulu|ルル/.test(name):
      return 'Lulu';
      break;
    case /Lux|lux|ラックス/.test(name):
      return 'Lux';
      break;
    case /Malphite|malphite|malph|マルファイト|マルフ/.test(name):
      return 'Malphite';
      break;
    case /Malzahar|malzahar|malz|マルザ/.test(name):
      return 'Malzahar';
      break;
    case /Maokai|maokai|マオカイ/.test(name):
      return 'Maokai';
      break;
    case /MasterYi|masteryi|yi|マスターイー/.test(name):
      return 'MasterYi';
      break;
    case /MissFortune|missfortune|mf|ミスフォーチュン|フォーチュン/.test(name):
      return 'MissFortune';
      break;
    case /Mordekaiser|mordekaiser|morde|モルデ|モルデカイザー/.test(name):
      return 'Mordekaiser';
      break;
    case /Morgana|morgana|モルガナ/.test(name):
      return 'Morgana';
      break;
    case /Nami|nami|ナミ/.test(name):
      return 'Nami';
      break;
    case /Nasus|nasus|ナサス/.test(name):
      return 'Nasus';
      break;
    case /Nautilus|nautilus|ノーチラス|ノーチ/.test(name):
      return 'Nautilus';
      break;
    case /Neeko|neeko|ニーコ/.test(name):
      return 'Neeko';
      break;
    case /Nidalee|nidalee|nida|ニダリー|ニダ/.test(name):
      return 'Nidalee';
      break;
    case /Nocturne|nocturne|ノクターン|ノク/.test(name):
      return 'Nocturne';
      break;
    case /Nunu|nunu|Nunu&Willump|nunu&willump|ヌヌ/.test(name):
      return 'Nunu';
      break;
    case /Olaf|olaf|オラフ/.test(name):
      return 'Olaf';
      break;
    case /Orianna|orianna|オリアナ/.test(name):
      return 'Orianna';
      break;
    case /Ornn|ornn|オーン/.test(name):
      return 'Ornn';
      break;
    case /Pantheon|pantheon|pant|パンテオン|パンツ/.test(name):
      return 'Pantheon';
      break;
    case /Poppy|poppy|ボッピー|ポピマサ/.test(name):
      return 'Poppy';
      break;
    case /Pyke|pyke|パイク|ピケ/.test(name):
      return 'Pyke';
      break;
    case /Qiyana|qiyana|キヤナ|セヤナ/.test(name):
      return 'Qiyana';
      break;
    case /Quinn|quinn|クイン/.test(name):
      return 'Quinn';
      break;
    case /Rakan|rakan|ラカン/.test(name):
      return 'Rakan';
      break;
    case /Rammus|rammus|ラムス/.test(name):
      return 'Rammus';
      break;
    case /RekSai|reksai|Rek'Sai|rek'sai|レクサイ/.test(name):
      return 'RekSai';
      break;
    case /Renekton|renekton|renek|レネクトン|レネク/.test(name):
      return 'Renekton';
      break;
    case /Rengar|rengar|レンガー/.test(name):
      return 'Rengar';
      break;
    case /Riven|riven|リヴェン|リベン/.test(name):
      return 'Riven';
      break;
    case /Rumble|rumble|ランブル/.test(name):
      return 'Rumble';
      break;
    case /Ryze|ryze|ライズ|ライス/.test(name):
      return 'Ryze';
      break;
    case /Sejuani|sejuani|seju|セジュアニ/.test(name):
      return 'Sejuani';
      break;
    case /Senna|senna|セナ/.test(name):
      return 'Senna';
      break;
    case /Sett|sett|セト/.test(name):
      return 'Sett';
      break;
    case /Shaco|shaco|シャコ/.test(name):
      return 'Shaco';
      break;
    case /Shen|shen|シェン/.test(name):
      return 'Shen';
      break;
    case /Shyvana|shyvana|シヴァーナ|リュウさん☆/.test(name):
      return 'Shyvana';
      break;
    case /Singed|singed|シンジド|毒おじさん/.test(name):
      return 'Singed';
      break;
    case /Sion|sion|サイオン/.test(name):
      return 'Sion';
      break;
    case /Sivir|sivir|シヴィア|シヴィル/.test(name):
      return 'Sivir';
      break;
    case /Skarner|skarner|スカーナー/.test(name):
      return 'Skarner';
      break;
    case /Sona|sona|ソナ/.test(name):
      return 'Sona';
      break;
    case /Soraka|soraka|ソラカ/.test(name):
      return 'Soraka';
      break;
    case /Swain|swain|スウェイン|スワイン/.test(name):
      return 'Swain';
      break;
    case /Sylas|sylas|サイラス/.test(name):
      return 'Sylas';
      break;
    case /Syndra|syndra|シンドラ/.test(name):
      return 'Syndra';
      break;
    case /TahmKench|tahmkench|tahm|タムケンチ|タムケン/.test(name):
      return 'TahmKench';
      break;
    case /Taliyah|taliyah|タリヤ/.test(name):
      return 'Taliyah';
      break;
    case /Talon|talon|タロン/.test(name):
      return 'Talon';
      break;
    case /Taric|taric|タリック/.test(name):
      return 'Taric';
      break;
    case /Teemo|teemo|ティーモ|テーモ/.test(name):
      return 'Teemo';
      break;
    case /Thresh|thresh|スレッシュ/.test(name):
      return 'Thresh';
      break;
    case /Tristana|tristana|tris|トリスターナ|トリス/.test(name):
      return 'Tristana';
      break;
    case /Trundle|trundle|トランドル/.test(name):
      return 'Trundle';
      break;
    case /Tryndamere|tryndamere|tryn|トリンダメア|トリン/.test(name):
      return 'Tryndamere';
      break;
    case /TwistedFate|twistedfate|Fate|fate|フェイト|ツイステッドフェイト/.test(
      name
    ):
      return 'TwistedFate';
      break;
    case /Twitch|twitch|トゥイッチ/.test(name):
      return 'Twitch';
      break;
    case /Udyr|udyr|ウディア/.test(name):
      return 'Udyr';
      break;
    case /Urgot|urgot|アーゴット|ウルゴット|ウルゴッチ/.test(name):
      return 'Urgot';
      break;
    case /Varus|varus|ヴァルス/.test(name):
      return 'Varus';
      break;
    case /Vayne|vayne|ヴェイン/.test(name):
      return 'Vayne';
      break;
    case /Veigar|veigar|ヴェイガー|ベイガー/.test(name):
      return 'Veigar';
      break;
    case /VelKoz|Velkoz|velkoz|Vel'Koz|vel'koz|ヴェルコズ/.test(name):
      return 'Velkoz';
      break;
    case /Vi|vi|ヴァイ|バイ/.test(name):
      return 'Vi';
      break;
    case /Viktor|viktor|ヴィクター|ビクター/.test(name):
      return 'Viktor';
      break;
    case /Vladimir|vladmiir|Vlad|vlad|ブラッドミア|ウラジ/.test(name):
      return 'Vladmir';
      break;
    case /Volibear|volibear|voli|ボリベア|ボリ/.test(name):
      return 'Volibear';
      break;
    case /Warwick|warwick|ワーウィック/.test(name):
      return 'Warwick';
      break;
    case /Wukong|wukong|ウーコン/.test(name):
      return 'Wukong';
      break;
    case /Xayah|xayah|ザヤ/.test(name):
      return 'Xayah';
      break;
    case /Xerath|xerath|ゼラス/.test(name):
      return 'Xerath';
      break;
    case /XinZhao|Xinzhao|xinzhao|シンジャオ/.test(name):
      return 'XinZhao';
      break;
    case /Yasuo|yasuo|baka|ヤスオ/.test(name):
      return 'Yasuo';
      break;
    case /Yorick|yorick|ヨリック/.test(name):
      return 'Yorick';
      break;
    case /Yuumi|yuumi|ユーミ|くそ猫/.test(name):
      return 'Yuumi';
      break;
    case /Zac|zac|ザック/.test(name):
      return 'Zac';
      break;
    case /Zed|zed|ゼド|ゼッド/.test(name):
      return 'Zed';
      break;
    case /Ziggs|ziggs|ジグス/.test(name):
      return 'Ziggs';
      break;
    case /Zilean|zilian|ジリアン/.test(name):
      return 'Zilean';
      break;
    case /Zoe|zoe|ゾーイ/.test(name):
      return 'Zoe';
      break;
    case /Zyra|zyra|ザイラ/.test(name):
      return 'Zyra';
      break;
    default:
      return 'notFound';
      break;
  }
}
