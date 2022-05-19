// LIBS
const TelegramBot   = require('node-telegram-bot-api')
const fs            = require('fs')
const fse           = require('fs-extra')

// -----------------------------

// FILES
const TOKEN = require('./token.js').token
const fileCids = './cids.json'
//const kb = require('./src/keyboard-buttons')
//const keyboard = require('./src/keyboard')
//const ikb = require('./src/inline-keyboard')
//const cbd = require('./src/callbacks')
//const text = require('./src/texts')
// -----------------------------
// APP
const bot = new TelegramBot(`${TOKEN}`, {polling: true})
// -----------------------------

const help = `Доступные команды:\n\n/on - Включить оповещения\n/off - Выключить оповещения`
const link = `https://genshin.hoyoverse.com/ru/gift?code=`

// COMANDS
bot.onText(/\/myid/, (msg) => {
    const cid = msg.chat.id
    sendHTML(cid, `Ваш <b>CHAT ID: ${cid}</b>`)
})
bot.onText(/\/on/, (msg) => {
    let chatId = cid(msg)
    fse.ensureFile(fileCids).then(() => {
        fse.readJson(fileCids).then(text => {
            let cids = text.cids
            let cidIndex = cids.indexOf(chatId)
            if (cidIndex != -1) {
                sendHTML(chatId, `Уведомления уже <b>включены</b>!\n\nЧтобы выключить нажмите /off`)
            } else {
                cids.push(chatId)
                fs.writeFile(fileCids, JSON.stringify({cids}), function (err) {
                    if (err) {
                        newError(error)
                    }
                    sendHTML(chatId, `Уведомления <b>включены</b>!\n\nЧтобы выключить обратно /off`)
                })
            }
        })
    })
})
bot.onText(/\/off/, (msg) => {
    let chatId = cid(msg)
    fse.ensureFile(fileCids).then(() => {
        fse.readJson(fileCids).then(text => {
            let cids = text.cids
            let cidIndex = cids.indexOf(chatId)
            if (cidIndex != -1) {
                cids.splice(cidIndex, 1)
                fs.writeFile(fileCids, JSON.stringify({cids}), function (err) {
                    if (err) {
                        newError(error)
                    }
                    sendHTML(chatId, `Уведомления <b>выключены</b>!\n\nЧтобы выключить обратно /on`)
                })
            } else {
                sendHTML(chatId, `Уведомления уже <b>выключены</b>!\n\nЧтобы включить нажмите /on`)
            }
        })
    })
})
bot.onText(/\/start/, msg => {
    let chatId = cid(msg)
    let name = msg.from.first_name
    
    sendHTML(chatId, `Добро пожаловать!\n${help}`)
})
bot.onText(/\/code\s(\w+[^\d+])/, (msg, [source, match]) => {
    let chatId = cid(msg)
    let message = msg.text
    let sss = message.substr(6, message.length)
    let code = sss.match(/(\w+[^\d+])/)[0]
//    let sd = message.substr(6+code.length, message.length)
//    let date = sd.match(/\d/)
    
    fse.ensureFile(fileCids).then(() => {
        fse.readJson(fileCids).then(text => {
            let cids = text.cids
            
            cids.forEach(id => {
                sendHTML(id, `Новый промокод!\n\n<a href="${link}${code}">${code}</a>`)
            })
        })
    })
})


// FUNCTIONS
function cid(msg) { return msg.chat.id }
function GetText(cid) {
    return new Promise(function(resolve, reject) {
        bot.once('message', (msg) => {
            let text = msg.text
            let cid_2 = msg.chat.id
            if (cid == cid_2) {
                resolve(text)
            } else {
                GetText(cid).then(text_2 => {
                    resolve(text_2)
                })
            }
        })
    })
}

function sendHTML(chatId, html) {
    const options = {
        parse_mode: 'HTML'
    }
    bot.sendMessage(chatId, html, options)
}

function sendHTML(chatId, html) {
    return new Promise(function(resolve, rejext) {
        const options = {
            parse_mode: 'HTML'
        }
        bot.sendMessage(chatId, html, options).then(() => {
            resolve()
        })
    })
}

function GetNormalDate(dates) {
    let date = new Date(dates)
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let seconds = date.getSeconds()
    if (month < 10) {
        month = `0${month}`
    } else {
        month = `${month}`
    }
    if (day < 10) {
        day = `0${day}`
    } else {
        day = `${day}`
    }
    if (hour < 10) {
        hour = `0${hour}`
    } else {
        hour = `${hour}`
    }
    if (minute < 10) {
        minute = `0${minute}`
    } else {
        minute = `${minute}`
    }
    if (seconds < 10) {
        seconds = `0${seconds}`
    } else {
        seconds = `${seconds}`
    }
    let normal = `${day}.${month}.${date.getFullYear()} ${hour}:${minute}:${seconds}`
    return normal
}