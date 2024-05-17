import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)
let edtr = `@${m.sender.split`@`[0]}`

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;KYZ XD\nNICKNAME:💝 SUAMI FURINA\nORG:KYZ KUY\nTITLE:soft\nitem1.TEL;waid=6287815560235:+62 878-1556-0235\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://s.id/kyzzxd\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET:kyzsiapanjr@gmail.com\nitem3.X-ABLabel:💌 Mail Suami FURINA\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🐦 26-11-2009\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: global.fkontak })
let caption = `👋 Hai *${edtr}*, Nih Kontak Suami *Furina* kak😆`
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler