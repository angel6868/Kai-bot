let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender]
  const caption = `
*❏––––––『 JADIBOT 』––––––❏*

👑OWNER FURINA MELAYANI👑
-----------------------------------------------------------------
JASA SEWA BOT : 10K/BLN
JASA UNBAN : 20K
MURID NOKOS : 10K
SEGALA KEBUTUHAN NGEBOT PM OWNER SAJA

Payment ? Dana/Qris/Gopay

Own Contact : https://wa.me/6287815560235


        ☣ *FURINA* ☣

`.trim()
  conn.sendFile(m.chat, 'https://telegra.ph/file/3f42d0ffa21c22fefb152.jpg', null, caption, m)
}
handler.help = ['jadibot']
handler.tags = ['jadibot']
handler.command = /^(jadibot)$/i;

handler.register = false
export default handler