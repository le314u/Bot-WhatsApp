let css = require('../query/chat')
let structChat = require('./structChat')
let chat = require('./chat')
let msg = require('./msg')

module.exports = class historic{
    constructor(core){
        //Create struct Data
        this.historic = new structChat()
        this.transmitterChat = new chat(core)
        this.transmitterMsg = new msg(core)
    }
    async newMsgs(){
        while(true){
            try{
                let numberChats = await this.transmitterChat.numberChats()
                for (let index = 1; index <= Number(numberChats); index++) {
                    let name = await this.transmitterChat.nameChat(index)
                    if(name !== 'BackUp'){
                        continue
                    }
                    await this.transmitterChat.clickChat(index)
                    let numberMsgs = await this.transmitterMsg.numberMsgs()
                    for (let index = Number(numberMsgs); index <= Number(numberMsgs); index++) {
                        let msg = await this.transmitterMsg.getMsg(index)
                        let struct = this.historic.create(name,msg[0],msg[1])
                        if(this.historic.isNewData(name,struct)){
                            this.historic.setData(name,struct)
                            this.process(struct)
                        }
                    }
                }
            } catch(e){console.log(e)}
        }
        return "Acabou um ciclo de verificação"
    }

    async process(struct){
        if(this.match(struct, '^code:.*')){
            await this.transmitterMsg.send(this.newMsg(struct))
        }
    }
    match(struct,regex){
        return (new RegExp(regex).exec(struct.text) !==null)
    }
    newMsg(struct){
        try{
            return '*'+struct.text.substring(5)+'*'
        } catch(e){
            return "Sintaxy invalida"
        }
    }
    

    //Passa por todos chats e verifica qual tem nova mensagem
    //verifica qual a ultima msg de todas as msg
    //De todas as msgs procurar a ultima e se não tem nenhuma pega a ultima
}