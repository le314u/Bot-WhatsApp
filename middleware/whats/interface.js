let page = require('./engine/page')
let core = require('./engine/core')

let login = require('./modules/login')
let msg = require('./modules/msg')
let chat = require('./modules/chat')
let historic = require('./modules/historic')

start = async (flagDebug)=>{
    let rPage = await page.start(flagDebug)
    let rCore = new core(rPage)

    return {
        login: new login(rCore),
        msg: new msg(rCore),
        chat: new chat(rCore),
        historic: new historic(rCore)
    }
}

module.exports={
    start:start
}