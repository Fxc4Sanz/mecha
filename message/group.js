"use strict";
const {
	MessageType,
	Presence
} = require("@adiwajshing/baileys");
const moment = require("moment-timezone");
const fs = require("fs");

const { getBuffer, sleep } = require("../lib/myfunc");

let setting = JSON.parse(fs.readFileSync('./config.json'));
let { botName } = setting

module.exports = async(surya, anj, welcome, left) => {
    const isWelcome = welcome.includes(anj.jid)
    const isLeft = left.includes(anj.jid)
    const mdata = await surya.groupMetadata(anj.jid)
    const groupMetadata = await surya.groupMetadata(anj.jid)
    const groupName = mdata.subject
    let num = anj.participants[0]
    let v = surya.contacts[num] || { notify: num.replace(/@.+/, "") };
    const Name = v.vname || v.notify || num.split("@")[0]
    const memke = mdata.participants.length
    const Suryaa = '62895415497664@s.whatsapp.net'
    const gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
    moment.tz.setDefault("Asia/Jakarta").locale("id");
    const times = moment.tz('Asia/Jakarta').format('DD•MM•YYYY HH:mm:ss')
    const S = '\`\`\`'
    const Mecha = 'https://chat.whatsapp.com/IKFMxJJgC282pZnsTWUZv3'
    const bgbot = 'https://i.ibb.co/8DdJQpN/60b4e7bdb849.jpg'
    //const falfa = { key: {fromMe: false,participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net"},message: {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "Mecha Botz","groupName": "Created Mecha Botz", "caption": `By Surya❤️`, 'jpegThumbnail': fs.readFileSync(`${setting.pathImg}`)}}}
    //mᥱᥴһᥲ ᑲ᥆𝗍z
    /*sіᥣᥲkᥲᥒ rᥱgіs𝗍ᥱr ძᥱᥒgᥲᥒ ᥴᥲrᥲ *Daftar Nama & Umur*
Contoh : *Daftar Surya & 16*

*Note :*
• Isi Nama dan Umur asli kamu! Jika terbukti palsu, kamu akan dibanned permanen!*/
    
if (anj.action === 'add'){
if (anj.participants[0] === surya.user.jid){
await sleep(2000)
/*surya.updatePresence(anj.jid, Presence.composing)
const buttons = [{buttonId: 'verify', buttonText: {displayText: '᥆kᥱ mᥱᥴһᥲ ᑲ᥆𝗍z'}, type: 1}]
const buttonsMessage = {
contentText: `һᥲі, ᥲkᥙ Mecha Botz
ᥲkᥙ ᥲძᥲᥣᥲһ ᑲ᥆𝗍 ᥕһᥲ𝗍sᥲ⍴⍴ ⍴іᥒ𝗍ᥲr ᑲᥙᥲ𝗍ᥲᥒ @${Suryaa.split('@')[0]}

𝗍ᥱrіmᥲkᥲsіһ 𝗍ᥱᥣᥲһ mᥱᥒgᥙᥒძᥲᥒgkᥙ, ⍴ᥲძᥲ mᥱmᑲᥱr ${groupName}

_*Silahkan verifikasi dengan cara tekan tombol dibawah ini*_`,
footerText: `ᥕᥲk𝗍ᥙ ᑲᥱrgᥲᑲᥙᥒg: _*${times} Wib*_
© ᥴrᥱᥲ𝗍ᥱძ mᥱᥴһᥲ ᑲ᥆𝗍z ᑲу @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(anj.jid, buttonsMessage, MessageType.buttonsMessage, {contextInfo: {"mentionedJid": [Suryaa, '0@s.whatsapp.net']}})*/
} else if (isWelcome){
try {
  var pic = await surya.getProfilePicture(anj.participants[0])
} catch {
  var pic = 'https://i.ibb.co/t2m9fFt/88876ba5bb74.jpg'
}
//let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/welcome?nama=${encodeURI(Name)}&descriminator=${memke}&memcount=${memke}&gcname=${encodeURI(groupName)}&pp=${pic}&bg=${bgbot}`)
let buff = await getBuffer(pic)
let youra = await surya.prepareMessage(anj.jid, buff, MessageType.location, {thumbnail: buff})
const buttons = [{buttonId: 'verify', buttonText: {displayText: `Selamat bergabung cantik`}, type: 1}]
const buttonsMessage = {
locationMessage: youra.message.locationMessage,
contentText: `
*Hai* @${anj.participants[0].split("@")[0]}
*Welcome in group :* ${groupName}

ᥕᥲk𝗍ᥙ ᑲᥱrgᥲᑲᥙᥒg : ${S}${times} WIB${S}
*╭─◪ Intro dulu ya!*
*├❏ Nama :* 
*├❏ Umur :*
*├❏ Asal kota :*
*├❏ Kelas :*
*├❏ Cowok/Cewek :*
*├❏ Agama :*
*├❏ Alasan bergabung :*
*└❏ Status :*

*Semoga Betah Yaa~*`,
footerText: `⍴᥆ᥕᥱrᥱძ ᑲу @0
© ᥴrᥱᥲ𝗍ᥱძ mᥱᥴһᥲ ᑲ᥆𝗍z ᑲу @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 6
}
surya.sendMessage(anj.jid, buttonsMessage, MessageType.buttonsMessage, {contextInfo: {"mentionedJid": [Suryaa, '0@s.whatsapp.net', anj.participants[0]]}})
}
} else if (anj.action === 'remove' && isLeft){
try {
var pic = await surya.getProfilePicture(anj.participants[0])
} catch {
var pic = 'https://i.ibb.co/t2m9fFt/88876ba5bb74.jpg'
}
//let buf = await getBuffer(`http://hadi-api.herokuapp.com/api/card/goodbye?nama=${encodeURI(Name)}&descriminator=${memke}&memcount=${memke}&gcname=${encodeURI(groupName)}&pp=${pic}&bg=${bgbot}`)
let buf = await getBuffer(pic)
let your = await surya.prepareMessage(anj.jid, buf, MessageType.location, {thumbnail: buf})
const buttons = [{buttonId: 'verify', buttonText: {displayText: 'Jauh jauh lu wibu'}, type: 1}]
const buttonsMessage = {
locationMessage: your.message.locationMessage,
contentText: `
*Goodbye @${anj.participants[0].split("@")[0]}*
*Leave from group :* ${groupName}

ᥕᥲk𝗍ᥙ kᥱᥣᥙᥲr : ${S}${times} WIB${S}
*╭─◪ Semoga dia tenang di sana!*
*├❏ Nama :* ${Name}
*└❏ Nomor:* +${anj.participants[0].split("@")[0]}

*Jangan Balik Lagi Yaa~*`,
footerText: `⍴᥆ᥕᥱrᥱძ ᑲу @0
© ᥴrᥱᥲ𝗍ᥱძ mᥱᥴһᥲ ᑲ᥆𝗍z ᑲу @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 6
}
surya.sendMessage(anj.jid, buttonsMessage, MessageType.buttonsMessage, {contextInfo: {"mentionedJid": [Suryaa, '0@s.whatsapp.net', anj.participants[0]]}})
} else if (anj.action == 'promote') {
try {
var pic = await surya.getProfilePicture(anj.participants[0])
} catch {
var pic = 'https://i.ibb.co/t2m9fFt/88876ba5bb74.jpg'
}
//let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/promote?nama=${encodeURI(Name)}&member=${memke}&pesan=selamat ya&pp=${pic}&bg=${bgbot}`)
let buff = await getBuffer(pic)
let youra = await surya.prepareMessage(anj.jid, buff, MessageType.location, {thumbnail: buff})
const buttons = [{buttonId: 'verify', buttonText: {displayText: 'sᥱᥣᥲmᥲ𝗍 уᥲ!'}, type: 1}]
const buttonsMessage = {
locationMessage: youra.message.locationMessage,
contentText: `
*◪ PROMOTE DETECT*
*├─❏ Nomor:* ${anj.participants[0].split("@")[0]}
*└─❏ Nama:* @${anj.participants[0].split("@")[0]}
*Waktu :* ${S}${times} WIB${S}`,
footerText: `⍴᥆ᥕᥱrᥱძ ᑲу @0
© ᥴrᥱᥲ𝗍ᥱძ mᥱᥴһᥲ ᑲ᥆𝗍z ᑲу @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 6
}
surya.sendMessage(anj.jid, buttonsMessage, MessageType.buttonsMessage, {contextInfo: {"mentionedJid": [Suryaa, '0@s.whatsapp.net', anj.participants[0]]}})
/*let imeu = await surya.prepareMessage(anj.jid, buff, MessageType.image) 
let imeg = imeu.message.imageMessage
let resis = await surya.prepareMessageFromContent(anj.jid,{
"productMessage": {
"product": {
"productImage": imeg,
"productId": buff,
"title": `PROMOTE DETECT`,
"description": `*◪ PROMOTE DETECT*
*├─❏ Nomor:* ${anj.participants[0].split("@")[0]}
*└─❏ Nama:* ${Name}
*Waktu :* _*${times} WIB*_`,
"currencyCode": "IDR",
"priceAmount1000": "1000000",
"productImageCount": 1
},
"businessOwnerJid": "62895415497664@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {contextInfo: {"mentionedJid": [anj.participants[0], Suryaa]}}) 
surya.relayWAMessage(resis)*/
} else if (anj.action == 'demote') {
try {
var pic = await surya.getProfilePicture(anj.participants[0])
} catch {
var pic = 'https://i.ibb.co/t2m9fFt/88876ba5bb74.jpg'
}
//let buff = await getBuffer(`http://hadi-api.herokuapp.com/api/card/demote?nama=${encodeURI(Name)}&member=${memke}&pesan=awokawok di demote&pp=${pic}&bg=${bgbot}`)
let buff = await getBuffer(pic)
let youra = await surya.prepareMessage(anj.jid, buff, MessageType.location, {thumbnail: buff})
const buttons = [{buttonId: 'verify', buttonText: {displayText: 'ᥲᥕ᥆kᥲᥕ᥆k ძі ძᥱm᥆𝗍ᥱ'}, type: 1}]
const buttonsMessage = {
locationMessage: youra.message.locationMessage,
contentText: `
*◪ DEMOTE DETECT*
*├─❏ Nomor:* ${anj.participants[0].split("@")[0]}
*└─❏ Nama:* @${anj.participants[0].split("@")[0]}
*Waktu :* ${S}${times} WIB${S}`,
footerText: `⍴᥆ᥕᥱrᥱძ ᑲу @0
© ᥴrᥱᥲ𝗍ᥱძ mᥱᥴһᥲ ᑲ᥆𝗍z ᑲу @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 6
}
surya.sendMessage(anj.jid, buttonsMessage, MessageType.buttonsMessage, {contextInfo: {"mentionedJid": [Suryaa, '0@s.whatsapp.net', anj.participants[0]]}})
}
}