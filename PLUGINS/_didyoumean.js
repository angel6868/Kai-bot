import didyoumean from 'didyoumean';
import similarity from 'similarity';

let handler = m => m;

handler.before = function (m, { match, usedPrefix }) {
  if ((usedPrefix = (match[0] || '')[0])) {
    let noPrefix = m.text.replace(usedPrefix, '').trim();
    let alias = Object.values(global.plugins).filter(v => v.help && !v.disabled).map(v => v.help).flat(1);
    let mean = didyoumean(noPrefix, alias);
    let sim = similarity(noPrefix, mean);
    let similarityPercentage = parseInt(sim * 100);      

    if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
      let response = `• ᴀᴘᴀᴋᴀʜ ᴋᴀᴍᴜ ᴍᴇɴᴄᴀʀɪ ᴄᴏᴍᴍᴀɴᴅ ʙᴇʀɪᴋᴜᴛ ɪɴɪ?\n\n◦ ɴᴀᴍᴀ ᴄᴏᴍᴍᴀɴᴅ: ➠ *${usedPrefix + mean}*\n◦ ʜᴀsɪʟ ᴋᴇᴍɪʀɪᴘᴀɴ: ➠ *${similarityPercentage}%*`;

      this.reply(m.chat, response, m, {
        contextInfo: {
          externalAdReply: {
       	showAdAttribution: true,
            title: 'D I D  Y O U  M E A N',
            thumbnailUrl: 'https://telegra.ph/file/ee71485987d8a58a09479.jpg',
            sourceUrl: 'https://whatsapp.com/channel/0029VaRI1OB2P59cTdJKZh3q',
            mediaType: 1,
            renderLargerThumbnail: true
                     }
        }
      });
    }
  }
}

export default handler;