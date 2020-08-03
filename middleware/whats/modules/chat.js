let css = require('../query/chat')

module.exports = class chat{
    constructor(core){
        this.shell = core
        //Create Functions
        this.fClickChatX = this.shell.click(css.nome,'mousedown')
        this.fClickChatSpecifc = this.shell.click(css.nameCurrent,'mousedown')
        this.fInputText = this.shell.inputQuery(css.search)
        this.getNameChat = this.shell.get(css.nome,'innerText')
        this.exec = this.shell.js()
    }
    async clickChat(index){
        await this.fClickChatX(index);
    }
    async selectChat(name){
        await this.fInputText(name);
        await this.fClickChatSpecifc();
    }
    async nameChat(index){
        return await this.getNameChat(index);
    }
    async numberChats(){
        let fn = (selector)=>{
            return document.querySelectorAll(selector).length
        }
        return await this.exec(fn,[css.numberChats()])
    }
}