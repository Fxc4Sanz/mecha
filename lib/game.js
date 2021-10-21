const {
	MessageType,
	Mimetype
} = require("@adiwajshing/baileys");
const toMs = require('ms');
const Suryaa = `62895415497664@s.whatsapp.net`

// TEBAK GAMBAR
const addgambar = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getJawabanTG = (chatId, _db) => {
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
const isTebakGambar = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuTG = (surya, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
const buttons = [{buttonId: 'tebakgambar', buttonText: {displayText: 'Lanjut️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗚𝗔𝗠𝗕𝗔𝗥\n\n*Waktu habis*\n*Jawaban :* ${_dir[position].jawaban}`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(_dir[position].id, buttonsMessage, MessageType.buttonsMessage, {contextInfo: {mentionedJid: [Suryaa]}})
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getTGPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
// CAK LONTONG
const addcak = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getJawabanCak = (chatId, _db) => {
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
const isCakLontong = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuCak = (surya, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
const buttons = [{buttonId: 'caklontong', buttonText: {displayText: 'Lanjut️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗖𝗔𝗞 𝗟𝗢𝗡𝗧𝗢𝗡𝗚\n\n*Waktu habis*\n*Jawaban :* ${_dir[position].jawaban}`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(_dir[position].id, buttonsMessage, MessageType.buttonsMessage, {contextInfo: {mentionedJid: [Suryaa]}})
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getCakPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
// TEBAK JENAKA
const addjenaka = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getJawabanTS = (chatId, _db) => {
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
const isTebakJenaka = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuTS = (surya, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
const buttons = [{buttonId: 'tebakjenaka', buttonText: {displayText: 'Lanjut️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗝𝗘𝗡𝗔𝗞𝗔\n\n*Waktu habis*\n*Jawaban :* ${_dir[position].jawaban}`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(_dir[position].id, buttonsMessage, MessageType.buttonsMessage, {contextInfo: {mentionedJid: [Suryaa]}})
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getTSPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
// SIAPAKAH AKU
const addsurya = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getJawabanSA = (chatId, _db) => {
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
const isSiapaAku = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuSA = (surya, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
const buttons = [{buttonId: 'siapakahaku', buttonText: {displayText: 'Lanjut️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗦𝗜𝗔𝗣𝗔𝗞𝗔𝗛 𝗔𝗞𝗨\n\n*Waktu habis*\n*Jawaban :* ${_dir[position].jawaban}`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(_dir[position].id, buttonsMessage, MessageType.buttonsMessage, {contextInfo: {mentionedJid: [Suryaa]}})
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getSAPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
// TEBAK LIRIK
const addlirik = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getJawabanTL = (chatId, _db) => {
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
const isTebakLirik = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuTL = (surya, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
const buttons = [{buttonId: 'tebaklirik', buttonText: {displayText: 'Lanjut️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗟𝗜𝗥𝗜𝗞\n\n*Waktu habis*\n*Jawaban :* ${_dir[position].jawaban}`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(_dir[position].id, buttonsMessage, MessageType.buttonsMessage, {contextInfo: {mentionedJid: [Suryaa]}})
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getTLPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
// ASAH OTAK
const addotak = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getJawabanAO = (chatId, _db) => {
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
const isAsahOtak = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuAO = (surya, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
const buttons = [{buttonId: 'asahotak', buttonText: {displayText: 'Lanjut️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗔𝗦𝗔𝗛 𝗢𝗧𝗔𝗞\n\n*Waktu habis*\n*Jawaban :* ${_dir[position].jawaban}`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(_dir[position].id, buttonsMessage, MessageType.buttonsMessage, {contextInfo: {mentionedJid: [Suryaa]}})
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getAOPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
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
            var juwu = `𝗚𝗔𝗠𝗘 𝗙𝗔𝗠𝗜𝗟𝗬 *100*\n\n*Waktu habis*\n\n*Jawaban yang belum terjawab :*\n\n`
            aae = _dir[position].jawaban
            for (let i of aae){
                juwu += `${i}\n`
            }
const buttons = [{buttonId: 'family100', buttonText: {displayText: 'Lanjut️'}, type: 1}]
const buttonsMessage = {
contentText: juwu,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(_dir[position].id, buttonsMessage, MessageType.buttonsMessage, {contextInfo: {mentionedJid: [Suryaa]}})
            surya.sendMessage(_dir[position].id, juwu, MessageType.text)
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
// TEBAK KATA
const addkata = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getJawabanTK = (chatId, _db) => {
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
const isTebakKata = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuTK = (surya, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
const buttons = [{buttonId: 'tebakkata', buttonText: {displayText: 'Lanjut️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗞𝗔𝗧𝗔\n\n*Waktu habis*\n*Jawaban :* ${_dir[position].jawaban}`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(_dir[position].id, buttonsMessage, MessageType.buttonsMessage, {contextInfo: {mentionedJid: [Suryaa]}})
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getTKPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
// TEBAK UNSUR KIMIA
const addkimia = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getJawabanTU = (chatId, _db) => {
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
const isTebakKimia = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuTU = (surya, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
const buttons = [{buttonId: 'tebakkimia', buttonText: {displayText: 'Lanjut️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗞𝗜𝗠𝗜𝗔\n\n*Waktu habis*\n*Jawaban :* ${_dir[position].jawaban}`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(_dir[position].id, buttonsMessage, MessageType.buttonsMessage, {contextInfo: {mentionedJid: [Suryaa]}})
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getTUPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
// TEBAK BENDERA
const addbendera = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getJawabanTB = (chatId, _db) => {
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
const isTebakBendera = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuTB = (surya, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
const buttons = [{buttonId: 'tebakbendera', buttonText: {displayText: 'Lanjut️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗕𝗘𝗡𝗗𝗘𝗥𝗔\n\n*Waktu habis*\n*Jawaban :* ${_dir[position].jawaban}`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(_dir[position].id, buttonsMessage, MessageType.buttonsMessage, {contextInfo: {mentionedJid: [Suryaa]}})
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getTBPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
// TEBAK ANIME
const addanime = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getJawabanTA = (chatId, _db) => {
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
const isTebakAnime = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuTA = (surya, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
const buttons = [{buttonId: 'tebakanime', buttonText: {displayText: 'Lanjut️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗔𝗡𝗜𝗠𝗘\n\n*Waktu habis*\n*Jawaban :* ${_dir[position].jawaban}`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(_dir[position].id, buttonsMessage, MessageType.buttonsMessage, {contextInfo: {mentionedJid: [Suryaa]}})
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getTAPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}
const addmtk = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getJawabanMtk = (chatId, _db) => {
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
const isMtk = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuMtk = (surya, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
surya.sendMessage(_dir[position].id, `𝗚𝗔𝗠𝗘 𝗠𝗔𝗧𝗛\n\n*Waktu habis*\n*Jawaban :* ${_dir[position].jawaban}`, MessageType.text)
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getMtkPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

// TEBAK KALIMAT
const addkalimat = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getJawabanTKAL = (chatId, _db) => {
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
const isTebakKalimat = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuTKAL = (surya, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
const buttons = [{buttonId: 'tebakkalimat', buttonText: {displayText: 'Lanjut️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗞𝗔𝗟𝗜𝗠𝗔𝗧\n\n*Waktu habis*\n*Jawaban :* ${_dir[position].jawaban}`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(_dir[position].id, buttonsMessage, MessageType.buttonsMessage, {contextInfo: {mentionedJid: [Suryaa]}})
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getTKALPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

// TEKA TEKI
const addtekateki = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getJawabanTT = (chatId, _db) => {
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
const isTekaTeki = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuTT = (surya, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
const buttons = [{buttonId: 'tekateki', buttonText: {displayText: 'Lanjut️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗧𝗘𝗞𝗔 𝗧𝗘𝗞𝗜\n\n*Waktu habis*\n*Jawaban :* ${_dir[position].jawaban}`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(_dir[position].id, buttonsMessage, MessageType.buttonsMessage, {contextInfo: {mentionedJid: [Suryaa]}})
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getTTPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

// SUSUN KATA
const addsusunkata = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getJawabanSK = (chatId, _db) => {
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
const isSusunKata = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuSK = (surya, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
const buttons = [{buttonId: 'susunkata', buttonText: {displayText: 'Lanjut️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗦𝗨𝗦𝗨𝗡 𝗞𝗔𝗧𝗔\n\n*Waktu habis*\n*Jawaban :* ${_dir[position].jawaban}`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(_dir[position].id, buttonsMessage, MessageType.buttonsMessage, {contextInfo: {mentionedJid: [Suryaa]}})
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getSKPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

// TEBAK LAGU
const addlagu = (chatId, jawaban, expired, _db) => {
    let obi = { id: chatId, jawaban: jawaban, expired: Date.now() + toMs(`${expired}s`) }
    _db.push(obi)
}
const getJawabanTLG = (chatId, _db) => {
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
const isTebakLagu = (chatId, _db) => {
    let status = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            status = true
        }
    })
    return status
}
const cekWaktuTLG = (surya, _dir) => {
    setInterval(() => {
        let position = null
        Object.keys(_dir).forEach((i) => {
            if (Date.now() >= _dir[i].expired) {
                position = i
            }
        })
        if (position !== null) {
const buttons = [{buttonId: 'tebaklagu', buttonText: {displayText: 'Lanjut️'}, type: 1}]
const buttonsMessage = {
contentText: `𝗚𝗔𝗠𝗘 𝗧𝗘𝗕𝗔𝗞 𝗟𝗔𝗚𝗨\n\n*Waktu habis*\n*Jawaban :* ${_dir[position].jawaban}`,
footerText: `© ᴄʀᴇᴀᴛᴇᴅ ᴍᴇᴄʜᴀ ʙᴏᴛᴢ ʙʏ @${Suryaa.split('@')[0]}`,
buttons: buttons,
headerType: 1
}
surya.sendMessage(_dir[position].id, buttonsMessage, MessageType.buttonsMessage, {contextInfo: {mentionedJid: [Suryaa]}})
            _dir.splice(position, 1)
        }
    }, 1000)
}
const getTLGPosi = (chatId, _db) => {
    let position = null
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === chatId) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

module.exports = {
    addgambar,
    getJawabanTG,
    isTebakGambar,
    cekWaktuTG,
    getTGPosi,
    addlirik,
    getJawabanTL,
    isTebakLirik,
    cekWaktuTL,
    getTLPosi,
    addfam,
    getjawaban100,
    isfam,
    cekWaktuFam,
    getfamposi,
    addcak,
    getJawabanCak,
    isCakLontong,
    cekWaktuCak,
    getCakPosi,
    addsurya,
    getJawabanSA,
    isSiapaAku,
    cekWaktuSA,
    getSAPosi,
    addjenaka,
    getJawabanTS,
    isTebakJenaka,
    cekWaktuTS,
    getTSPosi,
    addotak,
    getJawabanAO,
    isAsahOtak,
    cekWaktuAO,
    getAOPosi,
    addkata,
    getJawabanTK,
    isTebakKata,
    cekWaktuTK,
    getTKPosi,
    addkimia,
    getJawabanTU,
    isTebakKimia,
    cekWaktuTU,
    getTUPosi,
    addbendera,
    getJawabanTB,
    isTebakBendera,
    cekWaktuTB,
    getTBPosi,
    addanime,
    getJawabanTA,
    isTebakAnime,
    cekWaktuTA,
    getTAPosi,
    addmtk,
    getJawabanMtk,
    isMtk,
    cekWaktuMtk,
    getMtkPosi,
    addkalimat,
    getJawabanTKAL,
    isTebakKalimat,
    cekWaktuTKAL,
    getTKALPosi,
    addtekateki,
    getJawabanTT,
    isTekaTeki,
    cekWaktuTT,
    getTTPosi,
    addsusunkata,
    getJawabanSK,
    isSusunKata,
    cekWaktuSK,
    getSKPosi,
    addlagu,
    getJawabanTLG,
    isTebakLagu,
    cekWaktuTLG,
    getTLGPosi
}