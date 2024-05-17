let handler = async (m) => {

let tq =`Sama sama kack 🥰
`
await m.reply(tq)
}
handler.customPrefix = /makasih|terimaksih|tanks|tengkiu|maci|maaci|trimakasih|thx|tq|thanks|makasi/i
handler.command = new RegExp

export default handler