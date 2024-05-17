import fs from 'fs';
import fetch from 'node-fetch';
let handler = async (m, { conn }) => { 

         let caption = `*Mʏ Gʀᴏᴜᴘ Oғғɪᴄɪᴀʟ*`;
  conn.reply(m.chat, caption, m, {
      contextInfo: {
        externalAdReply: {
          title: "F U R I N A  M U L T I D E V I C E",
          thumbnailUrl: 'https://telegra.ph/file/da63dc919f2260000ea97.jpg',
          sourceUrl: sgc,
          mediaType: 1,
          renderLargerThumbnail: true, 
          showAdAttribution: true
        }
      }
    });
 }
 handler.help = ['gcbot', 'gcelaina'];
handler.tags = ['main'];
handler.command = /^(gcbot|groupbot|botgc|botgroup|gcelaina|groupelaina)$/i;
export default handler;