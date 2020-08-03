let css = require('../query/msg')
let historic = require('./structChat')

module.exports = class msg{
    constructor(core){
        this.shell = core
        //Create Functions
        this.clickSend = this.shell.click(css.send,'click')
        this.inputText = this.shell.inputQuery(css.input)
        this.getName = this.shell.get(css.nameCurrent,'innerText')
        this.exec = this.shell.js()
        this.fGetText = this.shell.get(css.text,'innerText')
        this.fGetTime = this.shell.get(css.time,'innerText')
        //Create struct Data
    }
    async send(text){
        await this.inputText(text)
        await this.clickSend()
    }
    async user(){
        return await this.getName()
    }
    async getMsg(indexMsg){
        let text = await this.fGetText(indexMsg)
        let time = await this.fGetTime(indexMsg)
        return [text,time]
    }
    async hasNewMsg(msg){
        let numberMsgs = this.numberMsgs()
        for (let index = numberMsgs-1; index > 0; index++) {
            console.log(await this.msg(index))            
        }
    }
    async numberMsgs(){
        let fn = (selector)=>{
            return document.querySelectorAll(selector).length
        }
        return await this.exec(fn,[css.numberMsgs()])
    }
}